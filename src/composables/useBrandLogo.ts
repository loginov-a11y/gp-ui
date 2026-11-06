import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
/**
 * Полноразмерный логотип бренда: русский и английский варианты.
 */
export function useBrandLogo() {
  const { locale, t } = useI18n()

  const src = computed(() => (locale.value === 'en' ? '/logo-en.svg' : '/logo.svg'))
  const alt = computed(() => t('common.brand'))

  return { src, alt }
}
