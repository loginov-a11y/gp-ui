<template>
  <div class="g-snackbar" :class="`g-snackbar--${type}`" role="status">
    <span class="g-snackbar__icon" aria-hidden="true">
      <svg
        v-if="type === 'success'"
        viewBox="36.8333 36.8333 18.3334 18.3334"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M53.5 45.9999C53.5 41.8578 50.1421 38.4999 46 38.4999C41.8578 38.4999 38.5 41.8578 38.5 45.9999C38.5 50.1421 41.8578 53.4999 46 53.4999C50.1421 53.4999 53.5 50.1421 53.5 45.9999ZM48.7832 42.8505C49.086 42.504 49.6126 42.468 49.9591 42.7708C50.3056 43.0736 50.3408 43.6002 50.0381 43.9467L45.4905 49.1493C45.3323 49.3304 45.1036 49.435 44.8631 49.435C44.6226 49.435 44.3939 49.3304 44.2357 49.1493L41.9619 46.5484C41.659 46.2019 41.6944 45.6754 42.0408 45.3725C42.3873 45.0696 42.9139 45.1049 43.2168 45.4514L44.8631 47.3346L48.7832 42.8505ZM55.1666 45.9999C55.1666 51.0625 51.0626 55.1666 46 55.1666C40.9374 55.1666 36.8333 51.0625 36.8333 45.9999C36.8333 40.9373 40.9374 36.8333 46 36.8333C51.0626 36.8333 55.1666 40.9373 55.1666 45.9999Z"
          fill="currentColor"
        />
      </svg>
      <svg
        v-else-if="type === 'error'"
        viewBox="36.8333 136.833 18.3334 18.334"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M53.5 146C53.5 141.858 50.1421 138.5 46 138.5C41.8578 138.5 38.5 141.858 38.5 146C38.5 150.142 41.8578 153.5 46 153.5C50.1421 153.5 53.5 150.142 53.5 146ZM47.4941 143.327C47.8196 143.002 48.3471 143.002 48.6725 143.327C48.9979 143.653 48.9979 144.18 48.6725 144.506L47.1784 146L48.6725 147.494C48.9979 147.819 48.9979 148.347 48.6725 148.672C48.3471 148.998 47.8196 148.998 47.4941 148.672L46 147.178L44.5058 148.672C44.1804 148.998 43.6529 148.998 43.3275 148.672C43.002 148.347 43.002 147.819 43.3275 147.494L44.8216 146L43.3275 144.506C43.002 144.18 43.002 143.653 43.3275 143.327C43.6529 143.002 44.1804 143.002 44.5058 143.327L46 144.822L47.4941 143.327ZM55.1666 146C55.1666 151.063 51.0626 155.167 46 155.167C40.9374 155.167 36.8333 151.063 36.8333 146C36.8333 140.937 40.9374 136.833 46 136.833C51.0626 136.833 55.1666 140.937 55.1666 146Z"
          fill="currentColor"
        />
      </svg>
      <svg
        v-else
        viewBox="36.8333 233.833 18.3334 18.334"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M53.5 243C53.5 238.858 50.1421 235.5 46 235.5C41.8578 235.5 38.5 238.858 38.5 243C38.5 247.142 41.8578 250.5 46 250.5C50.1421 250.5 53.5 247.142 53.5 243ZM45.2391 246.333V242.583C45.2391 242.123 45.6123 241.75 46.0724 241.75C46.5326 241.75 46.9057 242.123 46.9057 242.583V246.333C46.9057 246.793 46.5326 247.167 46.0724 247.167C45.6123 247.166 45.2391 246.793 45.2391 246.333ZM46.0724 238.833C46.5326 238.833 46.9057 239.206 46.9057 239.667C46.9057 240.127 46.5326 240.5 46.0724 240.5H46.0643C45.604 240.5 45.231 240.127 45.2309 239.667C45.2309 239.206 45.604 238.833 46.0643 238.833H46.0724ZM55.1666 243C55.1666 248.063 51.0626 252.167 46 252.167C40.9374 252.167 36.8333 248.063 36.8333 243C36.8333 237.937 40.9374 233.833 46 233.833C51.0626 233.833 55.1666 237.937 55.1666 243Z"
          fill="currentColor"
        />
      </svg>
    </span>

    <div class="g-snackbar__body">
      <p v-if="title" class="g-snackbar__title">{{ title }}</p>
      <p v-if="description" class="g-snackbar__description">{{ description }}</p>
      <slot />
    </div>

    <button
      v-if="closable"
      type="button"
      class="g-snackbar__close"
      :aria-label="$t('common.close')"
      @click="emit('close')"
    >
      <svg
        viewBox="309.244 41.2441 9.512 9.5117"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M317.577 41.2441C317.903 40.9186 318.43 40.9186 318.756 41.2441C319.081 41.5695 319.081 42.097 318.756 42.4225L315.178 45.9999L318.756 49.5774C319.081 49.9028 319.081 50.4304 318.756 50.7558C318.43 51.0812 317.903 51.0812 317.577 50.7558L314 47.1783L310.423 50.7558C310.097 51.0812 309.57 51.0812 309.244 50.7558C308.919 50.4304 308.919 49.9028 309.244 49.5774L312.822 45.9999L309.244 42.4225C308.919 42.097 308.919 41.5695 309.244 41.2441C309.57 40.9186 310.097 40.9186 310.423 41.2441L314 44.8216L317.577 41.2441Z"
          fill="currentColor"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
/**
 * Снекбар — макет Sneakbar.svg.
 * success: #DBFFFA / #00B39D; error: #FFEBE7 / #FA4225; info: #D8F4FF / #0D9CD5.
 */
export type GSnackbarType = 'success' | 'error' | 'info'

interface Props {
  type?: GSnackbarType
  title?: string
  description?: string
  closable?: boolean
}

withDefaults(defineProps<Props>(), {
  type: 'info',
  title: '',
  description: '',
  closable: true
})

const emit = defineEmits<{
  close: []
}>()
</script>

<style scoped>
.g-snackbar {
  --g-snackbar-bg: #d8f4ff;
  --g-snackbar-icon: #0d9cd5;
  display: flex;
  align-items: flex-start;
  gap: 18px;
  width: 320px;
  min-height: 74px;
  padding: 16px 18px 16px 16px;
  border-radius: 20px;
  background: var(--g-snackbar-bg);
  box-shadow:
    0 2px 4px rgb(0 0 0 / 0.02),
    0 7px 7px rgb(0 0 0 / 0.02),
    0 17px 10px rgb(0 0 0 / 0.01);
  color: var(--g-button-fg-on-light, #0b0b0b);
}

.g-snackbar--success {
  --g-snackbar-bg: #dbfffa;
  --g-snackbar-icon: #00b39d;
}

.g-snackbar--error {
  --g-snackbar-bg: #ffebe7;
  --g-snackbar-icon: #fa4225;
}

.g-snackbar--info {
  --g-snackbar-bg: #d8f4ff;
  --g-snackbar-icon: #0d9cd5;
}

.g-snackbar__icon {
  display: flex;
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  margin-top: 1px;
  color: var(--g-snackbar-icon);
}

.g-snackbar__icon svg {
  display: block;
  width: 18px;
  height: 18px;
}

.g-snackbar__body {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
  padding-top: 1px;
}

.g-snackbar__title,
.g-snackbar__description {
  margin: 0;
  font-family: var(--font-family-base);
}

.g-snackbar__title {
  color: var(--g-button-fg-on-light, #0b0b0b);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}

.g-snackbar__description {
  color: var(--g-input-message, #7f7f7f);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  overflow-wrap: break-word;
}

.g-snackbar__close {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-top: 2px;
  padding: 0;
  border: none;
  background: transparent;
  color: var(--g-button-fg-on-light, #0b0b0b);
  cursor: pointer;
}

.g-snackbar__close svg {
  display: block;
  width: 10px;
  height: 10px;
}

.g-snackbar__close:hover {
  opacity: 0.65;
}
</style>
