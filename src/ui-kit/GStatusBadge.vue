<template>
  <span
    class="g-status-badge"
    :class="[`g-status-badge--${config.tone}`, { 'g-status-badge--stacked': Boolean(info) }]"
  >
    <span class="g-status-badge__status">
      <span class="g-status-badge__icon" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12 12"
          fill="none"
          width="12"
          height="12"
        >
          <path :d="config.icon" fill="currentColor" />
        </svg>
      </span>
      <span class="g-status-badge__text">{{ label }}</span>
      <GInfoTooltip v-if="hintText" :text="hintText" :aria-label="hintText" />
    </span>
    <span v-if="info" class="g-status-badge__info" :class="infoToneClass">
      <component :is="infoIconComponent" v-if="infoIconComponent" />
      {{ info }}
    </span>
  </span>
</template>
<script setup lang="ts">import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import GInfoTooltip from '~/ui-kit/GInfoTooltip.vue'
import IconsCheckMini from '~/components/icons/CheckMini.vue'
import IconsClockMini from '~/components/icons/ClockMini.vue'
import IconsCloseMini from '~/components/icons/CloseMini.vue'
import IconsReverseLeft from '~/components/icons/ReverseLeft.vue'
/**
 * Статус с иконкой — макеты status invoice / payment / balance.
 * Только текст и цвет, без pill-фона.
 */
export type GStatusBadgeDomain = 'invoice' | 'payment' | 'balance'

export type GInvoiceStatus =
  | 'ACTIVE'
  | 'COMPLETED'
  | 'CREATED'
  | 'OVERPAID'
  | 'UNDERPAID'
  | 'CANCELED'
  | 'TIMEOUT'
  | 'VOID'
  | 'ERROR'
  | 'AML_FAILED'

export type GPaymentStatus = 'ACTIVE' | 'TIMEOUT'

export type GBalanceStatus = 'created' | 'paid' | 'rejected'

type GStatusBadgeStatus = GInvoiceStatus | GPaymentStatus | GBalanceStatus

interface Props {
  domain: GStatusBadgeDomain
  status: GStatusBadgeStatus
  label?: string
  /** Вторая строка под статусом — исход недоплаты. */
  info?: string
  /** Цвет второй строки: зачислено / возврат / списан / ожидает. Без значения — акцентный. */
  infoTone?: 'green' | 'black' | 'amber' | 'red' | 'gray' | 'blue' | 'orange' | 'danger'
  /** Иконка у второй строки по макету статуса. */
  infoIcon?: 'credit' | 'refund' | 'writtenOff' | 'awaiting'
}

const props = defineProps<Props>()
const { t } = useI18n()

const hintText = computed(() =>
  props.status === 'UNDERPAID' ? t('invoices.resolution.underpaidHint') : ''
)

const ICON_CLOCK =
  'M10.5 6C10.5 3.5147 8.4853 1.5 6 1.5C3.5147 1.5 1.5 3.5147 1.5 6C1.5 8.4853 3.5147 10.5 6 10.5C8.4853 10.5 10.5 8.4853 10.5 6ZM5.5 3.25C5.5 2.9739 5.7239 2.75 6 2.75C6.2761 2.75 6.5 2.9739 6.5 3.25V5.793L7.8535 7.1465C8.0488 7.3417 8.0488 7.6583 7.8535 7.8535C7.6583 8.0488 7.3417 8.0488 7.1465 7.8535L5.6465 6.3535C5.5527 6.2597 5.5 6.1326 5.5 6V3.25ZM11.5 6C11.5 9.0376 9.0376 11.5 6 11.5C2.9624 11.5 0.5 9.0376 0.5 6C0.5 2.9624 2.9624 0.5 6 0.5C9.0376 0.5 11.5 2.9624 11.5 6Z'

const ICON_CHECK =
  'M10.5 6C10.5 3.5147 8.4853 1.5 6 1.5C3.5147 1.5 1.5 3.5147 1.5 6C1.5 8.4853 3.5147 10.5 6 10.5C8.4853 10.5 10.5 8.4853 10.5 6ZM7.6699 4.1104C7.8516 3.9025 8.1676 3.8808 8.3755 4.0625C8.5834 4.2442 8.6045 4.5602 8.4229 4.7681L5.6943 7.8896C5.5994 7.9983 5.4621 8.061 5.3179 8.061C5.1736 8.061 5.0364 7.9983 4.9414 7.8896L3.5771 6.3291C3.3954 6.1212 3.4166 5.8053 3.6245 5.6235C3.8324 5.4418 4.1483 5.463 4.3301 5.6709L5.3179 6.8008L7.6699 4.1104ZM11.5 6C11.5 9.0376 9.0376 11.5 6 11.5C2.9624 11.5 0.5 9.0376 0.5 6C0.5 2.9624 2.9624 0.5 6 0.5C9.0376 0.5 11.5 2.9624 11.5 6Z'

/** Paths from status invoice.svg — viewBox 0 0 12 12 */
const ICON_CREATED =
  'M9.04 8.078V7.118H8.0801C7.8039 7.118 7.5801 6.894 7.5801 6.618C7.5801 6.342 7.8039 6.118 8.0801 6.118H9.04V5.158C9.0401 4.882 9.2639 4.658 9.54 4.658C9.8161 4.658 10.04 4.882 10.04 5.158V6.118H11C11.2761 6.118 11.5 6.342 11.5 6.618C11.5 6.894 11.2761 7.118 11 7.118H10.04V8.078C10.04 8.354 9.8161 8.578 9.54 8.578C9.2639 8.578 9.0401 8.354 9.04 8.078ZM10.5 3.96V3.5H1.5V5.1C1.5 5.528 1.5002 5.819 1.5186 6.044C1.5365 6.264 1.569 6.376 1.6089 6.454C1.7048 6.642 1.8578 6.795 2.0459 6.891C2.1241 6.931 2.2364 6.964 2.4556 6.981C2.6806 7 2.9717 7 3.3999 7H6.4302C6.7062 7 6.9302 7.224 6.9302 7.5C6.9302 7.776 6.7062 8 6.4302 8H3.3999C2.9882 8 2.6492 8.001 2.374 7.978C2.093 7.955 1.8345 7.906 1.5918 7.782C1.2155 7.59 0.9095 7.284 0.7178 6.908C0.5941 6.666 0.5449 6.407 0.522 6.126C0.4995 5.851 0.5 5.512 0.5 5.1V2.8999C0.5 2.4882 0.4995 2.1492 0.522 1.874C0.5449 1.593 0.5941 1.3345 0.7178 1.0918C0.9095 0.7155 1.2155 0.4095 1.5918 0.2178C1.8345 0.0941 2.093 0.0449 2.374 0.022C2.6492 0 2.9882 0 3.3999 0H8.6001C9.0118 0 9.3508 0 9.626 0.022C9.907 0.0449 10.1656 0.0941 10.4082 0.2178C10.7845 0.4095 11.0905 0.7155 11.2822 1.0918C11.4059 1.3345 11.4551 1.593 11.478 1.874C11.5005 2.1492 11.5 2.4882 11.5 2.8999V3.96C11.4999 4.236 11.2761 4.46 11 4.46C10.7239 4.46 10.5001 4.236 10.5 3.96ZM3.3999 1C2.9717 1 2.6806 1.0002 2.4556 1.0186C2.2364 1.0365 2.1241 1.069 2.0459 1.1089C1.8578 1.2048 1.7048 1.3578 1.6089 1.5459C1.569 1.6241 1.5365 1.7364 1.5186 1.9556C1.5066 2.1023 1.5035 2.2773 1.502 2.5H10.498C10.4965 2.2773 10.4934 2.1023 10.4814 1.9556C10.4635 1.7364 10.431 1.6241 10.3911 1.5459C10.2952 1.3578 10.1422 1.2048 9.9541 1.1089C9.8759 1.069 9.7636 1.0365 9.5444 1.0186C9.3194 1.0002 9.0283 1 8.6001 1H3.3999Z'

const ICON_CANCELED =
  'M11 5.623C11.276 5.623 11.4999 5.847 11.5 6.123C11.5 6.399 11.2761 6.623 11 6.623H8.0801C7.8039 6.623 7.5801 6.399 7.5801 6.123C7.5802 5.847 7.804 5.623 8.0801 5.623H11ZM10.5 3.96V3.5H1.5V5.1C1.5 5.528 1.5002 5.819 1.5186 6.044C1.5365 6.264 1.569 6.376 1.6089 6.454C1.7048 6.642 1.8578 6.795 2.0459 6.891C2.1241 6.931 2.2364 6.964 2.4556 6.981C2.6806 7 2.9717 7 3.3999 7H6.4302C6.7062 7 6.9302 7.224 6.9302 7.5C6.9302 7.776 6.7062 8 6.4302 8H3.3999C2.9882 8 2.6492 8.001 2.374 7.978C2.093 7.955 1.8345 7.906 1.5918 7.782C1.2155 7.59 0.9095 7.284 0.7178 6.908C0.5941 6.666 0.5449 6.407 0.522 6.126C0.4995 5.851 0.5 5.512 0.5 5.1V2.9C0.5 2.488 0.4995 2.149 0.522 1.874C0.5449 1.593 0.5941 1.334 0.7178 1.092C0.9095 0.716 1.2155 0.41 1.5918 0.218C1.8345 0.094 2.093 0.045 2.374 0.022C2.6492 0 2.9882 0 3.3999 0H8.6001C9.0118 0 9.3508 0 9.626 0.022C9.907 0.045 10.1656 0.094 10.4082 0.218C10.7845 0.41 11.0905 0.716 11.2822 1.092C11.4059 1.334 11.4551 1.593 11.478 1.874C11.5005 2.149 11.5 2.488 11.5 2.9V3.96C11.4999 4.236 11.2761 4.46 11 4.46C10.7239 4.46 10.5001 4.236 10.5 3.96ZM3.3999 1C2.9717 1 2.6806 1 2.4556 1.019C2.2364 1.036 2.1241 1.069 2.0459 1.109C1.8578 1.205 1.7048 1.358 1.6089 1.546C1.569 1.624 1.5365 1.736 1.5186 1.956C1.5066 2.102 1.5035 2.277 1.502 2.5H10.498C10.4965 2.277 10.4934 2.102 10.4814 1.956C10.4635 1.736 10.431 1.624 10.3911 1.546C10.2952 1.358 10.1422 1.205 9.9541 1.109C9.8759 1.069 9.7636 1.036 9.5444 1.019C9.3194 1 9.0283 1 8.6001 1H3.3999Z'

const ICON_TIMEOUT =
  'M10.6465 8.246C10.8417 8.051 11.1583 8.051 11.3535 8.246C11.5488 8.441 11.5488 8.758 11.3535 8.953L10.5068 9.8L11.3535 10.646C11.5488 10.842 11.5488 11.158 11.3535 11.354C11.1583 11.549 10.8417 11.549 10.6465 11.354L9.7998 10.507L8.9531 11.354C8.7579 11.549 8.4414 11.549 8.2461 11.354C8.0508 11.158 8.0508 10.842 8.2461 10.646L9.0928 9.8L8.2461 8.953C8.0508 8.758 8.0508 8.441 8.2461 8.246C8.4414 8.051 8.7579 8.051 8.9531 8.246L9.7998 9.093L10.6465 8.246ZM5.5 3.25C5.5 2.974 5.7239 2.75 6 2.75C6.2761 2.75 6.5 2.974 6.5 3.25V5.793L7.8535 7.146C8.0488 7.342 8.0488 7.658 7.8535 7.854C7.6583 8.049 7.3417 8.049 7.1465 7.854L5.6465 6.354C5.5527 6.26 5.5 6.133 5.5 6V3.25ZM10.5 6C10.5 3.515 8.4853 1.5 6 1.5C3.5147 1.5 1.5 3.515 1.5 6C1.5 8.485 3.5147 10.5 6 10.5C6.1522 10.5 6.3026 10.492 6.4507 10.478C6.7254 10.45 6.9702 10.651 6.9976 10.926C7.0248 11.201 6.8241 11.445 6.5493 11.473C6.3685 11.491 6.1853 11.5 6 11.5C2.9624 11.5 0.5 9.038 0.5 6C0.5 2.962 2.9624 0.5 6 0.5C9.0376 0.5 11.5 2.962 11.5 6C11.5 6.185 11.4906 6.368 11.4727 6.549C11.4454 6.824 11.2006 7.025 10.9258 6.998C10.6511 6.97 10.4503 6.725 10.4775 6.451C10.4922 6.303 10.5 6.152 10.5 6Z'

const ICON_VOID =
  'M10.5 6C10.5 3.515 8.4853 1.5 6 1.5C4.9375 1.5 3.9612 1.869 3.1914 2.484L9.5151 8.808C10.1309 8.038 10.5 7.062 10.5 6ZM1.5 6C1.5 8.485 3.5147 10.5 6 10.5C7.0625 10.5 8.0383 10.131 8.8081 9.515L2.4844 3.191C1.8686 3.961 1.5 4.937 1.5 6ZM11.5 6C11.5 9.038 9.0376 11.5 6 11.5C2.9624 11.5 0.5 9.038 0.5 6C0.5 2.962 2.9624 0.5 6 0.5C9.0376 0.5 11.5 2.962 11.5 6Z'

const ICON_ERROR =
  'M10.5 6C10.5 3.515 8.4853 1.5 6 1.5C3.5147 1.5 1.5 3.515 1.5 6C1.5 8.485 3.5147 10.5 6 10.5C8.4853 10.5 10.5 8.485 10.5 6ZM6.8965 4.396C7.0917 4.201 7.4083 4.201 7.6035 4.396C7.7988 4.592 7.7988 4.908 7.6035 5.104L6.707 6L7.6035 6.896C7.7988 7.092 7.7988 7.408 7.6035 7.604C7.4083 7.799 7.0917 7.799 6.8965 7.604L6 6.707L5.1035 7.604C4.9083 7.799 4.5917 7.799 4.3965 7.604C4.2012 7.408 4.2012 7.092 4.3965 6.896L5.293 6L4.3965 5.104C4.2012 4.908 4.2012 4.592 4.3965 4.396C4.5917 4.201 4.9083 4.201 5.1035 4.396L6 5.293L6.8965 4.396ZM11.5 6C11.5 9.038 9.0376 11.5 6 11.5C2.9624 11.5 0.5 9.038 0.5 6C0.5 2.962 2.9624 0.5 6 0.5C9.0376 0.5 11.5 2.962 11.5 6Z'

const ICON_AML =
  'M9.5001 3.953C9.5001 3.276 9.4915 3.077 9.4288 2.92C9.3657 2.762 9.2632 2.623 9.1314 2.516C9.0003 2.409 8.813 2.341 8.1666 2.139L6.567 1.639C6.2844 1.551 6.2011 1.527 6.1212 1.517C6.0409 1.507 5.9593 1.507 5.879 1.517C5.799 1.527 5.7158 1.551 5.4332 1.639L3.8336 2.139C3.1872 2.341 2.9999 2.409 2.8687 2.516C2.737 2.623 2.6345 2.762 2.5714 2.92C2.5087 3.077 2.5001 3.276 2.5001 3.953V4.392C2.5001 5.587 2.5032 6.107 2.6143 6.591C2.7305 7.097 2.9331 7.579 3.2135 8.016C3.482 8.434 3.8518 8.799 4.7066 9.635C4.99 9.912 5.1825 10.1 5.3429 10.235C5.499 10.366 5.5939 10.419 5.671 10.446C5.8841 10.52 6.1161 10.52 6.3292 10.446C6.4062 10.419 6.5012 10.366 6.6573 10.235C6.8177 10.1 7.0102 9.912 7.2935 9.635C8.1484 8.799 8.5182 8.434 8.7867 8.016C9.0671 7.579 9.2697 7.097 9.3858 6.591C9.497 6.107 9.5001 5.587 9.5001 4.392V3.953ZM6.8287 4.054C7.0239 3.859 7.3405 3.859 7.5357 4.054C7.731 4.25 7.731 4.566 7.5357 4.761L6.7066 5.59L7.5357 6.419C7.731 6.614 7.731 6.931 7.5357 7.126C7.3405 7.321 7.0239 7.321 6.8287 7.126L6.0001 6.297L5.1715 7.126C4.9763 7.321 4.6597 7.321 4.4644 7.126C4.2692 6.931 4.2692 6.614 4.4644 6.419L5.2931 5.59L4.4644 4.761C4.2692 4.566 4.2692 4.25 4.4644 4.054C4.6597 3.859 4.9762 3.859 5.1715 4.054L6.0001 4.883L6.8287 4.054ZM10.5001 4.392C10.5001 5.542 10.5029 6.195 10.3604 6.815C10.2185 7.434 9.9707 8.023 9.628 8.556C9.284 9.092 8.815 9.547 7.9928 10.351C7.7205 10.617 7.4963 10.836 7.2999 11.001C7.0992 11.169 6.8971 11.307 6.6583 11.39C6.232 11.539 5.7681 11.539 5.3419 11.39C5.1031 11.307 4.9009 11.169 4.7003 11.001C4.5039 10.836 4.2797 10.617 4.0074 10.351C3.1852 9.547 2.7162 9.092 2.3722 8.556C2.0295 8.023 1.7817 7.434 1.6397 6.815C1.4972 6.195 1.5001 5.542 1.5001 4.392V3.953C1.5001 3.363 1.4915 2.928 1.6432 2.548C1.7694 2.233 1.9738 1.954 2.2374 1.74C2.5541 1.482 2.9721 1.361 3.5352 1.185L5.1349 0.685C5.3838 0.607 5.5671 0.548 5.7584 0.524C5.9189 0.505 6.0812 0.505 6.2418 0.524C6.4331 0.548 6.6164 0.607 6.8653 0.685L8.4649 1.185C9.0281 1.361 9.4461 1.482 9.7628 1.74C10.0264 1.954 10.2308 2.233 10.357 2.548C10.5086 2.928 10.5001 3.363 10.5001 3.953V4.392Z'

type StatusConfig = { icon: string; tone: string; defaultLabel: string }

const ICON_UNDERPAID =
  'M8.0801 6.118H11C11.2761 6.118 11.5 6.342 11.5 6.618C11.5 6.894 11.2761 7.118 11 7.118H8.0801C7.8039 7.118 7.5801 6.894 7.5801 6.618C7.5801 6.342 7.8039 6.118 8.0801 6.118ZM10.5 3.96V3.5H1.5V5.1C1.5 5.528 1.5002 5.819 1.5186 6.044C1.5365 6.264 1.569 6.376 1.6089 6.454C1.7048 6.642 1.8578 6.795 2.0459 6.891C2.1241 6.931 2.2364 6.964 2.4556 6.981C2.6806 7 2.9717 7 3.3999 7H6.4302C6.7062 7 6.9302 7.224 6.9302 7.5C6.9302 7.776 6.7062 8 6.4302 8H3.3999C2.9882 8 2.6492 8.001 2.374 7.978C2.093 7.955 1.8345 7.906 1.5918 7.782C1.2155 7.59 0.9095 7.284 0.7178 6.908C0.5941 6.666 0.5449 6.407 0.522 6.126C0.4995 5.851 0.5 5.512 0.5 5.1V2.8999C0.5 2.4882 0.4995 2.1492 0.522 1.874C0.5449 1.593 0.5941 1.3345 0.7178 1.0918C0.9095 0.7155 1.2155 0.4095 1.5918 0.2178C1.8345 0.0941 2.093 0.0449 2.374 0.022C2.6492 0 2.9882 0 3.3999 0H8.6001C9.0118 0 9.3508 0 9.626 0.022C9.907 0.0449 10.1656 0.0941 10.4082 0.2178C10.7845 0.4095 11.0905 0.7155 11.2822 1.0918C11.4059 1.3345 11.4551 1.593 11.478 1.874C11.5005 2.1492 11.5 2.4882 11.5 2.8999V3.96C11.4999 4.236 11.2761 4.46 11 4.46C10.7239 4.46 10.5001 4.236 10.5 3.96ZM3.3999 1C2.9717 1 2.6806 1.0002 2.4556 1.0186C2.2364 1.0365 2.1241 1.069 2.0459 1.1089C1.8578 1.2048 1.7048 1.3578 1.6089 1.5459C1.569 1.6241 1.5365 1.7364 1.5186 1.9556C1.5066 2.1023 1.5035 2.2773 1.502 2.5H10.498C10.4965 2.2773 10.4934 2.1023 10.4814 1.9556C10.4635 1.7364 10.431 1.6241 10.3911 1.5459C10.2952 1.3578 10.1422 1.2048 9.9541 1.1089C9.8759 1.069 9.7636 1.0365 9.5444 1.0186C9.3194 1.0002 9.0283 1 8.6001 1H3.3999Z'

const invoiceMap: Record<GInvoiceStatus, StatusConfig> = {
  ACTIVE: { icon: ICON_CLOCK, tone: 'blue', defaultLabel: 'ACTIVE' },
  COMPLETED: { icon: ICON_CHECK, tone: 'green', defaultLabel: 'COMPLETED' },
  CREATED: { icon: ICON_CREATED, tone: 'purple', defaultLabel: 'CREATED' },
  OVERPAID: { icon: ICON_CREATED, tone: 'purple', defaultLabel: 'OVERPAID' },
  UNDERPAID: { icon: ICON_UNDERPAID, tone: 'orange', defaultLabel: 'UNDERPAID' },
  CANCELED: { icon: ICON_CANCELED, tone: 'orange', defaultLabel: 'CANCELED' },
  TIMEOUT: { icon: ICON_TIMEOUT, tone: 'amber', defaultLabel: 'TIMEOUT' },
  VOID: { icon: ICON_VOID, tone: 'gray', defaultLabel: 'VOID' },
  ERROR: { icon: ICON_ERROR, tone: 'red', defaultLabel: 'ERROR' },
  AML_FAILED: { icon: ICON_AML, tone: 'danger', defaultLabel: 'AML FAILED' }
}

const paymentMap: Record<GPaymentStatus, StatusConfig> = {
  ACTIVE: { icon: ICON_CLOCK, tone: 'blue', defaultLabel: 'ACTIVE' },
  TIMEOUT: { icon: ICON_CLOCK, tone: 'amber', defaultLabel: 'TIMEOUT' }
}

const balanceMap: Record<GBalanceStatus, StatusConfig> = {
  created: { icon: ICON_CLOCK, tone: 'gray', defaultLabel: 'created' },
  paid: { icon: ICON_CHECK, tone: 'green', defaultLabel: 'paid' },
  rejected: { icon: ICON_ERROR, tone: 'danger', defaultLabel: 'rejected' }
}

const config = computed(() => {
  if (props.domain === 'invoice') {
    return invoiceMap[props.status as GInvoiceStatus] ?? invoiceMap.ACTIVE
  }
  if (props.domain === 'payment') {
    return paymentMap[props.status as GPaymentStatus] ?? paymentMap.ACTIVE
  }
  return balanceMap[props.status as GBalanceStatus] ?? balanceMap.created
})

const label = computed(() => props.label ?? config.value.defaultLabel)

const infoToneClass = computed(() =>
  props.infoTone ? `g-status-badge__info--${props.infoTone}` : undefined
)

const infoIconComponent = computed(() => {
  if (props.infoIcon === 'credit') return IconsCheckMini
  if (props.infoIcon === 'refund') return IconsReverseLeft
  if (props.infoIcon === 'writtenOff') return IconsCloseMini
  if (props.infoIcon === 'awaiting') return IconsClockMini
  return undefined
})
</script>

<style scoped lang="scss">
.g-status-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  white-space: nowrap;

  &--stacked {
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    white-space: normal;

    .g-status-badge__info {
      padding-left: 16px;
    }
  }

  &__status {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }

  &__info {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
    font-weight: 900;
    line-height: 1.2;
    color: var(--g-panel-accent);

    &--green {
      color: var(--g-panel-accent);
    }

    &--black {
      color: #0b0b0b;
    }

    &--amber {
      color: #eda50a;
    }

    &--red {
      color: #e61111;
    }

    &--gray {
      color: #7f7f7f;
    }

    &--blue {
      color: #0d9cd5;
    }

    &--orange {
      color: #ec5b18;
    }

    &--danger {
      color: #fa4225;
    }
  }

  &__text {
    display: flex;
    align-items: center;
  }
}

.g-status-badge__icon {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
}

.g-status-badge__icon svg {
  display: block;
}

.g-status-badge--blue {
  color: #0d9cd5;
}

.g-status-badge--green {
  color: var(--g-panel-accent);
}

.g-status-badge--purple {
  color: #b052ef;
}

.g-status-badge--orange {
  color: #ec5b18;
}

.g-status-badge--amber {
  color: #eda50a;
}

.g-status-badge--gray {
  color: #7f7f7f;
}

.g-status-badge--red {
  color: #e61111;
}

.g-status-badge--danger {
  color: #fa4225;
}
</style>
