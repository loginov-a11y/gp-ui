<template>
  <div class="g-pagination">
    <div class="g-pagination__meta">
      <span class="g-pagination__range">
        {{ $t('common.showRange', { from: rangeFrom, to: rangeTo, total }) }}
      </span>

      <div ref="sizeRef" class="g-pagination__size">
        <GDropdownButton variant="gray" :open="sizeOpen" @click="sizeOpen = !sizeOpen">
          {{ limit }}
        </GDropdownButton>
        <GContextMenu v-if="sizeOpen" class="g-pagination__size-menu">
          <GContextMenuItem
            v-for="option in pageSizeOptions"
            :key="String(option.value)"
            :selected="Number(option.value) === limit"
            @click="onLimitChange(option.value)"
          >
            {{ option.label }}
          </GContextMenuItem>
        </GContextMenu>
      </div>
    </div>

    <div class="g-pagination__pages">
      <GIconButton
        v-if="currentPage > 1"
        variant="gray"
        size="md"
        :aria-label="$t('common.back')"
        @click="emit('page-change', currentPage - 1)"
      >
        <IconsChevronLeft :size="16" />
      </GIconButton>

      <button
        v-for="(item, index) in pageItems"
        :key="`${item}-${index}`"
        type="button"
        class="g-pagination__page"
        :class="{
          _active: item === currentPage,
          _ellipsis: item === 'ellipsis'
        }"
        :disabled="item === 'ellipsis'"
        @click="item !== 'ellipsis' && emit('page-change', item)"
      >
        {{ item === 'ellipsis' ? '…' : item }}
      </button>

      <GIconButton
        variant="gray"
        size="md"
        :disabled="totalPages === 0 || currentPage >= totalPages"
        :aria-label="$t('common.next')"
        @click="emit('page-change', currentPage + 1)"
      >
        <IconsChevronRight :size="16" />
      </GIconButton>
    </div>
  </div>
</template>

<script setup lang="ts">import { ref, computed } from 'vue'

import GContextMenu from '~/ui-kit/GContextMenu.vue'
import GContextMenuItem from '~/ui-kit/GContextMenuItem.vue'
import GDropdownButton from '~/ui-kit/GDropdownButton.vue'
import GIconButton from '~/ui-kit/GIconButton.vue'
import IconsChevronLeft from '~/components/icons/ChevronLeft.vue'
import IconsChevronRight from '~/components/icons/ChevronRight.vue'
import { useClickOutside } from '~/ui-kit/useClickOutside'

/** Набор из макета инвойсов / баланса — тот же, что принимает контур. */
const DEFAULT_PAGE_SIZES = [10, 25, 50, 100]

const props = defineProps<{
  count: number
  total: number
  currentPage: number
  limit: number
  sizes?: number[]
}>()

const emit = defineEmits<{
  'page-change': [page: number]
  'limit-change': [limit: number]
}>()

const pageSizeOptions = computed(() =>
  (props.sizes ?? DEFAULT_PAGE_SIZES).map((value) => ({ label: String(value), value }))
)

const sizeRef = ref<HTMLElement | null>(null)
const sizeOpen = ref(false)
useClickOutside(sizeRef, () => {
  sizeOpen.value = false
})

const totalPages = computed(() => {
  if (props.total === 0) return 0
  return Math.max(1, Math.ceil(props.total / props.limit))
})

const rangeFrom = computed(() => {
  if (props.total === 0 || props.count === 0) return 0
  return (props.currentPage - 1) * props.limit + 1
})

const rangeTo = computed(() => {
  if (props.total === 0 || props.count === 0) return 0
  return Math.min(props.currentPage * props.limit, props.total)
})

type PageItem = number | 'ellipsis'

/**
 * Номера вокруг текущей страницы + первая/последняя.
 * Клик по крайней видимой (3 при `1 2 3 … N`) добавляет соседнюю цифру (`4`),
 * а не только стрелка вправо.
 */
function buildPageItems(current: number, total: number): PageItem[] {
  if (total <= 0) return []
  if (total <= 7) return Array.from({ length: total }, (_, index) => index + 1)

  const pages = new Set<number>([1, total, current, current - 1, current + 1])
  if (current <= 2) {
    pages.add(2)
    pages.add(3)
  }
  if (current >= total - 1) {
    pages.add(total - 2)
    pages.add(total - 1)
  }

  const sorted = [...pages].filter((page) => page >= 1 && page <= total).sort((a, b) => a - b)
  const items: PageItem[] = []
  let prev = 0
  for (const page of sorted) {
    if (prev > 0 && page - prev > 1) items.push('ellipsis')
    items.push(page)
    prev = page
  }
  return items
}

const pageItems = computed<PageItem[]>(() => buildPageItems(props.currentPage, totalPages.value))

function onLimitChange(value: unknown) {
  sizeOpen.value = false
  const num = Number(value)
  if (Number.isFinite(num) && num !== props.limit) emit('limit-change', num)
}
</script>

<style scoped>
.g-pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
}

.g-pagination__meta {
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 0;
}

.g-pagination__range {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.28px;
  color: #7f7f7f;
  white-space: nowrap;
}

.g-pagination__size {
  position: relative;
}

.g-pagination__size-menu {
  position: absolute;
  left: 0;
  bottom: calc(100% + 8px);
  z-index: 3;
  min-width: 80px;
}

.g-pagination__pages {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
}

.g-pagination__page {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
  padding: 0 8px;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: #7f7f7f;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.48px;
  cursor: pointer;
}

.g-pagination__page:hover:not(:disabled):not(._ellipsis):not(._active) {
  background: #f7f7f7;
  color: #0b0b0b;
}

.g-pagination__page._active {
  background: #0b0b0b;
  color: #fff;
}

.g-pagination__page._ellipsis,
.g-pagination__page:disabled {
  color: #7f7f7f;
  cursor: default;
}

.g-pagination__pages :deep(.g-icon-button) {
  width: 36px;
  height: 36px;
}

@media screen and (max-width: 992px) {
  .g-pagination {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .g-pagination__meta,
  .g-pagination__pages {
    justify-content: center;
  }

  .g-pagination__pages {
    overflow-x: auto;
  }
}
</style>
