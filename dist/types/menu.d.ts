import type { Component } from 'vue';
/** Пункт меню кабинета (SidebarPanel, MobileTabBar). */
export interface GMenuItem {
    to: string;
    icon: Component;
    title?: string;
    subtitle?: string;
    label?: string;
    desktopOnly?: boolean;
    mobileOnly?: boolean;
}
/** Внешняя ссылка в футере сайдбара («Документация», «Маркетинговые материалы»). */
export interface GSidebarLink {
    key: string;
    label: string;
    url: string;
    icon?: Component;
}
