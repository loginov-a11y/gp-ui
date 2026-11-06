/** Код ошибки из ответа, если он есть. */
export declare function getBackendCode(error: unknown): string | undefined;
/**
 * Пауза до повтора в секундах — приходит при `RATE_LIMITED` из заголовка
 * `Retry-After`. Форме этого достаточно, чтобы заблокировать кнопку на время
 * ожидания вместо того, чтобы пускать пользователя долбить её дальше.
 */
export declare function getRetryAfter(error: unknown): number | undefined;
/**
 * Ошибки по полям при `VALIDATION_ERROR`.
 * Контур кладёт сюда готовый текст для пользователя — его и показываем вместо
 * общего «проверьте данные».
 */
export declare function getBackendFields(error: unknown): Record<string, string[]> | undefined;
export declare const useApiError: () => {
    errorText: (error: unknown, fallback: string) => string;
    errorList: (error: unknown, fallback: string) => string[];
    getBackendCode: typeof getBackendCode;
    getBackendFields: typeof getBackendFields;
    getRetryAfter: typeof getRetryAfter;
};
