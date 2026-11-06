interface Props {
    text: string;
    size?: number;
    description?: string;
    altText?: string;
    /**
     * Готовый data URL, сгенерированный заранее (например, на сервере).
     * Позволяет отрисовать код сразу, без вспышки состояния загрузки.
     */
    initialDataUrl?: string;
}
declare const __VLS_export: import("vue").DefineComponent<Props, {
    generateQR: () => Promise<void>;
    qrCodeDataURL: Readonly<import("vue").Ref<string, string>>;
    isLoading: Readonly<import("vue").Ref<boolean, boolean>>;
    hasError: Readonly<import("vue").Ref<boolean, boolean>>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    download: () => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    onDownload?: (() => any) | undefined;
}>, {
    size: number;
    description: string;
    altText: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
