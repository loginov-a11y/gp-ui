<template>
  <div class="g-textarea" :class="rootClass">
    <textarea
      ref="textareaRef"
      class="g-textarea__control"
      :value="modelValue ?? ''"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :name="name"
      :id="id"
      :rows="rows"
      :maxlength="maxlength"
      @input="onInput"
      @paste="onPaste"
      @focus="onFocus"
      @blur="onBlur"
    />

    <span v-if="showCounter" class="g-textarea__counter" aria-hidden="true">
      {{ currentLength }}/{{ maxlength }}
    </span>
  </div>
</template>

<script setup lang="ts">import { normalizeClass, type GClassValue } from '~/utils/classNames'
import { ref, computed, watch, onMounted, nextTick } from 'vue'

/**
 * Многострочное поле — Text Field из UI kit.
 * Placeholder и лимит символов через пропсы, счётчик внутри поля справа снизу.
 */
interface Props {
  modelValue?: string | null
  placeholder?: string
  maxlength?: number
  disabled?: boolean
  readonly?: boolean
  rows?: number
  name?: string
  id?: string
  class?: GClassValue
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  disabled: false,
  readonly: false,
  rows: 1,
  class: ''
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}>()

const textareaRef = ref<HTMLTextAreaElement | null>(null)

const showCounter = computed(() => typeof props.maxlength === 'number' && props.maxlength > 0)

const currentLength = computed(() => (props.modelValue ?? '').length)

const rootClass = computed(() => {
  const classes: string[] = []
  if (props.class) classes.push(...normalizeClass(props.class))
  if (showCounter.value) classes.push('_has-counter')
  if (props.disabled) classes.push('_disabled')
  return classes.join(' ')
})

const clampValue = (value: string) => {
  if (!showCounter.value) return value
  return value.slice(0, props.maxlength)
}

const resize = () => {
  const el = textareaRef.value
  if (!el) return
  el.style.height = '0'
  el.style.height = `${Math.max(60, el.scrollHeight)}px`
}

watch(
  () => props.modelValue,
  (value) => {
    if (showCounter.value && value != null) {
      const clamped = clampValue(value)
      if (clamped !== value) emit('update:modelValue', clamped)
    }
    nextTick(resize)
  },
  { immediate: true }
)

onMounted(resize)

const onInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  const nextValue = clampValue(target.value)
  if (nextValue !== target.value) target.value = nextValue
  emit('update:modelValue', nextValue)
  resize()
}

const onPaste = (event: ClipboardEvent) => {
  if (!showCounter.value) return

  const pasted = event.clipboardData?.getData('text') ?? ''
  if (!pasted) return

  const target = event.target as HTMLTextAreaElement
  const start = target.selectionStart ?? 0
  const end = target.selectionEnd ?? 0
  const current = props.modelValue ?? ''
  const merged = current.slice(0, start) + pasted + current.slice(end)
  const nextValue = clampValue(merged)

  if (merged.length === nextValue.length) return

  event.preventDefault()
  target.value = nextValue
  emit('update:modelValue', nextValue)

  const caret = Math.min(start + pasted.length, nextValue.length)
  nextTick(() => target.setSelectionRange(caret, caret))
}

const onFocus = (event: FocusEvent) => {
  emit('focus', event)
}

const onBlur = (event: FocusEvent) => {
  emit('blur', event)
}

const focus = () => {
  textareaRef.value?.focus()
}

defineExpose({ focus, textareaRef })
</script>

<style scoped>
.g-textarea {
  position: relative;
  width: 100%;
  background: var(--g-input-gray, #f7f7f7);
  padding-bottom: 28px;
  border-radius: 16px;
  padding-right: 12px;
}

.g-textarea__control {
  display: block;
  width: 100%;
  min-height: 60px;
  margin: 0;
  padding: 10px 11px 16px;
  border: none;
  /* border-radius: 16px;
  background: var(--g-input-gray, #f7f7f7); */
  color: var(--g-button-fg-on-light, #0b0b0b);
  font-family: var(--font-family-base);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  resize: none;
  overflow: hidden;
  outline: none;
  transition: background-color 0.2s ease;
}

.g-textarea._has-counter .g-textarea__control {
  padding-bottom: 0;
}

.g-textarea__control::placeholder {
  color: var(--g-input-placeholder, #7f7f7f);
}

.g-textarea__control:disabled {
  color: var(--g-button-fg-disabled, #7f7f7f);
  cursor: not-allowed;
}

.g-textarea._disabled {
  opacity: 1;
}

.g-textarea__counter {
  position: absolute;
  right: 16px;
  bottom: 8px;
  color: var(--g-input-placeholder, #7f7f7f);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  pointer-events: none;
  user-select: none;
}
</style>
