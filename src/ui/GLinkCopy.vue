<template>
  <div v-if="!hasContent" class="g-link-copy">
    <span :class="emptyClass">{{ emptyText }}</span>
  </div>
  <div v-else class="g-link-copy flex items-center gap-2">
    <component :is="linkTag" v-bind="linkAttrs" :class="linkClass">
      <span class="g-link-copy__text truncate">{{ text }}</span>
      <ExternalLink v-if="href && showExternalIcon" class="w-3 h-3 flex-shrink-0" />
    </component>
    <GButton variant="secondary" size="xs" :aria-label="copyLabel" @click="copy">
      <Copy class="w-3 h-3" />
    </GButton>
  </div>
</template>

<script setup lang="ts">import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { Copy, ExternalLink } from 'lucide-vue-next'
import GButton from '~/ui/GButton.vue'
import { useCopyToClipboard } from '~/composables/useCopyToClipboard'

interface Props {
  /** Текст для отображения */
  text?: string | null
  /** URL ссылки (если не передан — рендерится только текст без ссылки) */
  href?: string | null
  /** Значение для копирования в буфер (по умолчанию — text) */
  copyValue?: string | null
  /** Текст при пустом value (прочерк и т.п.) */
  emptyText?: string
  /** Title для ссылки (например полный хеш) */
  linkTitle?: string
  /** Показывать иконку внешней ссылки */
  showExternalIcon?: boolean
  /** Дополнительные классы для контейнера пустого состояния */
  emptyClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  text: '',
  href: '',
  copyValue: undefined,
  emptyText: '-',
  linkTitle: undefined,
  showExternalIcon: true,
  emptyClass: 'text-gray-400 text-sm'
})

const { t } = useI18n()
const { copyToClipboard } = useCopyToClipboard()

const hasContent = computed(() => {
  const v = props.text
  return v != null && String(v).trim() !== ''
})

const linkTag = computed(() => (props.href ? 'a' : 'span'))

const linkAttrs = computed(() => {
  if (!props.href) return {}
  return {
    href: props.href,
    target: '_blank',
    rel: 'noopener noreferrer',
    title: props.linkTitle ?? props.text
  }
})

const linkClass = computed(() =>
  props.href
    ? 'text-cyan-600 hover:text-cyan-700 underline text-sm font-mono max-w-[200px] truncate inline-flex items-center gap-1 align-middle'
    : 'text-gray-700 text-sm font-mono max-w-[200px] truncate inline-flex items-center gap-1 align-middle'
)

const valueToCopy = computed(() => {
  const v = props.copyValue
  if (v != null && String(v) !== '') return String(v)
  return props.text ?? ''
})

const copyLabel = computed(() => t('common.copied'))

function copy() {
  const value = valueToCopy.value
  if (!value) return
  copyToClipboard(value, {
    showToast: true,
    toastTitle: t('common.copied'),
    toastDescription: t('common.copiedDesc')
  })
}
</script>

<style scoped>
.g-link-copy__text {
  display: inline-block;
  max-width: 200px;
}
</style>
