/**
 * Публичный лендинг. Платёжное окно уводит сюда, а не в кабинет (`/`).
 */
export const PAYMENT_LANDING_URL = 'https://goodpayments.ru/'

/**
 * Базовый URL приложения (origin) для построения абсолютных ссылок.
 * На клиенте — window.location.origin; на SSR без запроса вернуть origin
 * невозможно — потребитель подставляет свой, если нужен.
 */
export function getBaseUrl(): string {
  if (typeof window !== 'undefined' && window.location) {
    return window.location.origin
  }
  return ''
}
