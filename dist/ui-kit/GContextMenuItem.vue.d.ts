import { type GClassValue } from '../utils/classNames';
interface Props {
    selected?: boolean;
    muted?: boolean;
    hovered?: boolean;
    disabled?: boolean;
    class?: GClassValue;
}
declare const __VLS_template: () => {
    __VLS_Slots: {
        leading?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    };
};
type __VLS_Slots = ReturnType<typeof __VLS_template>['__VLS_Slots'];
declare const __VLS_base: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (event: MouseEvent) => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
}>, {
    disabled: boolean;
    class: string | Record<string, boolean> | (string | Record<string, boolean>)[];
    selected: boolean;
    muted: boolean;
    hovered: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
