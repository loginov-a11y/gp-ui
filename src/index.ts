import type { App } from 'vue'
import type { Composer } from 'vue-i18n'

// ─── UI-кит ──────────────────────────────────────────────────────────────────
export { default as GButton } from '~/ui-kit/GButton.vue'
export { default as GCheckbox } from '~/ui-kit/GCheckbox.vue'
export { default as GContextMenu } from '~/ui-kit/GContextMenu.vue'
export { default as GContextMenuItem } from '~/ui-kit/GContextMenuItem.vue'
export { default as GCopyButton } from '~/ui-kit/GCopyButton.vue'
export { default as GDatePicker } from '~/ui-kit/GDatePicker.vue'
export { default as GDropdownButton } from '~/ui-kit/GDropdownButton.vue'
export { default as GIcon } from '~/ui-kit/GIcon.vue'
export { default as GIconButton } from '~/ui-kit/GIconButton.vue'
export { default as GInfoTooltip } from '~/ui-kit/GInfoTooltip.vue'
export { default as GInput } from '~/ui-kit/GInput.vue'
export { default as GInputSelect } from '~/ui-kit/GInputSelect.vue'
export { default as GMenuButton } from '~/ui-kit/GMenuButton.vue'
export { default as GPagination } from '~/ui-kit/GPagination.vue'
export { default as GPanel } from '~/ui-kit/GPanel.vue'
export { default as GPickerSheet } from '~/ui-kit/GPickerSheet.vue'
export { default as GPropertyList } from '~/ui-kit/GPropertyList.vue'
export { default as GPropertyRow } from '~/ui-kit/GPropertyRow.vue'
export { default as GRadio } from '~/ui-kit/GRadio.vue'
export { default as GSnackbar } from '~/ui-kit/GSnackbar.vue'
export { default as GStatusBadge } from '~/ui-kit/GStatusBadge.vue'
export { default as GTextarea } from '~/ui-kit/GTextarea.vue'
export { default as GToggle } from '~/ui-kit/GToggle.vue'
export { resolveGVariant, gVariantAlias } from '~/ui-kit/g-variants'
export { useClickOutside } from '~/ui-kit/useClickOutside'

export type { GButtonSize, GButtonVariant } from '~/ui-kit/GButton.vue'
export type { GDatePickerValue } from '~/ui-kit/GDatePicker.vue'
export type { GIconButtonSize, GIconButtonVariant } from '~/ui-kit/GIconButton.vue'
export type { GInputVariant } from '~/ui-kit/GInput.vue'
export type { GInputSelectItem } from '~/ui-kit/GInputSelect.vue'
export type { GMenuButtonSize } from '~/ui-kit/GMenuButton.vue'
export type { GSnackbarType } from '~/ui-kit/GSnackbar.vue'
export type {
  GBalanceStatus,
  GInvoiceStatus,
  GPaymentStatus,
  GStatusBadgeDomain
} from '~/ui-kit/GStatusBadge.vue'
export type { GDropdownButtonVariant } from '~/ui-kit/GDropdownButton.vue'
export type { GPropertyRowTone } from '~/ui-kit/GPropertyRow.vue'
export type { SmartCaptchaExpose } from '~/components/auth/SmartCaptcha.vue'

// ─── Легаси-виджеты (app/ui) ─────────────────────────────────────────────────
export { default as GCard } from '~/ui/GCard.vue'
export { default as GLinkCopy } from '~/ui/GLinkCopy.vue'
// Легаси-кнопка из app/ui — не путать с ui-kit GButton (другой набор variant)
export { default as LegacyGButton } from '~/ui/GButton.vue'

// ─── Иконки ──────────────────────────────────────────────────────────────────
export { default as IconAlertCircle } from '~/components/icons/AlertCircle.vue'
export { default as IconAlipayLogo } from '~/components/icons/AlipayLogo.vue'
export { default as IconAlipayWordmark } from '~/components/icons/AlipayWordmark.vue'
export { default as IconArrowCircleRight } from '~/components/icons/ArrowCircleRight.vue'
export { default as IconArrowNarrowRight } from '~/components/icons/ArrowNarrowRight.vue'
export { default as IconBook } from '~/components/icons/Book.vue'
export { default as IconCalendar } from '~/components/icons/Calendar.vue'
export { default as IconChart } from '~/components/icons/Chart.vue'
export { default as IconCheck } from '~/components/icons/Check.vue'
export { default as IconCheckCircle } from '~/components/icons/CheckCircle.vue'
export { default as IconCheckMini } from '~/components/icons/CheckMini.vue'
export { default as IconChevronLeft } from '~/components/icons/ChevronLeft.vue'
export { default as IconChevronRight } from '~/components/icons/ChevronRight.vue'
export { default as IconClock } from '~/components/icons/Clock.vue'
export { default as IconClockMini } from '~/components/icons/ClockMini.vue'
export { default as IconClockX } from '~/components/icons/ClockX.vue'
export { default as IconClose } from '~/components/icons/Close.vue'
export { default as IconCloseMini } from '~/components/icons/CloseMini.vue'
export { default as IconCodeSquare } from '~/components/icons/CodeSquare.vue'
export { default as IconCoins } from '~/components/icons/Coins.vue'
export { default as IconCoinsHand } from '~/components/icons/CoinsHand.vue'
export { default as IconCopy } from '~/components/icons/Copy.vue'
export { default as IconCopyOutline } from '~/components/icons/CopyOutline.vue'
export { default as IconCreditCardMinus } from '~/components/icons/CreditCardMinus.vue'
export { default as IconCreditCardPlus } from '~/components/icons/CreditCardPlus.vue'
export { default as IconDelete } from '~/components/icons/Delete.vue'
export { default as IconEye } from '~/components/icons/Eye.vue'
export { default as IconEyeOff } from '~/components/icons/EyeOff.vue'
export { default as IconGear } from '~/components/icons/Gear.vue'
export { default as IconHelpCircle } from '~/components/icons/HelpCircle.vue'
export { default as IconInbox } from '~/components/icons/Inbox.vue'
export { default as IconInfoCircle } from '~/components/icons/InfoCircle.vue'
export { default as IconKey } from '~/components/icons/Key.vue'
export { default as IconKeyboard } from '~/components/icons/Keyboard.vue'
export { default as IconKeyboard02 } from '~/components/icons/Keyboard02.vue'
export { default as IconLineChartUp } from '~/components/icons/LineChartUp.vue'
export { default as IconLink02 } from '~/components/icons/Link02.vue'
export { default as IconLinkBroken } from '~/components/icons/LinkBroken.vue'
export { default as IconLinkExternal } from '~/components/icons/LinkExternal.vue'
export { default as IconLock } from '~/components/icons/Lock.vue'
export { default as IconLogin } from '~/components/icons/Login.vue'
export { default as IconLogoMark } from '~/components/icons/LogoMark.vue'
export { default as IconLogout } from '~/components/icons/Logout.vue'
export { default as IconMail } from '~/components/icons/Mail.vue'
export { default as IconMenuLines } from '~/components/icons/MenuLines.vue'
export { default as IconMenuStroke } from '~/components/icons/MenuStroke.vue'
export { default as IconMessageCircleDots } from '~/components/icons/MessageCircleDots.vue'
export { default as IconMinusCircle } from '~/components/icons/MinusCircle.vue'
export { default as IconMonitor } from '~/components/icons/Monitor.vue'
export { default as IconPencil } from '~/components/icons/Pencil.vue'
export { default as IconPercent } from '~/components/icons/Percent.vue'
export { default as IconPincode } from '~/components/icons/Pincode.vue'
export { default as IconPlus } from '~/components/icons/Plus.vue'
export { default as IconReceipt } from '~/components/icons/Receipt.vue'
export { default as IconRefresh } from '~/components/icons/Refresh.vue'
export { default as IconReverseLeft } from '~/components/icons/ReverseLeft.vue'
export { default as IconRu } from '~/components/icons/ru.vue'
export { default as IconGb } from '~/components/icons/gb.vue'
export { default as IconSearchOff } from '~/components/icons/SearchOff.vue'
export { default as IconSearchQuestion } from '~/components/icons/SearchQuestion.vue'
export { default as IconSettings } from '~/components/icons/Settings.vue'
export { default as IconShield } from '~/components/icons/Shield.vue'
export { default as IconShieldX } from '~/components/icons/ShieldX.vue'
export { default as IconSort } from '~/components/icons/Sort.vue'
export { default as IconSwapHorizontal } from '~/components/icons/SwapHorizontal.vue'
export { default as IconTrash } from '~/components/icons/Trash.vue'
export { default as IconUsdtLogo } from '~/components/icons/UsdtLogo.vue'
export { default as IconWallet } from '~/components/icons/Wallet.vue'
export { default as IconXCircle } from '~/components/icons/XCircle.vue'

// ─── Каркас кабинета ─────────────────────────────────────────────────────────
export { default as AppHeader } from '~/components/Share/AppHeader.vue'
export { default as DataCard } from '~/components/Share/DataCard.vue'
export { default as DropdownItem } from '~/components/Share/DropdownItem.vue'
export { default as DropdownMenu } from '~/components/Share/DropdownMenu.vue'
export { default as LanguageSwitcher } from '~/components/Share/LanguageSwitcher.vue'
export { default as MobileHeader } from '~/components/Share/MobileHeader.vue'
export { default as MobileTabBar } from '~/components/Share/MobileTabBar.vue'
export { default as PageHeader } from '~/components/Share/PageHeader.vue'
export { default as PasswordRequirements } from '~/components/Share/PasswordRequirements.vue'
export { default as PasswordStrengthIndicator } from '~/components/Share/PasswordStrengthIndicator.vue'
export { default as QRCodeDisplay } from '~/components/Share/QRCodeDisplay.vue'
export { default as Sidebar } from '~/components/Share/Sidebar.vue'
export { default as SidebarItem } from '~/components/Share/SidebarItem.vue'
export { default as SidebarPanel } from '~/components/Share/SidebarPanel.vue'
export { default as SnackbarHost } from '~/components/Share/SnackbarHost.vue'
export { default as TablePagination } from '~/components/Share/TablePagination.vue'

export { default as FilterFieldDateRange } from '~/components/filters/FilterFieldDateRange.vue'
export { default as FilterFieldSelect } from '~/components/filters/FilterFieldSelect.vue'
export { default as FilterFieldText } from '~/components/filters/FilterFieldText.vue'
export { default as LinkCopyCell } from '~/components/table/LinkCopyCell.vue'

export { default as AuthScreen } from '~/components/auth/AuthScreen.vue'
export { default as AuthHeroIcon } from '~/components/auth/AuthHeroIcon.vue'
export { default as AuthPasswordField } from '~/components/auth/AuthPasswordField.vue'
export { default as AuthPasswordRules } from '~/components/auth/AuthPasswordRules.vue'
export { default as SmartCaptcha } from '~/components/auth/SmartCaptcha.vue'

// ─── Composables ─────────────────────────────────────────────────────────────
export { useAmountFormat } from '~/composables/useAmountFormat'
export {
  useApiError,
  getBackendCode,
  getBackendFields,
  getRetryAfter
} from '~/composables/useApiError'
export { useBrandLogo } from '~/composables/useBrandLogo'
export { useCopyToClipboard } from '~/composables/useCopyToClipboard'
export { useDateFormat, type FormatDateTimeOptions } from '~/composables/useDateFormat'
export { useIdempotencyKey } from '~/composables/useIdempotencyKey'
export { useOtpCodeInput } from '~/composables/useOtpCodeInput'
export { usePageHeader } from '~/composables/usePageHeader'
export { useQRCode, type QRCodeOptions } from '~/composables/useQRCode'
export { useRateLimit } from '~/composables/useRateLimit'
export {
  useRocketChat,
  setupRocketChat,
  destroyRocketChat,
  type RocketChatApi,
  type RocketChatOptions,
  type SupportChatIdentity
} from '~/composables/useRocketChat'
export { useSnackbar, type SnackbarItem } from '~/composables/useSnackbar'
export {
  useTablePagination,
  useTablePaginationState,
  createPageSizeOptions,
  type GPageSizeOption,
  type UseTablePaginationOptions,
  type UseTablePaginationStateOptions
} from '~/composables/useTablePagination'

// ─── Утилиты ─────────────────────────────────────────────────────────────────
export * from '~/utils/balanceList'
export * from '~/utils/chartScale'
export * from '~/utils/classNames'
export * from '~/utils/dateRange'
export * from '~/utils/email'
export * from '~/utils/format'
export * from '~/utils/formatRetryAfter'
export * from '~/utils/getErrorText'
export * from '~/utils/httpError'
export * from '~/utils/iconSize'
export * from '~/utils/nonEmptyString'
export * from '~/utils/otp'
export * from '~/utils/pageAction'
export * from '~/utils/passwordRules'
export * from '~/utils/smartCaptchaLoader'
export * from '~/utils/url'

// ─── Типы ────────────────────────────────────────────────────────────────────
export type { PageAction } from '~/types/ui'
export type { GMenuItem, GSidebarLink } from '~/types/menu'

// ─── i18n ────────────────────────────────────────────────────────────────────
import gpRu from '~/i18n/ru'
import gpEn from '~/i18n/en'

export { gpRu, gpEn }

/** Сообщения пакета по локалям — для ручного мерджа в messages приложения. */
export const gpMessages = { ru: gpRu, en: gpEn } as const

// ─── Плагин ──────────────────────────────────────────────────────────────────
import GButton from '~/ui-kit/GButton.vue'
import GCheckbox from '~/ui-kit/GCheckbox.vue'
import GContextMenu from '~/ui-kit/GContextMenu.vue'
import GContextMenuItem from '~/ui-kit/GContextMenuItem.vue'
import GCopyButton from '~/ui-kit/GCopyButton.vue'
import GDatePicker from '~/ui-kit/GDatePicker.vue'
import GDropdownButton from '~/ui-kit/GDropdownButton.vue'
import GIcon from '~/ui-kit/GIcon.vue'
import GIconButton from '~/ui-kit/GIconButton.vue'
import GInfoTooltip from '~/ui-kit/GInfoTooltip.vue'
import GInput from '~/ui-kit/GInput.vue'
import GInputSelect from '~/ui-kit/GInputSelect.vue'
import GMenuButton from '~/ui-kit/GMenuButton.vue'
import GPagination from '~/ui-kit/GPagination.vue'
import GPanel from '~/ui-kit/GPanel.vue'
import GPickerSheet from '~/ui-kit/GPickerSheet.vue'
import GPropertyList from '~/ui-kit/GPropertyList.vue'
import GPropertyRow from '~/ui-kit/GPropertyRow.vue'
import GRadio from '~/ui-kit/GRadio.vue'
import GSnackbar from '~/ui-kit/GSnackbar.vue'
import GStatusBadge from '~/ui-kit/GStatusBadge.vue'
import GTextarea from '~/ui-kit/GTextarea.vue'
import GToggle from '~/ui-kit/GToggle.vue'

import AppHeader from '~/components/Share/AppHeader.vue'
import DataCard from '~/components/Share/DataCard.vue'
import DropdownItem from '~/components/Share/DropdownItem.vue'
import DropdownMenu from '~/components/Share/DropdownMenu.vue'
import LanguageSwitcher from '~/components/Share/LanguageSwitcher.vue'
import MobileHeader from '~/components/Share/MobileHeader.vue'
import MobileTabBar from '~/components/Share/MobileTabBar.vue'
import PageHeader from '~/components/Share/PageHeader.vue'
import PasswordRequirements from '~/components/Share/PasswordRequirements.vue'
import PasswordStrengthIndicator from '~/components/Share/PasswordStrengthIndicator.vue'
import QRCodeDisplay from '~/components/Share/QRCodeDisplay.vue'
import Sidebar from '~/components/Share/Sidebar.vue'
import SidebarItem from '~/components/Share/SidebarItem.vue'
import SidebarPanel from '~/components/Share/SidebarPanel.vue'
import SnackbarHost from '~/components/Share/SnackbarHost.vue'
import TablePagination from '~/components/Share/TablePagination.vue'

import AuthScreen from '~/components/auth/AuthScreen.vue'
import AuthHeroIcon from '~/components/auth/AuthHeroIcon.vue'
import AuthPasswordField from '~/components/auth/AuthPasswordField.vue'
import AuthPasswordRules from '~/components/auth/AuthPasswordRules.vue'
import SmartCaptcha from '~/components/auth/SmartCaptcha.vue'

import FilterFieldDateRange from '~/components/filters/FilterFieldDateRange.vue'
import FilterFieldSelect from '~/components/filters/FilterFieldSelect.vue'
import FilterFieldText from '~/components/filters/FilterFieldText.vue'

import LinkCopyCell from '~/components/table/LinkCopyCell.vue'

const components = {
  GButton,
  GCheckbox,
  GContextMenu,
  GContextMenuItem,
  GCopyButton,
  GDatePicker,
  GDropdownButton,
  GIcon,
  GIconButton,
  GInfoTooltip,
  GInput,
  GInputSelect,
  GMenuButton,
  GPagination,
  GPanel,
  GPickerSheet,
  GPropertyList,
  GPropertyRow,
  GRadio,
  GSnackbar,
  GStatusBadge,
  GTextarea,
  GToggle,

  AppHeader,
  DataCard,
  DropdownItem,
  DropdownMenu,
  LanguageSwitcher,
  MobileHeader,
  MobileTabBar,
  PageHeader,
  PasswordRequirements,
  PasswordStrengthIndicator,
  QRCodeDisplay,
  Sidebar,
  SidebarItem,
  SidebarPanel,
  SnackbarHost,
  TablePagination,

  AuthScreen,
  AuthHeroIcon,
  AuthPasswordField,
  AuthPasswordRules,
  SmartCaptcha,

  FilterFieldDateRange,
  FilterFieldSelect,
  FilterFieldText,

  LinkCopyCell
}

export interface GpUiOptions {
  /**
   * Экземпляр i18n приложения (composer). Если передан — сообщения пакета
   * мёрджатся в его локали, и $t внутри компонентов работает сразу.
   */
  i18n?: Composer
}

/**
 * Регистрирует компоненты кита глобально и подмешивает сообщения пакета.
 * В Nuxt вызывать из плагина: `nuxtApp.vueApp.use(createGpUi({ i18n }))`.
 */
export function createGpUi(options: GpUiOptions = {}) {
  return {
    install(app: App) {
      for (const [name, component] of Object.entries(components)) {
        app.component(name, component)
      }

      const i18n = options.i18n
      if (i18n) {
        for (const [locale, messages] of Object.entries(gpMessages)) {
          i18n.mergeLocaleMessage(locale, messages)
        }
      }
    }
  }
}
