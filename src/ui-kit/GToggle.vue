<template>
  <button
    type="button"
    role="switch"
    class="g-toggle"
    :class="{ _on: modelValue, _disabled: disabled }"
    :aria-checked="modelValue"
    :disabled="disabled"
    @click="toggle"
  >
    <span class="g-toggle__knob" aria-hidden="true" />
  </button>
</template>

<script setup lang="ts">
/**
 * Переключатель — макет Toggle.svg.
 * OFF: #F7F7F7 + белый knob слева. ON: #DBFFFA + #00B39D knob справа.
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
.g-toggle {
  --g-toggle-track: var(--g-button-gray, #f7f7f7);
  --g-toggle-knob: var(--g-button-white, #fff);
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  width: 44px;
  height: 24px;
  padding: 0;
  border: none;
  border-radius: 9999px;
  background: var(--g-toggle-track);
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.g-toggle._on {
  --g-toggle-track: #dbfffa;
  --g-toggle-knob: #00b39d;
}

.g-toggle._disabled {
  cursor: not-allowed;
  opacity: 0.55;
}

.g-toggle__knob {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  border-radius: 9999px;
  background: var(--g-toggle-knob);
  box-shadow: 0 1px 2px rgb(11 11 11 / 0.08);
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;
}

.g-toggle._on .g-toggle__knob {
  transform: translateX(20px);
}
</style>
