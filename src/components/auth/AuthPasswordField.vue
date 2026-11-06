<template>
  <GInput
    v-model="model"
    :type="visible ? 'text' : 'password'"
    :placeholder="placeholder"
    :error="error"
    :message="message"
    :autocomplete="autocomplete"
    :disabled="disabled"
    :name="name"
    :id="id"
    @blur="emit('blur', $event)"
  >
    <template #trailing>
      <button
        type="button"
        class="auth-password-field__toggle"
        tabindex="-1"
        :aria-label="visible ? t('terminal.auth.hidePassword') : t('terminal.auth.showPassword')"
        @click="visible = !visible"
      >
        <IconsEyeOff v-if="visible" :size="20" />
        <IconsEye v-else :size="20" />
      </button>
    </template>
  </GInput>
</template>

<script setup lang="ts">import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

import IconsEye from '~/components/icons/Eye.vue'
import IconsEyeOff from '~/components/icons/EyeOff.vue'
import GInput from '~/ui-kit/GInput.vue'

const model = defineModel<string>({ required: true })

withDefaults(
  defineProps<{
    placeholder?: string
    error?: boolean
    message?: string
    autocomplete?: string
    disabled?: boolean
    name?: string
    id?: string
  }>(),
  {
    autocomplete: 'off',
    name: 'gp-auth-password'
  }
)

const emit = defineEmits<{
  blur: [event: FocusEvent]
}>()

const { t } = useI18n()
const visible = ref(false)

watch(model, (value) => {
  if (!value) visible.value = false
})
</script>

<style scoped>
.auth-password-field__toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  color: #0b0b0b;
  cursor: pointer;
}
</style>
