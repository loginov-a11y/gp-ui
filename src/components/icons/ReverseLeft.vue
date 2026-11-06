<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :style="iconSizeStyle(width, height)"
    viewBox="0 0 12 13"
    fill="none"
    aria-hidden="true"
    class="g-icon-reverse-left"
  >
    <path
      d="M10 4.66639C9.99984 6.5072 8.50751 7.99972 6.66667 7.99972H2.27604L3.9668 6.30897C4.2269 6.04865 4.22693 5.62656 3.9668 5.36626C3.70645 5.10591 3.28379 5.10591 3.02344 5.36626L0.195312 8.19439C-0.065037 8.45474 -0.065037 8.8774 0.195312 9.13775L3.02344 11.9659C3.28379 12.2262 3.70645 12.2262 3.9668 11.9659C4.22691 11.7056 4.22691 11.2835 3.9668 11.0232L2.27669 9.33306H6.66667C9.24389 9.33306 11.3332 7.24358 11.3333 4.66639C11.3333 2.08906 9.24399 -0.000274677 6.66667 -0.000275021H0.666667C0.298477 -0.000275021 0 0.298202 0 0.666392C0.000163501 1.03444 0.298578 1.33306 0.666667 1.33306H6.66667C8.50761 1.33306 10 2.82544 10 4.66639Z"
      fill="currentColor"
    />
  </svg>
</template>

<script setup lang="ts">import { computed } from 'vue'

import { iconSizeStyle } from '~/utils/iconSize'

const props = withDefaults(
  defineProps<{
    /** Ширина; если передана одна `size` — масштаб с сохранением пропорции 12×13. */
    size?: number | string
    width?: number | string
    height?: number | string
  }>(),
  {
    size: undefined,
    width: undefined,
    height: undefined
  }
)

const ASPECT = 13 / 12

const width = computed(() => props.width ?? props.size ?? 12)
const height = computed(() => {
  if (props.height != null) return props.height
  if (props.width != null) return props.width
  if (props.size != null) {
    const n = typeof props.size === 'number' ? props.size : Number(props.size)
    return Number.isFinite(n) ? n * ASPECT : props.size
  }
  return 13
})
</script>

<style scoped>
.g-icon-reverse-left {
  display: block;
  flex-shrink: 0;
  color: inherit;
}
</style>
