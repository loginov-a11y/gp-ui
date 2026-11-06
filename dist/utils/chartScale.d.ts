/** Верхняя граница оси: 1 / 2 / 5 × 10^n. Для нулевой серии — 0, без фиктивной шкалы из макета. */
export declare function niceCeil(value: number): number;
/** Подпись оси: 12000 → «12т» / «12k». */
export declare function formatCompactAxis(value: number, locale: string): string;
