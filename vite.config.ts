import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      sass: { charset: false },
      scss: { charset: false },
    },
  },
  plugins: [vue(), ViteWebfontDownload()],
})
