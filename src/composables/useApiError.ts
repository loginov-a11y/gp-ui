import { useI18n } from 'vue-i18n'
import { isUnavailableRequestError } from '~/utils/httpError'
import { getErrorText } from '~/utils/getErrorText'

/**
 * Разбор ошибок терминального контура.
 *
 * Спека даёт машинный код в поле `code` и прямо говорит: клиент ветвится по нему.
 * Разбирать `detail` для этого нельзя — текст меняется, не переводится и пишется
 * для разработчика, а не для мерчанта («terminal_id is required for session
 * authentication» в модалке вывода средств — это не сообщение пользователю).
 *
 * Путь до кода вложенный: BFF кладёт его в `data` своего `createError`, а `$fetch`
 * отдаёт тело ответа целиком в `error.data`. Отсюда `error.data.data.code`.
 * Первый уровень тоже проверяем — на случай прямого ответа контура.
 */

/** Достаёт поле с обоих уровней вложенности: своего ответа BFF и тела контура. */
function fromErrorData<T>(error: unknown, pick: (source: Record<string, unknown>) => T | undefined) {
  if (!error || typeof error !== 'object') return undefined

  const data = (error as { data?: unknown }).data
  if (!data || typeof data !== 'object') return undefined

  const own = pick(data as Record<string, unknown>)
  if (own !== undefined) return own

  const nested = (data as { data?: unknown }).data
  if (nested && typeof nested === 'object') return pick(nested as Record<string, unknown>)

  return undefined
}

function pickLabel(source: Record<string, unknown>): string | undefined {
  return typeof source.label === 'string' && source.label.trim() ? source.label.trim() : undefined
}

/** Код ошибки из ответа, если он есть. */
export function getBackendCode(error: unknown): string | undefined {
  return fromErrorData(error, (source) =>
    typeof source.code === 'string' ? source.code : undefined
  )
}

/**
 * Пауза до повтора в секундах — приходит при `RATE_LIMITED` из заголовка
 * `Retry-After`. Форме этого достаточно, чтобы заблокировать кнопку на время
 * ожидания вместо того, чтобы пускать пользователя долбить её дальше.
 */
export function getRetryAfter(error: unknown): number | undefined {
  return fromErrorData(error, (source) => {
    const value = Number(source.retry_after)
    return Number.isFinite(value) && value > 0 ? value : undefined
  })
}

/**
 * Ошибки по полям при `VALIDATION_ERROR`.
 * Контур кладёт сюда готовый текст для пользователя — его и показываем вместо
 * общего «проверьте данные».
 */
export function getBackendFields(error: unknown): Record<string, string[]> | undefined {
  return fromErrorData(error, (source) =>
    source.fields && typeof source.fields === 'object'
      ? (source.fields as Record<string, string[]>)
      : undefined
  )
}

/** Лимит из фразы контура вроде «Не должно превышать 10000000000.». */
function parseMaxLimitMessage(message: string): number | null {
  const match =
    message.match(/не должно превышать\s+([\d.]+)/i) ??
    message.match(/less than or equal to\s+([\d.]+)/i) ??
    message.match(/must not (?:be greater than|exceed)\s+([\d.]+)/i)
  if (!match?.[1]) return null
  const value = Number(match[1])
  return Number.isFinite(value) ? value : null
}

function formatMaxLimit(value: number, locale: string): string {
  return value.toLocaleString(locale.toLowerCase().startsWith('ru') ? 'ru-RU' : 'en-US')
}

/** Все непустые сообщения из `fields` — по каждому полю, не только первое. */
function fieldMessages(error: unknown, rewrite?: (message: string) => string): string[] {
  return Object.values(getBackendFields(error) ?? {})
    .flat()
    .filter((message): message is string => typeof message === 'string' && Boolean(message.trim()))
    .map((message) => {
      const trimmed = message.trim()
      return rewrite ? rewrite(trimmed) : trimmed
    })
}

function uniqueTexts(...values: Array<string | undefined | string[]>): string[] {
  const seen = new Set<string>()
  const lines: string[] = []
  for (const value of values.flat()) {
    const text = value?.trim()
    if (!text || seen.has(text)) continue
    seen.add(text)
    lines.push(text)
  }
  return lines
}

export const useApiError = () => {
  const { t, te, locale } = useI18n()

  const rewriteFieldMessage = (message: string): string => {
    const max = parseMaxLimitMessage(message)
    if (max == null) return message
    return t('terminal.invoices.create.amountTooLarge', {
      max: formatMaxLimit(max, String(locale.value))
    })
  }

  const fallbackText = (error: unknown, fallback: string): string => {
    const code = getBackendCode(error)
    if (!code) {
      if (isUnavailableRequestError(error)) return t('terminal.errors.REQUEST_FAILED')
      return getErrorText(error, fallback)
    }

    if (code === 'RATE_LIMITED') {
      const seconds = getRetryAfter(error)
      if (seconds) return t('terminal.errors.RATE_LIMITED_IN', { seconds })
    }

    const key = `terminal.errors.${code}`
    if (te(key)) return t(key)

    console.warn(`Untranslated backend error code: ${code}`)
    return getErrorText(error, fallback)
  }

  /**
   * Тексты ошибки: при `VALIDATION_ERROR` контур кладёт готовые фразы в
   * `fields` — показываем их без общего label («Ошибка валидации данных»).
   * Label берём только если полей нет. Иначе — перевод по коду / fallback.
   */
  const errorList = (error: unknown, fallback: string): string[] => {
    const fields = fieldMessages(error, rewriteFieldMessage)
    if (fields.length) return uniqueTexts(fields)

    const label = fromErrorData(error, pickLabel)
    if (label) return [label]

    return [fallbackText(error, fallback)]
  }

  /** Та же выдача, что `errorList`, одной строкой — для тостов и однострочных форм. */
  const errorText = (error: unknown, fallback: string): string => errorList(error, fallback).join('\n')

  return { errorText, errorList, getBackendCode, getBackendFields, getRetryAfter }
}
