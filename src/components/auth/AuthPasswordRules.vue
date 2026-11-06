<template>
  <ul class="auth-password-rules">
    <li
      v-for="rule in rules"
      :key="rule.key"
      class="auth-password-rules__item"
      :class="{ _met: rule.met }"
    >
      <IconsCheckCircle v-if="rule.met" :size="12" />
      <IconsXCircle v-else :size="12" />
      <span>{{ t(rule.labelKey) }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import IconsCheckCircle from '~/components/icons/CheckCircle.vue'
import IconsXCircle from '~/components/icons/XCircle.vue'
import { getPasswordRuleItems } from '~/utils/passwordRules'

const props = defineProps<{
  password: string
}>()

const { t } = useI18n()
const rules = computed(() => getPasswordRuleItems(props.password))
</script>

<style scoped>
.auth-password-rules {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.auth-password-rules__item {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.24px;
  color: #7f7f7f;
}

.auth-password-rules__item :deep(svg) {
  width: 12px;
  height: 12px;
  color: #fa4225;
}

.auth-password-rules__item._met {
  color: #00b39d;
}

.auth-password-rules__item._met :deep(svg) {
  color: #00b39d;
}
</style>
