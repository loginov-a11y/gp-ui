<template>
  <div class="filter-field">
    <label class="block text-sm font-medium text-gray-700 mb-2">
      {{ label }}
    </label>
    <UInput
      :model-value="modelValue != null ? String(modelValue) : ''"
      :placeholder="placeholder"
      @update:model-value="$emit('update:modelValue', $event)"
      @input="$emit('input')"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  modelValue?: string | number | undefined
  placeholder?: string
}>()

defineEmits<{
  'update:modelValue': [value: string | number | undefined]
  input: []
}>()
</script>

<style scoped lang="scss">
.filter-field {
  display: flex;
  flex-direction: column;
}
</style>
