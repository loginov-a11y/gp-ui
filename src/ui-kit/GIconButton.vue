<template>
  <button
    :type="type"
    :disabled="disabled"
    :aria-label="ariaLabel"
    :class="buttonClass"
    @click="handleClick"
  >
    <span class="g-icon-button__icon">
      <slot>
        <GIcon v-if="icon" :name="icon" />
      </slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { normalizeClass, type GClassValue } from '~/utils/classNames'
import GIcon from '~/ui-kit/GIcon.vue'
import { computed } from 'vue'

/**
 * Кнопка-иконка. Цвета и оверлеи как у GButton, отличается форма:
 * xs — скруглённый квадрат, остальные размеры — круг.
 * В кабинет пока не подключать, живёт в UI Kit.
 */
export type GIconButtonSize = 'xs' | 'sm' | 'md' | 'lg'
export type GIconButtonVariant = 'primary' | 'secondary' | 'ghost' | 'dark' | 'gray' | 'white'

interface Props {
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  size?: GIconButtonSize
  variant?: GIconButtonVariant
  icon?: string
  ariaLabel?: string
  class?: GClassValue
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  disabled: false,
  size: 'md',
  variant: 'primary',
  class: ''
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

import { resolveGVariant } from '~/ui-kit/g-variants'

const resolvedVariant = computed(() => resolveGVariant(props.variant))

const buttonClass = computed(() => {
  const classes = [
    'g-icon-button',
    `g-icon-button--${props.size}`,
    `g-icon-button--${resolvedVariant.value}`
  ]

  if (props.disabled) classes.push('g-icon-button--disabled')
  if (props.class) classes.push(...normalizeClass(props.class))

  return classes.join(' ')
})

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) emit('click', event)
}
</script>

<style scoped>
.g-icon-button {
  --g-overlay: transparent;
  position: relative;
  isolation: isolate;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  border: none;
  color: var(--g-button-fg-on-light);
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  flex-shrink: 0;
  transition:
    color 0.2s ease,
    background-color 0.2s ease;
}

.g-icon-button::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  background: var(--g-overlay);
  transition: background-color 0.2s ease;
}

.g-icon-button > * {
  position: relative;
  z-index: 1;
}

.g-icon-button--xs {
  width: 24px;
  height: 24px;
  border-radius: 8px;
}

.g-icon-button--sm {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.g-icon-button--md {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.g-icon-button--lg {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.g-icon-button--xs :deep(svg) {
  width: 12px;
  height: 12px;
}

.g-icon-button--sm :deep(svg) {
  width: 14px;
  height: 14px;
}

.g-icon-button--md :deep(svg) {
  width: 16px;
  height: 16px;
}

.g-icon-button--lg :deep(svg) {
  width: 18px;
  height: 18px;
}

.g-icon-button--primary {
  background: var(--g-button-dark);
  color: var(--g-button-fg-on-dark);
}

.g-icon-button--primary:hover:not(:disabled) {
  --g-overlay: rgb(255 255 255 / var(--g-button-overlay-hover));
}

.g-icon-button--primary:active:not(:disabled) {
  --g-overlay: rgb(255 255 255 / var(--g-button-overlay-active));
}

.g-icon-button--secondary {
  background: var(--g-button-gray);
  color: var(--g-button-fg-on-light);
}

.g-icon-button--secondary:hover:not(:disabled) {
  --g-overlay: rgb(11 11 11 / var(--g-button-overlay-hover));
}

.g-icon-button--secondary:active:not(:disabled) {
  --g-overlay: rgb(11 11 11 / var(--g-button-overlay-active));
}

.g-icon-button--ghost {
  background: var(--g-button-white);
  color: var(--g-button-fg-on-light);
}

.g-icon-button--ghost:hover:not(:disabled) {
  --g-overlay: rgb(11 11 11 / var(--g-button-overlay-hover));
}

.g-icon-button--ghost:active:not(:disabled) {
  --g-overlay: rgb(11 11 11 / var(--g-button-overlay-active));
}

.g-icon-button:disabled,
.g-icon-button--disabled {
  cursor: not-allowed;
}

.g-icon-button--primary:disabled,
.g-icon-button--primary.g-icon-button--disabled {
  color: rgb(255 255 255 / 0.4);
  --g-overlay: rgb(255 255 255 / var(--g-button-overlay-active));
}

.g-icon-button--secondary:disabled,
.g-icon-button--secondary.g-icon-button--disabled,
.g-icon-button--ghost:disabled,
.g-icon-button--ghost.g-icon-button--disabled {
  color: var(--g-button-fg-disabled);
  --g-overlay: rgb(11 11 11 / var(--g-button-overlay-active));
}

.g-icon-button__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.g-icon-button__icon :deep(svg) {
  display: block;
  flex-shrink: 0;
  color: inherit;
}

.g-icon-button:focus-visible {
  outline: 2px solid rgb(255 255 255 / 0.45);
  outline-offset: 2px;
}

.g-icon-button--secondary:focus-visible,
.g-icon-button--ghost:focus-visible {
  outline-color: rgb(11 11 11 / 0.35);
}

@media (prefers-reduced-motion: reduce) {
  .g-icon-button,
  .g-icon-button::after {
    transition: none;
  }
}
</style>
