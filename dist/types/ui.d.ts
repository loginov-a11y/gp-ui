import type { Ref } from 'vue';
/** Действие в заголовке страницы (PageHeader) */
export interface PageAction {
    key: string;
    /** Готовый текст. Если задан `labelKey`, шапка переводит ключ сама. */
    label?: string;
    /** Ключ i18n: подпись обновляется при смене языка. */
    labelKey?: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    icon?: unknown;
    loading?: boolean | Ref<boolean>;
    disabled?: boolean | Ref<boolean>;
    /** Круглая кнопка только с иконкой (kit). */
    iconOnly?: boolean;
    /** Слева от заголовка, обычно «назад» (kit). */
    leading?: boolean;
    onClick: () => void;
}
