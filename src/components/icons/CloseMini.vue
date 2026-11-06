<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :style="iconSizeStyle(size)"
    viewBox="0 0 6 6"
    fill="none"
    aria-hidden="true"
    class="g-icon-close-mini"
  >
    <path
      d="M5.14645 0.146447C5.34171 -0.0488155 5.65822 -0.0488155 5.85348 0.146447C6.04874 0.341709 6.04874 0.658216 5.85348 0.853478L3.70699 2.99996L5.85348 5.14645C6.04874 5.34171 6.04874 5.65822 5.85348 5.85348C5.65822 6.04874 5.34171 6.04874 5.14645 5.85348L2.99996 3.70699L0.853478 5.85348C0.658216 6.04874 0.341709 6.04874 0.146447 5.85348C-0.0488155 5.65822 -0.0488155 5.34171 0.146447 5.14645L2.29293 2.99996L0.146447 0.853478C-0.0488155 0.658216 -0.0488155 0.341709 0.146447 0.146447C0.341709 -0.0488155 0.658216 -0.0488155 0.853478 0.146447L2.99996 2.29293L5.14645 0.146447Z"
      fill="currentColor"
    />
  </svg>
</template>

<script setup lang="ts">
import { iconSizeStyle } from '~/utils/iconSize'

withDefaults(defineProps<{ size?: number | string }>(), {
  size: 6
})
</script>

<style scoped>
.g-icon-close-mini {
  display: block;
  flex-shrink: 0;
  color: inherit;
}
</style>
