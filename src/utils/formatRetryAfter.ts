/**
 * Подпись к обратному отсчёту `retry_after` (секунды).
 * < 1 мин / < 1 ч → `MM:SS`; от часа → `N ч`.
 */
export function formatRetryAfter(seconds: number): string {
  const total = Math.max(0, Math.ceil(seconds))
  if (total >= 3600) return `${Math.floor(total / 3600)} ч`

  const mm = Math.floor(total / 60)
  const ss = total % 60
  return `${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`
}
