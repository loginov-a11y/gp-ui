<template>
  <div v-if="compact" ref="rootRef" class="language-switcher language-switcher--compact">
    <GDropdownButton variant="white" :open="isDropdownOpen" @click="isDropdownOpen = !isDropdownOpen">
      <template #leading>
        <component :is="currentLocaleIcon" :size="20" />
      </template>
      {{ currentLocaleCode }}
    </GDropdownButton>
    <GContextMenu v-if="isDropdownOpen" class="language-switcher__menu">
      <GContextMenuItem
        v-for="item in availableLocales"
        :key="item.code"
        :selected="item.code === locale"
        :muted="item.code !== locale"
        @click="switchLanguage(item.code, closeDropdown)"
      >
        <template #leading>
          <component :is="getLocaleIcon(item.code)" :size="16" />
        </template>
        {{ item.name }}
      </GContextMenuItem>
    </GContextMenu>
  </div>

  <div v-else class="relative">
    <DropdownMenu v-model="isDropdownOpen">
      <template #trigger="{ isOpen, toggle }">
        <div
          class="flex items-center gap-1.5 cursor-pointer px-2.5 py-2 rounded-2xl transition-all duration-300 relative bg-white border-2 border-gray-200 shadow-sm hover:border-teal-500 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-md min-w-20 lg:gap-2 lg:px-3 lg:py-2 lg:min-w-24"
          @click="toggle"
        >
          <div class="text-xs text-gray-500 font-medium uppercase tracking-wider whitespace-nowrap">
            {{ $t('common.language') }}
          </div>
          <div class="flex items-center gap-1">
            <div class="flex items-center">
              <component :is="currentLocaleIcon" :size="18" />
            </div>
            <ChevronDown
              class="w-3.5 h-3.5 text-gray-500 transition-all duration-300 flex-shrink-0 lg:w-4 lg:h-4"
              style="margin-top: 5px"
              :class="{ 'rotate-180 text-teal-500': isOpen }"
            />
          </div>
        </div>
      </template>

      <template #menu="{ close }">
        <DropdownItem
          v-for="item in availableLocales"
          :key="item.code"
          :active="item.code === $i18n.locale"
          @click="switchLanguage(item.code, close)"
        >
          <template #icon>
            <div class="flex items-center">
              <component :is="getLocaleIcon(item.code)" :size="18" />
            </div>
          </template>
          <template #title>{{ item.name }}</template>
          <template #subtitle>{{ item.code.toUpperCase() }}</template>
        </DropdownItem>
      </template>
    </DropdownMenu>
  </div>
</template>

<script setup lang="ts">import { ref, computed, inject } from 'vue'
import { useI18n } from 'vue-i18n'

import { ChevronDown } from 'lucide-vue-next'
import DropdownMenu from './DropdownMenu.vue'
import DropdownItem from './DropdownItem.vue'
import GContextMenu from '~/ui-kit/GContextMenu.vue'
import GContextMenuItem from '~/ui-kit/GContextMenuItem.vue'
import GDropdownButton from '~/ui-kit/GDropdownButton.vue'
import IconGb from '~/components/icons/gb.vue'
import IconRu from '~/components/icons/ru.vue'
import { useClickOutside } from '~/ui-kit/useClickOutside'
import { useSnackbar } from '~/composables/useSnackbar'


const { locale, availableLocales: availableLocalesRaw, t } = useI18n()

const gpSetLocale = inject<((locale: string) => Promise<void>) | undefined>('gpSetLocale')
const snackbar = useSnackbar()

const emit = defineEmits<{
  /** Язык переключён — потребитель сохраняет его в своих настройках. */
  change: [locale: string]
}>()

const isDropdownOpen = ref(false)
const rootRef = ref<HTMLElement | null>(null)

const props = withDefaults(
  defineProps<{
    compact?: boolean
    /** Локали для меню; по умолчанию — availableLocales i18n. */
    locales?: Array<{ code: string; name?: string }>
  }>(),
  {
    compact: false,
    locales: undefined
  }
)

const nativeNames: Record<string, string> = { ru: 'Русский', en: 'English' }

const availableLocales = computed(() =>
  props.locales ?? availableLocalesRaw.map((code) => ({ code, name: nativeNames[code] ?? code.toUpperCase() }))
)
const currentLocaleIcon = computed(() => getLocaleIcon(locale.value))
const currentLocaleCode = computed(() => String(locale.value).toUpperCase())

const getLocaleIcon = (localeCode: string) => {
  const icons: Record<string, typeof IconRu> = {
    ru: IconRu,
    en: IconGb
  }
  return icons[localeCode] || null
}

const closeDropdown = () => {
  isDropdownOpen.value = false
}

useClickOutside(rootRef, () => {
  if (props.compact) closeDropdown()
})

const switchLanguage = async (localeCode: string, close: () => void) => {
  if (locale.value === localeCode) {
    close()
    return
  }

  const previousLocale = locale.value

  try {
    // Потребитель (nuxt-i18n и др.) инжектит gpSetLocale — он триггит
    // ленивую загрузку файла локали; прямое присвоение её обходит.
    if (gpSetLocale) await gpSetLocale(localeCode)
    else locale.value = localeCode

        // Персистентность — на потребителе: у каждого кабинета свой контур
    // настроек (/terminal/settings, /partner/settings, ...).
    emit('change', localeCode)

    close()
  } catch (error) {
    console.error('Ошибка переключения языка:', error)

    if (locale.value !== previousLocale) {
      locale.value = previousLocale
    }

    snackbar.add({
      title: t('common.error'),
      description: t('common.languageSwitchError'),
      color: 'error',
      icon: 'i-heroicons-x-circle'
    })
  }
}
</script>

<style scoped>
.language-switcher--compact {
  position: relative;
  flex-shrink: 0;
}

.language-switcher__menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  z-index: 20;
  min-width: 100%;
}
</style>
