import type { Ref } from 'vue'
import type { PageAction } from '~/types/ui'
import type { GButtonVariant } from '~/ui-kit/GButton.vue'

export function pageActionToGButtonVariant(
  variant?: PageAction['variant']
): Exclude<GButtonVariant, 'gray' | 'dark' | 'white'> {
  if (variant === 'outline' || variant === 'secondary') return 'secondary'
  if (variant === 'ghost') return 'ghost'
  if (variant === 'danger') return 'danger'
  return 'primary'
}

function pageActionFlag(value: boolean | Ref<boolean> | undefined): boolean {
  return typeof value === 'boolean' ? value : (value?.value ?? false)
}

export function pageActionLoading(loading: PageAction['loading']): boolean {
  return pageActionFlag(loading)
}

export function pageActionDisabled(disabled: PageAction['disabled']): boolean {
  return pageActionFlag(disabled)
}

export function pageActionLabel(action: PageAction, t: (key: string) => string): string {
  return action.labelKey ? t(action.labelKey) : (action.label ?? '')
}
