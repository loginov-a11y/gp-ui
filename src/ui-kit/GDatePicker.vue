<template>
  <div
    class="g-date-picker"
    :class="{
      _filled: hasValue,
      _disabled: disabled,
      _range: range,
      _inline: inline,
      _sheet: useSheetTrigger,
      '_month-overlay-open': isMonthOverlayOpen
    }"
  >
    <button
      v-if="useSheetTrigger"
      type="button"
      class="g-date-picker__input"
      :disabled="disabled"
      @click="openSheet"
    >
      <span class="g-date-picker__trigger-label">{{ triggerLabel }}</span>
      <span class="g-date-picker__icon" aria-hidden="true">
        <IconsCalendar :size="20" />
      </span>
    </button>

    <GPickerSheet v-if="useSheetTrigger" :open="sheetOpen" @close="closeSheet" @save="saveSheet">
      <GDatePicker
        :model-value="draftValue"
        :range="range"
        :locale="pickerLocale"
        :format-pattern="formatPattern"
        :month-name-format="monthNameFormat"
        inline
        @update:model-value="onDraftUpdate"
      />
    </GPickerSheet>

    <VueDatePicker
      v-else
      ref="pickerRef"
      :model-value="modelValue"
      :disabled="disabled"
      :range="range"
      :inline="inline"
      :enable-time-picker="false"
      :locale="pickerLocale"
      :format="formatPattern"
      :placeholder="resolvedPlaceholder"
      :auto-apply="true"
      :clearable="clearable && !inline"
      :week-start="1"
      :month-name-format="monthNameFormat"
      :day-names="dayNames"
      :config="pickerConfig"
      :teleport="!inline"
      :ui="pickerUi"
      @update:model-value="onUpdate"
      @update-month-year="onUpdateMonthYear"
      @closed="onPickerClosed"
    >
      <template #input-icon>
        <span class="g-date-picker__icon" aria-hidden="true">
          <IconsCalendar :size="20" />
        </span>
      </template>

      <template #clear-icon="{ clear }">
        <span
          class="g-date-picker__clear-btn"
          role="button"
          tabindex="0"
          :aria-label="$t('common.clear')"
          @click="clearPickerInput(clear)"
          @keydown.enter.prevent="clearPickerInput(clear)"
          @keydown.space.prevent="clearPickerInput(clear)"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M12 4L4 12M4 4L12 12"
              stroke="currentColor"
              stroke-width="1.2"
              stroke-linecap="round"
            />
          </svg>
        </span>
      </template>

      <template #month-year="slotProps">
        <div class="g-date-picker__month-year">
          <div class="g-date-picker__header">
            <button
              type="button"
              class="g-date-picker__month-pill"
              :class="{ _open: isMonthOverlayOpen }"
              :aria-expanded="isMonthOverlayOpen"
              @click="toggleMonthYearOverlay(slotProps.year)"
            >
              <span>{{ formatMonthYear(slotProps.month, slotProps.year) }}</span>
              <svg
                class="g-date-picker__chevron"
                :class="{ _open: isMonthOverlayOpen }"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="currentColor"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <div v-show="!isMonthOverlayOpen" class="g-date-picker__nav-group">
              <button
                type="button"
                class="g-date-picker__nav-btn"
                :aria-label="$t('common.previousMonth')"
                :disabled="slotProps.isDisabled?.(false)"
                @click="slotProps.handleMonthYearChange?.(false, true)"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 12.6667V3.33333M8 3.33333L4 7.33333M8 3.33333L12 7.33333"
                    stroke="currentColor"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                class="g-date-picker__nav-btn"
                :aria-label="$t('common.nextMonth')"
                :disabled="slotProps.isDisabled?.(true)"
                @click="slotProps.handleMonthYearChange?.(true, true)"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 3.33333V12.6667M8 12.6667L12 8.66667M8 12.6667L4 8.66667"
                    stroke="currentColor"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div v-if="isMonthOverlayOpen" class="g-date-picker__month-overlay">
            <section
              v-for="yearValue in getOverlayYears(slotProps.year)"
              :key="yearValue"
              class="g-date-picker__year-section"
            >
              <button
                type="button"
                class="g-date-picker__year-toggle"
                :class="{ _expanded: expandedYear === yearValue }"
                @click="toggleExpandedYear(yearValue)"
              >
                <span>{{ yearValue }}</span>
                <span
                  class="g-date-picker__year-toggle-icon"
                  :class="{ _expanded: expandedYear === yearValue }"
                  aria-hidden="true"
                >
                  <svg
                    v-if="expandedYear === yearValue"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 4L4 12M4 4L12 12"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                    />
                  </svg>
                  <svg
                    v-else
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 3.33333V12.6667M3.33333 8H12.6667"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
              </button>

              <div v-if="expandedYear === yearValue" class="g-date-picker__months-grid">
                <button
                  v-for="monthItem in getMonthItems(slotProps.months)"
                  :key="`${yearValue}-${monthItem.value}`"
                  type="button"
                  class="g-date-picker__month-btn"
                  :class="{
                    _active: slotProps.month === monthItem.value && slotProps.year === yearValue
                  }"
                  @click="selectOverlayMonth(monthItem.value, yearValue, slotProps.updateMonthYear)"
                >
                  {{ monthItem.text }}
                </button>
              </div>
            </section>
          </div>
        </div>
      </template>

      <template v-if="range" #action-row="{ internalModelValue }">
        <button
          v-if="hasPickerValue(internalModelValue)"
          type="button"
          class="g-date-picker__clear"
          @click="clearPickerValue"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M12 4L4 12M4 4L12 12"
              stroke="currentColor"
              stroke-width="1.2"
              stroke-linecap="round"
            />
          </svg>
          {{ $t('common.clear') }}
        </button>
      </template>
    </VueDatePicker>
  </div>
</template>

<script setup lang="ts">import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

import VueDatePicker from '@vuepic/vue-datepicker'
import IconsCalendar from '~/components/icons/Calendar.vue'
import GPickerSheet from '~/ui-kit/GPickerSheet.vue'
import '~/ui-kit/g-date-picker.css'
import type { DatePickerInstance } from '@vuepic/vue-datepicker'

export type GDatePickerValue = Date | [Date, Date] | null

/**
 * Date picker — макет Data picker.svg.
 * Chip-триггер 36px; popup: pill месяц/год, стрелки ↑↓, range/single стили, «Очистить» в range.
 */
interface Props {
  modelValue?: GDatePickerValue
  placeholder?: string
  disabled?: boolean
  clearable?: boolean
  range?: boolean
  inline?: boolean
  /** Открывать календарь во вложенном шите (мобильные фильтры). */
  sheet?: boolean
  locale?: string
  formatPattern?: string
  monthNameFormat?: 'long' | 'short'
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  placeholder: undefined,
  disabled: false,
  clearable: true,
  range: false,
  inline: false,
  sheet: false,
  locale: undefined,
  formatPattern: 'dd.MM.yyyy',
  monthNameFormat: 'short'
})

const emit = defineEmits<{
  'update:modelValue': [value: GDatePickerValue]
}>()

const getInitialViewYear = () => {
  const value = props.modelValue

  if (value instanceof Date) {
    return value.getFullYear()
  }

  if (Array.isArray(value) && value[0] instanceof Date) {
    return value[0].getFullYear()
  }

  return new Date().getFullYear()
}

const pickerRef = ref<DatePickerInstance>(null)
const isMonthOverlayOpen = ref(false)
const expandedYear = ref<number | null>(null)
const viewYear = ref(getInitialViewYear())
const sheetOpen = ref(false)
const draftValue = ref<GDatePickerValue>(null)

defineOptions({ name: 'GDatePicker' })

const { t, locale: i18nLocale } = useI18n()
const pickerLocale = computed(() => props.locale ?? i18nLocale.value)
const resolvedPlaceholder = computed(() => props.placeholder ?? t('common.date'))
const dayNames = computed(() => [
  t('common.weekdays.mon'),
  t('common.weekdays.tue'),
  t('common.weekdays.wed'),
  t('common.weekdays.thu'),
  t('common.weekdays.fri'),
  t('common.weekdays.sat'),
  t('common.weekdays.sun')
])

const useSheetTrigger = computed(() => props.sheet && !props.inline)

const formatDay = (value: Date) => {
  const day = String(value.getDate()).padStart(2, '0')
  const month = String(value.getMonth() + 1).padStart(2, '0')
  return `${day}.${month}.${value.getFullYear()}`
}

const clonePickerValue = (value: GDatePickerValue): GDatePickerValue => {
  if (value instanceof Date) return new Date(value)
  if (Array.isArray(value) && value[0] instanceof Date && value[1] instanceof Date) {
    return [new Date(value[0]), new Date(value[1])]
  }
  return null
}

const triggerLabel = computed(() => {
  const value = props.modelValue
  if (value instanceof Date) return formatDay(value)
  if (Array.isArray(value) && value[0] instanceof Date && value[1] instanceof Date) {
    return `${formatDay(value[0])} — ${formatDay(value[1])}`
  }
  return resolvedPlaceholder.value
})

const pickerConfig = computed(() => ({
  keepActionRow: props.range,
  closeOnAutoApply: !props.range
}))

const menuClassName = computed(() => {
  const base = props.range
    ? 'g-date-picker__menu g-date-picker__menu--range'
    : 'g-date-picker__menu g-date-picker__menu--single'

  return isMonthOverlayOpen.value ? `${base} g-date-picker__menu--month-overlay-open` : base
})

const pickerUi = computed(() => ({
  input: 'g-date-picker__input',
  menu: menuClassName.value
}))

const hasValue = computed(() => hasPickerValue(props.modelValue))

const monthFormatter = computed(
  () =>
    new Intl.DateTimeFormat(pickerLocale.value, {
      month: 'long',
      year: 'numeric'
    })
)

const formatMonthYear = (month?: number, year?: number) => {
  if (month == null || year == null) {
    return ''
  }

  const label = monthFormatter.value.format(new Date(year, month, 1))
  return label.charAt(0).toUpperCase() + label.slice(1)
}

const hasPickerValue = (value: unknown): value is Date | [Date, Date] => {
  if (value instanceof Date) {
    return true
  }

  if (Array.isArray(value) && value.length === 2) {
    return value.every((item) => item instanceof Date)
  }

  return false
}

const onUpdate = (value: Date | Date[] | null) => {
  if (props.range) {
    if (Array.isArray(value) && value.length === 2) {
      const [start, end] = value
      if (start instanceof Date && end instanceof Date) {
        emit('update:modelValue', [start, end])
      }
      return
    }

    if (value === null) {
      emit('update:modelValue', null)
    }
    return
  }

  emit('update:modelValue', value instanceof Date ? value : null)
}

const clearPickerValue = () => {
  pickerRef.value?.clearValue?.()
  emit('update:modelValue', null)
}

const clearPickerInput = (clear: (event?: Event) => void) => {
  clear()
  emit('update:modelValue', null)
}

const onUpdateMonthYear = ({ year }: { year: number }) => {
  viewYear.value = year
}

const getOverlayYears = (currentYear: number) => [currentYear, currentYear + 1, currentYear + 2]

const getMonthItems = (months?: { value: number; text: string }[]) => {
  if (months?.length) {
    return months
  }

  const monthFormat = props.monthNameFormat === 'short' ? 'short' : 'long'

  return Array.from({ length: 12 }, (_, value) => ({
    value,
    text: new Intl.DateTimeFormat(pickerLocale.value, { month: monthFormat }).format(
      new Date(2026, value, 1)
    )
  }))
}

const closeMonthOverlay = () => {
  isMonthOverlayOpen.value = false
  expandedYear.value = null
}

const onPickerClosed = () => {
  closeMonthOverlay()
}

const toggleExpandedYear = (year: number) => {
  expandedYear.value = expandedYear.value === year ? null : year
}

const selectOverlayMonth = (
  month: number,
  year: number,
  updateMonthYear?: (month: number, year: number, fromNav: boolean) => void
) => {
  updateMonthYear?.(month, year, false)
  closeMonthOverlay()
}

const toggleMonthYearOverlay = (currentYear?: number) => {
  if (isMonthOverlayOpen.value) {
    closeMonthOverlay()
    return
  }

  expandedYear.value = currentYear ?? viewYear.value
  isMonthOverlayOpen.value = true
}

const openMonthYearOverlay = () => {
  expandedYear.value = viewYear.value
  isMonthOverlayOpen.value = true
}

const openSheet = () => {
  if (props.disabled || sheetOpen.value) return
  draftValue.value = clonePickerValue(props.modelValue ?? null)
  sheetOpen.value = true
}

const closeSheet = () => {
  sheetOpen.value = false
}

const onDraftUpdate = (value: GDatePickerValue) => {
  draftValue.value = clonePickerValue(value)
}

const saveSheet = () => {
  emit('update:modelValue', clonePickerValue(draftValue.value))
  closeSheet()
}

defineExpose({
  openMonthYearPicker: openMonthYearOverlay
})
</script>

<style scoped>
.g-date-picker {
  display: inline-flex;
  max-width: 100%;
}

.g-date-picker._inline {
  display: block;
}

.g-date-picker :deep(.dp__main) {
  width: auto;
}

.g-date-picker._inline :deep(.dp__main) {
  width: 100%;
}

.g-date-picker :deep(.dp__input_wrap) {
  width: auto;
}

.g-date-picker:not(._inline) :deep(.dp__input_wrap) {
  width: 100%;
  min-width: 112px;
}

.g-date-picker._inline :deep(.dp__input_wrap) {
  display: none;
}

.g-date-picker :deep(.g-date-picker__input) {
  width: 100%;
  min-width: 112px;
  height: 48px;
  padding: 0 44px 0 12px;
  border-radius: 16px;
  background: var(--g-input-gray, #7f7f7f);
  color: var(--g-input-placeholder, #7f7f7f);
  font-family: var(--font-family-base);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
}

.g-date-picker._filled :deep(.g-date-picker__input) {
  padding-left: 44px;
  color: var(--g-button-fg-on-light, #0b0b0b);
}

.g-date-picker :deep(.g-date-picker__input::placeholder) {
  color: var(--g-input-placeholder, #7f7f7f);
}

.g-date-picker :deep(.g-date-picker__input:hover),
.g-date-picker :deep(.g-date-picker__input:focus) {
  border-color: var(--g-input-border-color, #d9d9d9);
  background: var(--g-button-white, #fff);
  color: var(--g-button-fg-on-light, #0b0b0b);
  outline: none;
}

.g-date-picker._filled :deep(.g-date-picker__input:hover),
.g-date-picker._filled :deep(.g-date-picker__input:focus) {
  color: var(--g-button-fg-on-light, #0b0b0b);
}

.g-date-picker :deep(.dp__input_icon) {
  left: auto;
  right: 12px;
  inset-inline-start: auto;
  inset-inline-end: 12px;
  width: 20px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);
  pointer-events: none;
}

.g-date-picker :deep(.dp--clear-btn) {
  right: auto;
  left: 12px;
  inset-inline-end: auto;
  inset-inline-start: 12px;
  width: 16px;
  height: 16px;
  padding: 0;
  color: var(--g-input-placeholder, #7f7f7f);
}

.g-date-picker__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--g-input-placeholder, #7f7f7f);
}

.g-date-picker._filled .g-date-picker__icon {
  color: var(--g-button-fg-on-light, #0b0b0b);
}

.g-date-picker__clear-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: var(--g-input-placeholder, #7f7f7f);
  cursor: pointer;
  transition: color 0.2s ease;
}

.g-date-picker__clear-btn:hover {
  color: var(--g-button-fg-on-light, #0b0b0b);
}

.g-date-picker._sheet {
  display: flex;
  width: 100%;
}

.g-date-picker._sheet .g-date-picker__input {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 0 12px;
  cursor: pointer;
  text-align: left;
}

.g-date-picker._sheet._filled .g-date-picker__input {
  padding-left: 12px;
}

.g-date-picker._sheet .g-date-picker__input:disabled {
  cursor: not-allowed;
}

.g-date-picker__trigger-label {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.g-date-picker._sheet .g-date-picker__icon {
  position: static;
  flex-shrink: 0;
}

.g-date-picker._month-overlay-open :deep(.dp__calendar),
.g-date-picker._month-overlay-open :deep(.dp__calendar_header),
.g-date-picker._month-overlay-open :deep(.dp__action_row) {
  display: none;
}

.g-date-picker__month-year {
  width: 100%;
}

.g-date-picker__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  margin-bottom: 8px;
}

.g-date-picker__month-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 0 16px;
  border: none;
  border-radius: 9999px;
  background: #f7f7f7;
  color: #0b0b0b;
  font-family: var(--font-family-base);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.g-date-picker__month-pill:hover {
  background: rgba(11, 11, 11, 0.05);
}

.g-date-picker__month-pill._open {
  background: #fff;
  box-shadow: inset 0 0 0 1px #d9d9d9;
}

.g-date-picker__chevron {
  flex-shrink: 0;
  color: #7f7f7f;
  transition: transform 0.2s ease;
}

.g-date-picker__chevron._open {
  transform: rotate(180deg);
}

.g-date-picker__nav-group {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.g-date-picker__nav-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  border: none;
  border-radius: 9999px;
  background: #f7f7f7;
  color: #0b0b0b;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.g-date-picker__nav-btn:hover:not(:disabled) {
  background: rgba(11, 11, 11, 0.05);
}

.g-date-picker__nav-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.g-date-picker__clear {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 0 16px;
  border: none;
  border-radius: 9999px;
  background: #ffebe7;
  color: #fa4225;
  font-family: var(--font-family-base);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.g-date-picker__clear:hover {
  background: #ffd9d1;
}
</style>
