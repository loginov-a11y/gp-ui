/**
 * Форматирование даты/времени для переиспользования на страницах.
 * Использует локаль из i18n, по умолчанию ru-RU.
 */
export interface FormatDateTimeOptions {
    /** Строка при null/undefined или невалидной дате. */
    fallback?: string;
    /** Включать секунды (по умолчанию true). */
    seconds?: boolean;
}
export declare function useDateFormat(): {
    formatDateTime: (value?: string | Date | null, options?: FormatDateTimeOptions) => string;
    localeCode: import("vue").ComputedRef<string>;
};
