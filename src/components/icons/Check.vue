<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :style="iconSizeStyle(size)"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    class="g-icon-check"
  >
    <!-- Лист 18×13 в кадре 24×24, как в макете: inset 12.5% / 20.83% / 12.5% / 25%. -->
    <path
      transform="translate(3 5)"
      d="M16.2822 0.303649C16.6666 -0.0927012 17.2998 -0.102262 17.6962 0.282165C18.0926 0.666649 18.1021 1.29979 17.7177 1.69623L7.05072 12.6962C6.8624 12.8903 6.60336 12.9999 6.33295 12.9999C6.06251 12.9999 5.80344 12.8904 5.61517 12.6962L0.282165 7.19623C-0.102262 6.79979 -0.0927012 6.16665 0.303649 5.78217C0.700089 5.39774 1.33323 5.4073 1.71771 5.80365L6.33295 10.5634L16.2822 0.303649Z"
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
.g-icon-check {
  display: block;
  flex-shrink: 0;
  color: inherit;
}
</style>
