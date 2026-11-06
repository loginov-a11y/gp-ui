/** CSS-размер: число и «8» → `8px`, иначе значение как есть (`1em`, `100%`). */
export declare function toCssSize(size: number | string): string;
/** Inline width/height — перекрывает CSS родителя (кнопка, инпут и т.п.). */
export declare function iconSizeStyle(width: number | string, height?: number | string): {
    width: string;
    height: string;
};
