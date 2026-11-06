type __VLS_Props = {
    count: number;
    total: number;
    currentPage: number;
    limit: number;
    sizes?: number[];
};
declare const __VLS_export: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "page-change": (page: number) => any;
    "limit-change": (limit: number) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onPage-change"?: ((page: number) => any) | undefined;
    "onLimit-change"?: ((limit: number) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
