<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :style="iconSizeStyle(size)"
    viewBox="0 0 9.33333 9.33333"
    fill="none"
    aria-hidden="true"
    class="g-icon-plus"
  >
    <path
      d="M4 8.66667V5.33333H0.666667C0.298477 5.33333 0 5.03486 0 4.66667C0 4.29848 0.298477 4 0.666667 4H4V0.666667C4 0.298477 4.29848 0 4.66667 0C5.03486 0 5.33333 0.298477 5.33333 0.666667V4H8.66667C9.03486 4 9.33333 4.29848 9.33333 4.66667C9.33333 5.03486 9.03486 5.33333 8.66667 5.33333H5.33333V8.66667C5.33333 9.03486 5.03486 9.33333 4.66667 9.33333C4.29848 9.33333 4 9.03486 4 8.66667Z"
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
.g-icon-plus {
  display: block;
  flex-shrink: 0;
  color: inherit;
}
</style>
