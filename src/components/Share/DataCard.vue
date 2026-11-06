<template>
  <GCard class="data-card" size="md" animated hoverable :class="sectionClass">
    <!-- Заголовок карточки -->
    <template #header>
      <div class="header-container">
        <div class="flex items-start space-x-3 max-w-[90%]">
          <div class="icon-container">
            <component :is="icon" class="w-6 h-6 text-cyan-600" />
          </div>
          <div class="header-content">
            <h3 class="text-lg font-semibold">{{ title }}</h3>
            <p v-if="description" class="text-sm text-gray-500">{{ description }}</p>
          </div>
        </div>
        <!-- Слот для действий в заголовке (кнопки, меню и т.д.) -->
        <div
          v-if="$slots.headerActions"
          class="header-actions"
          :class="headerDisplayMode === 'rows' && 'header-actions--rows'"
        >
          <slot name="headerActions" />
        </div>
      </div>
    </template>

    <!-- Основной контент карточки -->
    <div class="card-content" :style="{ maxHeight: contentMaxHeight }">
      <slot />
    </div>

    <!-- Подвал карточки (опционально) -->
    <template v-if="$slots.footer" #footer>
      <div class="card-footer">
        <slot name="footer" />
      </div>
    </template>
  </GCard>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import GCard from '~/ui/GCard.vue'

interface Props {
  /** Заголовок карточки */
  title: string
  /** Описание карточки (опционально) */
  description?: string
  /** Иконка карточки (компонент из lucide-vue-next) */
  icon: Component
  /** Дополнительные CSS классы для карточки */
  sectionClass?: string
  contentMaxHeight?: string
  headerDisplayMode?: 'inline' | 'rows'
}

const props = withDefaults(defineProps<Props>(), {
  description: '',
  sectionClass: '',
  contentMaxHeight: 'auto',
  headerDisplayMode: 'inline'
})
</script>

<style scoped lang="scss">
.data-card {
  overflow: auto;
  position: relative;
}

.header-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    gap: 10px;
    flex-direction: column;
    align-items: flex-start;
  }
}

.header-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.card-content {
  padding: 0;
}

.card-footer {
  padding: 0;
}

.icon-container {
  margin-top: 7px;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: absolute;
  top: 10px;
  right: 10px;

  &--rows {
    position: relative;

    @media screen and (max-width: 768px) {
      position: relative;
      width: 100%;
      top: initial;
      right: initial;
    }
  }
}

/* Адаптивность для мобильных устройств */
@media screen and (max-width: 768px) {
  .flex.items-center.justify-between {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
}
</style>
