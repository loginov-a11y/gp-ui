import type { Component } from 'vue';
interface Props {
    /** Заголовок карточки */
    title: string;
    /** Описание карточки (опционально) */
    description?: string;
    /** Иконка карточки (компонент из lucide-vue-next) */
    icon: Component;
    /** Дополнительные CSS классы для карточки */
    sectionClass?: string;
    contentMaxHeight?: string;
    headerDisplayMode?: 'inline' | 'rows';
}
declare const __VLS_template: () => {
    __VLS_Slots: {
        headerActions?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    } & {
        footer?: (props: {}) => any;
    };
};
type __VLS_Slots = ReturnType<typeof __VLS_template>['__VLS_Slots'];
declare const __VLS_base: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{}>, {
    description: string;
    sectionClass: string;
    contentMaxHeight: string;
    headerDisplayMode: "inline" | "rows";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
