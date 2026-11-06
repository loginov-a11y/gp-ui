import type { Component } from 'vue';
/**
 * Белая карточка раздела: иконка, заголовок, подзаголовок и слот.
 * Stretch-колонка — проп `fill`.
 */
type __VLS_Props = {
    title?: string;
    subtitle?: string;
    icon?: Component;
    fill?: boolean;
};
declare const __VLS_template: () => {
    __VLS_Slots: {
        actions?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    };
};
type __VLS_Slots = ReturnType<typeof __VLS_template>['__VLS_Slots'];
declare const __VLS_base: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
