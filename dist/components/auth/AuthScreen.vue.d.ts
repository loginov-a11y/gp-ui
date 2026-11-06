type __VLS_Props = {
    /** Бирюзовое свечение шапки — на логине есть, на восстановлении в макете скрыто. */
    glow?: boolean;
    /** Больший зазор между логотипом и заголовком (первый шаг логина). */
    wideHeader?: boolean;
    /** Компактная шапка без логотипа и сетки, текст слева — активация терминала. */
    plain?: boolean;
};
declare const __VLS_template: () => {
    __VLS_Slots: {
        icon?: (props: {}) => any;
    } & {
        title?: (props: {}) => any;
    } & {
        subtitle?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    } & {
        footer?: (props: {}) => any;
    };
};
type __VLS_Slots = ReturnType<typeof __VLS_template>['__VLS_Slots'];
declare const __VLS_base: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    plain: boolean;
    glow: boolean;
    wideHeader: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
