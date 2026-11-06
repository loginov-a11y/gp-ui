import { computed, onScopeDispose, readonly, ref, watch, type Ref } from 'vue'
import { getRetryAfter } from '~/composables/useApiError'

// Общий keyed-стейт вместо Nuxt useState: ключи переживают навигацию внутри приложения.
const sharedUntil = new Map<string, Ref<number>>()
const sharedRef = (key: string): Ref<number> => {
  let r = sharedUntil.get(key)
  if (!r) {
    r = ref(readUntilMs(key))
    sharedUntil.set(key, r)
  }
  return r
}

const storageKey = (persistKey: string) => `gp-rate-limit-until:${persistKey}`

function readUntilMs(persistKey: string): number {
  if (typeof window === 'undefined') return 0
  try {
    const value = Number(sessionStorage.getItem(storageKey(persistKey)))
    return Number.isFinite(value) && value > Date.now() ? value : 0
  } catch {
    return 0
  }
}

function writeUntilMs(persistKey: string, until: number): void {
  if (typeof window === 'undefined') return
  try {
    if (until > Date.now()) sessionStorage.setItem(storageKey(persistKey), String(until))
    else sessionStorage.removeItem(storageKey(persistKey))
  } catch {
    /* private mode / quota */
  }
}

/**
 * Пауза после `RATE_LIMITED`.
 *
 * Дедлайн в `untilMs`: переживает уход со страницы. С `persistKey` ещё и
 * `sessionStorage` — логин/логаут с перезагрузкой не сбрасывают таймер.
 */
export const useRateLimit = (persistKey?: string) => {
  const untilMs = persistKey
    ? sharedRef(persistKey)
    : ref(0)

  // После полного reload общий ref стартует с 0 — на клиенте подтягиваем storage.
  if (typeof window !== 'undefined' && persistKey && untilMs.value <= Date.now()) {
    const stored = readUntilMs(persistKey)
    if (stored > untilMs.value) untilMs.value = stored
  }

  const nowTick = ref(Date.now())
  const secondsLeft = computed(() => {
    const left = Math.ceil((untilMs.value - nowTick.value) / 1000)
    return left > 0 ? left : 0
  })
  const isBlocked = computed(() => secondsLeft.value > 0)

  let timer: ReturnType<typeof setInterval> | null = null

  const stop = (): void => {
    if (timer) {
      clearInterval(timer)
      timer = null
    }
  }

  const tick = (): void => {
    nowTick.value = Date.now()
    if (secondsLeft.value <= 0) {
      if (persistKey) writeUntilMs(persistKey, 0)
      stop()
    }
  }

  const startTicker = (): void => {
    stop()
    tick()
    if (secondsLeft.value <= 0) return
    timer = setInterval(tick, 1000)
  }

  /**
   * Включает паузу, если ошибка её несёт. Возвращает `true`, когда пауза начата —
   * тогда отдельный текст ошибки обычно не нужен.
   */
  const blockFrom = (error: unknown): boolean => {
    const seconds = getRetryAfter(error)
    if (!seconds) return false

    untilMs.value = Date.now() + seconds * 1000
    if (persistKey) writeUntilMs(persistKey, untilMs.value)
    startTicker()
    return true
  }

  const reset = (): void => {
    stop()
    untilMs.value = 0
    nowTick.value = Date.now()
    if (persistKey) writeUntilMs(persistKey, 0)
  }

  if (typeof window !== 'undefined' && untilMs.value > Date.now()) startTicker()

  watch(untilMs, (value) => {
    if (persistKey) writeUntilMs(persistKey, value)
    if (value > Date.now()) startTicker()
    else stop()
  })

  onScopeDispose(stop)

  return { secondsLeft: readonly(secondsLeft), isBlocked, blockFrom, reset }
}
