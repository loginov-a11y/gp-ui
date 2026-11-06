/** Верхняя граница оси: 1 / 2 / 5 × 10^n. Для нулевой серии — 0, без фиктивной шкалы из макета. */
export function niceCeil(value: number): number {
  if (!Number.isFinite(value) || value <= 0) return 0

  const exp = 10 ** Math.floor(Math.log10(value))
  const n = value / exp
  const nice = n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10
  return nice * exp
}

/** Подпись оси: 12000 → «12т» / «12k». */
export function formatCompactAxis(value: number, locale: string): string {
  if (value === 0) return '0'

  const thousand = locale.startsWith('en') ? 'k' : 'т'
  if (value >= 1000) {
    const scaled = value / 1000
    const text = Number.isInteger(scaled) ? String(scaled) : scaled.toFixed(1).replace('.', ',')
    return `${text}${thousand}`
  }

  return String(Math.round(value))
}
