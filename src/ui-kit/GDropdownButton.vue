<template>
  <button
    :type="type"
    :disabled="disabled"
    :aria-expanded="open"
    :class="buttonClass"
    @click="handleClick"
  >
    <span v-if="hasLeading" class="g-dropdown-button__leading">
      <slot name="leading" />
    </span>

    <span v-if="$slots.default" class="g-dropdown-button__label">
      <slot />
    </span>

    <span class="g-dropdown-button__chevron" :class="{ _open: open }" aria-hidden="true">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.529 6.529C4.789 6.268 5.211 6.268 5.471 6.529L8 9.057L10.529 6.529C10.789 6.268 11.211 6.268 11.471 6.529C11.732 6.789 11.732 7.211 11.471 7.471L8.471 10.471C8.346 10.596 8.177 10.667 8 10.667C7.823 10.667 7.654 10.596 7.529 10.471L4.529 7.471C4.268 7.211 4.268 6.789 4.529 6.529Z"
          fill="currentColor"
        />
      </svg>
    </span>
  </button>
</template>

<script setup lang="ts">import { normalizeClass, type GClassValue } from '~/utils/classNames'
import { computed, useSlots } from 'vue'

/**
 * Dropdown button — pill-триггер с chevron (dropdown button.svg).
 * Состояния hover / active / open — через CSS и prop open.
 */
export type GDropdownButtonVariant = 'white' | 'gray'

interface Props {
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  open?: boolean
  variant?: GDropdownButtonVariant
  class?: GClassValue
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  disabled: false,
  open: false,
  variant: 'white',
  class: ''
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const slots = useSlots()
const hasLeading = computed(() => Boolean(slots.leading))

const buttonClass = computed(() => {
  const classes = [
    'g-dropdown-button',
    `g-dropdown-button--${props.variant}`
  ]

  if (props.open) classes.push('_open')
  if (props.disabled) classes.push('_disabled')
  if (props.class) classes.push(...normalizeClass(props.class))

  return classes.join(' ')
})

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) emit('click', event)
}
</script>

<style scoped>
.g-dropdown-button {
  --g-overlay: transparent;
  position: relative;
  isolation: isolate;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 36px;
  margin: 0;
  padding: 0 12px 0 16px;
  border: 1.5px solid transparent;
  border-radius: 18px;
  background: var(--g-button-white);
  color: var(--g-button-fg-on-light);
  font-family: var(--font-family-base);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease;
}

.g-dropdown-button::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  background: rgb(11 11 11 / var(--g-overlay));
  transition: background-color 0.2s ease;
}

.g-dropdown-button > * {
  position: relative;
  z-index: 1;
}

.g-dropdown-button--gray {
  background: var(--g-button-gray);
}

.g-dropdown-button:hover:not(:disabled):not(._disabled) {
  --g-overlay: var(--g-button-overlay-hover);
}

.g-dropdown-button:active:not(:disabled):not(._disabled) {
  --g-overlay: var(--g-button-overlay-active);
}

.g-dropdown-button._open {
  border-color: #d9d9d9;
}

.g-dropdown-button._disabled,
.g-dropdown-button:disabled {
  color: var(--g-button-fg-disabled);
  cursor: not-allowed;
}

.g-dropdown-button__leading,
.g-dropdown-button__label,
.g-dropdown-button__chevron {
  display: inline-flex;
  align-items: center;
}

.g-dropdown-button__leading :deep(svg) {
  display: block;
}

.g-dropdown-button__chevron {
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

.g-dropdown-button__chevron._open {
  transform: rotate(180deg);
}

.g-dropdown-button:not(:has(.g-dropdown-button__leading)) {
  padding-left: 12px;
}
</style>
