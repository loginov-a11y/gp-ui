<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :style="iconSizeStyle(size)"
    viewBox="0 0 14.6667 14.6667"
    fill="none"
    aria-hidden="true"
    class="g-icon-info-circle"
  >
    <path
      d="M13.3333 7.33333C13.3333 4.01962 10.647 1.33333 7.33333 1.33333C4.01962 1.33333 1.33333 4.01962 1.33333 7.33333C1.33333 10.647 4.01962 13.3333 7.33333 13.3333C10.647 13.3333 13.3333 10.647 13.3333 7.33333ZM6.72461 10V7C6.72461 6.63186 7.02316 6.33342 7.39128 6.33333C7.75947 6.33333 8.05794 6.63181 8.05794 7V10C8.05793 10.3682 7.75946 10.6667 7.39128 10.6667C7.02316 10.6666 6.72462 10.3681 6.72461 10ZM7.39128 4C7.75947 4 8.05794 4.29848 8.05794 4.66667C8.05793 5.03485 7.75946 5.33333 7.39128 5.33333H7.38477C7.01658 5.33333 6.71811 5.03485 6.7181 4.66667C6.7181 4.29848 7.01658 4 7.38477 4H7.39128ZM14.6667 7.33333C14.6667 11.3834 11.3834 14.6667 7.33333 14.6667C3.28325 14.6667 0 11.3834 0 7.33333C0 3.28325 3.28325 0 7.33333 0C11.3834 0 14.6667 3.28325 14.6667 7.33333Z"
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
.g-icon-info-circle {
  display: block;
  flex-shrink: 0;
  color: inherit;
}
</style>
