import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
/**
 * Форматирование даты/времени для переиспользования на страницах.
 * Использует локаль из i18n, по умолчанию ru-RU.
 */
export interface FormatDateTimeOptions {
  /** Строка при null/undefined или невалидной дате. */
  fallback?: string
  /** Включать секунды (по умолчанию true). */
  seconds?: boolean
}

/** Em dash — как прочерки в карточках инвойса / таблицах (`—`, не `-`). */
const DEFAULT_FALLBACK = '—'

export function useDateFormat() {
  const { locale } = useI18n()
  const localeCode = computed(() => (locale.value && String(locale.value)) || 'ru-RU')

  /**
   * Форматирует дату/время для отображения.
   * @param value — строка ISO, Date или null/undefined
   * @param options — fallback при невалидной дате, seconds (по умолчанию true)
   */
  function formatDateTime(
    value?: string | Date | null,
    options?: FormatDateTimeOptions
  ): string {
    const fallback = options?.fallback ?? DEFAULT_FALLBACK
    const withSeconds = options?.seconds !== false

    if (value === null || value === undefined) return fallback
    const date = value instanceof Date ? value : new Date(value)
    if (Number.isNaN(date.getTime())) return fallback

    return new Intl.DateTimeFormat(localeCode.value, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      ...(withSeconds ? { second: '2-digit' } : {})
    }).format(date)
  }

  return {
    formatDateTime,
    localeCode
  }
}
