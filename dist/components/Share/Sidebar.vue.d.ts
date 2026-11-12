interface Props {
    mobileOpen?: boolean;
    /** Пункты меню — приходят из приложения (useAppMenu), панель фильтрует по mobile. */
    menuItems?: import('../../types/menu').GMenuItem[];
    /** Имя/компания пользователя для профиля в панели — из доменного стора приложения. */
    userName?: string;
    /** Фото вместо инициалов в профиле. */
    avatarUrl?: string;
    /** Спиннер на кнопке выхода. */
    logoutLoading?: boolean;
    /** Сумма «Доступно для вывода» — из доменного стора приложения. */
    balanceAmount?: number | null;
    /** Куда ведёт клик по блоку баланса. */
    balanceTo?: string;
    /** Вторая строка карточки баланса («В текущем периоде»). */
    balancePeriodAmount?: number | null;
    balancePeriodLabel?: string;
    /** URL «Документации» в футере — пусто = неактивная кнопка. */
    docsUrl?: string;
    /** Внешние ссылки отдельной карточкой под меню («Маркетинг-кит» и т.п.). */
    links?: import('../../types/menu').GSidebarLink[];
    /** Доступность чата поддержки. */
    chatEnabled?: boolean;
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
    avatarUrl: string;
    balanceAmount: number | null;
    balancePeriodAmount: number | null;
    balancePeriodLabel: string;
    balanceTo: string;
    docsUrl: string;
    links: import("../../types/menu").GSidebarLink[];
    chatEnabled: boolean;
    logoutLoading: boolean;
    mobileOpen: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
