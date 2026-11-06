<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :style="iconSizeStyle(size)"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    class="g-icon-arrow-narrow-right"
  >
    <path
      transform="translate(2.58335 4.25)"
      d="M0.75 5.75H14.0833M9.08333 10.75L14.0833 5.75L9.08333 0.75"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
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
.g-icon-arrow-narrow-right {
  display: block;
  flex-shrink: 0;
  color: inherit;
}
</style>
