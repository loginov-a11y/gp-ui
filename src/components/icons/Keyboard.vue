<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :style="iconSizeStyle(size)"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    class="g-icon-keyboard"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.333 5.417c0-.69.56-1.25 1.25-1.25h10.834c.69 0 1.25.56 1.25 1.25v9.166c0 .69-.56 1.25-1.25 1.25H4.583c-.69 0-1.25-.56-1.25-1.25V5.417Zm1.25 0v9.166h10.834V5.417H4.583ZM6.25 7.5a.625.625 0 1 0 0 1.25h.008a.625.625 0 1 0 0-1.25H6.25Zm2.5 0a.625.625 0 1 0 0 1.25h.008a.625.625 0 1 0 0-1.25H8.75Zm2.5 0a.625.625 0 1 0 0 1.25h.008a.625.625 0 1 0 0-1.25H11.25Zm2.5 0a.625.625 0 1 0 0 1.25h.008a.625.625 0 1 0 0-1.25H13.75ZM6.25 10a.625.625 0 1 0 0 1.25h7.5a.625.625 0 1 0 0-1.25h-7.5ZM6.25 12.5a.625.625 0 1 0 0 1.25h.008a.625.625 0 1 0 0-1.25H6.25Zm2.5 0a.625.625 0 1 0 0 1.25h.008a.625.625 0 1 0 0-1.25H8.75Zm2.5 0a.625.625 0 1 0 0 1.25h.008a.625.625 0 1 0 0-1.25H11.25Zm2.5 0a.625.625 0 1 0 0 1.25h.008a.625.625 0 1 0 0-1.25H13.75Z"
      fill="currentColor"
    />
  </svg>
</template>

<script setup lang="ts">
import { iconSizeStyle } from '~/utils/iconSize'

withDefaults(defineProps<{ size?: number | string }>(), {
  size: 20
})
</script>

<style scoped>
.g-icon-keyboard {
  display: block;
  flex-shrink: 0;
  color: inherit;
}
</style>
