/**
 * Текст ошибки для пользователя.
 *
 * Контур кладёт текст для экрана в `label`; если его нет — берём `message`.
 * Смотрим оба уровня: тело ответа BFF и вложенный `data` исходной ошибки.
 */
export declare const getErrorText: (error: unknown, fallback: string) => string;
