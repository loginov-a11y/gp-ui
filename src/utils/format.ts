/**
 * Сокращает хеш/строку до заданной длины (симметрично: начало…конец).
 * @param hash — строка (например, хеш транзакции или URL)
 * @param length — желаемая длина результата (по умолчанию 12)
 */
export function shortenHash(hash: string, length: number = 12): string {
  if (hash.length <= length) return hash
  const half = Math.floor(length / 2)
  return `${hash.slice(0, half)}…${hash.slice(-half)}`
}

/** Отображение сумм на экране баланса (макет — символ ₽, не код RUB). */
export function formatRub(value: number | string | null | undefined, fallback = '—'): string {
  if (value === null || value === undefined || value === '') return fallback
  const num = typeof value === 'number' ? value : Number.parseFloat(String(value))
  if (!Number.isFinite(num)) return fallback

  return `${new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(num)}\u00a0₽`
}

const FIAT_FRACTION_DIGITS: Record<string, number> = {
  RUB: 2,
  CNY: 2,
  USDT: 6,
  TRX: 6
}

/** Фиат дашборда и таблиц: ₽ для RUB, иначе сумма и код валюты. */
export function formatFiatMoney(
  value: number | string | null | undefined,
  currency = 'RUB',
  fallback = '—'
): string {
  const code = String(currency || 'RUB').toUpperCase()
  if (code === 'RUB') return formatRub(value, fallback)
  if (value === null || value === undefined || value === '') return fallback

  const num = typeof value === 'number' ? value : Number.parseFloat(String(value))
  if (!Number.isFinite(num)) return fallback

  const digits = FIAT_FRACTION_DIGITS[code] ?? 2
  const formatted = new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 0,
    maximumFractionDigits: digits
  }).format(num)

  return `${formatted} ${code}`
}

/**
 * Курс инвойса: только конечное положительное число. Строку с запятой
 * тоже принимаем — Decimal с контура иногда приходит текстом.
 */
export function parseFiatCourse(value: unknown): number | undefined {
  if (typeof value === 'number') {
    return Number.isFinite(value) && value > 0 ? value : undefined
  }
  if (typeof value === 'string' && value.trim()) {
    const parsed = Number(value.trim().replace(',', '.'))
    return Number.isFinite(parsed) && parsed > 0 ? parsed : undefined
  }
  return undefined
}

/**
 * Курс для таблицы, карточки и платёжного окна.
 * Сначала `payer_course` (как в превью converter), иначе legacy `fiat_course` / `course`.
 */
export function readInvoiceCourse(invoice: {
  payer_course?: unknown
  fiat_course?: unknown
  course?: unknown
}): number | undefined {
  return (
    parseFiatCourse(invoice.payer_course) ??
    parseFiatCourse(invoice.fiat_course) ??
    parseFiatCourse(invoice.course)
  )
}

/**
 * Курс для таблицы и карточки. Пустое и NaN — прочерк, а не «не число»:
 * `Intl` в ru-RU так пишет undefined/NaN.
 *
 * `quote` — валюта в знаменателе: USDT или CNY (₽/USDT · ₽/CNY).
 */
export function formatInvoiceRate(
  course: unknown,
  fiat = 'RUB',
  fractionDigits: { min?: number; max?: number; quote?: string } = {}
): string {
  const value = parseFiatCourse(course)
  if (value == null) return '—'

  const formatted = new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: fractionDigits.min ?? 2,
    maximumFractionDigits: fractionDigits.max ?? 2
  }).format(value)
  const code = String(fiat || 'RUB').toUpperCase()
  const symbol = code === 'RUB' ? '₽' : fiat
  const quote = String(fractionDigits.quote || 'USDT').toUpperCase()
  return `${formatted}\u00a0${symbol}/${quote}`
}

/**
 * Фактическая сумма в фиате по курсу инвойса. Если курса нет — доля от
 * фиатной суммы инвойса, пропорциональная полученным USDT.
 */
export function fiatFromUsdt(
  usdt: number,
  invoice: { fiat_course?: number | null; fiat_amount: number; amount: number | null }
): number {
  if (usdt <= 0) return 0
  if (invoice.fiat_course) return Number((usdt * invoice.fiat_course).toFixed(2))
  if (invoice.amount != null && invoice.amount > 0 && invoice.fiat_amount) {
    return Number(((usdt / invoice.amount) * invoice.fiat_amount).toFixed(2))
  }
  return 0
}
