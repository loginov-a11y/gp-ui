/**
 * HTTP-код из ошибки ofetch / H3 / тела BFF.
 * `undefined` — это не ответ сервера, а обрыв сети.
 */
export declare function readErrorStatus(error: unknown): number | undefined;
/** Служебный текст сети/ofetch — его нельзя показывать мерчанту. */
export declare function isTechnicalErrorText(value: string): boolean;
/**
 * Сервер не ответил: обрыв сети, таймаут, 502/503/504.
 * Шаблон `[POST] "/url": 401` — это обычный ответ ofetch, его сюда не кладём.
 */
export declare function isUnavailableRequestError(error: unknown): boolean;
