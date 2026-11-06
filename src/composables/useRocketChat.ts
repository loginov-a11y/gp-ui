import { computed } from 'vue'
/**
 * Rocket.Chat Livechat для кнопки поддержки в кабинете.
 *
 * Скрипт не грузим заранее: после логина виджет пишет в DOM и в prod
 * роняет Vue (insertBefore). Подключаем только по клику «Чат».
 * Виджет по умолчанию садится в left:0 и перекрывает сайдбар — сразу
 * ставим справа. Прошлую открытую сессию Livechat не восстанавливаем.
 *
 * Данные мерчанта для оператора — registerGuest из
 * GET /terminal/support-chat/identity. На открытие окна это не влияет.
 * Язык UI виджета — setLanguage по текущей локали i18n (en/ru).
 * Заголовок окна на сервере RC один на все языки — его задаём через setTheme.
 */

export interface SupportChatIdentity {
  token: string
  name: string
  email: string
  custom_fields: Record<string, string | null>
}

type RocketChatCustomField = {
  key: string
  value: string
  overwrite?: boolean
}

type LivechatTheme = {
  position?: 'left' | 'right'
  color?: string
  title?: string
  offlineTitle?: string
}

export type RocketChatApi = {
  maximizeWidget: () => void
  minimizeWidget: () => void
  showWidget: () => void
  hideWidget: () => void
  setTheme?: (theme: LivechatTheme) => void
  setLanguage?: (lang: string) => void
  registerGuest?: (guest: {
    token?: string
    name?: string
    email?: string
    department?: string
    customFields?: RocketChatCustomField[]
  }) => void
  onChatMaximized?: (cb: () => void) => void
  onWidgetShown?: (cb: () => void) => void
}

type RocketChatFn = {
  (callback: (this: RocketChatApi) => void): void
  _: Array<(this: RocketChatApi) => void>
  url?: string
  livechat?: RocketChatApi
}

declare global {
  interface Window {
    RocketChat?: RocketChatFn
  }
}

const SCRIPT_ATTR = 'data-gp-rocket-chat'
const SCRIPT_CACHE_BUST = '201903270000'
const WIDGET_SELECTOR = '.rocketchat-widget'
const OPEN_HEIGHT_PX = 16 + 525 + 16 + 54

let boundVisitorKey: string | null = null
let cachedIdentity: SupportChatIdentity | null = null
let identityLoad: Promise<SupportChatIdentity | null> | null = null
let identityGeneration = 0
let positionObserver: MutationObserver | null = null
let positionObserverTimer: ReturnType<typeof setTimeout> | null = null
let openFallbackTimer: ReturnType<typeof setTimeout> | null = null
let pendingOpen = false
/** true только после клика «Чат». Иначе Livechat восстанавливает прошлое открытое окно. */
let userRequestedOpen = false
let lifecycleBound = false

function normalizeLivechatUrl(raw: string): string {
  return raw.trim().replace(/\/+$/, '')
}

/** Livechat ждёт `en` / `ru`, как в packages/livechat/src/i18n. */
function toLivechatLanguage(locale: string): string {
  return String(locale).toLowerCase().startsWith('en') ? 'en' : 'ru'
}

function getI18nLocale(): string {
  return options.getLocale?.() || 'ru'
}

function livechatTitle(locale: string): string {
  const lang = toLivechatLanguage(locale)
  if (options.getChatTitle) return options.getChatTitle(lang)
  return lang === 'en' ? 'Support chat' : 'Чат поддержки'
}

function livechatTheme(locale: string): LivechatTheme {
  const title = livechatTitle(locale)
  return {
    position: 'right',
    title,
    offlineTitle: title
  }
}

function applyLivechatLocale(api: RocketChatApi, locale: string) {
  api.setLanguage?.(toLivechatLanguage(locale))
  api.setTheme?.(livechatTheme(locale))
}

/**
 * Язык UI и заголовок окна. Не поднимает скрипт: после логина Livechat
 * роняет Vue, поэтому только если виджет уже загружен.
 */
function applyLivechatLanguage(locale: string) {
  if (typeof window === 'undefined' || !window.RocketChat) return
  callLivechat((api) => {
    applyLivechatLocale(api, locale)
  })
}

function placeWidgetRight(widget: HTMLElement) {
  widget.style.left = 'auto'
  widget.style.right = '0'
  widget.style.bottom = '0'
  widget.style.zIndex = '12345'
}

function forceOpenWidgetDom(): boolean {
  const widget = document.querySelector(WIDGET_SELECTOR) as HTMLElement | null
  const iframe = document.querySelector('#rocketchat-iframe') as HTMLIFrameElement | null
  if (!widget || !iframe) return false

  placeWidgetRight(widget)

  const isMobile = window.matchMedia('screen and (max-device-width: 480px)').matches
  widget.dataset.state = 'opened'
  widget.style.opacity = '1'
  widget.style.pointerEvents = 'auto'
  if (isMobile) {
    widget.style.left = '0'
    widget.style.right = 'auto'
    widget.style.width = '100%'
    widget.style.height = '100%'
  } else {
    widget.style.left = 'auto'
    widget.style.right = '0'
    widget.style.width = '397px'
    widget.style.height = `${OPEN_HEIGHT_PX}px`
  }

  iframe.style.display = 'initial'
  iframe.focus()
  return true
}

function isWidgetVisiblyOpen(): boolean {
  const widget = document.querySelector(WIDGET_SELECTOR) as HTMLElement | null
  if (!widget || widget.dataset.state !== 'opened') return false
  return widget.offsetHeight > 0 && widget.style.opacity !== '0'
}

function forceHideWidgetDom(): boolean {
  const widget = document.querySelector(WIDGET_SELECTOR) as HTMLElement | null
  if (!widget) return false

  widget.dataset.state = 'closed'
  placeWidgetRight(widget)
  widget.style.width = '0'
  widget.style.height = '0'
  widget.style.opacity = '0'
  widget.style.pointerEvents = 'none'

  const iframe = document.querySelector('#rocketchat-iframe') as HTMLIFrameElement | null
  if (iframe) iframe.style.display = 'none'

  return true
}

function tryFulfillPendingOpen() {
  if (!pendingOpen) return
  if (forceOpenWidgetDom()) pendingOpen = false
}

function collapseWidget() {
  callLivechat((api) => {
    api.minimizeWidget?.()
    api.hideWidget?.()
  })
  forceHideWidgetDom()
}

/** Livechat сам раскрывает прошлую сессию — гасим, пока пользователь не нажал «Чат». */
function applyWidgetPolicy() {
  const widget = document.querySelector(WIDGET_SELECTOR) as HTMLElement | null
  if (!widget) return false

  placeWidgetRight(widget)

  if (userRequestedOpen) {
    tryFulfillPendingOpen()
    return true
  }

  if (widget.dataset.state !== 'closed' || widget.offsetHeight > 0) {
    collapseWidget()
  }

  return true
}

function resetIdentityCache() {
  boundVisitorKey = null
  cachedIdentity = null
  identityLoad = null
  identityGeneration += 1
}

function disconnectPositionObserver() {
  positionObserver?.disconnect()
  positionObserver = null
  if (positionObserverTimer != null) {
    clearTimeout(positionObserverTimer)
    positionObserverTimer = null
  }
}

function clearOpenFallbackTimer() {
  if (openFallbackTimer != null) {
    clearTimeout(openFallbackTimer)
    openFallbackTimer = null
  }
}

function clearOpenFallback() {
  clearOpenFallbackTimer()
  pendingOpen = false
  userRequestedOpen = false
}

function removeLivechatDom() {
  document.querySelectorAll(WIDGET_SELECTOR).forEach((node) => node.remove())
  document.querySelector('#rocketchat-iframe')?.remove()
  document.querySelector(`script[${SCRIPT_ATTR}]`)?.remove()
}

function callLivechat(fn: (api: RocketChatApi) => void) {
  if (!window.RocketChat) return
  window.RocketChat(function (this: RocketChatApi) {
    fn(this)
  })
}

/** Контур может отдать merchant_id; в Livechat поле заведено как user_id. */
function toLivechatCustomFields(identity: SupportChatIdentity): RocketChatCustomField[] {
  const source = identity.custom_fields ?? {}
  const userId = source.user_id || source.merchant_id
  const orgName = source.org_name || identity.name
  const result: RocketChatCustomField[] = []
  if (userId) result.push({ key: 'user_id', value: String(userId), overwrite: true })
  if (orgName) result.push({ key: 'org_name', value: orgName, overwrite: true })
  return result
}

function bindClosedByDefault(api: RocketChatApi) {
  if (lifecycleBound) return
  lifecycleBound = true

  api.onChatMaximized?.(() => {
    if (userRequestedOpen) return
    collapseWidget()
  })
  api.onWidgetShown?.(() => {
    if (userRequestedOpen) return
    collapseWidget()
  })
}

function watchWidgetMount() {
  applyWidgetPolicy()
  if (positionObserver) return

  positionObserver = new MutationObserver(() => {
    applyWidgetPolicy()
  })
  positionObserver.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['data-state', 'style']
  })
  positionObserverTimer = setTimeout(() => disconnectPositionObserver(), 15_000)
}

function ensureRocketChatBootstrapped(livechatUrl: string, locale?: string) {
  if (typeof window === 'undefined' || !livechatUrl) return

  // Официальный сниппет: очередь до загрузки скрипта
  if (!window.RocketChat) {
    const queue: Array<(this: RocketChatApi) => void> = []
    const rocketChat = function (callback: (this: RocketChatApi) => void) {
      queue.push(callback)
    } as RocketChatFn
    rocketChat._ = queue
    rocketChat.url = livechatUrl
    window.RocketChat = rocketChat
  } else if (!window.RocketChat.url) {
    window.RocketChat.url = livechatUrl
  }

  if (!document.querySelector(`script[${SCRIPT_ATTR}]`)) {
    const script = document.createElement('script')
    script.async = true
    script.src = `${livechatUrl}/rocketchat-livechat.min.js?_=${SCRIPT_CACHE_BUST}`
    script.setAttribute(SCRIPT_ATTR, '1')
    document.head.appendChild(script)
  }

  callLivechat((api) => {
    applyLivechatLocale(api, locale || getI18nLocale())
    bindClosedByDefault(api)
    if (!userRequestedOpen) {
      api.minimizeWidget?.()
      api.hideWidget?.()
    }
  })

  watchWidgetMount()
}

async function loadSupportChatIdentity(): Promise<SupportChatIdentity | null> {
  if (typeof window === 'undefined') return null
  if (cachedIdentity) return cachedIdentity

  if (!identityLoad) {
    const generation = identityGeneration
    identityLoad = Promise.resolve(options.fetchIdentity ? options.fetchIdentity() : null)
      .then((data) => {
        if (generation !== identityGeneration) return null
        cachedIdentity = data
        return data
      })
      .catch((error) => {
        if (generation !== identityGeneration) return null
        console.warn('Не удалось получить identity для Rocket.Chat', error)
        identityLoad = null
        return null
      })
  }

  return identityLoad
}

function registerLivechatGuest(identity: SupportChatIdentity) {
  if (!window.RocketChat) return
  if (boundVisitorKey === identity.token) return
  boundVisitorKey = identity.token

  callLivechat((api) => {
    api.registerGuest?.({
      token: identity.token,
      name: identity.name,
      email: identity.email,
      customFields: toLivechatCustomFields(identity)
    })
  })
}

/**
 * Полностью снимает Livechat: скрипт, iframe и кэш гостя.
 * Прятать display:none недостаточно — виджет продолжает ходить в API.
 */
export function destroyRocketChat() {
  if (typeof window === 'undefined') return

  disconnectPositionObserver()
  clearOpenFallback()
  lifecycleBound = false
  removeLivechatDom()
  delete window.RocketChat
  resetIdentityCache()
}

export interface RocketChatOptions {
  /** Базовый URL Rocket.Chat (например, из env). Пусто — виджет выключен. */
  url: string
  /** Загрузка identity гостя из BFF потребителя (например, GET /<contour>/support-chat/identity). */
  fetchIdentity?: () => Promise<SupportChatIdentity | null>
  /** Текущая локаль i18n потребителя. */
  getLocale?: () => string
  /** Заголовок окна виджета по языку ('ru' | 'en'). */
  getChatTitle?: (lang: string) => string
}

let options: RocketChatOptions = { url: '' }

/**
 * Конфигурация виджета: вызывается один раз потребителем (плагин, layout, main).
 */
export function setupRocketChat(opts: RocketChatOptions) {
  options = { ...opts }
  resetIdentityCache()
}

export function useRocketChat() {
  const livechatUrl = computed(() => normalizeLivechatUrl(options.url || ''))
  const enabled = computed(() => Boolean(livechatUrl.value))

  const bindGuest = async () => {
    if (!livechatUrl.value) return
    const identity = await loadSupportChatIdentity()
    if (!identity || !window.RocketChat) return
    registerLivechatGuest(identity)
  }

  const syncLanguage = (locale?: string) => {
    applyLivechatLanguage(locale || getI18nLocale())
  }

  const openChat = () => {
    if (!livechatUrl.value) return
    const locale = getI18nLocale()
    userRequestedOpen = true
    pendingOpen = true
    ensureRocketChatBootstrapped(livechatUrl.value, locale)

    callLivechat((api) => {
      applyLivechatLocale(api, locale)
      api.showWidget?.()
      api.maximizeWidget()
    })

    clearOpenFallbackTimer()
    openFallbackTimer = setTimeout(() => {
      if (isWidgetVisiblyOpen()) {
        pendingOpen = false
        return
      }
      tryFulfillPendingOpen()
    }, 300)

    void bindGuest()
  }

  return {
    enabled,
    livechatUrl,
    openChat,
    syncLanguage,
    hideChat: destroyRocketChat
  }
}
