<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :style="iconSizeStyle(size)"
    viewBox="0 0 20 19"
    fill="none"
    aria-hidden="true"
    class="g-icon-settings"
  >
    <path
      d="M4.5 10C6.64145 10 8.43185 11.4962 8.88672 13.5H19C19.5523 13.5 20 13.9477 20 14.5C20 15.0523 19.5523 15.5 19 15.5H8.88672C8.43185 17.5038 6.64145 19 4.5 19C2.01472 19 0 16.9853 0 14.5C0 12.0147 2.01472 10 4.5 10ZM18 4.5C18 3.11929 16.8807 2 15.5 2C14.1193 2 13 3.11929 13 4.5C13 5.88071 14.1193 7 15.5 7C16.8807 7 18 5.88071 18 4.5ZM2 14.5C2 15.8807 3.11929 17 4.5 17C5.88071 17 7 15.8807 7 14.5C7 13.1193 5.88071 12 4.5 12C3.11929 12 2 13.1193 2 14.5ZM20 4.5C20 6.98528 17.9853 9 15.5 9C13.3585 9 11.5682 7.5038 11.1133 5.5H1C0.447715 5.5 0 5.05228 0 4.5C0 3.94772 0.447715 3.5 1 3.5H11.1133C11.5682 1.4962 13.3585 0 15.5 0C17.9853 0 20 2.01472 20 4.5Z"
      fill="currentColor"
    />
  </svg>
</template>

<script setup lang="ts">
import { iconSizeStyle } from '~/utils/iconSize'

withDefaults(defineProps<{ size?: number | string }>(), {
  size: 24
})
</script>

<style scoped>
.g-icon-settings {
  display: block;
  flex-shrink: 0;
  color: inherit;
}
</style>
