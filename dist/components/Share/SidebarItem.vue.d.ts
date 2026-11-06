import type { Component } from 'vue';
import type { GMenuButtonSize } from '../../ui-kit/GMenuButton.vue';
interface Props {
    to: string;
    title: string;
    icon?: Component;
    disabled?: boolean;
    size?: GMenuButtonSize;
}
declare const __VLS_export: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    click: () => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    onClick?: (() => any) | undefined;
}>, {
    disabled: boolean;
    size: GMenuButtonSize;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
