interface Props {
    /** Текст для отображения */
    text?: string | null;
    /** URL ссылки (если не передан — рендерится только текст без ссылки) */
    href?: string | null;
    /** Значение для копирования в буфер (по умолчанию — text) */
    copyValue?: string | null;
    /** Текст при пустом value (прочерк и т.п.) */
    emptyText?: string;
    /** Title для ссылки (например полный хеш) */
    linkTitle?: string;
    /** Показывать иконку внешней ссылки */
    showExternalIcon?: boolean;
    /** Дополнительные классы для контейнера пустого состояния */
    emptyClass?: string;
}
declare const __VLS_export: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{}>, {
    text: string | null;
    href: string | null;
    copyValue: string | null;
    emptyText: string;
    linkTitle: string;
    showExternalIcon: boolean;
    emptyClass: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
