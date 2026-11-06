<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :style="iconSizeStyle(size)"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    class="g-icon-minus-circle"
  >
    <path
      d="M17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C14.1421 17.5 17.5 14.1421 17.5 10ZM12.5 9.16667C12.9602 9.16667 13.3333 9.53976 13.3333 10C13.3333 10.4602 12.9602 10.8333 12.5 10.8333H7.5C7.03976 10.8333 6.66667 10.4602 6.66667 10C6.66667 9.53976 7.03976 9.16667 7.5 9.16667H12.5ZM19.1667 10C19.1667 15.0626 15.0626 19.1667 10 19.1667C4.93739 19.1667 0.833333 15.0626 0.833333 10C0.833333 4.93739 4.93739 0.833333 10 0.833333C15.0626 0.833333 19.1667 4.93739 19.1667 10Z"
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
.g-icon-minus-circle {
  display: block;
  flex-shrink: 0;
  color: inherit;
}
</style>
