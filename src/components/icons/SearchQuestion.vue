<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :style="iconSizeStyle(size)"
    viewBox="0 0 48 48"
    fill="none"
    aria-hidden="true"
    class="g-icon-search-question"
  >
    <path
      transform="translate(4 4)"
      d="M38 38L30 30M13.6308 13.5045C13.8124 12.988 14.0853 12.5133 14.4326 12.1008C14.7588 11.7132 15.1507 11.3806 15.5942 11.12C16.5097 10.5819 17.5861 10.3852 18.6328 10.5647C19.6794 10.7443 20.6288 11.2884 21.3126 12.1008C21.9965 12.9132 22.3708 13.9414 22.3692 15.0034C22.3692 18.0011 17.8726 19.5 17.8726 19.5V19.9141M17.9308 25.5H17.9508M34 18C34 26.8366 26.8366 34 18 34C9.16344 34 2 26.8366 2 18C2 9.16344 9.16344 2 18 2C26.8366 2 34 9.16344 34 18Z"
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
.g-icon-search-question {
  display: block;
  flex-shrink: 0;
  color: inherit;
}
</style>
