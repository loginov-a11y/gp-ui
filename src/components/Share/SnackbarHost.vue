<template>
  <Teleport defer to="body">
    <div class="snackbar-host" aria-live="polite">
      <TransitionGroup name="snackbar">
        <GSnackbar
          v-for="item in items"
          :key="item.id"
          :type="item.type"
          :title="item.title"
          :description="item.description"
          closable
          @close="snackbar.remove(item.id)"
        />
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
/**
 * Показывает очередь useSnackbar как GSnackbar из ui-kit.
 * Вызовы snackbar.add({ title, description, color }) — из любого места приложения.
 */
import { computed } from 'vue'
import GSnackbar from '~/ui-kit/GSnackbar.vue'
import type { GSnackbarType } from '~/ui-kit/GSnackbar.vue'
import { useSnackbar } from '~/composables/useSnackbar'

const snackbar = useSnackbar()

const mapColor = (color?: string): GSnackbarType => {
  if (color === 'success' || color === 'error' || color === 'info') return color
  return 'info'
}

const items = computed(() =>
  snackbar.toasts.value.map((item) => ({
    id: item.id,
    type: mapColor(item.color),
    title: String(item.title ?? ''),
    description: item.description ? String(item.description) : undefined
  }))
)
</script>

<style scoped>
.snackbar-host {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 200;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: min(320px, calc(100vw - 32px));
  pointer-events: none;
}

.snackbar-host :deep(.g-snackbar) {
  width: 100%;
  pointer-events: auto;
}

.snackbar-enter-active,
.snackbar-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.snackbar-enter-from,
.snackbar-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.snackbar-move {
  transition: transform 0.2s ease;
}

@media screen and (max-width: 992px) {
  .snackbar-host {
    top: calc(12px + env(safe-area-inset-top));
    right: 12px;
    left: 12px;
    width: auto;
    align-items: stretch;
  }
}
</style>
