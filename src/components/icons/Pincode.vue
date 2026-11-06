<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :style="iconSizeStyle(size)"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    class="g-icon-pincode"
  >
    <rect
      x="2.75"
      y="5.75"
      width="14.5"
      height="8.5"
      rx="2.5"
      stroke="currentColor"
      stroke-width="1.5"
    />
    <circle cx="7" cy="10" r="1.1" fill="currentColor" />
    <circle cx="10" cy="10" r="1.1" fill="currentColor" />
    <circle cx="13" cy="10" r="1.1" fill="currentColor" />
  </svg>
</template>

<script setup lang="ts">
import { iconSizeStyle } from '~/utils/iconSize'

withDefaults(defineProps<{ size?: number | string }>(), {
  size: 20
})
</script>

<style scoped>
.g-icon-pincode {
  display: block;
  flex-shrink: 0;
  color: inherit;
}
</style>
