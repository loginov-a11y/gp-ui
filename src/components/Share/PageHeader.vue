<template>
  <div class="page-header" :class="{ _kit: kit }">
    <div class="page-header__start">
      <GIconButton
        v-for="action in leadingActions"
        :key="action.key"
        size="md"
        variant="ghost"
        class="page-header__icon-btn"
        :aria-label="actionLabel(action)"
        :disabled="pageActionDisabled(action.disabled)"
        @click="action.onClick"
      >
        <component :is="action.icon" :size="16" />
      </GIconButton>
      <div class="page-header__text">
        <h1 class="page-header__title">{{ title }}</h1>
        <p v-if="subtitle" class="page-header__subtitle">{{ subtitle }}</p>
      </div>
    </div>
    <div class="page-header__actions">
      <LanguageSwitcher compact />
      <div v-if="kit" id="page-header-selects" class="page-header__selects" />
      <slot name="actions">
        <template v-if="kit">
          <GIconButton
            v-for="action in iconActions"
            :key="action.key"
            size="md"
            variant="ghost"
            class="page-header__icon-btn"
            :aria-label="actionLabel(action)"
            :disabled="pageActionDisabled(action.disabled) || pageActionLoading(action.loading)"
            @click="action.onClick"
          >
            <component :is="action.icon" :size="16" />
          </GIconButton>
          <GButton
            v-for="action in buttonActions"
            :key="action.key"
            :size="action.size || 'md'"
            :variant="pageActionToGButtonVariant(action.variant)"
            :loading="pageActionLoading(action.loading)"
            :disabled="pageActionDisabled(action.disabled)"
            @click="action.onClick"
          >
            <template v-if="action.icon" #leading>
              <component :is="action.icon" :size="16" />
            </template>
            {{ actionLabel(action) }}
          </GButton>
        </template>
        <component
          :is="LegacyButton"
          v-for="action in kit ? [] : trailingActions"
          :key="action.key"
          :size="action.size || 'sm'"
          :disabled="pageActionDisabled(action.disabled)"
          @click="action.onClick"
        >
          <component :is="action.icon" v-if="action.icon" class="w-4 h-4 mr-2" />
          {{ actionLabel(action) }}
        </component>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">import { usePageHeader } from '~/composables/usePageHeader'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import LanguageSwitcher from '~/components/Share/LanguageSwitcher.vue'
import GButton from '~/ui-kit/GButton.vue'
import GIconButton from '~/ui-kit/GIconButton.vue'
import LegacyButton from '~/ui/GButton.vue'
import type { PageAction } from '~/types/ui'
import {
  pageActionDisabled,
  pageActionLabel,
  pageActionLoading,
  pageActionToGButtonVariant
} from '~/utils/pageAction'

interface Props {
  title?: string
  subtitle?: string
  actions?: PageAction[]
  kit?: boolean
}

const props = defineProps<Props>()

const { t } = useI18n()
const { state: pageHeaderState } = usePageHeader()
const actionLabel = (action: PageAction) => pageActionLabel(action, t)

const title = computed(() => props.title ?? pageHeaderState.value.title)
const subtitle = computed(() => props.subtitle ?? pageHeaderState.value.subtitle)
const actions = computed(() => props.actions ?? pageHeaderState.value.actions)

const leadingActions = computed(() =>
  props.kit ? actions.value.filter((action) => action.leading) : []
)
const trailingActions = computed(() =>
  props.kit ? actions.value.filter((action) => !action.leading) : actions.value
)
const iconActions = computed(() => trailingActions.value.filter((action) => action.iconOnly))
const buttonActions = computed(() => trailingActions.value.filter((action) => !action.iconOnly))
</script>

<style scoped>
.page-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 2rem;
}

.page-header__start {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  flex: 1;
}

.page-header:not(._kit)::before {
  content: '';
  position: absolute;
  top: -1rem;
  left: -2rem;
  right: -2rem;
  bottom: -1rem;
  background: linear-gradient(
    135deg,
    rgba(6, 182, 212, 0.1) 0%,
    rgba(6, 182, 212, 0.05) 50%,
    transparent 100%
  );
  border-radius: 1rem;
  z-index: -1;
}

.page-header__text {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}

.page-header__title {
  margin: 0;
  font-size: 1.875rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.2;
  color: var(--color-text-primary);
}

.page-header__subtitle {
  margin: 0;
  font-size: 0.875rem;
  color: var(--color-gray-medium);
}

.page-header__actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.page-header._kit {
  height: 76px;
  padding: 16px;
  margin: 0;
  gap: 16px;
  box-sizing: border-box;
  flex-shrink: 0;
}

.page-header._kit .page-header__text {
  gap: 4px;
}

.page-header._kit .page-header__title {
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.6px;
  color: #0b0b0b;
}

.page-header._kit .page-header__subtitle {
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.24px;
  color: #7f7f7f;
}

.page-header._kit .page-header__actions {
  gap: 8px;
}

.page-header__selects {
  display: flex;
  align-items: center;
  gap: 8px;
}

.page-header__selects:empty {
  display: none;
}

.page-header._kit .page-header__actions :deep(.g-button--md) {
  padding: 0 12px;
  gap: 4px;
}

.page-header._kit .page-header__actions :deep(.g-button--md .g-button__leading svg) {
  width: 16px;
  height: 16px;
}

.page-header._kit .page-header__icon-btn {
  width: 36px;
  height: 36px;
}

.page-header._kit .page-header__icon-btn :deep(svg) {
  width: 16px;
  height: 16px;
}

@media screen and (max-width: 768px) {
  .page-header {
    height: auto;
    flex-direction: column;
    align-items: flex-start;
  }

  .page-header._kit .page-header__actions {
    width: 100%;
  }

  .page-header._kit .page-header__actions :deep(.g-button) {
    width: 100%;
  }
}

@media screen and (max-width: 640px) {
  .page-header:not(._kit) .page-header__actions {
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
  }

  .page-header:not(._kit) .page-header__actions :deep(.g-button) {
    width: 100%;
  }
}
</style>
