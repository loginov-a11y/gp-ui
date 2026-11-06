<template>
  <span
    ref="triggerRef"
    class="g-info-tooltip"
    tabindex="0"
    :aria-label="ariaLabel"
    @mouseenter="show"
    @mouseleave="hide"
    @focus="show"
    @blur="hide"
    @click.stop
    @keydown.escape.prevent="hide"
  >
    <slot>
      <IconsInfoCircle :size="16" />
    </slot>
    <Teleport to="body">
      <span
        v-if="open"
        ref="bubbleRef"
        class="g-info-tooltip__bubble"
        :class="{ _ready: ready }"
        role="tooltip"
        :style="bubbleStyle"
      >
        <slot name="content">{{ text }}</slot>
      </span>
    </Teleport>
  </span>
</template>

<script setup lang="ts">import { ref, onUnmounted, nextTick } from 'vue'

import IconsInfoCircle from '~/components/icons/InfoCircle.vue'

defineProps<{
  text?: string
  ariaLabel?: string
}>()

const GAP = 8
const PAD = 8

const triggerRef = ref<HTMLElement | null>(null)
const bubbleRef = ref<HTMLElement | null>(null)
const open = ref(false)
const ready = ref(false)
const bubbleStyle = ref<Record<string, string>>({
  position: 'fixed',
  top: '0px',
  left: '0px'
})

function updatePosition() {
  const trigger = triggerRef.value
  const bubble = bubbleRef.value
  if (!open.value || !trigger || !bubble) return

  const rect = trigger.getBoundingClientRect()
  const width = bubble.offsetWidth
  const height = bubble.offsetHeight
  const maxLeft = Math.max(PAD, window.innerWidth - width - PAD)

  let left = rect.left + rect.width / 2 - width / 2
  left = Math.min(Math.max(PAD, left), maxLeft)

  let top = rect.top - height - GAP
  if (top < PAD) top = rect.bottom + GAP
  if (top + height > window.innerHeight - PAD) {
    top = Math.max(PAD, window.innerHeight - height - PAD)
  }

  bubbleStyle.value = {
    position: 'fixed',
    top: `${Math.round(top)}px`,
    left: `${Math.round(left)}px`,
    zIndex: 'var(--z-fixed)'
  }
  ready.value = true
}

function onReposition() {
  if (open.value) updatePosition()
}

function show() {
  if (open.value) return
  open.value = true
  window.addEventListener('scroll', onReposition, true)
  window.addEventListener('resize', onReposition)
  nextTick(() => {
    requestAnimationFrame(updatePosition)
  })
}

function hide() {
  open.value = false
  ready.value = false
  window.removeEventListener('scroll', onReposition, true)
  window.removeEventListener('resize', onReposition)
}

onUnmounted(hide)
</script>

<style scoped>
.g-info-tooltip {
  position: relative;
  display: inline-flex;
  color: #7f7f7f;
  cursor: default;
}

.g-info-tooltip__bubble {
  z-index: var(--z-fixed);
  box-sizing: border-box;
  width: max-content;
  /* ~50 символов при 12px укладываются в 2 строки без обрезки вбок */
  max-width: min(320px, calc(100vw - 16px));
  padding: 8px 12px;
  border-radius: 8px;
  background: #0b0b0b;
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: -0.24px;
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.15s ease;
}

.g-info-tooltip__bubble._ready {
  opacity: 1;
}
</style>
