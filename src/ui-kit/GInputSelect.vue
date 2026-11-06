<template>
  <div
    ref="rootRef"
    class="g-input-select"
    :class="{ _sheet: sheet }"
    @mousedown="onRootMouseDown"
    @click="onSheetClick"
  >
    <GInput
      ref="inputRef"
      :model-value="displayValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="sheet"
      :error="error"
      :message="message"
      :variant="variant"
      @update:model-value="onQueryChange"
      @focus="open"
      @blur="onBlur"
      @keydown="onKeydown"
    >
      <template v-if="hasLeading" #leading>
        <slot name="leading" />
      </template>

      <template #trailing>
        <button
          type="button"
          class="g-input-select__chevron"
          :class="{ _open: isOpen || sheetOpen }"
          :disabled="disabled"
          :aria-expanded="isOpen || sheetOpen"
          :aria-label="resolvedToggleLabel"
          @mousedown.prevent
          @click="toggle"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path
              d="M4.529 6.529C4.789 6.268 5.211 6.268 5.471 6.529L8 9.057L10.529 6.529C10.789 6.268 11.211 6.268 11.471 6.529C11.732 6.789 11.732 7.211 11.471 7.471L8.471 10.471C8.346 10.596 8.177 10.667 8 10.667C7.823 10.667 7.654 10.596 7.529 10.471L4.529 7.471C4.268 7.211 4.268 6.789 4.529 6.529Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </template>

      <template v-if="!sheet" #dropdown>
        <GContextMenu v-if="isOpen" class="g-input-select__menu">
          <GContextMenuItem
            v-for="(item, index) in filteredItems"
            :key="item.value"
            :selected="item.value === modelValue"
            :muted="item.value !== modelValue"
            :class="{ _active: index === activeIndex }"
            @mousedown.prevent
            @click="selectItem(item)"
          >
            <template v-if="$slots.itemLeading" #leading>
              <slot name="itemLeading" :item="item" />
            </template>
            <slot name="item" :item="item">{{ item.label }}</slot>
          </GContextMenuItem>

          <p v-if="filteredItems.length === 0" class="g-input-select__empty">
            {{ resolvedEmptyLabel }}
          </p>
        </GContextMenu>
      </template>
    </GInput>

    <GPickerSheet v-if="sheet" :open="sheetOpen" @close="closeSheet" @save="saveSheet">
      <div class="g-input-select__sheet-list">
        <GContextMenuItem
          v-for="item in items"
          :key="item.value"
          :selected="item.value === draftValue"
          :muted="item.value !== draftValue"
          @click="draftValue = item.value"
        >
          <template v-if="$slots.itemLeading" #leading>
            <slot name="itemLeading" :item="item" />
          </template>
          <slot name="item" :item="item">{{ item.label }}</slot>
        </GContextMenuItem>
      </div>
    </GPickerSheet>
  </div>
</template>

<script setup lang="ts">import { ref, computed, useSlots } from 'vue'
import { useI18n } from 'vue-i18n'

import GContextMenu from '~/ui-kit/GContextMenu.vue'
import GContextMenuItem from '~/ui-kit/GContextMenuItem.vue'
import GInput from '~/ui-kit/GInput.vue'
import GPickerSheet from '~/ui-kit/GPickerSheet.vue'
import { useClickOutside } from '~/ui-kit/useClickOutside'
import type { GInputVariant } from '~/ui-kit/GInput.vue'

export interface GInputSelectItem {
  label: string
  value: string
}

interface Props {
  modelValue?: string | null
  items: GInputSelectItem[]
  placeholder?: string
  disabled?: boolean
  error?: boolean
  message?: string
  variant?: GInputVariant
  toggleLabel?: string
  emptyLabel?: string
  /** Открывать список во вложенном шите (мобильные фильтры). */
  sheet?: boolean
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  error: false,
  message: '',
  variant: 'gray',
  toggleLabel: undefined,
  emptyLabel: undefined,
  sheet: false,
  class: ''
})

const { t } = useI18n()
const resolvedToggleLabel = computed(() => props.toggleLabel ?? t('common.openList'))
const resolvedEmptyLabel = computed(() => props.emptyLabel ?? t('common.nothingFound'))

const emit = defineEmits<{
  'update:modelValue': [value: string | undefined]
  open: []
  close: []
  select: [item: GInputSelectItem]
}>()

const slots = useSlots()
const rootRef = ref<HTMLElement | null>(null)
const inputRef = ref<InstanceType<typeof GInput> | null>(null)
const isOpen = ref(false)
const sheetOpen = ref(false)
const query = ref('')
const isSearching = ref(false)
const activeIndex = ref(-1)
const draftValue = ref<string | undefined>()

const hasLeading = computed(() => Boolean(slots.leading))

const selectedItem = computed(
  () => props.items.find((item) => item.value === props.modelValue) ?? null
)

const filteredItems = computed(() => {
  if (!isSearching.value) return props.items

  const normalized = query.value.trim().toLowerCase()
  if (!normalized) return props.items

  return props.items.filter((item) => item.label.toLowerCase().includes(normalized))
})

const displayValue = computed(() => {
  if (isOpen.value && isSearching.value) return query.value
  return selectedItem.value?.label ?? ''
})

const highlightSelected = () => {
  activeIndex.value = props.items.findIndex((item) => item.value === props.modelValue)
}

const startSearch = (value: string) => {
  isSearching.value = true
  query.value = value
  if (!isOpen.value) {
    isOpen.value = true
    emit('open')
  }
  activeIndex.value = filteredItems.value.length > 0 ? 0 : -1
}

const isPrintableKey = (event: KeyboardEvent) =>
  event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey

const open = () => {
  if (props.disabled) return
  if (props.sheet) {
    if (sheetOpen.value) return
    draftValue.value = props.modelValue ?? props.items[0]?.value
    sheetOpen.value = true
    emit('open')
    return
  }
  if (isOpen.value) return
  query.value = ''
  isSearching.value = false
  isOpen.value = true
  highlightSelected()
  emit('open')
  window.setTimeout(() => inputRef.value?.select(), 0)
}

const onRootMouseDown = (event: MouseEvent) => {
  if (!props.sheet || props.disabled) return
  event.preventDefault()
}

const onSheetClick = () => {
  if (!props.sheet || props.disabled || sheetOpen.value) return
  open()
}

const closeSheet = () => {
  if (!sheetOpen.value) return
  sheetOpen.value = false
  emit('close')
}

const saveSheet = () => {
  const item = props.items.find((entry) => entry.value === draftValue.value)
  if (item) selectItem(item)
  else closeSheet()
}

const close = () => {
  if (!isOpen.value) return
  isOpen.value = false
  query.value = ''
  isSearching.value = false
  activeIndex.value = -1
  emit('close')
}

const toggle = () => {
  if (props.disabled || props.sheet) return
  if (isOpen.value) close()
  else {
    inputRef.value?.focus()
    open()
  }
}

const onQueryChange = (value: string) => {
  const selectedLabel = selectedItem.value?.label ?? ''
  if (!isSearching.value && selectedLabel && value.startsWith(selectedLabel)) {
    startSearch(value.slice(selectedLabel.length))
    return
  }
  startSearch(value)
}

const onBlur = () => {
  window.setTimeout(() => {
    if (!rootRef.value?.contains(document.activeElement)) {
      close()
    }
  }, 0)
}

const selectItem = (item: GInputSelectItem) => {
  emit('update:modelValue', item.value)
  emit('select', item)
  if (props.sheet) closeSheet()
  else close()
}

const onKeydown = (event: KeyboardEvent) => {
  if (!isOpen.value && ['ArrowDown', 'ArrowUp', 'Enter'].includes(event.key)) {
    open()
    event.preventDefault()
    return
  }

  if (!isOpen.value) return

  if (event.key === 'Escape') {
    event.preventDefault()
    close()
    return
  }

  if (event.key === 'ArrowDown') {
    event.preventDefault()
    if (filteredItems.value.length === 0) return
    activeIndex.value = (activeIndex.value + 1) % filteredItems.value.length
    return
  }

  if (event.key === 'ArrowUp') {
    event.preventDefault()
    if (filteredItems.value.length === 0) return
    activeIndex.value =
      activeIndex.value <= 0 ? filteredItems.value.length - 1 : activeIndex.value - 1
    return
  }

  if (event.key === 'Enter') {
    event.preventDefault()
    const item = filteredItems.value[activeIndex.value]
    if (item) selectItem(item)
    return
  }

  if (!isSearching.value && isPrintableKey(event)) {
    event.preventDefault()
    startSearch(event.key)
    return
  }

  if (!isSearching.value && (event.key === 'Backspace' || event.key === 'Delete')) {
    event.preventDefault()
    startSearch('')
  }
}

useClickOutside(rootRef, () => {
  if (isOpen.value) close()
})
</script>

<style scoped>
.g-input-select {
  width: 100%;
}

.g-input-select__chevron {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  color: var(--g-button-fg-on-light);
  cursor: pointer;
  transition:
    transform 0.2s ease,
    color 0.2s ease;
}

.g-input-select__chevron._open {
  transform: rotate(180deg);
}

.g-input-select__chevron:disabled {
  color: var(--g-button-fg-disabled);
  cursor: not-allowed;
}

.g-input-select__menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  z-index: 3;
  max-height: 240px;
  overflow: auto;
}

.g-input-select__empty {
  margin: 0;
  padding: 10px 12px;
  font-size: 13px;
  line-height: 1.4;
  color: var(--g-button-fg-disabled);
}

.g-input-select__sheet-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 16px;
  border-bottom: 1px solid #d9d9d9;
}

.g-input-select._sheet {
  cursor: pointer;
}

.g-input-select._sheet :deep(.g-input__control) {
  pointer-events: none;
  caret-color: transparent;
}

:deep(.g-context-menu-item._active) {
  --g-overlay: var(--g-button-overlay-hover);
}
</style>
