<template>
  <div v-if="password" class="password-strength animate-fade-in">
    <div class="password-strength__header">
      <span class="password-strength__title">{{ t('auth.passwordStrengthLabel') }}</span>
      <span class="password-strength__level" :class="passwordStrengthClass">
        {{ passwordStrengthText }}
      </span>
    </div>

    <div class="password-strength__bar">
      <div
        class="password-strength__fill"
        :class="passwordStrengthClass"
        :style="{ width: passwordStrengthWidth }"
      />
    </div>

    <!-- Требования -->
    <div class="password-requirements">
      <div
        v-for="(requirement, key) in passwordRequirements"
        :key="key"
        class="password-requirement"
        :class="{ 'password-requirement--met': requirement }"
      >
        <CheckCircle v-if="requirement" class="w-3 h-3 text-green-500" />
        <XCircle v-else class="w-3 h-3 text-gray-400" />
        <span class="password-requirement__text">{{ getRequirementText(key) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { CheckCircle, XCircle } from 'lucide-vue-next'

// Получаем доступ к i18n
const { t } = useI18n()

interface Props {
  password: string
}

const props = defineProps<Props>()

// Вычисляемые свойства для проверки силы пароля
const passwordStrength = computed(() => {
  const password = props.password
  if (!password) return 0

  let strength = 0

  // Длина пароля
  if (password.length >= 6) strength += 1
  if (password.length >= 8) strength += 1
  if (password.length >= 12) strength += 1

  // Содержит цифры
  if (/\d/.test(password)) strength += 1

  // Содержит буквы
  if (/[a-zA-Z]/.test(password)) strength += 1

  // Содержит специальные символы
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 1

  return Math.min(strength, 5)
})

const passwordStrengthClass = computed(() => {
  const strength = passwordStrength.value
  return strength <= 2
    ? 'password-strength__fill--weak'
    : strength <= 3
    ? 'password-strength__fill--medium'
    : 'password-strength__fill--strong'
})

const passwordStrengthWidth = computed(() => {
  return `${(passwordStrength.value / 5) * 100}%`
})

const passwordStrengthText = computed(() => {
  const strength = passwordStrength.value
  if (strength <= 2) return t('auth.passwordStrength.weak')
  if (strength <= 3) return t('auth.passwordStrength.medium')
  return t('auth.passwordStrength.strong')
})

// Требования к паролю
const passwordRequirements = computed(() => {
  const password = props.password
  if (!password) return {}

  return {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /\d/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
  }
})

const getRequirementText = (key: string) => {
  const requirements = {
    length: t('auth.passwordRequirement.minLength'),
    uppercase: t('auth.passwordRequirement.uppercase'),
    lowercase: t('auth.passwordRequirement.lowercase'),
    number: t('auth.passwordRequirement.number'),
    special: t('auth.passwordRequirement.specialChar')
  }
  return requirements[key as keyof typeof requirements] || key
}
</script>

<style lang="scss" scoped>
// ===== ИНДИКАТОР СИЛЫ ПАРОЛЯ =====
.password-strength {
  margin-top: 0.5rem;
  padding: 1rem;
  background: rgba(249, 250, 251, 0.8);
  border-radius: 0.75rem;
  border: 1px solid rgba(229, 231, 235, 0.8);

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
  }

  &__title {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-text-dark);
  }

  &__level {
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.25rem 0.5rem;
    border-radius: 0.375rem;

    &.password-strength__fill--weak {
      background: rgba(239, 68, 68, 0.1);
      color: #ef4444;
    }

    &.password-strength__fill--medium {
      background: rgba(245, 158, 11, 0.1);
      color: #f59e0b;
    }

    &.password-strength__fill--strong {
      background: rgba(16, 185, 129, 0.1);
      color: #10b981;
    }
  }

  &__bar {
    width: 100%;
    height: 4px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    overflow: hidden;
    margin-bottom: 1rem;
    position: relative;
  }

  &__fill {
    height: 100%;
    border-radius: 2px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    min-width: 0%;
    position: relative;

    &--weak {
      background: #ef4444;
    }

    &--medium {
      background: #f59e0b;
    }

    &--strong {
      background: #10b981;
    }
  }
}

// ===== ТРЕБОВАНИЯ К ПАРОЛЮ =====
.password-requirements {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.password-requirement {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: rgba(156, 163, 175, 0.8);
  transition: all 0.3s ease;

  &--met {
    color: #10b981;
  }

  &__text {
    line-height: 1.4;
  }
}

// ===== АДАПТИВНОСТЬ =====
@media screen and (max-width: 640px) {
  .password-strength {
    padding: 0.75rem;

    &__header {
      margin-bottom: 0.5rem;
    }

    &__bar {
      margin-bottom: 0.75rem;
    }
  }
}

// ===== ACCESSIBILITY =====
@media (prefers-reduced-motion: reduce) {
  .password-strength__fill {
    transition: none;
  }
}
</style>
