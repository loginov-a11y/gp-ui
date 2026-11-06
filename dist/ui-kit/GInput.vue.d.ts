import { type GClassValue } from '../utils/classNames';
/**
 * Текстовое поле — макет Input.svg.
 * gray / white, hover / focus / error / disabled — через CSS и пропсы.
 */
export type GInputVariant = 'gray' | 'white';
interface Props {
    modelValue?: string | number | null;
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    readonly?: boolean;
    error?: boolean;
    message?: string;
    variant?: GInputVariant;
    name?: string;
    id?: string;
    autocomplete?: string;
    autocapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';
    spellcheck?: boolean;
    inputmode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
    maxlength?: number | string;
    class?: GClassValue;
}
declare const __VLS_template: () => {
    __VLS_Slots: {
        leading?: (props: {}) => any;
    } & {
        trailing?: (props: {}) => any;
    } & {
        dropdown?: (props: {}) => any;
    };
};
type __VLS_Slots = ReturnType<typeof __VLS_template>['__VLS_Slots'];
declare const __VLS_base: import("vue").DefineComponent<Props, {
    focus: () => void;
    select: () => void;
    inputRef: import("vue").Ref<HTMLInputElement | null, HTMLInputElement | null>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
    keydown: (event: KeyboardEvent) => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onKeydown?: ((event: KeyboardEvent) => any) | undefined;
}>, {
    type: string;
    disabled: boolean;
    variant: GInputVariant;
    class: string | Record<string, boolean> | (string | Record<string, boolean>)[];
    readonly: boolean;
    error: boolean;
    message: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
