import QRCode from 'qrcode'

export interface QRCodeOptions {
  width?: number
  margin?: number
  color?: {
    dark?: string
    light?: string
  }
  errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H'
}

export const useQRCode = () => {
  /**
   * Генерирует QR код из текста и возвращает data URL изображения
   * @param text - Текст для кодирования в QR код
   * @param options - Опции для генерации QR кода
   * @returns Promise с data URL изображения
   */
  const generateQRCode = async (text: string, options: QRCodeOptions = {}): Promise<string> => {
    try {
      const defaultOptions = {
        width: 200,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        },
        errorCorrectionLevel: 'M' as const,
        ...options
      }

      const dataURL = await QRCode.toDataURL(text, defaultOptions)
      return dataURL
    } catch (error) {
      console.error('Ошибка генерации QR кода:', error)
      throw new Error('Не удалось сгенерировать QR код')
    }
  }

  /**
   * Генерирует QR код и возвращает его как SVG строку
   * @param text - Текст для кодирования в QR код
   * @param options - Опции для генерации QR кода
   * @returns Promise с SVG строкой
   */
  const generateQRCodeSVG = async (text: string, options: QRCodeOptions = {}): Promise<string> => {
    try {
      const defaultOptions = {
        width: 200,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        },
        errorCorrectionLevel: 'M' as const,
        ...options
      }

      const svgString = await QRCode.toString(text, {
        type: 'svg',
        ...defaultOptions
      })
      return svgString
    } catch (error) {
      console.error('Ошибка генерации QR кода SVG:', error)
      throw new Error('Не удалось сгенерировать QR код SVG')
    }
  }

  return {
    generateQRCode,
    generateQRCodeSVG
  }
}
