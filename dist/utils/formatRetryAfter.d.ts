/**
 * Подпись к обратному отсчёту `retry_after` (секунды).
 * < 1 мин / < 1 ч → `MM:SS`; от часа → `N ч`.
 */
export declare function formatRetryAfter(seconds: number): string;
