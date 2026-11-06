import type { GDatePickerValue } from '~/ui-kit/GDatePicker.vue'

export type DateRange = [Date, Date]

function startOfDay(date: Date): Date {
  const next = new Date(date)
  next.setHours(0, 0, 0, 0)
  return next
}

/** Конец выбранного дня — чтобы диапазон из одной даты охватывал сутки целиком. */
function endOfDay(date: Date): Date {
  const next = new Date(date)
  next.setHours(23, 59, 59, 999)
  return next
}

export function datesFromIso(from?: string, to?: string): DateRange | null {
  return from && to ? [new Date(from), new Date(to)] : null
}

/** `null` — сброс, `undefined` — ещё выбирают вторую дату. */
export function parseDateRange(value: GDatePickerValue): DateRange | null | undefined {
  if (value === null) return null
  if (Array.isArray(value) && value[0] instanceof Date && value[1] instanceof Date) {
    return [startOfDay(value[0]), endOfDay(value[1])]
  }
  return undefined
}

export function sameDateRange(a: DateRange | null, b: DateRange | null): boolean {
  if (a === b) return true
  if (!a || !b) return false
  return a[0].getTime() === b[0].getTime() && a[1].getTime() === b[1].getTime()
}
