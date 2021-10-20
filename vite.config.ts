import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
const pathSrc = path.resolve(__dirname, './src')

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "${pathSrc}/assets/scss/index.scss";` },
    },
  },
})
