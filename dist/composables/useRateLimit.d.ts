import { type Ref } from 'vue';
/**
 * Пауза после `RATE_LIMITED`.
 *
 * Дедлайн в `untilMs`: переживает уход со страницы. С `persistKey` ещё и
 * `sessionStorage` — логин/логаут с перезагрузкой не сбрасывают таймер.
 */
export declare const useRateLimit: (persistKey?: string) => {
    secondsLeft: Readonly<Ref<number, number>>;
    isBlocked: import("vue").ComputedRef<boolean>;
    blockFrom: (error: unknown) => boolean;
    reset: () => void;
};
