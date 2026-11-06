<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :style="iconSizeStyle(size)"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    class="g-icon-menu-lines"
  >
    <path
      d="M3 5.25h10a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5Zm0 4h10a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5Z"
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
.g-icon-menu-lines {
  display: block;
  flex-shrink: 0;
  color: inherit;
}
</style>
