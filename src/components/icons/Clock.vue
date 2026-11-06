<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :style="iconSizeStyle(size)"
    viewBox="0 0 14.6667 14.6667"
    fill="none"
    aria-hidden="true"
    class="g-icon-clock"
  >
    <path
      d="M13.3333 7.33333C13.3333 4.01962 10.647 1.33333 7.33333 1.33333C4.01962 1.33333 1.33333 4.01962 1.33333 7.33333C1.33333 10.647 4.01962 13.3333 7.33333 13.3333C10.647 13.3333 13.3333 10.647 13.3333 7.33333ZM6.66667 3.66667C6.66667 3.29848 6.96514 3 7.33333 3C7.70152 3 8 3.29848 8 3.66667V7.05729L9.80469 8.86198C10.065 9.12233 10.065 9.54434 9.80469 9.80469C9.54434 10.065 9.12233 10.065 8.86198 9.80469L6.86198 7.80469C6.73696 7.67966 6.66667 7.51014 6.66667 7.33333V3.66667ZM14.6667 7.33333C14.6667 11.3834 11.3834 14.6667 7.33333 14.6667C3.28325 14.6667 0 11.3834 0 7.33333C0 3.28325 3.28325 0 7.33333 0C11.3834 0 14.6667 3.28325 14.6667 7.33333Z"
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
.g-icon-clock {
  display: block;
  flex-shrink: 0;
  color: inherit;
}
</style>
