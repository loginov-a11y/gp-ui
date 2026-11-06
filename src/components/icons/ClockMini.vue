<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :style="iconSizeStyle(size)"
    viewBox="0 0 11 11"
    fill="none"
    aria-hidden="true"
    class="g-icon-clock-mini"
  >
    <path
      d="M10 5.5C10 3.01472 7.98528 1 5.5 1C3.01472 1 1 3.01472 1 5.5C1 7.98528 3.01472 10 5.5 10C7.98528 10 10 7.98528 10 5.5ZM5 2.75C5 2.47386 5.22386 2.25 5.5 2.25C5.77614 2.25 6 2.47386 6 2.75V5.29297L7.35352 6.64648C7.54878 6.84175 7.54878 7.15825 7.35352 7.35352C7.15825 7.54878 6.84175 7.54878 6.64648 7.35352L5.14648 5.85352C5.05272 5.75975 5 5.63261 5 5.5V2.75ZM11 5.5C11 8.53757 8.53757 11 5.5 11C2.46243 11 0 8.53757 0 5.5C0 2.46243 2.46243 0 5.5 0C8.53757 0 11 2.46243 11 5.5Z"
      fill="currentColor"
    />
  </svg>
</template>

<script setup lang="ts">
import { iconSizeStyle } from '~/utils/iconSize'

withDefaults(defineProps<{ size?: number | string }>(), {
  size: 11
})
</script>

<style scoped>
.g-icon-clock-mini {
  display: block;
  flex-shrink: 0;
  color: inherit;
}
</style>
