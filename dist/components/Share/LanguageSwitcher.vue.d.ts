type __VLS_Props = {
    compact?: boolean;
    /** Локали для меню; по умолчанию — availableLocales i18n. */
    locales?: Array<{
        code: string;
        name?: string;
    }>;
};
declare const __VLS_export: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (locale: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: ((locale: string) => any) | undefined;
}>, {
    compact: boolean;
    locales: {
        code: string;
        name?: string;
    }[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
