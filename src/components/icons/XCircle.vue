<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :style="iconSizeStyle(size)"
    viewBox="0 0 11 11"
    fill="none"
    aria-hidden="true"
    class="g-icon-x-circle"
  >
    <path
      d="M10 5.5C10 3.01472 7.98528 1 5.5 1C3.01472 1 1 3.01472 1 5.5C1 7.98528 3.01472 10 5.5 10C7.98528 10 10 7.98528 10 5.5ZM6.39648 3.89648C6.59175 3.70122 6.90825 3.70122 7.10352 3.89648C7.29878 4.09175 7.29878 4.40825 7.10352 4.60352L6.20703 5.5L7.10352 6.39648C7.29878 6.59175 7.29878 6.90825 7.10352 7.10352C6.90825 7.29878 6.59175 7.29878 6.39648 7.10352L5.5 6.20703L4.60352 7.10352C4.40825 7.29878 4.09175 7.29878 3.89648 7.10352C3.70122 6.90825 3.70122 6.59175 3.89648 6.39648L4.79297 5.5L3.89648 4.60352C3.70122 4.40825 3.70122 4.09175 3.89648 3.89648C4.09175 3.70122 4.40825 3.70122 4.60352 3.89648L5.5 4.79297L6.39648 3.89648ZM11 5.5C11 8.53757 8.53757 11 5.5 11C2.46243 11 0 8.53757 0 5.5C0 2.46243 2.46243 0 5.5 0C8.53757 0 11 2.46243 11 5.5Z"
      fill="currentColor"
    />
  </svg>
</template>

<script setup lang="ts">
import { iconSizeStyle } from '~/utils/iconSize'

withDefaults(defineProps<{ size?: number | string }>(), {
  size: 12
})
</script>

<style scoped>
.g-icon-x-circle {
  display: block;
  flex-shrink: 0;
  color: inherit;
}
</style>
