<template>
  <div class="qr-display">
    <!-- Состояние загрузки -->
    <div v-if="isLoading" class="qr-loading">
      <Loader2 class="w-20 h-20 text-gray-400 animate-spin" />
      <p class="text-sm text-gray-500 mt-3">{{ $t('balance.qr.generating') }}</p>
    </div>

    <!-- Ошибка генерации -->
    <div v-else-if="hasError" class="qr-error">
      <QrCode class="w-20 h-20 text-red-400" />
      <p class="text-sm text-red-500 mt-3">{{ $t('balance.qr.generationError') }}</p>
      <GButton variant="secondary" size="sm" @click="generateQR" class="mt-2">
        {{ $t('balance.qr.retry') }}
      </GButton>
    </div>

    <!-- Успешно сгенерированный QR код -->
    <div v-else-if="qrCodeDataURL" class="qr-success">
      <img :src="qrCodeDataURL" :alt="altText" class="qr-image" />
      <p v-if="description" class="text-sm text-gray-500 mt-3">{{ description }}</p>
    </div>

    <!-- Fallback placeholder -->
    <div v-else class="qr-placeholder">
      <QrCode class="w-20 h-20 text-gray-400" />
      <p v-if="description" class="text-sm text-gray-500 mt-3">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">import { useQRCode } from '~/composables/useQRCode'
import { ref, computed, watch, readonly } from 'vue'
import { useI18n } from 'vue-i18n'

import { QrCode, Loader2 } from 'lucide-vue-next'
import GButton from '~/ui/GButton.vue'

interface Props {
  text: string
  size?: number
  description?: string
  altText?: string
  /**
   * Готовый data URL, сгенерированный заранее (например, на сервере).
   * Позволяет отрисовать код сразу, без вспышки состояния загрузки.
   */
  initialDataUrl?: string
}

interface Emits {
  (e: 'download'): void
}

const props = withDefaults(defineProps<Props>(), {
  size: 200,
  description: '',
  altText: ''
})

const emit = defineEmits<Emits>()

// Получаем доступ к i18n
const { t } = useI18n()

const sizePx = computed(() => {
  const parsed = Number(props.size)
  if (!Number.isFinite(parsed)) return 200
  return Math.max(120, Math.min(1024, parsed))
})

// QR код состояние
const qrCodeDataURL = ref<string>(props.initialDataUrl ?? '')
const isLoading = ref(false)
const hasError = ref(false)

// Композабл для генерации QR кода
const { generateQRCode } = useQRCode()

// Генерация QR кода
const generateQR = async () => {
  if (!props.text) return

  isLoading.value = true
  hasError.value = false

  try {
    const dataURL = await generateQRCode(props.text, {
      width: sizePx.value,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      }
    })
    qrCodeDataURL.value = dataURL
  } catch (error) {
    console.error('Ошибка генерации QR кода:', error)
    hasError.value = true
  } finally {
    isLoading.value = false
  }
}

// Генерируем при изменении текста; с готовым значением первый прогон не нужен
watch(() => [props.text, props.size], generateQR, { immediate: !props.initialDataUrl })

// Экспортируем функцию для внешнего использования
defineExpose({
  generateQR,
  qrCodeDataURL: readonly(qrCodeDataURL),
  isLoading: readonly(isLoading),
  hasError: readonly(hasError)
})
</script>

<style scoped>
.qr-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: var(--qr-size);
  max-width: 100%;
  min-height: var(--qr-size);
}

.qr-loading,
.qr-error,
.qr-success,
.qr-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  min-height: var(--qr-size);
  background: rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  /* padding: 1rem; */
  text-align: center;
  /* width: 100px;
  height: 100px; */
}

.qr-error {
  background: rgba(239, 68, 68, 0.1);
}

.qr-success {
  background: transparent;
}

.qr-image {
  width: var(--qr-size);
  max-width: 100%;
  height: auto;
  aspect-ratio: 1;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
