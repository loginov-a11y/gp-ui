<template>
  <nav class="mobile-tab-bar">
    <RouterLink
      v-for="item in visibleMenuItems"
      :key="item.to"
      :to="item.to"
      class="mobile-tab-bar__item"
      :class="{ _active: isActive(item.to) }"
    >
      <component :is="item.icon" class="mobile-tab-bar__icon" />
      <span class="mobile-tab-bar__label">{{ item.title }}</span>
    </RouterLink>

    <div v-if="hasOverflowItems" class="mobile-tab-bar__more">
      <button
        type="button"
        class="mobile-tab-bar__item mobile-tab-bar__more-trigger"
        :class="{ _active: isMoreMenuActive }"
        @click="toggleMoreMenu"
      >
        <MoreHorizontal class="mobile-tab-bar__icon" />
        <span class="mobile-tab-bar__label">...</span>
      </button>

      <div v-if="isMoreMenuOpen" class="mobile-tab-bar__dropdown">
        <RouterLink
          v-for="item in overflowMenuItems"
          :key="item.to"
          :to="item.to"
          class="mobile-tab-bar__dropdown-item"
          :class="{ _active: isActive(item.to) }"
          @click="closeMoreMenu"
        >
          <component :is="item.icon" class="mobile-tab-bar__dropdown-icon" />
          <span class="mobile-tab-bar__dropdown-label">{{ item.title }}</span>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">import { ref, computed, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

import { MoreHorizontal } from 'lucide-vue-next'

// Получаем текущий маршрут
const route = useRoute()
const MAX_MOBILE_ITEMS = 5
const VISIBLE_ITEMS_WITH_MORE = MAX_MOBILE_ITEMS - 1
const isMoreMenuOpen = ref(false)

import type { GMenuItem } from '~/types/menu'

/** Пункты меню передаёт кабинет (мобильные — фильтруем здесь). */
const props = withDefaults(defineProps<{ menuItems?: GMenuItem[] }>(), { menuItems: () => [] })

const mobileMenuItems = computed(() => props.menuItems.filter((item) => !item.desktopOnly))

const hasOverflowItems = computed(() => mobileMenuItems.value.length > MAX_MOBILE_ITEMS)
const visibleMenuItems = computed(() =>
  hasOverflowItems.value
    ? mobileMenuItems.value.slice(0, VISIBLE_ITEMS_WITH_MORE)
    : mobileMenuItems.value
)
const overflowMenuItems = computed(() =>
  hasOverflowItems.value ? mobileMenuItems.value.slice(VISIBLE_ITEMS_WITH_MORE) : []
)
const isMoreMenuActive = computed(() =>
  overflowMenuItems.value.some(item => isActive(item.to))
)

// Проверка активного маршрута
const isActive = (path: string) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}

const toggleMoreMenu = () => {
  isMoreMenuOpen.value = !isMoreMenuOpen.value
}

const closeMoreMenu = () => {
  isMoreMenuOpen.value = false
}

watch(
  () => route.path,
  () => {
    closeMoreMenu()
  }
)
</script>

<style scoped lang="scss">
.mobile-tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05);
  padding: 0.5rem 0.5rem calc(0.5rem + env(safe-area-inset-bottom));
  padding-bottom: max(0.5rem, env(safe-area-inset-bottom));

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 0.5rem 0.75rem;
    border-radius: var(--radius-lg);
    transition: all var(--transition-normal);
    text-decoration: none;
    color: var(--color-gray-medium);
    min-width: 60px;
    position: relative;

    &:active {
      transform: scale(0.95);
    }

    &._active {
      color: var(--color-primary);
      background: rgba(1, 175, 157, 0.1);

      .mobile-tab-bar__icon {
        color: var(--color-primary);
      }

      .mobile-tab-bar__label {
        color: var(--color-primary);
        font-weight: var(--font-weight-semibold);
      }
    }

    &:hover:not(._active) {
      background: rgba(0, 0, 0, 0.05);
    }
  }

  &__icon {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    transition: all var(--transition-normal);
  }

  &__label {
    font-size: var(--font-size-text11);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-tight);
    text-align: center;
    white-space: nowrap;
    transition: all var(--transition-normal);
  }

  &__more {
    position: relative;
  }

  &__more-trigger {
    border: none;
    background: transparent;
    cursor: pointer;
    font: inherit;
  }

  &__dropdown {
    position: absolute;
    right: 0;
    bottom: calc(100% + 0.5rem);
    min-width: 170px;
    padding: 0.375rem;
    border: 1px solid rgba(1, 175, 157, 0.2);
    border-radius: var(--radius-lg);
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
    z-index: 40;
  }

  &__dropdown-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.625rem;
    border-radius: var(--radius-md);
    text-decoration: none;
    color: var(--color-gray-medium);
    transition: all var(--transition-normal);

    &._active {
      color: var(--color-primary);
      background: rgba(1, 175, 157, 0.1);
    }

    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  }

  &__dropdown-icon {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }

  &__dropdown-label {
    font-size: var(--font-size-text12);
    line-height: var(--line-height-tight);
    white-space: nowrap;
  }
}

@media screen and (max-width: 640px) {
  .mobile-tab-bar {
    padding: 0.375rem 0.25rem calc(0.375rem + env(safe-area-inset-bottom));
    padding-bottom: max(0.375rem, env(safe-area-inset-bottom));

    &__item {
      padding: 0.375rem 0.5rem;
      gap: 0.125rem;
      min-width: 50px;
    }

    &__icon {
      width: 20px;
      height: 20px;
    }

    &__label {
      font-size: var(--font-size-text10);
    }
  }
}

// Адаптация для устройств с вырезом внизу (notch)
@supports (padding-bottom: env(safe-area-inset-bottom)) {
  .mobile-tab-bar {
    padding-bottom: calc(0.5rem + env(safe-area-inset-bottom));
  }

  @media screen and (max-width: 640px) {
    .mobile-tab-bar {
      padding-bottom: calc(0.375rem + env(safe-area-inset-bottom));
    }
  }
}
</style>
