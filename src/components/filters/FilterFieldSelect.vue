<template>
  <div class="filter-field">
    <label class="block text-sm font-medium text-gray-700 mb-2">
      {{ label }}
    </label>
    <GInputSelect
      :model-value="modelValue"
      :items="items"
      :placeholder="placeholder"
      @update:model-value="onSelect"
    />
  </div>
</template>

<script setup lang="ts">
import GInputSelect, { type GInputSelectItem as SelectItem } from '~/ui-kit/GInputSelect.vue'

defineProps<{
  label: string
  modelValue?: string
  placeholder?: string
  items: SelectItem[]
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string | undefined]
  change: []
}>()

/**
 * USelect типизирован шире, чем нужно фильтру: он умеет отдавать не только
 * строку. Значения приходят из `items`, которые мы сами и составляем из строк,
 * поэтому приводим здесь, а не размываем тип наружу.
 */
const onSelect = (value: unknown) => {
  emit('update:modelValue', value == null ? undefined : String(value))
}
</script>

<style scoped lang="scss">
.filter-field {
  display: flex;
  flex-direction: column;
}
</style>
