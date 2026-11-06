import { type GClassValue } from '../utils/classNames';
/**
 * Кнопка-иконка. Цвета и оверлеи как у GButton, отличается форма:
 * xs — скруглённый квадрат, остальные размеры — круг.
 * В кабинет пока не подключать, живёт в UI Kit.
 */
export type GIconButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export type GIconButtonVariant = 'primary' | 'secondary' | 'ghost' | 'dark' | 'gray' | 'white';
interface Props {
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    size?: GIconButtonSize;
    variant?: GIconButtonVariant;
    icon?: string;
    ariaLabel?: string;
    class?: GClassValue;
}
declare const __VLS_template: () => {
    __VLS_Slots: {
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
    size: GIconButtonSize;
    variant: GIconButtonVariant;
    class: string | Record<string, boolean> | (string | Record<string, boolean>)[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
