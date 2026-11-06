/**
 * Однократная загрузка captcha.js (advanced render=onload).
 * Несколько форм на странице делят один скрипт и очередь onload.
 */
/** Языки приложения → `hl` виджета. */
export type SmartCaptchaHl = 'ru' | 'en';
export declare const toSmartCaptchaHl: (locale: string) => SmartCaptchaHl;
export type SmartCaptchaSubscribeEvent = 'challenge-visible' | 'challenge-hidden' | 'network-error' | 'javascript-error' | 'success' | 'token-expired';
export type SmartCaptchaApi = {
    render: (container: HTMLElement | string, params: {
        sitekey: string;
        callback?: (token: string) => void;
        hl?: SmartCaptchaHl;
    }) => string | number;
    reset: (widgetId?: string | number) => void;
    destroy?: (widgetId?: string | number) => void;
    subscribe?: (widgetId: string | number, event: SmartCaptchaSubscribeEvent, callback: (...args: unknown[]) => void) => () => void;
};
declare global {
    interface Window {
        smartCaptcha?: SmartCaptchaApi;
        __gpSmartCaptchaOnload?: () => void;
        __gpSmartCaptchaQueue?: Array<() => void>;
    }
}
export declare const loadSmartCaptcha: () => Promise<SmartCaptchaApi>;
