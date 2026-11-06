<template>
  <div
    v-if="variant === 'plain' || password"
    class="password-requirements animate-fade-in"
    :class="`password-requirements--${variant}`"
  >
    <div class="password-requirements__content">
      <h4 v-if="variant === 'card'" class="password-requirements__title">
        {{ t('auth.passwordRequirementsTitle') }}
      </h4>
      <ul class="password-requirements__list">
        <li class="password-requirements__item" :class="{ valid: passwordRequirements.minLength }">
          <GIcon
            :name="
              passwordRequirements.minLength ? 'i-heroicons-check-circle' : 'i-heroicons-x-circle'
            "
            class="password-requirements__icon"
            :class="{
              'icon-success': passwordRequirements.minLength,
              'icon-error': !passwordRequirements.minLength
            }"
          />
          <span>{{ t('auth.passwordRequirement.minLength') }}</span>
        </li>
        <li
          class="password-requirements__item"
          :class="{ valid: passwordRequirements.hasLowercase }"
        >
          <GIcon
            :name="
              passwordRequirements.hasLowercase
                ? 'i-heroicons-check-circle'
                : 'i-heroicons-x-circle'
            "
            class="password-requirements__icon"
            :class="{
              'icon-success': passwordRequirements.hasLowercase,
              'icon-error': !passwordRequirements.hasLowercase
            }"
          />
          <span>{{ t('auth.passwordRequirement.lowercase') }}</span>
        </li>
        <li
          class="password-requirements__item"
          :class="{ valid: passwordRequirements.hasUppercase }"
        >
          <GIcon
            :name="
              passwordRequirements.hasUppercase
                ? 'i-heroicons-check-circle'
                : 'i-heroicons-x-circle'
            "
            class="password-requirements__icon"
            :class="{
              'icon-success': passwordRequirements.hasUppercase,
              'icon-error': !passwordRequirements.hasUppercase
            }"
          />
          <span>{{ t('auth.passwordRequirement.uppercase') }}</span>
        </li>
        <li class="password-requirements__item" :class="{ valid: passwordRequirements.hasNumber }">
          <GIcon
            :name="
              passwordRequirements.hasNumber ? 'i-heroicons-check-circle' : 'i-heroicons-x-circle'
            "
            class="password-requirements__icon"
            :class="{
              'icon-success': passwordRequirements.hasNumber,
              'icon-error': !passwordRequirements.hasNumber
            }"
          />
          <span>{{ t('auth.passwordRequirement.number') }}</span>
        </li>
        <li
          class="password-requirements__item"
          :class="{ valid: passwordRequirements.hasSpecialChar }"
        >
          <GIcon
            :name="
              passwordRequirements.hasSpecialChar
                ? 'i-heroicons-check-circle'
                : 'i-heroicons-x-circle'
            "
            class="password-requirements__icon"
            :class="{
              'icon-success': passwordRequirements.hasSpecialChar,
              'icon-error': !passwordRequirements.hasSpecialChar
            }"
          />
          <span>{{ t('auth.passwordRequirement.specialChar') }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import GIcon from '~/ui-kit/GIcon.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = withDefaults(
  defineProps<{
    password: string
    /** plain — список без карточки (настройки); card — прежний вид. */
    variant?: 'plain' | 'card'
  }>(),
  {
    variant: 'card'
  }
)

const passwordRequirements = computed(() => {
  const password = props.password
  return {
    minLength: password.length >= 8,
    hasLowercase: /[a-z]/.test(password),
    hasUppercase: /[A-Z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecialChar: /[!@#$%^&*]/.test(password)
  }
})
</script>

<style lang="scss" scoped>
.password-requirements {
  margin-top: 0.75rem;

  &__content {
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.75rem;
    backdrop-filter: blur(10px);
  }

  &__title {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0 0 0.75rem 0;
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8125rem;
    color: var(--color-text-gray);
    transition: all 0.2s ease;

    &.valid {
      color: var(--primary-green);
    }
  }

  &__icon {
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    transition: all 0.2s ease;

    &.icon-success {
      color: var(--primary-green);
      transform: scale(1.1);
    }

    &.icon-error {
      color: #ef4444;
      opacity: 0.8;
    }
  }

  &--plain {
    margin-top: 0;

    .password-requirements__content {
      padding: 0;
      background: transparent;
      border: none;
      backdrop-filter: none;
    }

    .password-requirements__list {
      gap: 4px;
    }

    .password-requirements__item {
      gap: 4px;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: -0.24px;
      color: #7f7f7f;
      transition: color 0.2s ease;

      &.valid {
        color: var(--primary-green, #00b39d);
      }
    }

    .password-requirements__icon {
      width: 12px;
      height: 12px;
      transition: color 0.2s ease;

      &.icon-success {
        color: var(--primary-green, #00b39d);
        transform: none;
      }
    }
  }
}

@media screen and (max-width: 640px) {
  .password-requirements:not(.password-requirements--plain) {
    margin-top: 0.5rem;

    .password-requirements__content {
      padding: 0.75rem;
    }

    .password-requirements__title {
      font-size: 0.8125rem;
      margin-bottom: 0.5rem;
    }

    .password-requirements__item {
      font-size: 0.75rem;
      gap: 0.375rem;
    }

    .password-requirements__icon {
      width: 1rem;
      height: 1rem;
    }
  }
}

@media (prefers-reduced-motion: reduce) {
  .password-requirements__icon {
    transition: none;
    transform: none;
  }
}
</style>
