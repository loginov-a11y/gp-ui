<template>
  <button
    type="button"
    role="menuitem"
    :disabled="disabled"
    :class="itemClass"
    @click="handleClick"
  >
    <span v-if="hasLeading" class="g-context-menu-item__leading">
      <slot name="leading" />
    </span>

    <span class="g-context-menu-item__label">
      <slot />
    </span>

    <span v-if="selected" class="g-context-menu-item__check" aria-hidden="true">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.355 5.036C13.611 4.772 14.033 4.765 14.297 5.021C14.562 5.278 14.568 5.7 14.312 5.964L7.2 13.298C7.075 13.427 6.902 13.5 6.722 13.5C6.542 13.5 6.369 13.427 6.243 13.298L2.688 9.631C2.432 9.367 2.438 8.945 2.702 8.688C2.967 8.432 3.389 8.438 3.645 8.702L6.722 11.876L13.355 5.036Z"
          fill="currentColor"
        />
      </svg>
    </span>
  </button>
</template>

<script setup lang="ts">import { normalizeClass, type GClassValue } from '~/utils/classNames'
import { computed, useSlots } from 'vue'

interface Props {
  selected?: boolean
  muted?: boolean
  hovered?: boolean
  disabled?: boolean
  class?: GClassValue
}

const props = withDefaults(defineProps<Props>(), {
  selected: false,
  muted: false,
  hovered: false,
  disabled: false,
  class: ''
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const slots = useSlots()
const hasLeading = computed(() => Boolean(slots.leading))

const itemClass = computed(() => {
  const classes = ['g-context-menu-item']

  if (props.selected) classes.push('_selected')
  if (props.hovered) classes.push('_hover')
  if (props.muted) classes.push('_muted')
  if (props.disabled) classes.push('_disabled')
  if (props.class) classes.push(...normalizeClass(props.class))

  return classes.join(' ')
})

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) emit('click', event)
}
</script>

<style scoped>
.g-context-menu-item {
  --g-overlay: transparent;
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  min-height: 36px;
  padding: 0 12px;
  border: none;
  border-radius: 12px;
  background: transparent;
  color: #0b0b0b;
  font-family: var(--font-family-base);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  text-align: left;
  cursor: pointer;
  transition:
    color 0.2s ease,
    background-color 0.2s ease;
}

.g-context-menu-item::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  background: rgb(11 11 11 / var(--g-overlay));
  transition: background-color 0.2s ease;
}

.g-context-menu-item > * {
  position: relative;
  z-index: 1;
}

.g-context-menu-item:hover:not(:disabled):not(._disabled),
.g-context-menu-item._hover:not(:disabled):not(._disabled) {
  --g-overlay: var(--g-button-overlay-hover);
}

.g-context-menu-item:active:not(:disabled):not(._disabled) {
  --g-overlay: var(--g-button-overlay-active);
}

.g-context-menu-item._selected {
  --g-overlay: var(--g-button-overlay-hover);
}

.g-context-menu-item._muted:not(._selected) {
  color: #7f7f7f;
}

.g-context-menu-item._disabled,
.g-context-menu-item:disabled {
  color: var(--g-button-fg-disabled);
  cursor: not-allowed;
}

.g-context-menu-item__leading {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
}

.g-context-menu-item__label {
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.g-context-menu-item__check {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: #0b0b0b;
}
</style>
