<template>
  <button
    :type="type"
    :disabled="disabled"
    :aria-pressed="selected || undefined"
    :class="buttonClass"
    @click="handleClick"
  >
    <span v-if="hasLeading" class="g-menu-button__leading">
      <slot name="leading" />
    </span>

    <span v-if="$slots.default" class="g-menu-button__label">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">import { normalizeClass, type GClassValue } from '~/utils/classNames'
import { computed, useSlots } from 'vue'

/**
 * Menu button — пункт бокового меню (Menu button (1).svg).
 * Покой: #7F7F7F без фона. Наведение / нажатие: #0B0B0B без заливки,
 * только оверлей 5% / 10%. Выбранный: #FFFFFF на #0B0B0B.
 */
export type GMenuButtonSize = 'sm' | 'md'

interface Props {
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  selected?: boolean
  hovered?: boolean
  pressed?: boolean
  size?: GMenuButtonSize
  class?: GClassValue
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  disabled: false,
  selected: false,
  hovered: false,
  pressed: false,
  size: 'sm',
  class: ''
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const slots = useSlots()
const hasLeading = computed(() => Boolean(slots.leading))

const buttonClass = computed(() => {
  const classes = ['g-menu-button', `g-menu-button--${props.size}`]

  if (props.selected) classes.push('_selected')
  if (props.hovered) classes.push('_hover')
  if (props.pressed) classes.push('_active')
  if (props.disabled) classes.push('_disabled')
  if (props.class) classes.push(...normalizeClass(props.class))

  return classes.join(' ')
})

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) emit('click', event)
}
</script>

<style scoped>
.g-menu-button {
  --g-overlay: 0;
  --g-overlay-rgb: 11 11 11;
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  width: 100%;
  margin: 0;
  padding: 0 16px 0 12px;
  border: none;
  background: transparent;
  color: #7f7f7f;
  font-family: var(--font-family-base);
  font-weight: 500;
  line-height: 1.2;
  text-align: left;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  transition:
    color 0.2s ease,
    background-color 0.2s ease;
}

.g-menu-button::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  background: rgb(var(--g-overlay-rgb) / var(--g-overlay));
  transition: background-color 0.2s ease;
}

.g-menu-button > * {
  position: relative;
  z-index: 1;
}

.g-menu-button--sm {
  height: 36px;
  border-radius: 12px;
  font-size: 14px;
}

.g-menu-button--md {
  height: 48px;
  border-radius: 12px;
  font-size: 16px;
}

.g-menu-button--sm .g-menu-button__leading :deep(svg) {
  width: 16px;
  height: 16px;
}

.g-menu-button--md .g-menu-button__leading :deep(svg) {
  width: 18px;
  height: 18px;
}

.g-menu-button:hover:not(:disabled):not(._disabled):not(._selected),
.g-menu-button._hover:not(:disabled):not(._disabled):not(._selected) {
  color: #0b0b0b;
  --g-overlay: var(--g-button-overlay-hover);
}

.g-menu-button:active:not(:disabled):not(._disabled):not(._selected),
.g-menu-button._active:not(:disabled):not(._disabled):not(._selected) {
  color: #0b0b0b;
  --g-overlay: var(--g-button-overlay-active);
}

.g-menu-button._selected {
  --g-overlay-rgb: 255 255 255;
  background: #0b0b0b;
  color: #fff;
}

.g-menu-button._selected:hover:not(:disabled):not(._disabled),
.g-menu-button._selected._hover:not(:disabled):not(._disabled) {
  --g-overlay: var(--g-button-overlay-hover);
}

.g-menu-button._selected:active:not(:disabled):not(._disabled),
.g-menu-button._selected._active:not(:disabled):not(._disabled) {
  --g-overlay: var(--g-button-overlay-active);
}

.g-menu-button._disabled,
.g-menu-button:disabled {
  color: #7f7f7f;
  cursor: not-allowed;
}

.g-menu-button__leading,
.g-menu-button__label {
  display: inline-flex;
  align-items: center;
}

.g-menu-button__leading {
  flex-shrink: 0;
}

.g-menu-button__leading :deep(svg) {
  display: block;
  color: inherit;
}
</style>
