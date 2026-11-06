<template>
  <div class="g-context-menu" :class="props.class" role="menu">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { normalizeClass, type GClassValue } from '~/utils/classNames'
interface Props {
  class?: GClassValue
}

const props = withDefaults(defineProps<Props>(), {
  class: ''
})
</script>

<style scoped>
.g-context-menu {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 192px;
  padding: 4px;
  border: 1.5px solid #d9d9d9;
  border-radius: 16px;
  background: var(--g-button-white);
  box-shadow:
    0 3px 7px rgb(0 0 0 / 0.03),
    0 12px 12px rgb(0 0 0 / 0.03),
    0 28px 17px rgb(0 0 0 / 0.02),
    0 49px 20px rgb(0 0 0 / 0.01);
}
</style>
