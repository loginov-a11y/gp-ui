/**
 * Однократная загрузка captcha.js (advanced render=onload).
 * Несколько форм на странице делят один скрипт и очередь onload.
 */

/** Языки приложения → `hl` виджета. */
export type SmartCaptchaHl = 'ru' | 'en'

export const toSmartCaptchaHl = (locale: string): SmartCaptchaHl =>
  locale.trim().toLowerCase().startsWith('en') ? 'en' : 'ru'

export type SmartCaptchaSubscribeEvent =
  | 'challenge-visible'
  | 'challenge-hidden'
  | 'network-error'
  | 'javascript-error'
  | 'success'
  | 'token-expired'

export type SmartCaptchaApi = {
  render: (
    container: HTMLElement | string,
    params: {
      sitekey: string
      callback?: (token: string) => void
      hl?: SmartCaptchaHl
    }
  ) => string | number
  reset: (widgetId?: string | number) => void
  destroy?: (widgetId?: string | number) => void
  subscribe?: (
    widgetId: string | number,
    event: SmartCaptchaSubscribeEvent,
    callback: (...args: unknown[]) => void
  ) => () => void
}

declare global {
  interface Window {
    smartCaptcha?: SmartCaptchaApi
    __gpSmartCaptchaOnload?: () => void
    __gpSmartCaptchaQueue?: Array<() => void>
  }
}

const CALLBACK_NAME = '__gpSmartCaptchaOnload'
const SCRIPT_ATTR = 'data-gp-smartcaptcha'

export const loadSmartCaptcha = (): Promise<SmartCaptchaApi> => {
  if (window.smartCaptcha) return Promise.resolve(window.smartCaptcha)

  return new Promise((resolve, reject) => {
    const flush = () => {
      if (window.smartCaptcha) resolve(window.smartCaptcha)
      else reject(new Error('SmartCaptcha API missing after load'))
    }

    window.__gpSmartCaptchaQueue ??= []
    window.__gpSmartCaptchaQueue.push(flush)

    window.__gpSmartCaptchaOnload ??= () => {
      const queue = window.__gpSmartCaptchaQueue ?? []
      window.__gpSmartCaptchaQueue = []
      queue.forEach((fn) => fn())
    }

    if (document.querySelector(`script[${SCRIPT_ATTR}]`)) {
      if (window.smartCaptcha) flush()
      return
    }

    const script = document.createElement('script')
    script.src = `https://smartcaptcha.cloud.yandex.ru/captcha.js?render=onload&onload=${CALLBACK_NAME}`
    script.defer = true
    script.setAttribute(SCRIPT_ATTR, '1')
    script.onerror = () => reject(new Error('SmartCaptcha script failed to load'))
    document.head.appendChild(script)
  })
}
