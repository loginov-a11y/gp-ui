<template>
  <div class="auth-screen" :class="{ 'auth-screen--plain': plain }">
    <div class="auth-screen__card">
      <header
        class="auth-screen__header"
        :class="{
          'auth-screen__header--hero': $slots.icon,
          'auth-screen__header--wide': wideHeader,
          'auth-screen__header--plain': plain
        }"
      >
        <div v-if="glow" class="auth-screen__blur" />
        <div v-if="!plain" class="auth-screen__pattern" aria-hidden="true" />
        <div v-if="$slots.icon" class="auth-screen__icon">
          <slot name="icon" />
        </div>
        <img v-else-if="!plain" :src="logoSrc" :alt="brand" class="auth-screen__logo" />
        <div class="auth-screen__copy">
          <h1 class="auth-screen__title">
            <slot name="title" />
          </h1>
          <p v-if="$slots.subtitle" class="auth-screen__subtitle">
            <slot name="subtitle" />
          </p>
        </div>
      </header>

      <div class="auth-screen__body">
        <slot />
      </div>
    </div>

    <div v-if="$slots.footer" class="auth-screen__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">import { useBrandLogo } from '~/composables/useBrandLogo'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

withDefaults(
  defineProps<{
    /** Бирюзовое свечение шапки — на логине есть, на восстановлении в макете скрыто. */
    glow?: boolean
    /** Больший зазор между логотипом и заголовком (первый шаг логина). */
    wideHeader?: boolean
    /** Компактная шапка без логотипа и сетки, текст слева — активация терминала. */
    plain?: boolean
  }>(),
  { glow: true, wideHeader: false, plain: false }
)

const { t } = useI18n()
const { src: logoSrc } = useBrandLogo()
const brand = computed(() => t('common.brand'))
</script>

<style scoped>
.auth-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  max-width: 360px;
}

.auth-screen__card {
  width: 100%;
  overflow: hidden;
  background: #fff;
  border-radius: 20px;
  box-shadow:
    0 11px 24px rgb(0 0 0 / 0.04),
    0 44px 44px rgb(0 0 0 / 0.03),
    0 98px 59px rgb(0 0 0 / 0.02);
}

.auth-screen__header {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  height: 240px;
  padding: 28px 24px 16px;
  overflow: hidden;
  text-align: center;
}

.auth-screen__header--wide {
  gap: 28px;
}

.auth-screen__header--hero {
  height: auto;
  padding: 48px 24px 16px;
  margin-bottom: 32px;
}

.auth-screen--plain {
  max-width: 480px;
}

.auth-screen--plain .auth-screen__card {
  display: flex;
  flex-direction: column;
}

.auth-screen__header--plain {
  height: auto;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0;
  padding: 24px 24px 0;
  text-align: left;
}

.auth-screen--plain .auth-screen__copy {
  align-items: flex-start;
  width: 100%;
  gap: 8px;
}

.auth-screen--plain .auth-screen__subtitle {
  max-width: none;
}

.auth-screen--plain .auth-screen__body {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 0;
  padding-top: 24px;
}

.auth-screen__icon {
  position: relative;
  z-index: 1;
}

.auth-screen__blur {
  position: absolute;
  top: -90%;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    4.92% 380.36% at 50% -72.15%,
    #31c5b3 0%,
    #00b39d 51.92%,
    #66d1c4 100%
  );
  filter: blur(75px);
}

.auth-screen__pattern {
  position: absolute;
  left: 50%;
  bottom: -140px;
  width: 360px;
  height: 360px;
  transform: translateX(-50%);
  opacity: 0.45;
  pointer-events: none;
  background-image:
    linear-gradient(#d0d5dd 1px, transparent 1px),
    linear-gradient(90deg, #d0d5dd 1px, transparent 1px);
  background-size: 52px 52px;
  mask-image: linear-gradient(to bottom, transparent 0%, rgb(0 0 0 / 0.55) 40%, transparent 100%);
}

.auth-screen__logo {
  position: relative;
  z-index: 1;
  height: 21px;
  width: auto;
}

.auth-screen__copy {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.auth-screen__title,
.auth-screen__subtitle {
  margin: 0;
}

.auth-screen__title {
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.6px;
  color: #0b0b0b;
}

.auth-screen__subtitle {
  max-width: 264px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.28px;
  color: #7f7f7f;
}

.auth-screen__body {
  padding: 16px 24px 24px;
}

.auth-screen__body :deep(.g-button) {
  width: 100%;
}

.auth-screen__footer {
  display: flex;
  justify-content: center;
}

.auth-screen__footer :deep(a),
.auth-screen__footer :deep(button) {
  padding: 0;
  border: none;
  background: none;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.24px;
  color: #7f7f7f;
  text-decoration: underline;
  cursor: pointer;
}

@media (max-width: 639px) {
  .auth-screen {
    max-width: none;
    gap: 0;
    padding-top: 32px;
  }

  .auth-screen__card {
    background: transparent;
    border-radius: 0;
    box-shadow: none;
  }

  .auth-screen__body {
    padding-left: 16px;
    padding-right: 16px;
  }

  .auth-screen__subtitle {
    max-width: 279px;
  }

  .auth-screen__footer {
    padding: 8px 16px 32px;
  }
  .auth-screen__header {
    border-radius: 20px 20px 0 0;
  }
}
</style>
