import { useSnackbar } from '~/composables/useSnackbar'
/**
 * Копирование текста в буфер обмена с опциональным toast-уведомлением.
 */
export function useCopyToClipboard() {
  const snackbar = useSnackbar()

  async function copyToClipboard(
    text: string,
    options?: {
      showToast?: boolean
      toastTitle?: string
      toastDescription?: string
    }
  ): Promise<boolean> {
    if (!text || typeof navigator === 'undefined' || !navigator.clipboard) {
      return false
    }
    try {
      await navigator.clipboard.writeText(text)
      if (options?.showToast !== false && options?.toastTitle) {
        snackbar.add({
          title: options.toastTitle,
          description: options.toastDescription,
          color: 'success'
        })
      }
      return true
    } catch (err) {
      console.error('Clipboard error', err)
      return false
    }
  }

  return { copyToClipboard }
}
