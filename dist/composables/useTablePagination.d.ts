import { type Ref } from 'vue';
export interface GPageSizeOption {
    label: string;
    value: number;
}
/**
 * Создаёт массив опций для селекта "записей на странице".
 */
export declare function createPageSizeOptions(sizes?: number[]): GPageSizeOption[];
export interface UseTablePaginationOptions {
    /** Кастомный набор размеров страницы. */
    sizes?: number[];
}
export interface UseTablePaginationStateOptions {
    page: Ref<number>;
    pageSize: Ref<number>;
    total: Ref<number>;
    itemsLength: Ref<number>;
    /** Для cursor-based API: наличие ссылки на следующую страницу. */
    nextPageUrl?: Ref<string | null>;
    /** Для cursor-based API: наличие ссылки на предыдущую страницу. */
    prevPageUrl?: Ref<string | null>;
}
/**
 * Composable для пагинации таблиц: опции размера страницы.
 * @param options — опционально кастомные sizes для pageSizeOptions
 * @returns pageSizeOptions (GPageSizeOption[]) для селекта размера страницы
 */
export declare function useTablePagination(options?: UseTablePaginationOptions): {
    pageSizeOptions: import("vue").ComputedRef<GPageSizeOption[]>;
    createPageSizeOptions: typeof createPageSizeOptions;
};
/**
 * Вычисляемые значения пагинации и логика навигации по ref'ам page, pageSize, total, itemsLength.
 * Опционально nextPageUrl/prevPageUrl для cursor-based API (hasPreviousPage/hasNextPage).
 */
export declare function useTablePaginationState(state: UseTablePaginationStateOptions): {
    totalPages: import("vue").ComputedRef<number>;
    rangeStart: import("vue").ComputedRef<number>;
    rangeEnd: import("vue").ComputedRef<number>;
    hasPreviousPage: import("vue").ComputedRef<boolean>;
    hasNextPage: import("vue").ComputedRef<boolean>;
    goToPage: (onPageChange: (targetPage: number) => void) => (targetPage: number) => void;
    goToPreviousPage: (onPageChange: (targetPage: number) => void) => () => void;
    goToNextPage: (onPageChange: (targetPage: number) => void) => () => void;
    handlePageSizeChange: (options?: {
        defaultSize?: number;
        onApply?: () => void;
    }) => () => void;
};
