/**
 * Радиокнопка — макет Radiobutton.svg.
 * OFF: #F7F7F7. ON: #0B0B0B + белый кружок 16px. 24×24, полное скругление.
 */
interface Props {
    modelValue?: string | number | boolean | null;
    value?: string | number | boolean;
    disabled?: boolean;
}
declare const __VLS_export: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | boolean) => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number | boolean) => any) | undefined;
}>, {
    disabled: boolean;
    modelValue: string | number | boolean | null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
