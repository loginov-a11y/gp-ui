interface Props {
    mobileOpen?: boolean;
    /** Пункты меню — приходят из приложения (useAppMenu), панель фильтрует по mobile. */
    menuItems?: import('../../types/menu').GMenuItem[];
    /** Имя/компания пользователя для профиля в панели — из доменного стора приложения. */
    userName?: string;
    /** Спиннер на кнопке выхода. */
    logoutLoading?: boolean;
}
declare const __VLS_export: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "toggle-chat": () => any;
    logout: () => any;
    "update:mobileOpen": (value: boolean) => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    "onToggle-chat"?: (() => any) | undefined;
    onLogout?: (() => any) | undefined;
    "onUpdate:mobileOpen"?: ((value: boolean) => any) | undefined;
}>, {
    menuItems: import("../../types/menu").GMenuItem[];
    userName: string;
    logoutLoading: boolean;
    mobileOpen: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
