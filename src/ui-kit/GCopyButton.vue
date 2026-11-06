<template>
  <button
    type="button"
    class="g-copy-button"
    :class="{ 'g-copy-button--bare': bare }"
    :aria-label="ariaLabel || t('common.copy')"
    :disabled="!value"
    @click="copy"
  >
    <slot>
      <IconsCopy :size="12" />
    </slot>
  </button>
</template>

<script setup lang="ts">import { useCopyToClipboard } from '~/composables/useCopyToClipboard'
import { useI18n } from 'vue-i18n'

import IconsCopy from '~/components/icons/Copy.vue'

/**
 * Кнопка копирования 20×20 из макета карточек. Toast — common.copied.
 * bare — без рамки/фона (инпуты настроек 2FA).
 */
const props = withDefaults(
  defineProps<{
    value: string
    ariaLabel?: string
    bare?: boolean
  }>(),
  {
    bare: false
  }
)

const { t } = useI18n()
const { copyToClipboard } = useCopyToClipboard()

function copy(event: MouseEvent) {
  event.stopPropagation()
  if (!props.value) return
  copyToClipboard(props.value, {
    showToast: true,
    toastTitle: t('common.copied'),
    toastDescription: t('common.copiedDesc')
  })
}
</script>

<style scoped>
.g-copy-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--g-copy-size);
  height: var(--g-copy-size);
  padding: 4px;
  box-sizing: border-box;
  flex-shrink: 0;
  border: 1px solid var(--g-panel-line);
  border-radius: var(--g-copy-radius);
  background: var(--g-panel-bg);
  color: var(--g-panel-fg);
  cursor: pointer;
}

.g-copy-button:not(.g-copy-button--bare) :deep(svg) {
  width: 12px;
  height: 12px;
}

.g-copy-button:hover:not(:disabled) {
  background: var(--g-panel-icon-bg);
}

.g-copy-button--bare {
  padding: 0;
  border-color: transparent;
  background: transparent;
}

.g-copy-button--bare :deep(svg) {
  width: 100%;
  height: 100%;
}

.g-copy-button--bare:hover:not(:disabled) {
  background: transparent;
}

.g-copy-button:disabled {
  cursor: not-allowed;
  opacity: 0.4;
}

.g-copy-button:focus-visible {
  outline: 2px solid rgb(11 11 11 / 0.35);
  outline-offset: 2px;
}
</style>
