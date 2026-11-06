/**
 * Значение класса в форме Vue: строка, массив или объект-мапа.
 */
export type GClassValue =
  | string
  | Array<string | Record<string, boolean>>
  | Record<string, boolean>
  | undefined

/**
 * Приводит class-проп к массиву имён — аналог внутреннего normalizeClass Vue.
 */
export function normalizeClass(value: unknown): string[] {
  if (!value) return []
  if (typeof value === 'string') return value.split(' ').filter(Boolean)
  if (Array.isArray(value)) return value.flatMap(normalizeClass)
  if (typeof value === 'object') {
    return Object.entries(value as Record<string, unknown>)
      .filter(([, enabled]) => Boolean(enabled))
      .map(([name]) => name)
  }
  return []
}
