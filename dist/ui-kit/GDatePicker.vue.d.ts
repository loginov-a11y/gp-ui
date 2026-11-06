import '../ui-kit/g-date-picker.css';
export type GDatePickerValue = Date | [Date, Date] | null;
/**
 * Date picker — макет Data picker.svg.
 * Chip-триггер 36px; popup: pill месяц/год, стрелки ↑↓, range/single стили, «Очистить» в range.
 */
interface Props {
    modelValue?: GDatePickerValue;
    placeholder?: string;
    disabled?: boolean;
    clearable?: boolean;
    range?: boolean;
    inline?: boolean;
    /** Открывать календарь во вложенном шите (мобильные фильтры). */
    sheet?: boolean;
    locale?: string;
    formatPattern?: string;
    monthNameFormat?: 'long' | 'short';
}
declare const __VLS_export: import("vue").DefineComponent<Props, {
    openMonthYearPicker: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: GDatePickerValue) => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: GDatePickerValue) => any) | undefined;
}>, {
    disabled: boolean;
    modelValue: GDatePickerValue;
    locale: string;
    placeholder: string;
    clearable: boolean;
    range: boolean;
    inline: boolean;
    sheet: boolean;
    formatPattern: string;
    monthNameFormat: "long" | "short";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
