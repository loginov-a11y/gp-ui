<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :style="iconSizeStyle(size)"
    viewBox="0 0 18 18"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3.25 5.25H14.75C15.0261 5.25 15.25 5.02614 15.25 4.75C15.25 4.47386 15.0261 4.25 14.75 4.25H3.25C2.97386 4.25 2.75 4.47386 2.75 4.75C2.75 5.02614 2.97386 5.25 3.25 5.25ZM3.25 9.75H14.75C15.0261 9.75 15.25 9.52614 15.25 9.25C15.25 8.97386 15.0261 8.75 14.75 8.75H3.25C2.97386 8.75 2.75 8.97386 2.75 9.25C2.75 9.52614 2.97386 9.75 3.25 9.75ZM3.25 14.25H14.75C15.0261 14.25 15.25 14.0261 15.25 13.75C15.25 13.4739 15.0261 13.25 14.75 13.25H3.25C2.97386 13.25 2.75 13.4739 2.75 13.75C2.75 14.0261 2.97386 14.25 3.25 14.25Z"
      fill="currentColor"
    />
  </svg>
</template>

<script setup lang="ts">
import { iconSizeStyle } from '~/utils/iconSize'

withDefaults(defineProps<{ size?: number | string }>(), {
  size: 18
})
</script>
