interface Props {
    title?: string;
    description?: string;
    icon?: string;
    iconClass?: string;
    cardClass?: string;
    size?: 'sm' | 'md' | 'lg';
    animated?: boolean;
    hoverable?: boolean;
    bordered?: boolean;
}
declare const __VLS_template: () => {
    __VLS_Slots: {
        header?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    } & {
        footer?: (props: {}) => any;
    };
};
type __VLS_Slots = ReturnType<typeof __VLS_template>['__VLS_Slots'];
declare const __VLS_base: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{}>, {
    size: "sm" | "md" | "lg";
    animated: boolean;
    hoverable: boolean;
    iconClass: string;
    cardClass: string;
    bordered: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
