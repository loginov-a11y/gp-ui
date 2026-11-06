import type { GDatePickerValue } from '../ui-kit/GDatePicker.vue';
export type DateRange = [Date, Date];
export declare function datesFromIso(from?: string, to?: string): DateRange | null;
/** `null` — сброс, `undefined` — ещё выбирают вторую дату. */
export declare function parseDateRange(value: GDatePickerValue): DateRange | null | undefined;
export declare function sameDateRange(a: DateRange | null, b: DateRange | null): boolean;
