import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const src = resolve(fileURLToPath(new URL('.', import.meta.url)), 'src')

export default defineConfig({
  plugins: [vue()],
  resolve: {
    // Сохраняем пути вида '~/...' из исходного приложения: '~' — это src пакета.
    alias: {
      '~': src
    }
  },
  build: {
    lib: {
      entry: resolve(src, 'index.ts'),
      name: 'GpUi',
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'gp-ui.js' : 'gp-ui.cjs'),
      // package.json exports './style.css' → './dist/ui.css' — имя файла фиксируем.
      cssFileName: 'ui'
    },
    rollupOptions: {
      external: [
        'vue',
        'vue-i18n',
        'vue-router',
        'lucide-vue-next',
        'qrcode',
        '@vuepic/vue-datepicker',
        /^@vuepic\/vue-datepicker\/.*/
      ],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
    cssCodeSplit: false
  }
})
