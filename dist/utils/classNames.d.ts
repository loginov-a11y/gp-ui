/**
 * Значение класса в форме Vue: строка, массив или объект-мапа.
 */
export type GClassValue = string | Array<string | Record<string, boolean>> | Record<string, boolean> | undefined;
/**
 * Приводит class-проп к массиву имён — аналог внутреннего normalizeClass Vue.
 */
export declare function normalizeClass(value: unknown): string[];
