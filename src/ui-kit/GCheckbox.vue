<template>
  <button
    type="button"
    role="checkbox"
    class="g-checkbox"
    :class="{ _checked: modelValue, _disabled: disabled }"
    :aria-checked="modelValue"
    :disabled="disabled"
    @click="toggle"
  >
    <svg
      v-if="modelValue"
      class="g-checkbox__mark"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16.8548 7.5359C17.1111 7.2717 17.5332 7.2653 17.7975 7.5216C18.0617 7.7779 18.0681 8.2 17.8118 8.4643L10.7005 15.7976C10.5749 15.927 10.4022 16.0001 10.222 16.0001C10.0417 16.0001 9.869 15.9271 9.7434 15.7976L6.1881 12.131C5.9318 11.8667 5.9382 11.4446 6.2024 11.1883C6.4667 10.932 6.8888 10.9384 7.1451 11.2026L10.222 14.3758L16.8548 7.5359Z"
        fill="currentColor"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
/**
 * Чекбокс — макет Checkbox.svg.
 * OFF: #F7F7F7. ON: #0B0B0B + белая галочка. 24×24, полное скругление.
 */
interface Props {
  modelValue?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const toggle = () => {
  if (props.disabled) return
  emit('update:modelValue', !props.modelValue)
}
</script>

<style scoped>
.g-checkbox {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  border-radius: 12px;
  background: var(--g-button-gray, #f7f7f7);
  color: var(--g-button-white, #fff);
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.g-checkbox._checked {
  background: var(--g-button-dark, #0b0b0b);
}

.g-checkbox._disabled {
  cursor: not-allowed;
  opacity: 0.55;
}

.g-checkbox__mark {
  display: block;
  width: 24px;
  height: 24px;
}
</style>
