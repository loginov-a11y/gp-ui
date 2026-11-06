<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :style="iconSizeStyle(size)"
    viewBox="0 0 11 11"
    fill="none"
    aria-hidden="true"
    class="g-icon-check-circle"
  >
    <path
      d="M10 5.5C10 3.01472 7.98528 1 5.5 1C3.01472 1 1 3.01472 1 5.5C1 7.98528 3.01472 10 5.5 10C7.98528 10 10 7.98528 10 5.5ZM7.16992 3.61035C7.35163 3.40246 7.66757 3.38085 7.87549 3.5625C8.08337 3.7442 8.10449 4.06015 7.92285 4.26807L5.19434 7.38965C5.09939 7.49828 4.96214 7.56104 4.81787 7.56104C4.6736 7.56104 4.53635 7.49828 4.44141 7.38965L3.07715 5.8291C2.89543 5.6212 2.91662 5.30527 3.12451 5.12354C3.33242 4.94181 3.64834 4.96301 3.83008 5.1709L4.81787 6.30078L7.16992 3.61035ZM11 5.5C11 8.53757 8.53757 11 5.5 11C2.46243 11 0 8.53757 0 5.5C0 2.46243 2.46243 0 5.5 0C8.53757 0 11 2.46243 11 5.5Z"
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
.g-icon-check-circle {
  display: block;
  flex-shrink: 0;
  color: inherit;
}
</style>
