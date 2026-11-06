<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :style="iconSizeStyle(size)"
    viewBox="0 0 9 7"
    fill="none"
    aria-hidden="true"
    class="g-icon-check-mini"
  >
    <path
      d="M8.14108 0.151825C8.33332 -0.0463506 8.64989 -0.0511308 8.84811 0.141082C9.04629 0.333324 9.05107 0.649894 8.85886 0.848114L3.52536 6.34811C3.4312 6.44513 3.30168 6.49997 3.16647 6.49997C3.03126 6.49992 2.90172 6.44519 2.80759 6.34811L0.141082 3.59811C-0.0511308 3.39989 -0.0463506 3.08332 0.151825 2.89108C0.350044 2.69887 0.666614 2.70365 0.858856 2.90182L3.16647 5.28171L8.14108 0.151825Z"
      fill="currentColor"
    />
  </svg>
</template>

<script setup lang="ts">
import { iconSizeStyle } from '~/utils/iconSize'

withDefaults(defineProps<{ size?: number | string }>(), {
  size: 7
})
</script>

<style scoped>
.g-icon-check-mini {
  display: block;
  flex-shrink: 0;
  color: inherit;
}
</style>
