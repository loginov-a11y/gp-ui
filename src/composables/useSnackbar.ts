import { computed, reactive, type ComputedRef } from 'vue'

/**
 * Очередь уведомлений для SnackbarHost — замена @nuxt/ui useToast.
 * API вызова совместим: add({ title, description, color, icon, duration }).
 */

export interface SnackbarItem {
  id: number
  title?: string
  description?: string
  /** 'success' | 'error' | 'info' — другие значения приводятся к 'info' */
  color?: string
  icon?: string
  duration?: number
}

interface SnackbarState {
  toasts: ComputedRef<SnackbarItem[]>
  add: (item: Omit<SnackbarItem, 'id'>) => SnackbarItem
  remove: (id: number) => void
  clear: () => void
}

const DEFAULT_DURATION = 4000
let nextId = 1

const toasts = reactive<SnackbarItem[]>([])
const timers = new Map<number, ReturnType<typeof setTimeout>>()

function add(item: Omit<SnackbarItem, 'id'>): SnackbarItem {
  const entry: SnackbarItem = { id: nextId++, duration: DEFAULT_DURATION, ...item }
  toasts.push(entry)

  const duration = entry.duration ?? DEFAULT_DURATION
  if (duration > 0) {
    timers.set(
      entry.id,
      setTimeout(() => remove(entry.id), duration)
    )
  }
  return entry
}

function remove(id: number) {
  const index = toasts.findIndex((t) => t.id === id)
  if (index !== -1) toasts.splice(index, 1)
  const timer = timers.get(id)
  if (timer) {
    clearTimeout(timer)
    timers.delete(id)
  }
}

function clear() {
  for (const t of [...toasts]) remove(t.id)
}

/**
 * Очередь общая на приложение (модульный синглтон) — как useToast в Nuxt UI.
 * SSR-изоляция не нужна: уведомления живут только на клиенте.
 */
export function useSnackbar(): SnackbarState {
  return {
    toasts: computed(() => toasts),
    add,
    remove,
    clear
  }
}
