/**
 * Снекбар — макет Sneakbar.svg.
 * success: #DBFFFA / #00B39D; error: #FFEBE7 / #FA4225; info: #D8F4FF / #0D9CD5.
 */
export type GSnackbarType = 'success' | 'error' | 'info';
interface Props {
    type?: GSnackbarType;
    title?: string;
    description?: string;
    closable?: boolean;
}
declare const __VLS_template: () => {
    __VLS_Slots: {
        default?: (props: {}) => any;
    };
};
type __VLS_Slots = ReturnType<typeof __VLS_template>['__VLS_Slots'];
declare const __VLS_base: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: () => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    onClose?: (() => any) | undefined;
}>, {
    title: string;
    type: GSnackbarType;
    description: string;
    closable: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
