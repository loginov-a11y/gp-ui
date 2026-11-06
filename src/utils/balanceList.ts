export const FILTER_ALL = '__all__'

export type BalanceListKind = 'skeleton' | 'filtered' | 'empty' | 'table'

export function balanceListKind(
  loading: boolean,
  count: number,
  hasFilters: boolean
): BalanceListKind {
  if (count > 0) return 'table'
  if (loading) return 'skeleton'
  return hasFilters ? 'filtered' : 'empty'
}

export function countFilledFilters(...filled: boolean[]): number {
  return filled.reduce((total, flag) => total + Number(flag), 0)
}
