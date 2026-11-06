<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :style="iconSizeStyle(size)"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    class="g-icon-keyboard-02"
  >
    <rect
      x="2.75"
      y="4.75"
      width="14.5"
      height="10.5"
      rx="2"
      stroke="currentColor"
      stroke-width="1.5"
    />
    <rect x="5.25" y="7.25" width="1.5" height="1.5" rx="0.25" fill="currentColor" />
    <rect x="8.25" y="7.25" width="1.5" height="1.5" rx="0.25" fill="currentColor" />
    <rect x="11.25" y="7.25" width="1.5" height="1.5" rx="0.25" fill="currentColor" />
    <rect x="14.25" y="7.25" width="1.5" height="1.5" rx="0.25" fill="currentColor" />
    <rect x="6.5" y="11.25" width="7" height="1.5" rx="0.25" fill="currentColor" />
  </svg>
</template>

<script setup lang="ts">
import { iconSizeStyle } from '~/utils/iconSize'

withDefaults(defineProps<{ size?: number | string }>(), {
  size: 20
})
</script>

<style scoped>
.g-icon-keyboard-02 {
  display: block;
  flex-shrink: 0;
  color: inherit;
}
</style>
