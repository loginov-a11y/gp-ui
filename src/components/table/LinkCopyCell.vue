<template>
  <div class="flex items-center gap-2">
    <a
      :href="href"
      class="group text-cyan-600 hover:text-cyan-700 underline decoration-cyan-600/60 underline-offset-2 hover:underline-offset-[5px] text-sm font-mono min-w-0 max-w-full inline-flex items-center gap-1 rounded-sm transition-all duration-200 ease-out motion-safe:hover:gap-1.5 motion-safe:active:scale-[0.98] motion-safe:active:opacity-90 motion-safe:hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/35 focus-visible:ring-offset-1"
      target="_blank"
      rel="noopener noreferrer"
      :title="title"
    >
      <span class="min-w-0 truncate transition-colors duration-200">{{ resolvedDisplayText }}</span>
      <ExternalLink
        v-if="showExternalIcon"
        class="w-3 h-3 flex-shrink-0 text-cyan-600 transition-transform duration-200 ease-out motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5 motion-safe:group-active:translate-x-0.5 motion-safe:group-active:-translate-y-0.5"
      />
    </a>
    <GButton variant="secondary" size="xs" class="touch-manipulation" @click="copy">
      <Copy class="w-3 h-3" />
    </GButton>
  </div>
</template>

<script setup lang="ts">import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { Copy, ExternalLink } from 'lucide-vue-next'
import GButton from '~/ui/GButton.vue'
import { shortenHash } from '~/utils/format'
import { useCopyToClipboard } from '~/composables/useCopyToClipboard'

interface Props {
  /** Текст для копирования в буфер. */
  value: string
  /** URL ссылки. */
  href: string
  /** Текст для отображения (по умолчанию value или сокращённый hash). */
  displayText?: string
  /** Атрибут title ссылки. */
  title?: string
  /** Показывать иконку внешней ссылки. */
  showExternalIcon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  displayText: undefined,
  title: undefined,
  showExternalIcon: true
})

const { t } = useI18n()
const { copyToClipboard } = useCopyToClipboard()

const resolvedDisplayText = computed(() => {
  if (props.displayText !== undefined && props.displayText !== '') return props.displayText
  return shortenHash(props.value, 16)
})

function copy() {
  copyToClipboard(props.value, {
    showToast: true,
    toastTitle: t('common.copied'),
    toastDescription: t('common.copiedDesc')
  })
}
</script>
