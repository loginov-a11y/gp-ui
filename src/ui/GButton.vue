<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="computedButtonClass"
    @click="handleClick"
  >
    <!-- Leading slot (иконка слева) -->
    <span v-if="$slots.leading || leadingIcon" class="g-button__leading">
      <slot name="leading">
        <GIcon v-if="leadingIcon" :name="leadingIcon" :class="leadingIconClass" />
      </slot>
    </span>

    <!-- Main content -->
    <span class="g-button__content">
      <slot />
    </span>

    <!-- Trailing slot (иконка справа) -->
    <span v-if="$slots.trailing || trailingIcon" class="g-button__trailing">
      <slot name="trailing">
        <GIcon v-if="trailingIcon" :name="trailingIcon" :class="trailingIconClass" />
      </slot>
    </span>

    <!-- Loading spinner -->
    <span v-if="loading" class="g-button__loading">
      <GIcon name="i-heroicons-arrow-path" class="animate-spin" />
    </span>

    <!-- Success checkmark -->
    <span v-if="success" class="g-button__success">
      <GIcon name="i-heroicons-check-circle" class="animate-bounce-in" />
    </span>
  </button>
</template>

<script setup lang="ts">
import { normalizeClass, type GClassValue } from '~/utils/classNames'
import GIcon from '~/ui-kit/GIcon.vue'
import { computed } from 'vue'

interface Props {
  // Основные пропсы
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  loading?: boolean
  success?: boolean

  // Размеры
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'

  // Варианты
  variant?: 'primary' | 'secondary' | 'ghost' | 'link' | 'danger' | 'success'

  // Форма
  shape?: 'default' | 'rounded' | 'pill'

  // Иконки
  leadingIcon?: string
  trailingIcon?: string

  // Дополнительные классы
  class?: GClassValue

  // Ширина
  block?: boolean

  // Анимации
  animated?: boolean
  hoverable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  disabled: false,
  loading: false,
  success: false,
  size: 'md',
  variant: 'primary',
  shape: 'default',
  class: '',
  block: false,
  animated: true,
  hoverable: true
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

// Вычисляемые классы
const computedButtonClass = computed(() => {
  const baseClasses = ['g-button']

  // Размер
  baseClasses.push(`g-button--${props.size}`)

  // Вариант
  baseClasses.push(`g-button--${props.variant}`)

  // Форма
  baseClasses.push(`g-button--${props.shape}`)

  // Состояния
  if (props.disabled) baseClasses.push('g-button--disabled')
  if (props.loading) baseClasses.push('g-button--loading')
  if (props.success) baseClasses.push('g-button--success')
  if (props.block) baseClasses.push('g-button--block')
  if (props.animated) baseClasses.push('g-button--animated')
  if (props.hoverable) baseClasses.push('g-button--hoverable')

  // Пользовательский класс
  if (props.class) baseClasses.push(...normalizeClass(props.class))

  return baseClasses.join(' ')
})

// Классы для иконок
const leadingIconClass = computed(() => {
  const baseClasses = ['g-button__icon', 'g-button__icon--leading']

  switch (props.size) {
    case 'xs':
      baseClasses.push('text-xs')
      break
    case 'sm':
      baseClasses.push('text-sm')
      break
    case 'md':
      baseClasses.push('text-base')
      break
    case 'lg':
      baseClasses.push('text-lg')
      break
    case 'xl':
      baseClasses.push('text-xl')
      break
  }

  return baseClasses.join(' ')
})

const trailingIconClass = computed(() => {
  const baseClasses = ['g-button__icon', 'g-button__icon--trailing']

  switch (props.size) {
    case 'xs':
      baseClasses.push('text-xs')
      break
    case 'sm':
      baseClasses.push('text-sm')
      break
    case 'md':
      baseClasses.push('text-base')
      break
    case 'lg':
      baseClasses.push('text-lg')
      break
    case 'xl':
      baseClasses.push('text-xl')
      break
  }

  return baseClasses.join(' ')
})

// Обработчик клика
const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<style scoped>
/* ===== БАЗОВЫЕ СТИЛИ КНОПКИ ===== */
.g-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: var(--font-family-base);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
}

/* ===== РАЗМЕРЫ КНОПОК ===== */
.g-button--xs {
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
  min-height: 1.75rem;
  border-radius: 0.375rem;
}

.g-button--sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  min-height: 2rem;
  border-radius: 0.5rem;
}

.g-button--md {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  min-height: 2.5rem;
  border-radius: 0.75rem;
}

.g-button--lg {
  padding: 1rem 2rem;
  font-size: 1.125rem;
  min-height: 3rem;
  border-radius: 1rem;
}

.g-button--xl {
  padding: 1.25rem 2.5rem;
  font-size: 1.25rem;
  min-height: 3.5rem;
  border-radius: 1.25rem;
}

/* ===== ФОРМЫ КНОПОК ===== */
.g-button--rounded {
  border-radius: 1rem;
}

.g-button--pill {
  border-radius: 9999px;
}

/* ===== ВАРИАНТЫ КНОПОК ===== */

/* Primary - основной вариант */
.g-button--primary {
  background: linear-gradient(90deg, #10b981 0%, #06b6d4 100%);
  color: white;
  border: none;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.1),
    0 1px 2px rgba(0, 0, 0, 0.06);
  font-weight: 600;
  letter-spacing: 0.025em;
}

.g-button--primary:hover:not(.g-button--disabled) {
  background: linear-gradient(90deg, #059669 0%, #0891b2 100%);
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 2px 4px rgba(0, 0, 0, 0.06);
  transform: translateY(-1px);
}

/* Secondary - вторичный вариант */
.g-button--secondary {
  background: rgba(255, 255, 255, 0.8);
  color: rgba(1, 175, 157, 1);
  border: 1px solid rgba(1, 175, 157, 0.3);
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
}

.g-button--secondary:hover:not(.g-button--disabled) {
  background: rgba(0, 255, 229, 0.1);
  border-color: rgba(1, 175, 157, 0.5);
  box-shadow:
    0 4px 12px rgba(1, 175, 157, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  transform: translateY(-1px) scale(1.01);
}

/* Ghost - прозрачный вариант */
.g-button--ghost {
  background: transparent;
  color: rgba(1, 175, 157, 1);
  border: 1px solid transparent;
}

.g-button--ghost:hover:not(.g-button--disabled) {
  background: rgba(1, 175, 157, 0.1);
  border-color: rgba(1, 175, 157, 0.2);
  transform: translateY(-1px);
}

/* Link - ссылочный вариант */
.g-button--link {
  background: transparent;
  color: rgba(1, 175, 157, 1);
  border: none;
  padding: 0.25rem 0.5rem;
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.g-button--link:hover:not(.g-button--disabled) {
  color: rgba(1, 175, 157, 0.8);
  text-decoration-color: rgba(1, 175, 157, 0.8);
  transform: translateY(-1px);
}

/* Danger - опасный вариант */
.g-button--danger {
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.9) 0%, rgba(220, 38, 38, 0.9) 100%);
  color: white;
  border: 1px solid rgba(239, 68, 68, 0.3);
  box-shadow:
    0 4px 15px rgba(239, 68, 68, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.g-button--danger:hover:not(.g-button--disabled) {
  background: linear-gradient(135deg, rgba(239, 68, 68, 1) 0%, rgba(220, 38, 38, 1) 100%);
  box-shadow:
    0 8px 25px rgba(239, 68, 68, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  transform: translateY(-2px) scale(1.02);
}

/* Success - успешный вариант */
.g-button--success {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.9) 0%, rgba(22, 163, 74, 0.9) 100%);
  color: white;
  border: 1px solid rgba(34, 197, 94, 0.3);
  box-shadow:
    0 4px 15px rgba(34, 197, 94, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.g-button--success:hover:not(.g-button--disabled) {
  background: linear-gradient(135deg, rgba(34, 197, 94, 1) 0%, rgba(22, 163, 74, 1) 100%);
  box-shadow:
    0 8px 25px rgba(34, 197, 94, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  transform: translateY(-2px) scale(1.02);
}

/* ===== СОСТОЯНИЯ КНОПОК ===== */

/* Disabled */
.g-button--disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background: linear-gradient(90deg, #0b1220 0%, #111827 100%) !important;
  box-shadow: none !important;
  transform: none !important;
}

/* Loading */
.g-button--loading {
  cursor: wait;
}

.g-button--loading .g-button__content {
  opacity: 0.7;
}

/* Success */
.g-button--success {
  cursor: default;
}

/* Block */
.g-button--block {
  width: 100%;
}

/* ===== АНИМАЦИИ ===== */
/* Shimmer эффект удален для более чистого дизайна */

/* ===== ЭЛЕМЕНТЫ КНОПКИ ===== */

.g-button__leading,
.g-button__trailing,
.g-button__loading,
.g-button__success {
  display: flex;
  align-items: center;
  justify-content: center;
}

.g-button__content {
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
}

.g-button__loading,
.g-button__success {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* ===== HOVER ЭФФЕКТЫ ===== */
.g-button--hoverable:hover:not(.g-button--disabled) {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.g-button--hoverable:active:not(.g-button--disabled) {
  transform: translateY(0) scale(0.98);
}

/* ===== АДАПТИВНОСТЬ ===== */
@media screen and (max-width: 640px) {
  .g-button--lg {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
    min-height: 2.75rem;
  }

  .g-button--xl {
    padding: 1rem 2rem;
    font-size: 1.125rem;
    min-height: 3rem;
  }
}

/* ===== ACCESSIBILITY ===== */
.g-button:focus-visible {
  outline: 2px solid rgba(16, 185, 129, 0.6);
  outline-offset: 2px;
}

.g-button--danger:focus-visible {
  outline-color: rgba(239, 68, 68, 0.6);
}

.g-button--success:focus-visible {
  outline-color: rgba(34, 197, 94, 0.6);
}

/* Уменьшение движения */
@media (prefers-reduced-motion: reduce) {
  .g-button,
  .g-button--primary::before {
    transition: none !important;
    animation: none !important;
  }

  .g-button:hover:not(.g-button--disabled) {
    transform: none !important;
  }
}
</style>
