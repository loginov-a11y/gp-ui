interface Props {
    modelValue?: boolean;
    closeOnRouteChange?: boolean;
    closeOnEscape?: boolean;
}
declare const __VLS_template: () => {
    __VLS_Slots: {
        trigger?: (props: {
            isOpen: boolean;
            toggle: () => void;
            close: () => void;
        }) => any;
    } & {
        menu?: (props: {
            close: () => void;
        }) => any;
    };
};
type __VLS_Slots = ReturnType<typeof __VLS_template>['__VLS_Slots'];
declare const __VLS_base: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: boolean) => any;
    open: () => any;
    close: () => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onOpen?: (() => any) | undefined;
    onClose?: (() => any) | undefined;
}>, {
    modelValue: boolean;
    closeOnRouteChange: boolean;
    closeOnEscape: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
