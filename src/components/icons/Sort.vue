<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :style="iconSizeStyle(size)"
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
    class="g-icon-sort"
  >
    <path d="M6 1.5L9.25 5.25H2.75L6 1.5Z" fill="currentColor" />
    <path d="M6 10.5L2.75 6.75H9.25L6 10.5Z" fill="currentColor" />
  </svg>
</template>

<script setup lang="ts">
import { iconSizeStyle } from '~/utils/iconSize'

withDefaults(defineProps<{ size?: number | string }>(), {
  size: 12
})
</script>

<style scoped>
.g-icon-sort {
  display: block;
  flex-shrink: 0;
  color: inherit;
}
</style>
