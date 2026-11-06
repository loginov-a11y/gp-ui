# @gp/ui

Дизайн-кит goodPayments: UI-компоненты, каркас кабинета, composables и утилиты.
Выделено из `good-payments-terminal` для переиспользования в новых кабинетах
(партнёрский ЛК и далее). Чистый Vue 3 — работает и в Vite, и в Nuxt.

## Установка

Локально, без публикации:

```jsonc
// package.json потребителя
"dependencies": {
  "@gp/ui": "file:../good-payments-terminal-npm"
}
```

Peer-зависимости (должны стоять у потребителя): `vue ^3.5`, `vue-i18n` (^10||^11),
`vue-router ^4.5`, `lucide-vue-next`, `@vuepic/vue-datepicker`.

## Подключение

```ts
// main.ts (Vite)
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createGpUi, gpMessages } from '@gp/ui'
import '@gp/ui/style.css'

const i18n = createI18n({
  locale: 'ru',
  messages: { ru: { ...gpMessages.ru }, en: { ...gpMessages.en } }
})

createApp(App).use(i18n).use(createGpUi()).mount('#app')
```

В Nuxt — плагин:

```ts
// plugins/gp-ui.ts
import { createGpUi } from '@gp/ui'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(createGpUi({ i18n: nuxtApp.$i18n }))
})
```

`createGpUi` регистрирует все `G*` компоненты глобально и, если передан
composer, мёрджит сообщения пакета в локали приложения. Без плагина —
импорты по одному: `import { GButton } from '@gp/ui'`.

## Что внутри

- **ui-kit** (`G*`): GButton, GInput, GInputSelect, GDatePicker, GPagination,
  GStatusBadge, GSnackbar, GContextMenu, GToggle, GPanel, GPickerSheet и др.
  `GIcon` — замена `UIcon` с реестром `i-heroicons-*`.
- **Каркас кабинета**: Sidebar, SidebarPanel, SidebarItem, AppHeader,
  MobileHeader, MobileTabBar, PageHeader, DataCard, LanguageSwitcher,
  SnackbarHost, TablePagination, QRCodeDisplay, фильтры, LinkCopyCell.
- **Auth**: AuthScreen, AuthPasswordField, AuthPasswordRules, SmartCaptcha
  (sitekey — пропсом).
- **Composables**: useSnackbar (замена useToast), usePageHeader, useRateLimit,
  useRocketChat + setupRocketChat, useCopyToClipboard, useDateFormat,
  useAmountFormat, useTablePagination, useOtpCodeInput, useIdempotencyKey,
  useQRCode, useApiError, useBrandLogo.
- **Utils**: format, dateRange, passwordRules, otp, chartScale, pageAction,
  classNames (GClassValue/normalizeClass), balanceList и др.
- **i18n**: `gpMessages` (`common.*`, `auth.*`, `terminal.nav.*` и др. ключи
  в исходных неймспейсах — мёржатся в messages приложения).
- **Стили**: `@gp/ui/style.css` (весь бандл), `@gp/ui/styles/tokens.css` —
  CSS-переменные темы; подключать токены обязательно.

## Связь с приложением (пропсы/события, не сторы)

Каркас отвязан от домена — данные и действия идут снаружи:

```vue
<SidebarPanel
  :user-name="user.name"
  :balance-amount="balance.available"
  balance-to="/balance"
  :menu-items="menuItems"
  :docs-url="docsUrl"
  :links="[{ key: 'marketing', label: 'Маркетинговые материалы', url: marketingUrl }]"
  :chat-enabled="chatEnabled"
  :logout-loading="loading"
  @logout="logout"
  @toggle-chat="openChat"
/>
```

`LanguageSwitcher` эмитит `change` — кабинет сам сохраняет язык в свой контур.
`MobileTabBar`/`SidebarPanel` принимают `menuItems: GMenuItem[]`.
`useRocketChat` конфигурируется `setupRocketChat({ url, fetchIdentity, getLocale })`.

## Сборка

```bash
pnpm install
pnpm build      # vite (ESM+CJS+css) + vue-tsc (d.ts) + fix-dts
pnpm typecheck  # проверка типов src
pnpm dev        # watch-сборка
```

`pnpm-workspace.yaml > allowBuilds` разрешает postinstall esbuild/@parcel/watcher.

## Чего в пакете нет (осознанно)

- Nuxt-only: `useSSRListData` (useAsyncData), authSessionFetch, middleware,
  server/** BFF — это уровень шаблона кабинета, не библиотеки.
- Домен терминала: `components/terminal/**`, `useTerminal*Store`,
  `useAppMenu`, `Share/StatusBadge` (underpayment), pos/*, payment/*.
- `useToast` → `useSnackbar` (своя очередь + SnackbarHost).
- `app/ui/GButton` (legacy) не экспортируется — используется только внутри
  пакета; снаружи — `ui-kit/GButton`.

## Обратная совместимость с good-payments-terminal

- `useSnackbar().add({title, description, color})` — API как у `useToast`.
- `SidebarPanel` теперь на пропсах: терминал передаёт `menuItems` из
  `useAppMenu`, баланс из `useTerminalBalanceStore`, `docsUrl` из runtimeConfig.
- `SmartCaptcha` принимает `sitekey` пропсом (из `yandexSmartCaptchaSitekey`).
- `LanguageSwitcher`: после `change` терминал пишет `language` в
  `/terminal/settings`, как раньше.
