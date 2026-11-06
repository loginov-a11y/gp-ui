import { type GClassValue } from '../utils/classNames';
/**
 * Кнопка кабинета. Размеры, цвета и оверлеи состояний сняты с Button.svg.
 * Hover / active / disabled — CSS, отдельные «кадры» состояний не рисуются.
 */
export type GButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type GButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link' | 'danger' | 'success' | 'dark' | 'gray' | 'white';
interface Props {
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    loading?: boolean;
    success?: boolean;
    size?: GButtonSize;
    variant?: GButtonVariant;
    shape?: 'default' | 'rounded' | 'pill';
    leadingIcon?: string;
    trailingIcon?: string;
    class?: GClassValue;
    block?: boolean;
    animated?: boolean;
    hoverable?: boolean;
    /** Переопределяет кегль размера. Число — пиксели. */
    fontSize?: string | number;
}
declare const __VLS_template: () => {
    __VLS_Slots: {
        leading?: (props: {}) => any;
    } & {
        left?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    } & {
        trailing?: (props: {}) => any;
    } & {
        right?: (props: {}) => any;
    };
};
type __VLS_Slots = ReturnType<typeof __VLS_template>['__VLS_Slots'];
declare const __VLS_base: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (event: MouseEvent) => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
}>, {
    success: boolean;
    type: "button" | "submit" | "reset";
    disabled: boolean;
    loading: boolean;
    size: GButtonSize;
    variant: GButtonVariant;
    shape: "default" | "rounded" | "pill";
    class: string | Record<string, boolean> | (string | Record<string, boolean>)[];
    block: boolean;
    animated: boolean;
    hoverable: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
