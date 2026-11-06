import { ref } from 'vue'
import { computed, type Ref } from 'vue'
export interface GPageSizeOption {
  label: string
  value: number
}

const DEFAULT_PAGE_SIZES = [25, 50, 100, 200]

/**
 * Создаёт массив опций для селекта "записей на странице".
 */
export function createPageSizeOptions(sizes: number[] = DEFAULT_PAGE_SIZES): GPageSizeOption[] {
  return sizes.map((size) => ({ label: String(size), value: size }))
}

export interface UseTablePaginationOptions {
  /** Кастомный набор размеров страницы. */
  sizes?: number[]
}

export interface UseTablePaginationStateOptions {
  page: Ref<number>
  pageSize: Ref<number>
  total: Ref<number>
  itemsLength: Ref<number>
  /** Для cursor-based API: наличие ссылки на следующую страницу. */
  nextPageUrl?: Ref<string | null>
  /** Для cursor-based API: наличие ссылки на предыдущую страницу. */
  prevPageUrl?: Ref<string | null>
}

/**
 * Composable для пагинации таблиц: опции размера страницы.
 * @param options — опционально кастомные sizes для pageSizeOptions
 * @returns pageSizeOptions (GPageSizeOption[]) для селекта размера страницы
 */
export function useTablePagination(options?: UseTablePaginationOptions) {
  const pageSizeOptions = computed<GPageSizeOption[]>(() =>
    createPageSizeOptions(options?.sizes ?? DEFAULT_PAGE_SIZES)
  )
  return {
    pageSizeOptions,
    createPageSizeOptions
  }
}

const DEFAULT_PAGE_SIZE = 25

/**
 * Вычисляемые значения пагинации и логика навигации по ref'ам page, pageSize, total, itemsLength.
 * Опционально nextPageUrl/prevPageUrl для cursor-based API (hasPreviousPage/hasNextPage).
 */
export function useTablePaginationState(state: UseTablePaginationStateOptions) {
  const { page, pageSize, total, itemsLength, nextPageUrl, prevPageUrl } = state

  const totalPages = computed(() => {
    if (!total.value || pageSize.value <= 0) return 1
    return Math.max(1, Math.ceil(total.value / pageSize.value))
  })

  const rangeStart = computed(() => {
    if (!itemsLength.value) return 0
    return (page.value - 1) * pageSize.value + 1
  })

  const rangeEnd = computed(() => {
    if (!itemsLength.value) return 0
    return rangeStart.value + itemsLength.value - 1
  })

  const hasPreviousPage = computed(
    () => page.value > 1 || !!prevPageUrl?.value
  )
  const hasNextPage = computed(
    () => page.value < totalPages.value || !!nextPageUrl?.value
  )

  /** Переход на страницу: нормализует номер и вызывает callback, если страница изменилась. */
  function goToPage(onPageChange: (targetPage: number) => void) {
    return (targetPage: number) => {
      const normalized = Math.max(1, Number(targetPage) || 1)
      if (normalized === page.value) return
      onPageChange(normalized)
    }
  }

  /** Переход на предыдущую страницу. */
  function goToPreviousPage(onPageChange: (targetPage: number) => void) {
    return () => {
      if (!hasPreviousPage.value) return
      onPageChange(page.value - 1)
    }
  }

  /** Переход на следующую страницу. */
  function goToNextPage(onPageChange: (targetPage: number) => void) {
    return () => {
      if (!hasNextPage.value) return
      onPageChange(page.value + 1)
    }
  }

  /** Обработчик смены размера страницы: нормализует pageSize и вызывает onApply (например, перезагрузка с страницы 1). */
  function handlePageSizeChange(options?: {
    defaultSize?: number
    onApply?: () => void
  }) {
    return () => {
      const defaultSize = options?.defaultSize ?? DEFAULT_PAGE_SIZE
      const numericLimit = Number(pageSize.value) || defaultSize
      if (numericLimit !== pageSize.value) {
        pageSize.value = numericLimit
      }
      options?.onApply?.()
    }
  }

  return {
    totalPages,
    rangeStart,
    rangeEnd,
    hasPreviousPage,
    hasNextPage,
    goToPage,
    goToPreviousPage,
    goToNextPage,
    handlePageSizeChange
  }
}
