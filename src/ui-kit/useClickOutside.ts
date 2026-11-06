import { unref, onMounted, onUnmounted } from 'vue'
import type { Ref } from 'vue'
export function useClickOutside(
  target: Ref<HTMLElement | null | undefined>,
  onOutside: () => void
) {
  const handler = (event: MouseEvent) => {
    const element = unref(target)
    if (!element?.contains(event.target as Node)) {
      onOutside()
    }
  }

  onMounted(() => document.addEventListener('mousedown', handler))
  onUnmounted(() => document.removeEventListener('mousedown', handler))
}
