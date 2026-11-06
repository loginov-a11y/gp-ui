<template>
  <div class="g-property-row" :class="rowClass">
    <dt class="g-property-row__label">{{ label }}</dt>
    <dd v-if="layout === 'comment'" class="g-property-row__quote">
      <slot />
    </dd>
    <dd v-else class="g-property-row__value" :class="valueClass">
      <slot />
    </dd>
  </div>
</template>

<script setup lang="ts">import { computed } from 'vue'

import '~/ui-kit/g-property-list.css'

export type GPropertyRowLayout = 'default' | 'wrap' | 'stack' | 'comment'
export type GPropertyRowTone = 'default' | 'accent' | 'danger'

const props = withDefaults(
  defineProps<{
    label: string
    layout?: GPropertyRowLayout
    tone?: GPropertyRowTone
  }>(),
  {
    layout: 'default',
    tone: 'default'
  }
)

const rowClass = computed(() => ({
  'g-property-row--wrap': props.layout === 'wrap',
  'g-property-row--stack': props.layout === 'stack',
  'g-property-row--comment': props.layout === 'comment'
}))

const valueClass = computed(() => ({
  'g-property-row__value--accent': props.tone === 'accent',
  'g-property-row__value--danger': props.tone === 'danger'
}))
</script>
