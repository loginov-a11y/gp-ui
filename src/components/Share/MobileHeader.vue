<template>
  <header class="mobile-header">
    <RouterLink to="/" class="mobile-header__logo" :aria-label="$t('common.brand')">
      <IconsLogoMark :size="18" />
    </RouterLink>

    <div class="mobile-header__end">
      <LanguageSwitcher compact />
      <GIconButton
        variant="white"
        size="md"
        class="mobile-header__menu"
        :aria-label="$t('terminal.nav.openMenu')"
        :aria-expanded="menuOpen"
        @click="emit('open')"
      >
        <IconsMenuLines :size="16" />
      </GIconButton>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import LanguageSwitcher from '~/components/Share/LanguageSwitcher.vue'
import GIconButton from '~/ui-kit/GIconButton.vue'
import IconsLogoMark from '~/components/icons/LogoMark.vue'
import IconsMenuLines from '~/components/icons/MenuLines.vue'

defineProps<{
  menuOpen?: boolean
}>()

const emit = defineEmits<{
  open: []
}>()
</script>

<style scoped>
.mobile-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 52px;
  padding: 4px;
}

.mobile-header__logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 4px 16px rgb(11 11 11 / 0.08);
  color: #0b0b0b;
}

.mobile-header__end {
  display: flex;
  align-items: center;
  gap: 8px;
}

.mobile-header :deep(.mobile-header__menu) {
  width: 44px;
  height: 44px;
  box-shadow: 0 4px 16px rgb(11 11 11 / 0.08);
}

.mobile-header__logo :deep(svg),
.mobile-header :deep(.mobile-header__menu svg) {
  width: 18px;
  height: 18px;
}

@media screen and (min-width: 993px) {
  .mobile-header {
    display: none;
  }
}
</style>
