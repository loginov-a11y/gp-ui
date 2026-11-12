import type { GMenuItem, GSidebarLink } from '../../types/menu';
/**
 * Панель сайдбара: профиль, карточка баланса, пункты меню, футер.
 * Данные приходят пропсами — к сторам кабинета панель не привязана.
 */
type __VLS_Props = {
    mobile?: boolean;
    /** Имя в приветствии. */
    userName?: string;
    /** Фото вместо инициалов в приветствии. */
    avatarUrl?: string;
    /** Сумма на карточке баланса; без неё карточка не рисуется. */
    balanceAmount?: number | null;
    /** Вторая строка баланса («В текущем периоде»): сумма и подпись. */
    balancePeriodAmount?: number | null;
    balancePeriodLabel?: string;
    /** Куда ведёт клик по карточке баланса. */
    balanceTo?: string;
    /** Пункты меню (desktopOnly/mobileOnly фильтруются по mobile). */
    menuItems?: GMenuItem[];
    /** «Документация»: кнопка активна только при заданном URL. */
    docsUrl?: string;
    /** Дополнительные внешние ссылки футера (например, «Маркетинговые материалы»). */
    links?: GSidebarLink[];
    /** Доступность чата поддержки. */
    chatEnabled?: boolean;
    /** Лоадер на кнопке выхода. */
    logoutLoading?: boolean;
};
declare const __VLS_export: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    navigate: () => any;
    "toggle-chat": () => any;
    logout: () => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onNavigate?: (() => any) | undefined;
    "onToggle-chat"?: (() => any) | undefined;
    onLogout?: (() => any) | undefined;
}>, {
    mobile: boolean;
    menuItems: GMenuItem[];
    userName: string;
    avatarUrl: string;
    balanceAmount: number | null;
    balancePeriodAmount: number | null;
    balancePeriodLabel: string;
    balanceTo: string;
    docsUrl: string;
    links: GSidebarLink[];
    chatEnabled: boolean;
    logoutLoading: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
