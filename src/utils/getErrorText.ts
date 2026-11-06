import { isTechnicalErrorText } from '~/utils/httpError'

const isMeaningfulText = (value: unknown): value is string => {
  if (typeof value !== 'string') return false
  const v = value.trim()
  if (!v) return false
  if (['true', 'false', 'null', 'undefined', '[object Object]'].includes(v)) return false
  if (isTechnicalErrorText(v)) return false
  return true
}

const pick = (source: unknown, key: string): string | undefined => {
  if (!source || typeof source !== 'object') return undefined
  const value = (source as Record<string, unknown>)[key]
  return isMeaningfulText(value) ? value.trim() : undefined
}

/**
 * Текст ошибки для пользователя.
 *
 * Контур кладёт текст для экрана в `label`; если его нет — берём `message`.
 * Смотрим оба уровня: тело ответа BFF и вложенный `data` исходной ошибки.
 */
export const getErrorText = (error: unknown, fallback: string) => {
  const e: any = error
  const data = e?.data
  const nested = data?.data

  const label = pick(nested, 'label') ?? pick(data, 'label') ?? pick(e, 'label')
  if (label) return label

  const candidates = [
    e?.data?.error,
    pick(nested, 'message'),
    pick(data, 'message'),
    e?.data?.statusMessage,
    e?.statusMessage,
    e?.message
  ]

  for (const c of candidates) {
    if (isMeaningfulText(c)) return c.trim()
  }

  return fallback
}
