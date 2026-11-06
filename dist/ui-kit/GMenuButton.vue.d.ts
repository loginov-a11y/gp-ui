import { type GClassValue } from '../utils/classNames';
/**
 * Menu button — пункт бокового меню (Menu button (1).svg).
 * Покой: #7F7F7F без фона. Наведение / нажатие: #0B0B0B без заливки,
 * только оверлей 5% / 10%. Выбранный: #FFFFFF на #0B0B0B.
 */
export type GMenuButtonSize = 'sm' | 'md';
interface Props {
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    selected?: boolean;
    hovered?: boolean;
    pressed?: boolean;
    size?: GMenuButtonSize;
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
    type: "button" | "submit" | "reset";
    disabled: boolean;
    size: GMenuButtonSize;
    class: string | Record<string, boolean> | (string | Record<string, boolean>)[];
    selected: boolean;
    hovered: boolean;
    pressed: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
