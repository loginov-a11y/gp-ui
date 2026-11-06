import { ref, computed } from 'vue'
import {
  OTP_CODE_INPUT_MAX_LENGTH,
  OTP_CODE_LENGTH,
  OTP_CODE_PLACEHOLDER
} from '~/utils/otp'

/**
 * Цифровой OTP с отображением `000-000`; в `code` — только цифры для API.
 */
export function useOtpCodeInput(length = OTP_CODE_LENGTH) {
  const code = ref('')

  const display = computed({
    get() {
      const digits = code.value.replace(/\D/g, '').slice(0, length)
      if (digits.length <= 3) return digits
      return `${digits.slice(0, 3)}-${digits.slice(3)}`
    },
    set(value: string) {
      code.value = value.replace(/\D/g, '').slice(0, length)
    }
  })

  const isComplete = computed(() => code.value.length === length)

  const submitVariant = computed((): 'primary' | 'secondary' =>
    isComplete.value ? 'primary' : 'secondary'
  )

  const reset = () => {
    code.value = ''
  }

  return {
    code,
    display,
    isComplete,
    submitVariant,
    reset,
    length,
    maxlength: length === OTP_CODE_LENGTH ? OTP_CODE_INPUT_MAX_LENGTH : length,
    placeholder: length === OTP_CODE_LENGTH ? OTP_CODE_PLACEHOLDER : ''.padStart(length, '0')
  }
}
