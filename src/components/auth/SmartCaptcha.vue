<template>
  <div
    v-if="sitekey"
    ref="containerRef"
    class="smart-captcha"
    style="height: 100px"
  />
</template>

<script setup lang="ts">import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'

/**
 * Yandex SmartCaptcha — advanced render через JS.
 *
 * Ошибки outline только из событий виджета:
 * subscribe(network-error | javascript-error | token-expired) + catch load/render.
 *
 * Не смотрим `/check` status=failed — так отвечает обычный челлендж (pow), капча при этом работает.
 * `widgetId === 0` — валидный id первого виджета.
 */
import { loadSmartCaptcha, toSmartCaptchaHl } from '~/utils/smartCaptchaLoader'

export type SmartCaptchaExpose = {
  reset: () => void
}

const model = defineModel<string>({ default: '' })
const errorModel = defineModel<boolean>('error', { default: false })

const { locale } = useI18n()

// Публичный ключ капчи — параметр: у потребителя он живёт в своём runtimeConfig/env.
const { sitekey = '' } = defineProps<{ sitekey?: string }>()
const sitekeyValue = computed(() => sitekey)
const containerRef = ref<HTMLElement | null>(null)

let widgetId: string | number | undefined
const unsubscribers: Array<() => void> = []
let mountGeneration = 0

const setError = (value: boolean) => {
  errorModel.value = value
  if (value) model.value = ''
}

const destroyWidget = () => {
  while (unsubscribers.length) unsubscribers.pop()?.()
  if (widgetId !== undefined) {
    window.smartCaptcha?.destroy?.(widgetId)
    widgetId = undefined
  }
  if (containerRef.value) containerRef.value.innerHTML = ''
}

const mountWidget = async (): Promise<void> => {
  if (!sitekeyValue.value || typeof window === 'undefined' || !containerRef.value) return

  const generation = ++mountGeneration
  destroyWidget()
  model.value = ''

  try {
    const api = await loadSmartCaptcha()
    await nextTick()
    if (generation !== mountGeneration || !containerRef.value) return

    containerRef.value.innerHTML = ''
    widgetId = api.render(containerRef.value, {
      sitekey: sitekeyValue.value,
      hl: toSmartCaptchaHl(String(locale.value)),
      callback: (token: string) => {
        if (generation !== mountGeneration) return
        setError(false)
        model.value = token
      }
    })

    if (api.subscribe && widgetId !== undefined) {
      const onWidgetError = () => {
        if (generation === mountGeneration) setError(true)
      }
      unsubscribers.push(
        api.subscribe(widgetId, 'network-error', onWidgetError),
        api.subscribe(widgetId, 'javascript-error', onWidgetError),
        api.subscribe(widgetId, 'token-expired', onWidgetError)
      )
    }
  } catch {
    if (generation === mountGeneration) setError(true)
  }
}

const reset = () => {
  setError(false)
  model.value = ''
  if (widgetId !== undefined) window.smartCaptcha?.reset(widgetId)
}

onMounted(() => {
  if (sitekeyValue.value && typeof window !== 'undefined') void mountWidget()
})

watch(locale, () => {
  if (typeof window === 'undefined' || !sitekeyValue.value) return
  setError(false)
  void mountWidget()
})

onBeforeUnmount(() => {
  mountGeneration += 1
  destroyWidget()
})

defineExpose<SmartCaptchaExpose>({ reset })
</script>
