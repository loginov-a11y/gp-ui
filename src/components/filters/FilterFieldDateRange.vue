<template>
  <div class="filter-field">
    <label class="block text-sm font-medium text-gray-700 mb-2">
      {{ label }}
    </label>
    <VueDatePicker
      :model-value="modelValue"
      range
      :locale="locale"
      :format="dateFormat"
      :enable-time-picker="false"
      :placeholder="placeholder"
      auto-apply
      :clearable="true"
      teleport
      :menu-class-name="'gp-dp-menu'"
      @update:model-value="$emit('update:modelValue', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker'

defineProps<{
  label: string
  modelValue?: [Date, Date] | null
  placeholder?: string
}>()

defineEmits<{
  'update:modelValue': [value: [Date, Date] | null]
}>()

const locale = 'ru'
const dateFormat = 'dd.MM.yyyy'
</script>

<style scoped lang="scss">
.filter-field {
  display: flex;
  flex-direction: column;
}
</style>

<style lang="scss">
.gp-dp-menu {
  z-index: 9999 !important;
}
</style>
