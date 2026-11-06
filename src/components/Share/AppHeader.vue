<template>
  <header class="pos-header">
    <UContainer class="pos-header__inner">
      <RouterLink :to="logoUrl" class="pos-header__logo">
        <img :src="logoSrc" :alt="logoAlt" />
      </RouterLink>

      <div class="pos-header__right">
        <!-- Смена языка скрыта по макету терминала, код оставлен. -->
        <!--
        <div class="pos-header__lang">
          <LanguageSwitcher compact />
        </div>
        -->
        <slot name="header-right" />
      </div>
    </UContainer>
  </header>
</template>

<script setup lang="ts">
import { useBrandLogo } from '~/composables/useBrandLogo'
// import LanguageSwitcher from '~/components/Share/LanguageSwitcher.vue'
import { RouterLink } from 'vue-router'

const { src: logoSrc, alt: logoAlt } = useBrandLogo()

withDefaults(
  defineProps<{
    logoUrl?: string
  }>(),
  {
    logoUrl: '/'
  }
)
</script>

<style scoped>
.pos-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  padding-top: env(safe-area-inset-top);
  background: rgb(245 245 245 / 0.92);
  backdrop-filter: blur(12px);
}

.pos-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-width: 0;
  padding: 12px 16px;
}

.pos-header__logo {
  display: block;
  flex: 0 1 auto;
  min-width: 0;
  width: 8.5rem;
}

.pos-header__logo img {
  display: block;
  width: 100%;
  max-width: 100%;
}

.pos-header__right {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

@media screen and (max-width: 640px) {
  /* .pos-header__lang {
    display: none;
  } */
  .pos-header__logo {
    width: 9.4rem;
    margin-left: 7px;
  }
}

@media screen and (min-width: 1024px) {
  .pos-header__inner {
    padding: 20px 24px;
  }

  .pos-header__logo {
    width: 11rem;
  }
}
</style>
