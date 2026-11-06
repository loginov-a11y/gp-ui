type __VLS_Props = {
    placeholder?: string;
    error?: boolean;
    message?: string;
    autocomplete?: string;
    disabled?: boolean;
    name?: string;
    id?: string;
};
type __VLS_ModelProps = {
    modelValue: string;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_export: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
    blur: (event: FocusEvent) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
}>, {
    name: string;
    autocomplete: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
