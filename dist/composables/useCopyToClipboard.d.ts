/**
 * Копирование текста в буфер обмена с опциональным toast-уведомлением.
 */
export declare function useCopyToClipboard(): {
    copyToClipboard: (text: string, options?: {
        showToast?: boolean;
        toastTitle?: string;
        toastDescription?: string;
    }) => Promise<boolean>;
};
