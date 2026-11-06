<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="svgWidth"
    :height="svgHeight"
    :style="iconSizeStyle(svgWidth, svgHeight)"
    viewBox="0 0 16 22"
    fill="none"
    aria-hidden="true"
    class="g-icon-lock"
  >
    <path
      d="M14 14C14 10.6863 11.3137 8 8 8C4.68629 8 2 10.6863 2 14C2 17.3137 4.68629 20 8 20C11.3137 20 14 17.3137 14 14ZM7 15V13C7 12.4477 7.44772 12 8 12C8.55228 12 9 12.4477 9 13V15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15ZM12 6C12 3.79086 10.2091 2 8 2C5.79086 2 4 3.79086 4 6V7.07227C5.17689 6.39127 6.54249 6 8 6C9.45751 6 10.8231 6.39127 12 7.07227V6ZM14 8.71094C15.244 10.121 16 11.9718 16 14C16 18.4183 12.4183 22 8 22C3.58172 22 0 18.4183 0 14C0 11.9718 0.756037 10.121 2 8.71094V6C2 2.68629 4.68629 0 8 0C11.3137 0 14 2.68629 14 6V8.71094Z"
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
    width: 16,
    height: 22
  }
)

const svgWidth = computed(() => props.size ?? props.width)
const svgHeight = computed(() => props.size ?? props.height)
</script>

<style scoped>
.g-icon-lock {
  display: block;
  flex-shrink: 0;
  color: inherit;
}
</style>
