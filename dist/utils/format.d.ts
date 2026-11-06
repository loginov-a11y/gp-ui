/**
 * Сокращает хеш/строку до заданной длины (симметрично: начало…конец).
 * @param hash — строка (например, хеш транзакции или URL)
 * @param length — желаемая длина результата (по умолчанию 12)
 */
export declare function shortenHash(hash: string, length?: number): string;
/** Отображение сумм на экране баланса (макет — символ ₽, не код RUB). */
export declare function formatRub(value: number | string | null | undefined, fallback?: string): string;
/** Фиат дашборда и таблиц: ₽ для RUB, иначе сумма и код валюты. */
export declare function formatFiatMoney(value: number | string | null | undefined, currency?: string, fallback?: string): string;
/**
 * Курс инвойса: только конечное положительное число. Строку с запятой
 * тоже принимаем — Decimal с контура иногда приходит текстом.
 */
export declare function parseFiatCourse(value: unknown): number | undefined;
/**
 * Курс для таблицы, карточки и платёжного окна.
 * Сначала `payer_course` (как в превью converter), иначе legacy `fiat_course` / `course`.
 */
export declare function readInvoiceCourse(invoice: {
    payer_course?: unknown;
    fiat_course?: unknown;
    course?: unknown;
}): number | undefined;
/**
 * Курс для таблицы и карточки. Пустое и NaN — прочерк, а не «не число»:
 * `Intl` в ru-RU так пишет undefined/NaN.
 *
 * `quote` — валюта в знаменателе: USDT или CNY (₽/USDT · ₽/CNY).
 */
export declare function formatInvoiceRate(course: unknown, fiat?: string, fractionDigits?: {
    min?: number;
    max?: number;
    quote?: string;
}): string;
/**
 * Фактическая сумма в фиате по курсу инвойса. Если курса нет — доля от
 * фиатной суммы инвойса, пропорциональная полученным USDT.
 */
export declare function fiatFromUsdt(usdt: number, invoice: {
    fiat_course?: number | null;
    fiat_amount: number;
    amount: number | null;
}): number;
