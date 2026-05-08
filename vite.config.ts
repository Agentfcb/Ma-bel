import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    // Если запускаем у себя (serve) - корень '/', если собираем для GitHub (build) - папка '/Ma-bel/'
    base: command === 'serve' ? '/' : '/Ma-bel/',
  }
})