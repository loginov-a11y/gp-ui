/** Непустая строка или undefined — для опциональных полей тела запроса. */
export const nonEmptyString = (value: unknown): string | undefined =>
  typeof value === 'string' && value.length > 0 ? value : undefined
