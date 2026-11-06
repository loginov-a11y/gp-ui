<template>
  <GMenuButton
    :size="size"
    :selected="isActive"
    :disabled="disabled"
    @click="handleClick"
  >
    <template v-if="icon" #leading>
      <component :is="icon" />
    </template>
    {{ title }}
  </GMenuButton>
</template>

<script setup lang="ts">import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import type { Component } from 'vue'
import type { GMenuButtonSize } from '~/ui-kit/GMenuButton.vue'
import GMenuButton from '~/ui-kit/GMenuButton.vue'

interface Props {
  to: string
  title: string
  icon?: Component
  disabled?: boolean
  size?: GMenuButtonSize
}

interface Emits {
  (e: 'click'): void
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  size: 'sm'
})

const emit = defineEmits<Emits>()
const route = useRoute()
const router = useRouter()

const isActive = computed(() => {
  if (props.to === '/') return route.path === '/'
  return route.path === props.to || route.path.startsWith(`${props.to}/`)
})

const handleClick = async () => {
  if (props.disabled) return
  emit('click')
  await router.push(props.to)
}
</script>
