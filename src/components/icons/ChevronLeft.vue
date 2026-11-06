<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :style="iconSizeStyle(size)"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    class="g-icon-chevron-left"
  >
    <path
      transform="translate(10 10) rotate(90) translate(-5.83325 -3.3333)"
      d="M10.2441 0.244078C10.5695 -0.0813592 11.097 -0.0813592 11.4225 0.244078C11.7479 0.569515 11.7479 1.09703 11.4225 1.42246L6.42246 6.42246C6.26618 6.57874 6.05428 6.6666 5.83327 6.6666C5.61226 6.6666 5.40036 6.57874 5.24408 6.42246L0.244078 1.42246C-0.0813592 1.09703 -0.0813592 0.569515 0.244078 0.244078C0.569515 -0.0813592 1.09703 -0.0813592 1.42246 0.244078L5.83327 4.65489L10.2441 0.244078Z"
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
.g-icon-chevron-left {
  display: block;
  flex-shrink: 0;
  color: inherit;
}
</style>
