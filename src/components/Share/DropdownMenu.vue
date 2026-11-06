<template>
  <div ref="dropdownRef" class="dropdown" :class="{ _open: isOpen }">
    <!-- Trigger -->
    <div ref="triggerRef" class="dropdown__trigger">
      <slot name="trigger" :is-open="isOpen" :toggle="toggle" :close="close" />
    </div>

    <!-- Menu. v-if на самом Teleport: с v-if на внутреннем div SSR
         отдаёт teleport-якорь, а клиент ждёт комментарий — mismatch. -->
    <Transition name="dropdown">
      <Teleport v-if="isOpen" to="body">
        <div ref="menuRef" class="dropdown__menu" :style="menuPosition" @click.stop>
          <slot name="menu" :close="close" />
        </div>
      </Teleport>
    </Transition>

    <!-- Backdrop -->
    <Transition name="backdrop">
      <div v-if="isOpen" class="dropdown__backdrop" @click="close" />
    </Transition>
  </div>
</template>

<script setup lang="ts">import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'

import { Teleport } from 'vue'

interface Props {
  modelValue?: boolean
  closeOnRouteChange?: boolean
  closeOnEscape?: boolean
}

interface Emits {
  (e: 'update:modelValue', value: boolean): void
  (e: 'open'): void
  (e: 'close'): void
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  closeOnRouteChange: true,
  closeOnEscape: true
})

const emit = defineEmits<Emits>()

// Internal state
const isOpen = ref(props.modelValue)

// Viewport positioning
const dropdownRef = ref<HTMLElement>()
const triggerRef = ref<HTMLElement>()
const menuRef = ref<HTMLElement>()
const menuPosition = ref({
  top: 'auto',
  bottom: 'auto',
  left: 'auto',
  right: 'auto',
  transform: 'none'
})

// Calculate optimal position for dropdown
const calculatePosition = () => {
  if (!dropdownRef.value || !triggerRef.value) return

  const triggerRect = triggerRef.value.getBoundingClientRect()
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight

  // Default dropdown dimensions
  const dropdownWidth = 256 // 16em = 256px
  const dropdownHeight = 200 // estimated height

  const spaceBelow = viewportHeight - triggerRect.bottom
  const spaceAbove = triggerRect.top
  const spaceRight = viewportWidth - triggerRect.left
  const spaceLeft = triggerRect.right

  // Determine vertical position (coordinates relative to body/viewport)
  let top = 'auto'
  let bottom = 'auto'

  if (spaceBelow < dropdownHeight && spaceAbove > spaceBelow) {
    // Position above trigger
    bottom = `${viewportHeight - triggerRect.top + 8}px`
  } else {
    // Position below trigger (default)
    top = `${triggerRect.bottom + 8}px`
  }

  // Determine horizontal position (coordinates relative to body/viewport)
  let left = 'auto'
  let right = 'auto'

  if (spaceRight < dropdownWidth && spaceLeft > spaceRight) {
    // Position to the left
    right = `${viewportWidth - triggerRect.right}px`
  } else {
    // Position to the right (default)
    left = `${triggerRect.left}px`
  }

  // Apply positioning
  menuPosition.value = {
    top,
    bottom,
    left,
    right,
    transform: 'none'
  }
}

// Watch modelValue changes
watch(
  () => props.modelValue,
  (newValue) => {
    isOpen.value = newValue
  }
)

// Watch internal state changes
watch(isOpen, (newValue) => {
  emit('update:modelValue', newValue)
  if (newValue) {
    emit('open')
    // Calculate position when opening
    nextTick(() => {
      calculatePosition()
    })
  } else {
    emit('close')
  }
})

// Toggle dropdown
const toggle = () => {
  isOpen.value = !isOpen.value
}

// Close dropdown
const close = () => {
  isOpen.value = false
}

const route = useRoute()

// Close on route change
if (props.closeOnRouteChange) {
  watch(
    () => route.path,
    () => {
      close()
    }
  )
}

const isClient = typeof document !== 'undefined'

// Close on escape key
if (props.closeOnEscape && isClient) {
  onMounted(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close()
      }
    }

    document.addEventListener('keydown', handleEscape)

    onUnmounted(() => {
      document.removeEventListener('keydown', handleEscape)
    })
  })
}

// Close on click outside (trigger or menu)
const handleClickOutside = (e: MouseEvent) => {
  const target = e.target as Node
  if (
    isOpen.value &&
    triggerRef.value &&
    !triggerRef.value.contains(target) &&
    menuRef.value &&
    !menuRef.value.contains(target)
  ) {
    close()
  }
}

const removeClickOutsideListener = () => {
  if (isClient) {
    document.removeEventListener('mousedown', handleClickOutside)
  }
}

watch(isOpen, (open) => {
  if (!isClient) return
  if (open) {
    nextTick(() => {
      document.addEventListener('mousedown', handleClickOutside)
    })
  } else {
    removeClickOutsideListener()
  }
}, { immediate: true })

onUnmounted(() => {
  removeClickOutsideListener()
})

// Handle window resize
onMounted(() => {
  if (typeof window === 'undefined') return
  const handleResize = () => {
    if (isOpen.value) {
      calculatePosition()
    }
  }

  window.addEventListener('resize', handleResize)

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
})
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown__trigger {
  cursor: pointer;
  display: inline-block;
}

.dropdown__menu {
  position: fixed;
  background: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  min-width: 16em;
  z-index: var(--z-dropdown);
  overflow: hidden;
}

.dropdown__backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: calc(var(--z-dropdown) - 1);
  background: transparent;
}

/* Transitions */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all var(--transition-normal);
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-0.5em);
}

.backdrop-enter-active,
.backdrop-leave-active {
  transition: opacity var(--transition-normal);
}

.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}

/* Mobile Styles */
@media screen and (max-width: 992px) {
  .dropdown__menu {
    min-width: auto;
    max-width: calc(100vw - 2em);
  }
}
</style>
