<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :style="iconSizeStyle(size)"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    class="g-icon-copy"
  >
    <path
      d="M6.5 2C5.67157 2 5 2.67157 5 3.5V4H6V3.5C6 3.22386 6.22386 3 6.5 3H12.5C12.7761 3 13 3.22386 13 3.5V10.5C13 10.7761 12.7761 11 12.5 11H12V12H12.5C13.3284 12 14 11.3284 14 10.5V3.5C14 2.67157 13.3284 2 12.5 2H6.5ZM3.5 5C2.67157 5 2 5.67157 2 6.5V12.5C2 13.3284 2.67157 14 3.5 14H9.5C10.3284 14 11 13.3284 11 12.5V6.5C11 5.67157 10.3284 5 9.5 5H3.5ZM3 6.5C3 6.22386 3.22386 6 3.5 6H9.5C9.77614 6 10 6.22386 10 6.5V12.5C10 12.7761 9.77614 13 9.5 13H3.5C3.22386 13 3 12.7761 3 12.5V6.5Z"
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
.g-icon-copy {
  display: block;
  flex-shrink: 0;
  color: inherit;
}
</style>
