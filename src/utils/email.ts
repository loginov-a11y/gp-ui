export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Сообщение для поля email: пустое, невалидное или пустая строка если всё ок. */
export function emailFieldError(value: string, t: (key: string) => string): string {
  const trimmed = value.trim()
  if (!trimmed) return t('terminal.auth.fieldRequired')
  if (!EMAIL_RE.test(trimmed)) return t('terminal.auth.invalidEmail')
  return ''
}
