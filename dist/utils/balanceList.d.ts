export declare const FILTER_ALL = "__all__";
export type BalanceListKind = 'skeleton' | 'filtered' | 'empty' | 'table';
export declare function balanceListKind(loading: boolean, count: number, hasFilters: boolean): BalanceListKind;
export declare function countFilledFilters(...filled: boolean[]): number;
