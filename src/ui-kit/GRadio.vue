<template>
  <button
    type="button"
    role="radio"
    class="g-radio"
    :class="{ _checked: isChecked, _disabled: disabled }"
    :aria-checked="isChecked"
    :disabled="disabled"
    @click="select"
  >
    <span v-if="isChecked" class="g-radio__dot" aria-hidden="true" />
  </button>
</template>

<script setup lang="ts">import { computed } from 'vue'

/**
 * Радиокнопка — макет Radiobutton.svg.
 * OFF: #F7F7F7. ON: #0B0B0B + белый кружок 16px. 24×24, полное скругление.
 */
interface Props {
  modelValue?: string | number | boolean | null
  value?: string | number | boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number | boolean]
}>()

const isChecked = computed(() => props.modelValue === props.value)

const select = () => {
  if (props.disabled || props.value === undefined) return
  emit('update:modelValue', props.value)
}
</script>

<style scoped>
.g-radio {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  border-radius: 12px;
  background: #ffffff;
  cursor: pointer;
}

.g-radio._checked {
  background: var(--g-button-dark, #0b0b0b);
}

.g-radio._disabled {
  cursor: not-allowed;
  opacity: 0.55;
}

.g-radio__dot {
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 9999px;
  background: var(--g-button-white, #fff);
}
</style>
