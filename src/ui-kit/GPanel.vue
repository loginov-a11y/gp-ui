<template>
  <section class="g-panel" :class="{ 'g-panel--fill': fill }">
    <header v-if="title || icon || $slots.actions" class="g-panel__head">
      <span v-if="icon" class="g-panel__icon">
        <component :is="icon" :size="20" />
      </span>
      <div class="g-panel__text">
        <h2 v-if="title" class="g-panel__title">{{ title }}</h2>
        <p v-if="subtitle" class="g-panel__subtitle">{{ subtitle }}</p>
      </div>
      <div v-if="$slots.actions" class="g-panel__actions">
        <slot name="actions" />
      </div>
    </header>
    <div class="g-panel__body">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

/**
 * Белая карточка раздела: иконка, заголовок, подзаголовок и слот.
 * Stretch-колонка — проп `fill`.
 */
defineProps<{
  title?: string
  subtitle?: string
  icon?: Component
  fill?: boolean
}>()
</script>

<style scoped>
.g-panel {
  display: flex;
  flex-direction: column;
  gap: var(--g-panel-gap);
  padding: var(--g-panel-pad);
  border-radius: var(--g-panel-radius);
  background: var(--g-panel-bg);
}

.g-panel--fill {
  flex: 1 1 auto;
  min-height: 0;
  height: 100%;
}

.g-panel--fill .g-panel__body {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
}

.g-panel__head {
  display: flex;
  align-items: flex-start;
  width: 100%;
  min-width: 0;
}

.g-panel__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  padding: 4px;
  box-sizing: border-box;
  flex-shrink: 0;
  border-radius: 12px;
  background: var(--g-panel-icon-bg);
  color: var(--g-panel-muted);
}

.g-panel__icon :deep(svg) {
  width: 20px;
  height: 20px;
}

.g-panel__text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  min-width: 0;
  padding: 0 16px;
  align-self: stretch;
}

.g-panel__title {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.48px;
  color: var(--g-panel-fg);
}

.g-panel__subtitle {
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.24px;
  color: var(--g-panel-muted);
}

.g-panel__actions {
  margin-left: auto;
  flex-shrink: 0;
  align-self: flex-start;
}

.g-panel__body {
  min-width: 0;
}

@media screen and (max-width: 992px) {
  .g-panel {
    gap: 20px;
    padding: 12px;
  }
}
</style>

<style>
.g-panel-note {
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.28px;
  color: var(--g-panel-muted);
}
</style>
