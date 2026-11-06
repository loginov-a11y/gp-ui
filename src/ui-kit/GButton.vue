<template>
  <button
    :type="type"
    :disabled="isDisabled"
    :aria-busy="loading || undefined"
    :class="buttonClass"
    :style="fontStyle"
    @click="handleClick"
  >
    <span v-if="hasLeading" class="g-button__leading">
      <slot name="leading">
        <slot name="left">
          <GIcon v-if="leadingIcon" :name="leadingIcon" class="g-button__icon" />
        </slot>
      </slot>
    </span>

    <span v-if="$slots.default" class="g-button__content">
      <slot />
    </span>

    <span v-if="hasTrailing" class="g-button__trailing">
      <slot name="trailing">
        <slot name="right">
          <GIcon v-if="trailingIcon" :name="trailingIcon" class="g-button__icon" />
        </slot>
      </slot>
    </span>

    <span v-if="loading" class="g-button__status" aria-hidden="true">
      <GIcon name="i-heroicons-arrow-path" class="g-button__icon animate-spin" />
    </span>

    <span v-else-if="success" class="g-button__status" aria-hidden="true">
      <GIcon name="i-heroicons-check-circle" class="g-button__icon" />
    </span>
  </button>
</template>

<script setup lang="ts">
import { normalizeClass, type GClassValue } from '~/utils/classNames'
import GIcon from '~/ui-kit/GIcon.vue'
import { computed, useSlots } from 'vue'

/**
 * Кнопка кабинета. Размеры, цвета и оверлеи состояний сняты с Button.svg.
 * Hover / active / disabled — CSS, отдельные «кадры» состояний не рисуются.
 */
export type GButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type GButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'link'
  | 'danger'
  | 'success'
  | 'dark'
  | 'gray'
  | 'white'

interface Props {
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  loading?: boolean
  success?: boolean
  size?: GButtonSize
  variant?: GButtonVariant
  shape?: 'default' | 'rounded' | 'pill'
  leadingIcon?: string
  trailingIcon?: string
  class?: GClassValue
  block?: boolean
  animated?: boolean
  hoverable?: boolean
  /** Переопределяет кегль размера. Число — пиксели. */
  fontSize?: string | number
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  disabled: false,
  loading: false,
  success: false,
  size: 'md',
  variant: 'primary',
  shape: 'pill',
  class: '',
  block: false,
  animated: true,
  hoverable: true
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

import { resolveGVariant } from '~/ui-kit/g-variants'

const slots = useSlots()

const resolvedVariant = computed(() => resolveGVariant(props.variant))

const isDisabled = computed(() => props.disabled || props.loading)

const hasLeading = computed(
  () => Boolean(slots.leading || slots.left || props.leadingIcon)
)

const hasTrailing = computed(
  () => Boolean(slots.trailing || slots.right || props.trailingIcon)
)

const buttonClass = computed(() => {
  const classes = [
    'g-button',
    `g-button--${props.size}`,
    `g-button--${resolvedVariant.value}`,
    `g-button--${props.shape === 'default' ? 'pill' : props.shape}`
  ]

  if (isDisabled.value) classes.push('g-button--disabled')
  if (props.loading) classes.push('g-button--loading')
  if (props.success) classes.push('g-button--is-success')
  if (props.block) classes.push('g-button--block')
  if (props.class) classes.push(...normalizeClass(props.class))

  return classes.join(' ')
})

const fontStyle = computed(() => {
  if (props.fontSize === undefined || props.fontSize === '') return undefined
  const value = typeof props.fontSize === 'number' ? `${props.fontSize}px` : props.fontSize
  return { fontSize: value }
})

const handleClick = (event: MouseEvent) => {
  if (!isDisabled.value) emit('click', event)
}
</script>

<style scoped>
.g-button {
  --g-overlay: transparent;
  position: relative;
  isolation: isolate;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  border: none;
  border-radius: 9999px;
  font-family: var(--font-family-base);
  font-weight: var(--font-weight-medium);
  line-height: 1;
  letter-spacing: 0;
  white-space: nowrap;
  text-decoration: none;
  color: var(--g-button-fg-on-light, #0b0b0b);
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  flex-shrink: 0;
  transition:
    color 0.2s ease,
    background-color 0.2s ease;
}

.g-button::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  background: var(--g-overlay);
  transition: background-color 0.2s ease;
}

.g-button > * {
  position: relative;
  z-index: 1;
}

.g-button--xs {
  height: 20px;
  min-height: 20px;
  padding: 0 8px;
  gap: 4px;
  font-size: 11px;
}

.g-button--sm {
  height: 24px;
  min-height: 24px;
  padding: 0 12px;
  gap: 4px;
  font-size: 12px;
}

.g-button--md {
  height: 36px;
  min-height: 36px;
  padding: 0 16px;
  gap: 6px;
  font-size: 14px;
}

.g-button--lg {
  height: 48px;
  min-height: 48px;
  padding: 0 20px;
  gap: 8px;
  font-size: 16px;
}

.g-button--xl {
  height: 56px;
  min-height: 56px;
  padding: 0 24px;
  gap: 8px;
  font-size: 18px;
}

.g-button--xs .g-button__icon,
.g-button--xs .g-button__leading :deep(svg),
.g-button--xs .g-button__trailing :deep(svg) {
  width: 10px;
  height: 10px;
}

.g-button--sm .g-button__icon,
.g-button--sm .g-button__leading :deep(svg),
.g-button--sm .g-button__trailing :deep(svg) {
  width: 12px;
  height: 12px;
}

.g-button--md .g-button__icon,
.g-button--md .g-button__leading :deep(svg),
.g-button--md .g-button__trailing :deep(svg) {
  width: 14px;
  height: 14px;
}

.g-button--lg .g-button__icon,
.g-button--lg .g-button__leading :deep(svg),
.g-button--lg .g-button__trailing :deep(svg) {
  width: 18px;
  height: 18px;
}

.g-button--xl .g-button__icon,
.g-button--xl .g-button__leading :deep(svg),
.g-button--xl .g-button__trailing :deep(svg) {
  width: 20px;
  height: 20px;
}

.g-button--rounded {
  border-radius: 12px;
}

.g-button--pill {
  border-radius: 9999px;
}

/* primary / dark — #0B0B0B, текст белый; hover white 5%, active white 10% */
.g-button--primary {
  background: var(--g-button-dark, #0b0b0b);
  color: var(--g-button-fg-on-dark, #fff);
}

.g-button--primary:hover:not(:disabled) {
  --g-overlay: rgb(255 255 255 / var(--g-button-overlay-hover));
}

.g-button--primary:active:not(:disabled) {
  --g-overlay: rgb(255 255 255 / var(--g-button-overlay-active));
}

/* secondary / gray — #F7F7F7, текст #0B0B0B */
.g-button--secondary {
  background: var(--g-button-gray, #f7f7f7);
  color: var(--g-button-fg-on-light, #0b0b0b);
}

.g-button--secondary:hover:not(:disabled) {
  --g-overlay: rgb(11 11 11 / var(--g-button-overlay-hover));
}

.g-button--secondary:active:not(:disabled) {
  --g-overlay: rgb(11 11 11 / var(--g-button-overlay-active));
}

/* ghost / white — белая заливка */
.g-button--ghost {
  background: var(--g-button-white, #fff);
  color: var(--g-button-fg-on-light, #0b0b0b);
}

.g-button--ghost:hover:not(:disabled) {
  --g-overlay: rgb(11 11 11 / var(--g-button-overlay-hover));
}

.g-button--ghost:active:not(:disabled) {
  --g-overlay: rgb(11 11 11 / var(--g-button-overlay-active));
}

.g-button--link {
  height: auto;
  min-height: 0;
  padding: 0.25rem 0.5rem;
  background: transparent;
  color: var(--color-primary);
  border-radius: 0;
  text-decoration: underline;
  text-decoration-color: transparent;
}

.g-button--link:hover:not(:disabled) {
  text-decoration-color: currentColor;
}

.g-button--danger {
  background: #ef4444;
  color: #fff;
}

.g-button--danger:hover:not(:disabled) {
  --g-overlay: rgb(0 0 0 / var(--g-button-overlay-hover));
}

.g-button--danger:active:not(:disabled) {
  --g-overlay: rgb(0 0 0 / var(--g-button-overlay-active));
}

.g-button--success {
  background: #10b981;
  color: #fff;
}

.g-button--success:hover:not(:disabled) {
  --g-overlay: rgb(0 0 0 / var(--g-button-overlay-hover));
}

.g-button--success:active:not(:disabled) {
  --g-overlay: rgb(0 0 0 / var(--g-button-overlay-active));
}

.g-button:disabled,
.g-button--disabled {
  cursor: not-allowed;
}

.g-button--primary:disabled,
.g-button--primary.g-button--disabled {
  color: rgb(255 255 255 / 0.4);
  --g-overlay: rgb(255 255 255 / var(--g-button-overlay-active, 0.1));
}

.g-button--secondary:disabled,
.g-button--secondary.g-button--disabled,
.g-button--ghost:disabled,
.g-button--ghost.g-button--disabled {
  color: var(--g-button-fg-disabled, #7f7f7f);
  --g-overlay: rgb(11 11 11 / var(--g-button-overlay-active, 0.1));
}

.g-button--danger:disabled,
.g-button--success:disabled,
.g-button--link:disabled {
  color: var(--g-button-fg-disabled);
  --g-overlay: rgb(11 11 11 / var(--g-button-overlay-active));
}

.g-button--loading .g-button__content,
.g-button--loading .g-button__leading,
.g-button--loading .g-button__trailing,
.g-button--is-success .g-button__content,
.g-button--is-success .g-button__leading,
.g-button--is-success .g-button__trailing {
  opacity: 0;
}

.g-button--block {
  width: 100%;
}

.g-button--block .g-button__content {
  flex: 1;
}

.g-button__leading,
.g-button__trailing,
.g-button__content,
.g-button__status {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.g-button__icon {
  display: block;
  flex-shrink: 0;
}

.g-button__leading :deep(svg),
.g-button__trailing :deep(svg) {
  display: block;
  flex-shrink: 0;
  color: inherit;
}

.g-button__status {
  position: absolute;
  inset: 0;
}

.g-button:focus-visible {
  outline: 2px solid rgb(255 255 255 / 0.45);
  outline-offset: 2px;
}

.g-button--secondary:focus-visible,
.g-button--ghost:focus-visible,
.g-button--link:focus-visible {
  outline-color: rgb(11 11 11 / 0.35);
}

.g-button--danger:focus-visible {
  outline-color: rgb(239 68 68 / 0.6);
}

.g-button--success:focus-visible {
  outline-color: rgb(16 185 129 / 0.6);
}

@media (prefers-reduced-motion: reduce) {
  .g-button,
  .g-button::after {
    transition: none;
  }
}
</style>
