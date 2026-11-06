import type { GInputVariant } from '../ui-kit/GInput.vue';
export interface GInputSelectItem {
    label: string;
    value: string;
}
interface Props {
    modelValue?: string | null;
    items: GInputSelectItem[];
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    message?: string;
    variant?: GInputVariant;
    toggleLabel?: string;
    emptyLabel?: string;
    /** Открывать список во вложенном шите (мобильные фильтры). */
    sheet?: boolean;
    class?: string;
}
declare const __VLS_template: () => {
    __VLS_Slots: {
        leading?: (props: {}) => any;
    } & {
        itemLeading?: (props: {
            item: GInputSelectItem;
        }) => any;
    } & {
        item?: (props: {
            item: GInputSelectItem;
        }) => any;
    } & {
        itemLeading?: (props: {
            item: GInputSelectItem;
        }) => any;
    } & {
        item?: (props: {
            item: GInputSelectItem;
        }) => any;
    };
};
type __VLS_Slots = ReturnType<typeof __VLS_template>['__VLS_Slots'];
declare const __VLS_base: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (item: GInputSelectItem) => any;
    "update:modelValue": (value: string | undefined) => any;
    open: () => any;
    close: () => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    onSelect?: ((item: GInputSelectItem) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | undefined) => any) | undefined;
    onOpen?: (() => any) | undefined;
    onClose?: (() => any) | undefined;
}>, {
    disabled: boolean;
    variant: GInputVariant;
    class: string;
    sheet: boolean;
    error: boolean;
    message: string;
    toggleLabel: string;
    emptyLabel: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
