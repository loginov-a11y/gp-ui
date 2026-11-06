<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="svgWidth"
    :height="svgHeight"
    :style="iconSizeStyle(svgWidth, svgHeight)"
    viewBox="0 0 22 20"
    fill="none"
    aria-hidden="true"
    class="g-icon-inbox"
  >
    <path
      d="M20 11.5H17.0156C16.8112 11.5 16.6277 11.6246 16.5518 11.8145L16.3057 12.4287C15.926 13.3777 15.0066 14 13.9844 14H8.01562C6.99343 14 6.07404 13.3777 5.69434 12.4287L5.44824 11.8145C5.3723 11.6246 5.18882 11.5 4.98438 11.5H2V16C2 17.1046 2.89543 18 4 18H18C19.1046 18 20 17.1046 20 16V11.5ZM6.99219 2C6.18755 2 5.46073 2.48208 5.14844 3.22363L2.50586 9.5H4.98438C6.00657 9.5 6.92596 10.1223 7.30566 11.0713L7.55176 11.6855C7.6277 11.8754 7.81118 12 8.01562 12H13.9844C14.1888 12 14.3723 11.8754 14.4482 11.6855L14.6943 11.0713C15.074 10.1223 15.9934 9.5 17.0156 9.5H19.4941L16.8516 3.22363C16.5393 2.48208 15.8124 2 15.0078 2H6.99219ZM22 16C22 18.2091 20.2091 20 18 20H4C1.79086 20 0 18.2091 0 16V11.1055C4.72658e-05 10.5725 0.106663 10.0449 0.313477 9.55371L3.30566 2.44824C3.93019 0.964986 5.38281 0 6.99219 0H15.0078C16.6172 0 18.0698 0.964987 18.6943 2.44824L21.6865 9.55371C21.8933 10.0449 22 10.5725 22 11.1055V16Z"
      fill="currentColor"
    />
  </svg>
</template>

<script setup lang="ts">import { computed } from 'vue'

import { iconSizeStyle } from '~/utils/iconSize'

const props = withDefaults(
  defineProps<{
    size?: number | string
    width?: number | string
    height?: number | string
  }>(),
  {
    width: 22,
    height: 20
  }
)

const svgWidth = computed(() => props.size ?? props.width)
const svgHeight = computed(() => props.size ?? props.height)
</script>

<style scoped>
.g-icon-inbox {
  display: block;
  flex-shrink: 0;
  color: inherit;
}
</style>
