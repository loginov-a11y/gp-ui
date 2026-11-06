import { computed, getCurrentInstance, ref, unref, type MaybeRef, type Ref } from 'vue'
import type { PageAction } from '~/types/ui'

interface PageHeaderState {
  title: string
  subtitle?: string
  actions: PageAction[]
}

interface PageHeaderStore {
  title: Ref<string>
  subtitle: Ref<string | undefined>
  actions: Ref<PageAction[]>
}

const createStore = (): PageHeaderStore => ({
  title: ref(''),
  subtitle: ref<string | undefined>(undefined),
  actions: ref<PageAction[]>([])
})

const APP_KEY = '__gpPageHeader'
const fallback = createStore()

/**
 * Actions содержат onClick/icon — поэтому стейт живёт не в сериализуемом
 * useState, а на инстансе приложения (SSR-изоляция через appContext).
 */
const getStore = (): PageHeaderStore => {
  const app = getCurrentInstance()?.appContext.app as
    | (Record<string, unknown> & { [APP_KEY]?: PageHeaderStore })
    | undefined
  if (!app) return fallback
  if (!app[APP_KEY]) app[APP_KEY] = createStore()
  return app[APP_KEY]!
}

export const usePageHeader = () => {
  const { title, subtitle, actions } = getStore()

  const state = computed<PageHeaderState>(() => ({
    title: title.value,
    subtitle: subtitle.value,
    actions: actions.value
  }))

  const setTitle = (value: MaybeRef<string>) => {
    title.value = unref(value)
  }

  const setSubtitle = (value?: MaybeRef<string | undefined>) => {
    subtitle.value = value ? unref(value) : undefined
  }

  const setActions = (value: PageAction[]) => {
    actions.value = [...value]
  }

  const addAction = (action: PageAction) => {
    actions.value = [...actions.value, action]
  }

  const removeAction = (key: string) => {
    actions.value = actions.value.filter((a) => a.key !== key)
  }

  /** Сброс только title/subtitle (при смене роута layout подставляет заголовки из meta). */
  const clearTitleSubtitle = () => {
    title.value = ''
    subtitle.value = undefined
  }

  const clear = () => {
    title.value = ''
    subtitle.value = undefined
    actions.value = []
  }

  return {
    state,
    setTitle,
    setSubtitle,
    setActions,
    addAction,
    removeAction,
    clearTitleSubtitle,
    clear
  }
}
