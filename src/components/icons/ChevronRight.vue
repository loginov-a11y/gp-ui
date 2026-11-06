<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :style="iconSizeStyle(size)"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    class="g-icon-chevron-right"
  >
    <path
      transform="translate(5.33336 3.33339)"
      d="M0.195262 0.195262C0.455612 -0.0650874 0.877621 -0.0650873 1.13797 0.195262L5.13797 4.19526C5.26299 4.32029 5.33328 4.48981 5.33328 4.66662C5.33328 4.84343 5.26299 5.01295 5.13797 5.13797L1.13797 9.13797C0.877621 9.39832 0.455612 9.39832 0.195262 9.13797C-0.0650874 8.87762 -0.0650874 8.45561 0.195262 8.19526L3.72391 4.66662L0.195262 1.13797C-0.0650874 0.877621 -0.0650873 0.455612 0.195262 0.195262Z"
      fill="currentColor"
    />
  </svg>
</template>

<script setup lang="ts">
import { iconSizeStyle } from '~/utils/iconSize'

withDefaults(defineProps<{ size?: number | string }>(), {
  size: 16
})
</script>

<style scoped>
.g-icon-chevron-right {
  display: block;
  flex-shrink: 0;
  color: inherit;
}
</style>
