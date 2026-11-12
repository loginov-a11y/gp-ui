<template>
  <div class="sidebar-panel" :class="{ _mobile: mobile }">
    <div class="sidebar-panel__card">
      <div class="sidebar-panel__profile">
        <div class="sidebar-panel__avatar" aria-hidden="true">
          <img v-if="avatarUrl" :src="avatarUrl" alt="" class="sidebar-panel__avatar-img" />
          <template v-else>{{ initials }}</template>
        </div>
        <div class="sidebar-panel__who">
          <p class="sidebar-panel__welcome">{{ $t('terminal.nav.welcome') }}</p>
          <p v-if="mounted" class="sidebar-panel__name" :title="displayName">{{ displayName }}</p>
        </div>
      </div>

      <div v-if="balanceAmount !== null" class="sidebar-panel__balance-wrap">
        <button type="button" class="sidebar-panel__balance" @click="goBalance">
          <span class="sidebar-panel__balance-label">
            <IconsCoins class="sidebar-panel__balance-coins" :size="16" />
            {{ $t('terminal.nav.availableForWithdraw') }}
          </span>
          <span class="sidebar-panel__balance-row">
            <span class="sidebar-panel__balance-amount">{{ formatRub(balanceAmount ?? 0) }}</span>
            <IconsArrowCircleRight :size="16" class="sidebar-panel__balance-arrow" />
          </span>
          <span v-if="balancePeriodAmount != null" class="sidebar-panel__balance-period">
            <span class="sidebar-panel__balance-period-label">{{ balancePeriodLabel }}</span>
            <span class="sidebar-panel__balance-period-value">
              {{ formatRub(balancePeriodAmount) }}
            </span>
          </span>
        </button>
      </div>

      <nav class="sidebar-panel__nav">
        <SidebarItem
          v-for="item in visibleMenuItems"
          :key="item.to"
          :to="item.to"
          :title="item.title!"
          :icon="item.icon"
          :size="mobile ? 'md' : 'sm'"
          @click="emit('navigate')"
        />
      </nav>
    </div>

    <div v-if="links.length" class="sidebar-panel__links">
      <GMenuButton
        v-for="link in links"
        :key="link.key"
        :size="mobile ? 'md' : 'sm'"
        class="sidebar-panel__link"
        @click="openLink(link.url)"
      >
        <template v-if="link.icon" #leading>
          <component :is="link.icon" :size="mobile ? 20 : 16" />
        </template>
        {{ link.label }}
      </GMenuButton>
    </div>

    <div class="sidebar-panel__footer">
      <div class="sidebar-panel__footer-row">
        <GButton
          :variant="mobile ? 'gray' : 'white'"
          size="md"
          class="sidebar-panel__docs"
          :disabled="!docsUrl"
          @click="openDocs"
        >
          <template #leading>
            <IconsBook :size="16" />
          </template>
          {{ $t('terminal.nav.docs') }}
        </GButton>

        <GButton
          v-if="mobile"
          variant="gray"
          size="md"
          class="sidebar-panel__support-btn"
          :disabled="!chatEnabled"
          @click="onChat"
        >
          <template #leading>
            <IconsHelpCircle :size="16" />
          </template>
          {{ $t('terminal.nav.support') }}
        </GButton>
        <GIconButton
          v-else
          variant="white"
          size="sm"
          class="sidebar-panel__support"
          :aria-label="$t('terminal.nav.support')"
          :disabled="!chatEnabled"
          @click="onChat"
        >
          <IconsHelpCircle :size="16" />
        </GIconButton>
      </div>

      <GButton
        :variant="mobile ? 'gray' : 'white'"
        :size="mobile ? 'lg' : 'md'"
        :disabled="logoutLoading"
        :class="['sidebar-panel__logout', { _muted: !mobile }]"
        @click="handleLogout"
      >
        {{ $t('terminal.nav.logout') }}
        <template #trailing>
          <IconsLogout :size="mobile ? 20 : 16" />
        </template>
      </GButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import SidebarItem from './SidebarItem.vue'
import GButton from '~/ui-kit/GButton.vue'
import GMenuButton from '~/ui-kit/GMenuButton.vue'
import GIconButton from '~/ui-kit/GIconButton.vue'
import IconsCoins from '~/components/icons/Coins.vue'
import IconsArrowCircleRight from '~/components/icons/ArrowCircleRight.vue'
import IconsBook from '~/components/icons/Book.vue'
import IconsHelpCircle from '~/components/icons/HelpCircle.vue'
import IconsLogout from '~/components/icons/Logout.vue'
import { formatRub } from '~/utils/format'
import type { GMenuItem, GSidebarLink } from '~/types/menu'

/**
 * Панель сайдбара: профиль, карточка баланса, пункты меню, футер.
 * Данные приходят пропсами — к сторам кабинета панель не привязана.
 */
const props = withDefaults(
  defineProps<{
    mobile?: boolean
    /** Имя в приветствии. */
    userName?: string
    /** Фото вместо инициалов в приветствии. */
    avatarUrl?: string
    /** Сумма на карточке баланса; без неё карточка не рисуется. */
    balanceAmount?: number | null
    /** Вторая строка баланса («В текущем периоде»): сумма и подпись. */
    balancePeriodAmount?: number | null
    balancePeriodLabel?: string
    /** Куда ведёт клик по карточке баланса. */
    balanceTo?: string
    /** Пункты меню (desktopOnly/mobileOnly фильтруются по mobile). */
    menuItems?: GMenuItem[]
    /** «Документация»: кнопка активна только при заданном URL. */
    docsUrl?: string
    /** Дополнительные внешние ссылки футера (например, «Маркетинговые материалы»). */
    links?: GSidebarLink[]
    /** Доступность чата поддержки. */
    chatEnabled?: boolean
    /** Лоадер на кнопке выхода. */
    logoutLoading?: boolean
  }>(),
  {
    mobile: false,
    userName: '',
    avatarUrl: '',
    balanceAmount: null,
    balancePeriodAmount: null,
    balancePeriodLabel: '',
    balanceTo: '/balance',
    menuItems: () => [],
    docsUrl: '',
    links: () => [],
    chatEnabled: false,
    logoutLoading: false
  }
)

const emit = defineEmits<{
  navigate: []
  'toggle-chat': []
  logout: []
}>()

const router = useRouter()

const visibleMenuItems = computed(() =>
  props.menuItems.filter((item) => (props.mobile ? !item.desktopOnly : !item.mobileOnly))
)

// SSR знает имя из сессии, клиент стартует с user=null — без флага мигает и падает hydration mismatch
const mounted = ref(false)
onMounted(() => {
  mounted.value = true
})

const displayName = computed(() => props.userName || '—')

const initials = computed(() => {
  const name = displayName.value.trim()
  const parts = name.split(/s+/).filter(Boolean)
  if (parts.length >= 2) {
    return `${parts[0]!.charAt(0)}${parts[1]!.charAt(0)}`.toUpperCase()
  }
  return name.slice(0, 2).toUpperCase() || 'GP'
})

const goBalance = () => {
  if (props.balanceTo) router.push(props.balanceTo)
  emit('navigate')
}

const openDocs = () => {
  if (!props.docsUrl) return
  window.open(props.docsUrl, '_blank', 'noopener,noreferrer')
}

const openLink = (url: string) => {
  // Пустой/# — ссылка-заглушка до появления реального URL.
  if (!url || url === '#') return
  window.open(url, '_blank', 'noopener,noreferrer')
}

const onChat = () => {
  emit('toggle-chat')
  emit('navigate')
}

const handleLogout = () => {
  if (props.logoutLoading) return
  emit('logout')
}
</script>

<style scoped>
.sidebar-panel {
  display: flex;
  flex-direction: column;
  min-height: 0;
  width: 100%;
  flex: 1;
}

.sidebar-panel__card {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.sidebar-panel:not(._mobile) .sidebar-panel__card {
  background: #fff;
  border-radius: 24px;
  min-height: 0;
  overflow: auto;
}

.sidebar-panel__balance-wrap {
  padding: 8px;
  border-bottom: 1px solid #f7f7f7;
}

.sidebar-panel._mobile .sidebar-panel__balance-wrap {
  padding: 12px 16px;
  border-bottom: none;
}

.sidebar-panel__profile {
  display: flex;
  align-items: flex-start;
  padding: 16px 8px 8px;
}

.sidebar-panel._mobile .sidebar-panel__profile {
  padding: 12px 16px;
}

.sidebar-panel__avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 99px;
  background: #f7f7f7;
  color: #0b0b0b;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: -0.22px;
  line-height: 1;
  overflow: hidden;
}

.sidebar-panel__avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.sidebar-panel__who {
  flex: 1;
  min-width: 0;
  padding: 0 8px;
}

.sidebar-panel__welcome {
  margin: 0;
  color: #7f7f7f;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.24px;
}

.sidebar-panel__name {
  margin: 0;
  color: #0b0b0b;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.42px;
  white-space: break-spaces;
}

.sidebar-panel__balance {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  min-height: 72px;
  margin: 0;
  padding: 12px;
  border: none;
  border-radius: 16px;
  background: var(--gp-sidebar-balance-bg, linear-gradient(86.87deg, #00443c 8.25%, #70afac 89.74%));
  color: #fff;
  text-align: left;
  cursor: pointer;
  overflow: hidden;
  position: relative;
}

.sidebar-panel__balance-label {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.24px;
  opacity: 0.6;
  position: relative;
  z-index: 1;
}

.sidebar-panel__balance-coins {
  flex-shrink: 0;
  color: inherit;
}

.sidebar-panel__balance-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  position: relative;
  z-index: 1;
}

.sidebar-panel__balance-amount {
  min-width: 0;
  overflow: hidden;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.48px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.sidebar-panel__balance-arrow {
  flex-shrink: 0;
  color: #fff;
}

.sidebar-panel__balance-period {
  display: flex;
  flex-direction: column;
  gap: 2px;
  position: relative;
  z-index: 1;
  white-space: nowrap;
}

.sidebar-panel__balance-period-label {
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: -0.2px;
  opacity: 0.6;
}

.sidebar-panel__balance-period-value {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.28px;
}

.sidebar-panel__links {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 10px;
  padding: 8px;
  border-radius: 24px;
  background: #fff;
}

.sidebar-panel__links :deep(.g-menu-button) {
  width: 100%;
  letter-spacing: -0.42px;
}

.sidebar-panel._mobile .sidebar-panel__links {
  margin: 0;
  padding: 16px;
  border-radius: 0;
  background: transparent;
  border-bottom: 1px solid #d9d9d9;
}

.sidebar-panel._mobile .sidebar-panel__links :deep(.g-menu-button--md) {
  font-size: 14px;
}

.sidebar-panel._mobile .sidebar-panel__links :deep(.g-menu-button--md .g-menu-button__leading svg) {
  width: 20px;
  height: 20px;
}

.sidebar-panel__nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
}

.sidebar-panel._mobile .sidebar-panel__nav {
  padding: 24px 16px;
  border-bottom: 1px solid #d9d9d9;
}

.sidebar-panel__nav :deep(.g-menu-button) {
  letter-spacing: -0.42px;
}

.sidebar-panel._mobile .sidebar-panel__nav :deep(.g-menu-button--md) {
  font-size: 14px;
}

.sidebar-panel._mobile .sidebar-panel__nav :deep(.g-menu-button--md .g-menu-button__leading svg) {
  width: 20px;
  height: 20px;
}

.sidebar-panel__footer {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: auto;
  padding: 12px 8px;
}

.sidebar-panel:not(._mobile) .sidebar-panel__footer {
  padding: 12px 0;
}

.sidebar-panel._mobile .sidebar-panel__footer {
  padding: 12px 16px calc(12px + env(safe-area-inset-bottom));
}

.sidebar-panel__footer-row {
  display: flex;
  align-items: center;
  gap: 4px;
}

.sidebar-panel__footer-row :deep(.sidebar-panel__docs),
.sidebar-panel__footer-row :deep(.sidebar-panel__support-btn) {
  flex: 1 1 0;
  min-width: 0;
  padding-inline: 12px;
  gap: 4px;
}

.sidebar-panel__footer-row :deep(.sidebar-panel__docs svg),
.sidebar-panel__footer-row :deep(.sidebar-panel__support-btn svg) {
  width: 16px;
  height: 16px;
}

.sidebar-panel__footer-row :deep(.sidebar-panel__support) {
  width: 36px;
  height: 36px;
}

.sidebar-panel__footer-row :deep(.sidebar-panel__support svg) {
  width: 16px;
  height: 16px;
}

.sidebar-panel__footer :deep(.sidebar-panel__logout) {
  width: 100%;
}

.sidebar-panel__footer :deep(.sidebar-panel__logout._muted) {
  color: #7f7f7f;
}

.sidebar-panel__footer :deep(.sidebar-panel__logout svg) {
  color: inherit;
}
</style>
