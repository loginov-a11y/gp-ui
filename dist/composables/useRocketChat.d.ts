/**
 * Rocket.Chat Livechat для кнопки поддержки в кабинете.
 *
 * Скрипт не грузим заранее: после логина виджет пишет в DOM и в prod
 * роняет Vue (insertBefore). Подключаем только по клику «Чат».
 * Виджет по умолчанию садится в left:0 и перекрывает сайдбар — сразу
 * ставим справа. Прошлую открытую сессию Livechat не восстанавливаем.
 *
 * Данные мерчанта для оператора — registerGuest из
 * GET /terminal/support-chat/identity. На открытие окна это не влияет.
 * Язык UI виджета — setLanguage по текущей локали i18n (en/ru).
 * Заголовок окна на сервере RC один на все языки — его задаём через setTheme.
 */
export interface SupportChatIdentity {
    token: string;
    name: string;
    email: string;
    custom_fields: Record<string, string | null>;
}
type RocketChatCustomField = {
    key: string;
    value: string;
    overwrite?: boolean;
};
type LivechatTheme = {
    position?: 'left' | 'right';
    color?: string;
    title?: string;
    offlineTitle?: string;
};
export type RocketChatApi = {
    maximizeWidget: () => void;
    minimizeWidget: () => void;
    showWidget: () => void;
    hideWidget: () => void;
    setTheme?: (theme: LivechatTheme) => void;
    setLanguage?: (lang: string) => void;
    registerGuest?: (guest: {
        token?: string;
        name?: string;
        email?: string;
        department?: string;
        customFields?: RocketChatCustomField[];
    }) => void;
    onChatMaximized?: (cb: () => void) => void;
    onWidgetShown?: (cb: () => void) => void;
};
type RocketChatFn = {
    (callback: (this: RocketChatApi) => void): void;
    _: Array<(this: RocketChatApi) => void>;
    url?: string;
    livechat?: RocketChatApi;
};
declare global {
    interface Window {
        RocketChat?: RocketChatFn;
    }
}
/**
 * Полностью снимает Livechat: скрипт, iframe и кэш гостя.
 * Прятать display:none недостаточно — виджет продолжает ходить в API.
 */
export declare function destroyRocketChat(): void;
export interface RocketChatOptions {
    /** Базовый URL Rocket.Chat (например, из env). Пусто — виджет выключен. */
    url: string;
    /** Загрузка identity гостя из BFF потребителя (например, GET /<contour>/support-chat/identity). */
    fetchIdentity?: () => Promise<SupportChatIdentity | null>;
    /** Текущая локаль i18n потребителя. */
    getLocale?: () => string;
    /** Заголовок окна виджета по языку ('ru' | 'en'). */
    getChatTitle?: (lang: string) => string;
}
/**
 * Конфигурация виджета: вызывается один раз потребителем (плагин, layout, main).
 */
export declare function setupRocketChat(opts: RocketChatOptions): void;
export declare function useRocketChat(): {
    enabled: import("vue").ComputedRef<boolean>;
    livechatUrl: import("vue").ComputedRef<string>;
    openChat: () => void;
    syncLanguage: (locale?: string) => void;
    hideChat: typeof destroyRocketChat;
};
export {};
