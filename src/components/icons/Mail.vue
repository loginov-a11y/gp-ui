<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="svgWidth"
    :height="svgHeight"
    :style="iconSizeStyle(svgWidth, svgHeight)"
    viewBox="0 0 22 18"
    fill="none"
    aria-hidden="true"
    class="g-icon-mail"
  >
    <path
      d="M20 4C20 3.83763 19.9779 3.68045 19.9414 3.5293L12.6543 9.95996C11.7093 10.7938 10.2907 10.7938 9.3457 9.95996L2.05762 3.5293C2.02114 3.68038 2 3.83771 2 4V14C2 15.1046 2.89543 16 4 16H18C19.1046 16 20 15.1046 20 14V4ZM4 2C3.80536 2 3.61735 2.02823 3.43945 2.08008L10.6689 8.45996C10.858 8.62674 11.142 8.62674 11.3311 8.45996L18.5605 2.08105C18.3826 2.02915 18.1947 2 18 2H4ZM22 14C22 16.2091 20.2091 18 18 18H4C1.79086 18 0 16.2091 0 14V4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V14Z"
      fill="currentColor"
    />
  </svg>
</template>

<script setup lang="ts">import { computed } from 'vue'

import { iconSizeStyle } from '~/utils/iconSize'

const props = withDefaults(
  defineProps<{
    size?: number | string
    width?: number | string
    height?: number | string
  }>(),
  {
    width: 22,
    height: 18
  }
)

const svgWidth = computed(() => props.size ?? props.width)
const svgHeight = computed(() => props.size ?? props.height)
</script>

<style scoped>
.g-icon-mail {
  display: block;
  flex-shrink: 0;
  color: inherit;
}
</style>
