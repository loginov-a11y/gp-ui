<template>
  <Teleport to="body">
    <Transition name="g-picker-sheet">
      <div v-if="open" class="ui-kit g-picker-sheet" role="dialog" aria-modal="true">
        <button
          type="button"
          class="g-picker-sheet__backdrop"
          :style="sheetBackdropStyle"
          :aria-label="$t('common.close')"
          @click="close"
        />
        <div ref="panelRef" class="g-picker-sheet__panel" :style="sheetPanelStyle" @click.stop>
          <div
            class="g-picker-sheet__head"
            @pointerdown="onSheetPointerDown"
            @pointermove="onSheetPointerMove"
            @pointerup="onSheetPointerEnd"
            @pointercancel="onSheetPointerEnd"
          >
            <span class="g-picker-sheet__handle" aria-hidden="true" />
            <button
              type="button"
              class="g-picker-sheet__close"
              :aria-label="$t('common.close')"
              @click="close"
            >
              <IconsClose :size="12" />
            </button>
          </div>

          <div class="g-picker-sheet__body">
            <slot />
          </div>

          <div class="g-picker-sheet__footer">
            <GButton variant="primary" size="lg" block @click="emit('save')">
              {{ saveLabel || $t('common.save') }}
            </GButton>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import GButton from '~/ui-kit/GButton.vue'
import IconsClose from '~/components/icons/Close.vue'
import { computed, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{
  open: boolean
  /** Текст кнопки в футере, по умолчанию — common.save. */
  saveLabel?: string
}>()

const emit = defineEmits<{
  close: []
  save: []
}>()

const route = useRoute()

const close = () => emit('close')

watch(
  () => props.open,
  (open) => {
    if (typeof window === 'undefined') return
    document.body.style.overflow = open ? 'hidden' : ''
  }
)

watch(
  () => route.path,
  () => {
    if (props.open) close()
  }
)

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.open) close()
}

// Свайп вниз за шапку шторки — то же поведение, что у мобильного сайдбара.
const panelRef = ref<HTMLElement | null>(null)
const dragY = ref(0)
const sheetDragging = ref(false)
const sheetAnimating = ref(false)
let dragStartY = 0

const sheetPanelStyle = computed(() => {
  if (!sheetDragging.value && !sheetAnimating.value) return undefined
  return {
    transform: `translateY(${dragY.value}px)`,
    transition: sheetAnimating.value ? 'transform 0.24s ease-out' : undefined
  }
})

const sheetBackdropStyle = computed(() => {
  if (!sheetDragging.value && !sheetAnimating.value) return undefined
  return { opacity: String(1 - Math.min(1, dragY.value / 240)) }
})

const onSheetPointerDown = (event: PointerEvent) => {
  if (event.button !== 0) return
  if ((event.target as HTMLElement).closest('.g-picker-sheet__close')) return
  ;(event.currentTarget as HTMLElement).setPointerCapture(event.pointerId)
  dragStartY = event.clientY
  sheetDragging.value = true
  sheetAnimating.value = false
}

const onSheetPointerMove = (event: PointerEvent) => {
  if (!sheetDragging.value) return
  dragY.value = Math.max(0, event.clientY - dragStartY)
}

const onSheetPointerEnd = () => {
  if (!sheetDragging.value) return
  sheetDragging.value = false
  sheetAnimating.value = true
  const panelHeight = panelRef.value?.offsetHeight ?? 0
  if (dragY.value > 90 || (panelHeight > 0 && dragY.value > panelHeight * 0.3)) {
    dragY.value = Math.max(dragY.value, panelHeight)
    close()
  } else {
    dragY.value = 0
  }
  window.setTimeout(() => {
    sheetAnimating.value = false
    dragY.value = 0
  }, 260)
}

watch(
  () => props.open,
  (open) => {
    if (typeof window === 'undefined') return
    if (open) window.addEventListener('keydown', onKeydown)
    else window.removeEventListener('keydown', onKeydown)
  },
  { immediate: true }
)

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  if (typeof window !== 'undefined') document.body.style.overflow = ''
})
</script>

<style scoped>
.g-picker-sheet {
  position: fixed;
  inset: 0;
  z-index: 90;
  display: flex;
  align-items: flex-end;
}

.g-picker-sheet__backdrop {
  position: absolute;
  inset: 0;
  border: none;
  padding: 0;
  background: rgb(0 0 0 / 0.4);
  cursor: pointer;
}

.g-picker-sheet__panel {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: min(92dvh, 100%);
  padding-bottom: env(safe-area-inset-bottom);
  border-radius: 20px 20px 0 0;
  background: #fff;
  overflow: hidden;
}

.g-picker-sheet__head {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 48px;
  padding-top: 4px;
  flex-shrink: 0;
  cursor: grab;
  touch-action: none;
  user-select: none;
}

.g-picker-sheet__handle {
  width: 40px;
  height: 5px;
  border-radius: 100px;
  background: #d9d9d9;
}

.g-picker-sheet__close {
  position: absolute;
  top: 12px;
  right: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: #f7f7f7;
  color: #0b0b0b;
  cursor: pointer;
}

.g-picker-sheet__body {
  min-height: 0;
  overflow: auto;
}

.g-picker-sheet__footer {
  flex-shrink: 0;
  padding: 12px 16px;
  border-top: 1px solid #d9d9d9;
}

.g-picker-sheet__body :deep(.g-date-picker) {
  display: block;
  width: 100%;
  max-width: 100%;
}

.g-picker-sheet__body :deep(.dp__menu.g-date-picker__menu) {
  width: 100%;
  min-width: 0;
  border: none;
  box-shadow: none;
}

.g-picker-sheet-enter-active,
.g-picker-sheet-leave-active {
  transition: opacity 0.22s ease;
}

.g-picker-sheet-enter-active .g-picker-sheet__panel,
.g-picker-sheet-leave-active .g-picker-sheet__panel {
  transition: transform 0.28s cubic-bezier(0.32, 0.72, 0, 1);
}

.g-picker-sheet-enter-from,
.g-picker-sheet-leave-to {
  opacity: 0;
}

.g-picker-sheet-enter-from .g-picker-sheet__panel,
.g-picker-sheet-leave-to .g-picker-sheet__panel {
  transform: translateY(100%);
}

@media (prefers-reduced-motion: reduce) {
  .g-picker-sheet__panel,
  .g-picker-sheet-enter-active,
  .g-picker-sheet-leave-active,
  .g-picker-sheet-enter-active .g-picker-sheet__panel,
  .g-picker-sheet-leave-active .g-picker-sheet__panel {
    transition: none;
  }
}
</style>
