import { type ComputedRef } from 'vue';
/**
 * Очередь уведомлений для SnackbarHost — замена @nuxt/ui useToast.
 * API вызова совместим: add({ title, description, color, icon, duration }).
 */
export interface SnackbarItem {
    id: number;
    title?: string;
    description?: string;
    /** 'success' | 'error' | 'info' — другие значения приводятся к 'info' */
    color?: string;
    icon?: string;
    duration?: number;
}
interface SnackbarState {
    toasts: ComputedRef<SnackbarItem[]>;
    add: (item: Omit<SnackbarItem, 'id'>) => SnackbarItem;
    remove: (id: number) => void;
    clear: () => void;
}
/**
 * Очередь общая на приложение (модульный синглтон) — как useToast в Nuxt UI.
 * SSR-изоляция не нужна: уведомления живут только на клиенте.
 */
export declare function useSnackbar(): SnackbarState;
export {};
