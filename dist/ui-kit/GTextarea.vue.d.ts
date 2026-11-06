import { type GClassValue } from '../utils/classNames';
/**
 * Многострочное поле — Text Field из UI kit.
 * Placeholder и лимит символов через пропсы, счётчик внутри поля справа снизу.
 */
interface Props {
    modelValue?: string | null;
    placeholder?: string;
    maxlength?: number;
    disabled?: boolean;
    readonly?: boolean;
    rows?: number;
    name?: string;
    id?: string;
    class?: GClassValue;
}
declare const __VLS_export: import("vue").DefineComponent<Props, {
    focus: () => void;
    textareaRef: import("vue").Ref<HTMLTextAreaElement | null, HTMLTextAreaElement | null>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
}>, {
    disabled: boolean;
    class: string | Record<string, boolean> | (string | Record<string, boolean>)[];
    placeholder: string;
    readonly: boolean;
    rows: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
