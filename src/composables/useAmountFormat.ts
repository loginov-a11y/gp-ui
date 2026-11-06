/**
 * Форматирование денежных сумм.
 *
 * Раньше эти функции жили внутри крипто-стора баланса и тянулись компонентами
 * вместе со всем стором. В терминальном контуре крипто-баланса нет, а
 * форматирование нужно везде — поэтому вынесено отдельно и не знает про валюту
 * ничего, кроме её кода.
 */

/** Знаков после запятой: у фиата два, у крипты нужна точность до шести. */
const FRACTION_DIGITS: Record<string, number> = {
  RUB: 2,
  CNY: 2,
  USDT: 6,
  TRX: 6
}

export const useAmountFormat = () => {
  const formatCurrency = (amount: number, currency = 'RUB'): string => {
    const digits = FRACTION_DIGITS[currency.toUpperCase()] ?? 2

    const formatted = new Intl.NumberFormat('ru-RU', {
      minimumFractionDigits: currency.toUpperCase() === 'RUB' ? 2 : 0,
      maximumFractionDigits: digits
    }).format(amount)

    return `${formatted} ${currency}`
  }

  /** Форматирует сумму с запасным значением для null/undefined/NaN — для таблиц и карточек. */
  const formatAmount = (
    value: number | string | null | undefined,
    currency = 'RUB',
    fallback = '—'
  ): string => {
    if (value === null || value === undefined || value === '') return fallback

    const num = typeof value === 'number' ? value : Number.parseFloat(String(value))
    if (!Number.isFinite(num)) return fallback

    return formatCurrency(num, currency)
  }

  return { formatCurrency, formatAmount }
}
