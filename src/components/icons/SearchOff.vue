<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :style="iconSizeStyle(size)"
    viewBox="0 0 44 44"
    fill="none"
    aria-hidden="true"
    class="g-icon-search-off"
  >
    <path
      d="M33 10.6706C30.0958 6.63084 25.3551 4 20 4C11.1634 4 4 11.1634 4 20C4 25.3551 6.63084 30.0958 10.6706 33M35.8762 18C35.9579 18.6552 36 19.3227 36 20C36 28.8366 28.8366 36 20 36C19.3227 36 18.6552 35.9579 18 35.8762M40 40L32 32M2 42L42 2"
      stroke="currentColor"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">
import { iconSizeStyle } from '~/utils/iconSize'

withDefaults(defineProps<{ size?: number | string }>(), {
  size: 48
})
</script>

<style scoped>
.g-icon-search-off {
  display: block;
  flex-shrink: 0;
  color: inherit;
}
</style>
