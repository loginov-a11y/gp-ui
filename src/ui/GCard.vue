<template>
  <div :class="computedCardClass">
    <!-- Заголовок карточки -->
    <template v-if="$slots.header">
      <slot name="header" />
    </template>
    <template v-else-if="title || icon">
      <div class="flex items-center space-x-3">
        <div v-if="icon" class="icon-container">
          <GIcon :name="icon" :class="computedIconClass" />
        </div>
        <div class="header-content">
          <h3 v-if="title" :class="titleClass">{{ title }}</h3>
          <p v-if="description" :class="descriptionClass">{{ description }}</p>
        </div>
      </div>
    </template>

    <!-- Основной контент -->
    <div :class="contentClass">
      <slot />
    </div>

    <!-- Подвал карточки -->
    <template v-if="$slots.footer">
      <div :class="footerClass">
        <slot name="footer" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import GIcon from '~/ui-kit/GIcon.vue'
import { computed } from 'vue'

interface Props {
  title?: string
  description?: string
  icon?: string
  iconClass?: string
  cardClass?: string
  size?: 'sm' | 'md' | 'lg'
  animated?: boolean
  hoverable?: boolean
  bordered?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  iconClass: '',
  cardClass: '',
  size: 'md',
  animated: true,
  hoverable: true,
  bordered: true
})

// Вычисляемые классы
const computedCardClass = computed(() => {
  const baseClasses = ['g-card']

  // Добавляем класс размера
  baseClasses.push(`g-card--${props.size}`)

  // Добавляем анимацию
  if (props.animated) {
    baseClasses.push('g-card--animated')
  }

  // Добавляем hover эффект
  if (props.hoverable) {
    baseClasses.push('g-card--hoverable')
  }

  // Добавляем пользовательский класс
  if (props.cardClass) {
    baseClasses.push(props.cardClass)
  }

  if (props.bordered) {
    baseClasses.push('g-card--bordered')
  }

  return baseClasses.join(' ')
})

const computedIconClass = computed(() => {
  if (props.iconClass) {
    return props.iconClass
  }

  // Дефолтные стили иконки
  return 'g-card__icon text-2xl text-gray-600'
})

const titleClass = computed(() => {
  return 'g-card__title text-lg font-semibold text-gray-800'
})

const descriptionClass = computed(() => {
  return 'g-card__description text-sm text-gray-500'
})

const contentClass = computed(() => {
  const baseClasses = ['g-card__content']

  switch (props.size) {
    case 'sm':
      baseClasses.push('p-4')
      break
    case 'lg':
      baseClasses.push('p-8')
      break
    default:
      baseClasses.push('p-6')
  }

  return baseClasses.join(' ')
})

const footerClass = computed(() => {
  const baseClasses = ['g-card__footer']

  switch (props.size) {
    case 'sm':
      baseClasses.push('px-4 py-3')
      break
    case 'lg':
      baseClasses.push('px-8 py-6')
      break
    default:
      baseClasses.push('px-6 py-4')
  }

  return baseClasses.join(' ')
})
</script>

<style scoped lang="scss">
/* ===== SCSS ПЕРЕМЕННЫЕ ===== */
$glass-bg: rgba(255, 255, 255, 0.1);
$glass-border: rgba(255, 255, 255, 0.4);

$transition-hover: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

/* ===== SCSS МИКСИНЫ ===== */
@mixin glassmorphism($bg-opacity: 0.1, $blur: 20px, $saturate: 180%) {
  background: rgba(255, 255, 255, $bg-opacity);
  backdrop-filter: blur($blur) saturate($saturate);
  -webkit-backdrop-filter: blur($blur) saturate($saturate);
}

@mixin gradient-overlay($opacity: 0.1) {
  background: linear-gradient(
    135deg,
    var(--color-primary-rgba-light) 0%,
    rgba(1, 175, 157, $opacity * 0.5) 25%,
    rgba(1, 175, 157, $opacity * 0.2) 50%,
    rgba(1, 175, 157, $opacity * 0.5) 75%,
    var(--color-primary-rgba-light) 100%
  );
}

@mixin hover-glow($intensity: 0.3) {
  box-shadow:
    0 0 30px var(--color-primary-rgba-medium),
    0 0 60px var(--color-primary-rgba-light),
    0 0 100px rgba(1, 175, 157, $intensity * 0.3);
}

@mixin card-hover-transform {
  transition: $transition-hover;
}

/* ===== ОСНОВНЫЕ СТИЛИ КАРТОЧКИ ===== */
.g-card {
  position: relative;
  overflow: visible;
  border-radius: var(--radius-xl);
  transition: var(transition-smooth);
  font-family: var(--font-family-base);
  background: rgba(255, 255, 255, 0.8) !important;
  backdrop-filter: blur(15px) saturate(150%);
  -webkit-backdrop-filter: blur(15px) saturate(150%);
  border: 1px solid rgba(0, 0, 0, 0.15) !important;
  box-shadow:
    0 6px 25px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.6),
    inset 0 -1px 0 rgba(0, 0, 0, 0.05) !important;

  /* Псевдоэлементы */
  &::before {
    @include gradient-overlay(0.05);
    backdrop-filter: blur(20px) saturate(150%);
    -webkit-backdrop-filter: blur(20px) saturate(150%);
  }

  &::after {
    @include gradient-overlay(0.08);
  }

  /* Hover состояния */
  &:hover {
    @include card-hover-transform;
    @include hover-glow(0.08);

    &::before {
      opacity: 0.9;
      backdrop-filter: blur(25px) saturate(180%);
      -webkit-backdrop-filter: blur(25px) saturate(180%);
      @include gradient-overlay(0.08);
      transform: scale(1.02);
    }

    &::after {
      opacity: 0.8;
      @include gradient-overlay(0.1);
      transform: scale(1.01);
    }

    /* Элементы при hover */
    .icon-container {
      transform: scale(1.05) rotate(2deg);
      transition: $transition-hover;
      background: rgba(100, 100, 100, 0.1);
      @include hover-glow(0.1);
    }

    .g-card__title {
      transform: translateX(2px) translateY(-1px);
      transition: $transition-hover;
      text-shadow: 0 0 4px rgba(100, 100, 100, 0.2);
    }

    .g-card__description {
      transform: translateX(2px) translateY(-1px);
      transition: $transition-hover;
      opacity: 0.95;
    }

    .g-card__content {
      transform: translateY(-1px);
    }
  }

  &--bordered {
    box-shadow:
      0 0 15px var(--color-primary-rgba-medium),
      0 0 30px var(--color-primary-rgba-light),
      0 0 45px rgba(1, 175, 157, 0.03),
      0 8px 25px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.7),
      inset 0 -1px 0 rgba(0, 0, 0, 0.05) !important;
    border-color: var(--color-primary-rgba-medium) !important;
  }

  /* Размеры карточек */
  &--sm {
    border-radius: var(--radius-lg);
  }

  &--md {
    border-radius: var(--radius-xl);
  }

  &--lg {
    border-radius: var(--radius-2xl);
  }

  /* Hover эффекты */
  &--hoverable:not(:hover) {
    transition: var(transition-smooth);
  }

  /* Фокус для клавиатуры */
  &:focus-visible {
    outline: 2px solid rgba(100, 100, 100, 0.4);
    outline-offset: 2px;
  }
}

/* ===== ЭЛЕМЕНТЫ КАРТОЧКИ ===== */

/* Иконка */
.g-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(transition-smooth);
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-lg);
  @include glassmorphism(0.1, 10px);
  transition: var(transition-smooth);
  background: rgba(0, 0, 0, 0.05);
}

/* Заголовок */
.g-card__title {
  font-family: var(--font-family-display);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  margin: 0;
  transition: var(transition-smooth);
}

/* Описание */
.g-card__description {
  font-family: var(--font-family-base);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
  margin: 0;
  transition: var(transition-smooth);
}

/* Контент */
.g-card__content {
  position: relative;
  transition: $transition-hover;
  overflow-y: auto;
}

/* Подвал */
.g-card__footer {
  backdrop-filter: blur(10px);
  transition: var(transition-smooth);
}

/* ===== АДАПТИВНОСТЬ ===== */
@media (max-width: 768px) {
  .g-card {
    border-radius: var(--radius-lg);

    &--sm {
      border-radius: var(--radius-md);
    }

    &--lg {
      border-radius: var(--radius-xl);
    }
  }

  .icon-container {
    width: 40px;
    height: 40px;
  }

  .g-card__title {
    font-size: var(--font-size-text18);
  }

  .g-card__description {
    font-size: var(--font-size-text13);
  }
}

/* ===== ДОСТУПНОСТЬ ===== */
@media (prefers-reduced-motion: reduce) {
  .g-card,
  .g-card--animated,
  .g-card__icon,
  .g-card__title,
  .g-card__description,
  .g-card__content,
  .g-card__footer,
  .icon-container {
    animation: none !important;
    transition: none !important;
  }

  .g-card:hover {
    transform: none !important;

    .icon-container {
      transform: none !important;
    }

    .g-card__title,
    .g-card__description {
      transform: none !important;
    }
  }
}
</style>
