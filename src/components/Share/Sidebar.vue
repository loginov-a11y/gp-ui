<template>
  <aside class="sidebar">
    <div class="sidebar__logo">
      <RouterLink to="/" class="sidebar__logo-link">
        <img :src="logoSrc" :alt="logoAlt" class="sidebar__logo-img" />
      </RouterLink>
    </div>

    <SidebarPanel
      class="sidebar__panel"
      :menu-items="menuItems"
      :user-name="userName"
      :avatar-url="avatarUrl"
      :logout-loading="logoutLoading"
      :balance-amount="balanceAmount"
      :balance-to="balanceTo"
      :balance-period-amount="balancePeriodAmount"
      :balance-period-label="balancePeriodLabel"
      :docs-url="docsUrl"
      :links="links"
      :chat-enabled="chatEnabled"
      @toggle-chat="emit('toggle-chat')"
      @logout="emit('logout')"
    />
  </aside>

  <Teleport defer to="body">
    <Transition name="sidebar-sheet">
      <div
        v-if="mobileOpen"
        class="sidebar-sheet"
        role="dialog"
        aria-modal="true"
        :aria-label="$t('terminal.nav.menu')"
      >
        <button
          type="button"
          class="sidebar-sheet__backdrop"
          :aria-label="$t('common.close')"
          @click="closeMobile"
        />
        <div class="sidebar-sheet__panel">
          <div class="sidebar-sheet__head">
            <button
              type="button"
              class="sidebar-sheet__handle"
              :aria-label="$t('common.close')"
              @click="closeMobile"
            />
            <GIconButton
              variant="gray"
              size="xs"
              class="sidebar-sheet__close"
              :aria-label="$t('common.close')"
              @click="closeMobile"
            >
              <IconsClose :size="12" />
            </GIconButton>
          </div>
          <SidebarPanel
            mobile
            class="sidebar-sheet__body"
            :menu-items="menuItems"
            :user-name="userName"
            :avatar-url="avatarUrl"
            :logout-loading="logoutLoading"
            :balance-amount="balanceAmount"
            :balance-to="balanceTo"
            :balance-period-amount="balancePeriodAmount"
            :balance-period-label="balancePeriodLabel"
            :docs-url="docsUrl"
            :links="links"
            :chat-enabled="chatEnabled"
            @navigate="closeMobile"
            @toggle-chat="onMobileChat"
            @logout="emit('logout')"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">import { useBrandLogo } from '~/composables/useBrandLogo'
import { watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

import SidebarPanel from './SidebarPanel.vue'
import GIconButton from '~/ui-kit/GIconButton.vue'
import IconsClose from '~/components/icons/Close.vue'

const { src: logoSrc, alt: logoAlt } = useBrandLogo()

interface Props {
  mobileOpen?: boolean
  /** Пункты меню — приходят из приложения (useAppMenu), панель фильтрует по mobile. */
  menuItems?: import('~/types/menu').GMenuItem[]
  /** Имя/компания пользователя для профиля в панели — из доменного стора приложения. */
  userName?: string
  /** Фото вместо инициалов в профиле. */
  avatarUrl?: string
  /** Спиннер на кнопке выхода. */
  logoutLoading?: boolean
  /** Сумма «Доступно для вывода» — из доменного стора приложения. */
  balanceAmount?: number | null
  /** Куда ведёт клик по блоку баланса. */
  balanceTo?: string
  /** Вторая строка карточки баланса («В текущем периоде»). */
  balancePeriodAmount?: number | null
  balancePeriodLabel?: string
  /** URL «Документации» в футере — пусто = неактивная кнопка. */
  docsUrl?: string
  /** Внешние ссылки отдельной карточкой под меню («Маркетинг-кит» и т.п.). */
  links?: import('~/types/menu').GSidebarLink[]
  /** Доступность чата поддержки. */
  chatEnabled?: boolean
}

interface Emits {
  (e: 'update:mobileOpen', value: boolean): void
  (e: 'toggle-chat'): void
  (e: 'logout'): void
}

const props = withDefaults(defineProps<Props>(), {
  mobileOpen: false,
  menuItems: () => [],
  userName: '',
  avatarUrl: '',
  logoutLoading: false,
  balanceAmount: null,
  balanceTo: '/balance',
  balancePeriodAmount: null,
  balancePeriodLabel: '',
  docsUrl: '',
  links: () => [],
  chatEnabled: false
})

const emit = defineEmits<Emits>()

const route = useRoute()

const closeMobile = () => {
  emit('update:mobileOpen', false)
}

const onMobileChat = () => {
  emit('toggle-chat')
  closeMobile()
}

watch(
  () => props.mobileOpen,
  (open) => {
    if (typeof window === 'undefined') return
    document.body.style.overflow = open ? 'hidden' : ''
  }
)

watch(
  () => route.path,
  () => {
    if (props.mobileOpen) closeMobile()
  }
)

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.mobileOpen) closeMobile()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  if (typeof window !== 'undefined') document.body.style.overflow = ''
})
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 40;
  display: flex;
  flex-direction: column;
  width: 226px;
  height: 100vh;
  background: transparent;
}

.sidebar__logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 76px;
  padding: 20px;
  flex-shrink: 0;
}

.sidebar__logo-link {
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar__logo-img {
  display: block;
  width: 132px;
  height: auto;
}

.sidebar__panel {
  flex: 1;
  min-height: 0;
  padding: 4px 8px 0;
}

.sidebar-sheet {
  position: fixed;
  inset: 0;
  z-index: 90;
  display: none;
  align-items: flex-end;
}

.sidebar-sheet__backdrop {
  position: absolute;
  inset: 0;
  border: none;
  padding: 0;
  background: rgb(0 0 0 / 0.4);
  cursor: pointer;
}

.sidebar-sheet__panel {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: min(92dvh, 100%);
  border-radius: 20px 20px 0 0;
  background: #fff;
  overflow: hidden;
}

.sidebar-sheet__head {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 48px;
  padding-top: 4px;
  flex-shrink: 0;
}

.sidebar-sheet__handle {
  position: relative;
  width: 40px;
  height: 5px;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 100px;
  background: #d9d9d9;
  cursor: pointer;
  appearance: none;
}

.sidebar-sheet__handle::before {
  content: '';
  position: absolute;
  inset: -18px -40px;
}

.sidebar-sheet__head :deep(.sidebar-sheet__close) {
  position: absolute;
  top: 12px;
  right: 16px;
  border-radius: 50%;
}

.sidebar-sheet__body {
  flex: 1;
  min-height: 0;
  overflow: auto;
}

.sidebar-sheet-enter-active,
.sidebar-sheet-leave-active {
  transition: opacity 0.22s ease;
}

.sidebar-sheet-enter-active .sidebar-sheet__panel,
.sidebar-sheet-leave-active .sidebar-sheet__panel {
  transition: transform 0.28s cubic-bezier(0.32, 0.72, 0, 1);
}

.sidebar-sheet-enter-from,
.sidebar-sheet-leave-to {
  opacity: 0;
}

.sidebar-sheet-enter-from .sidebar-sheet__panel,
.sidebar-sheet-leave-to .sidebar-sheet__panel {
  transform: translateY(100%);
}

@media screen and (max-width: 992px) {
  .sidebar {
    display: none;
  }

  .sidebar-sheet {
    display: flex;
  }
}

@media (prefers-reduced-motion: reduce) {
  .sidebar,
  .sidebar-sheet__panel,
  .sidebar-sheet-enter-active,
  .sidebar-sheet-leave-active,
  .sidebar-sheet-enter-active .sidebar-sheet__panel,
  .sidebar-sheet-leave-active .sidebar-sheet__panel {
    transition: none;
  }
}
</style>
