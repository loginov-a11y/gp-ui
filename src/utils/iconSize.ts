/** CSS-размер: число и «8» → `8px`, иначе значение как есть (`1em`, `100%`). */
export function toCssSize(size: number | string): string {
  if (typeof size === 'number') return `${size}px`
  const trimmed = String(size).trim()
  return /^\d+(\.\d+)?$/.test(trimmed) ? `${trimmed}px` : trimmed
}

/** Inline width/height — перекрывает CSS родителя (кнопка, инпут и т.п.). */
export function iconSizeStyle(
  width: number | string,
  height: number | string = width
): { width: string; height: string } {
  return {
    width: toCssSize(width),
    height: toCssSize(height)
  }
}
