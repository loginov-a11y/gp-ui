interface Props {
    /** Текст для копирования в буфер. */
    value: string;
    /** URL ссылки. */
    href: string;
    /** Текст для отображения (по умолчанию value или сокращённый hash). */
    displayText?: string;
    /** Атрибут title ссылки. */
    title?: string;
    /** Показывать иконку внешней ссылки. */
    showExternalIcon?: boolean;
}
declare const __VLS_export: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{}>, {
    title: string;
    showExternalIcon: boolean;
    displayText: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
