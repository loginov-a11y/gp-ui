<template>
  <div class="g-input-field" :class="props.class">
    <div class="g-input-field__body">
      <div class="g-input" :class="rootClass">
        <span v-if="$slots.leading" class="g-input__leading">
          <slot name="leading" />
        </span>

        <input
          ref="inputRef"
          class="g-input__control"
          :type="type"
          :value="modelValue ?? ''"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
          :name="name"
          :id="id"
          :autocomplete="autocomplete"
          :autocapitalize="autocapitalize"
          :spellcheck="spellcheck"
          :inputmode="inputmode"
          :maxlength="maxlength"
          @input="onInput"
          @focus="onFocus"
          @blur="onBlur"
          @keydown="onKeydown"
        />

        <span v-if="$slots.trailing" class="g-input__trailing">
          <slot name="trailing" />
        </span>
      </div>

      <slot name="dropdown" />
    </div>

    <p
      v-if="message"
      class="g-input-field__message"
      :class="{ _error: error }"
      :role="error ? 'alert' : undefined"
    >
      <span class="g-input-field__message-icon" aria-hidden="true">
        <IconsAlertCircle :size="16" />
      </span>
      <span class="g-input-field__message-text">{{ message }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">import { normalizeClass, type GClassValue } from '~/utils/classNames'
import { ref, computed } from 'vue'

import IconsAlertCircle from '~/components/icons/AlertCircle.vue'

/**
 * Текстовое поле — макет Input.svg.
 * gray / white, hover / focus / error / disabled — через CSS и пропсы.
 */
export type GInputVariant = 'gray' | 'white'

interface Props {
  modelValue?: string | number | null
  type?: string
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  error?: boolean
  message?: string
  variant?: GInputVariant
  name?: string
  id?: string
  autocomplete?: string
  autocapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'
  spellcheck?: boolean
  inputmode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'
  maxlength?: number | string
  class?: GClassValue
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  disabled: false,
  readonly: false,
  error: false,
  message: '',
  variant: 'gray',
  class: ''
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
  keydown: [event: KeyboardEvent]
}>()

const inputRef = ref<HTMLInputElement | null>(null)
const isFocused = ref(false)

const rootClass = computed(() => {
  const classes = [`g-input--${props.variant}`]

  if (props.disabled) classes.push('_disabled')
  if (props.error) classes.push('_error')
  if (isFocused.value) classes.push('_focused')

  return classes.join(' ')
})

const onInput = (event: Event) => {
  const input = event.target as HTMLInputElement

  if (props.inputmode === 'numeric' && props.maxlength) {
    const value = input.value.replace(/\D/g, '')
    input.value = value
    emit('update:modelValue', value)
  } else {
    emit('update:modelValue', input.value)
  }

  // Parent may cap/sanitize to the same string Vue already holds.
  // Then :value skips the DOM patch and extra characters stay until blur.
  const synced = String(props.modelValue ?? '')
  if (input.value !== synced) {
    input.value = synced
  }
}

const onFocus = (event: FocusEvent) => {
  isFocused.value = true
  emit('focus', event)
}

const onBlur = (event: FocusEvent) => {
  isFocused.value = false
  emit('blur', event)
}

const onKeydown = (event: KeyboardEvent) => {
  emit('keydown', event)
}

const focus = () => {
  inputRef.value?.focus()
}

const select = () => {
  inputRef.value?.select()
}

defineExpose({ focus, select, inputRef })
</script>

<style scoped>
.g-input-field {
  width: 100%;
}

.g-input-field__body {
  position: relative;
}

.g-input {
  --g-input-bg: var(--g-input-gray, #f7f7f7);
  --g-input-border: transparent;
  --g-overlay: transparent;
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  min-height: 48px;
  padding: 0 12px;
  border: 1.5px solid var(--g-input-border);
  border-radius: 16px;
  background: var(--g-input-bg);
  color: var(--g-button-fg-on-light);
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
}

.g-input::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  background: rgb(11 11 11 / var(--g-overlay));
  transition: background-color 0.2s ease;
}

.g-input > * {
  position: relative;
  z-index: 1;
}

.g-input--white {
  --g-input-bg: var(--g-button-white);
  --g-input-border: var(--g-input-border-color, #d9d9d9);
}

.g-input:hover:not(._disabled) {
  --g-overlay: var(--g-button-overlay-hover);
}

.g-input._focused:not(._disabled),
.g-input:focus-within:not(._disabled) {
  --g-input-bg: var(--g-button-white);
  --g-input-border: var(--g-input-border-color, #d9d9d9);
}

.g-input._error {
  --g-input-border: var(--g-input-error, #fa4225);
}

.g-input._disabled {
  color: var(--g-button-fg-disabled);
  cursor: not-allowed;
}

.g-input__leading,
.g-input__trailing {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
}

.g-input__leading :deep(svg),
.g-input__trailing :deep(svg) {
  display: block;
}

.g-input__control {
  width: 100%;
  min-width: 0;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  color: inherit;
  font-family: var(--font-family-base);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  outline: none;
}

/* Скрываем нативную кнопку менеджера паролей / «глаз» браузера — свой toggle в слоте. */
.g-input__control::-ms-reveal,
.g-input__control::-ms-clear {
  display: none;
}

.g-input__control::-webkit-credentials-auto-fill-button,
.g-input__control::-webkit-strong-password-auto-fill-button,
.g-input__control::-webkit-contacts-auto-fill-button {
  visibility: hidden;
  display: none !important;
  pointer-events: none;
  position: absolute;
  right: 0;
  width: 0;
  height: 0;
  margin: 0;
}

.g-input__control::placeholder {
  color: var(--g-input-placeholder, #7f7f7f);
  letter-spacing: -0.03em;
}

.g-input__control:disabled {
  cursor: not-allowed;
}

.g-input-field__message {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin: 8px 0 0;
  color: var(--g-input-message, #7f7f7f);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
}

.g-input-field__message._error {
  color: var(--g-input-error, #fa4225);
}

.g-input-field__message-icon {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-top: 1px;
  color: inherit;
}

.g-input-field__message-text {
  min-width: 0;
}
</style>
