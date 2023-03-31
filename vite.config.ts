import { loadEnv } from 'vite'
import { defineConfig } from 'vitest/config'

import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    css: {
      preprocessorOptions: {
        sass: { charset: false },
        scss: { charset: false },
      },
    },
    plugins: [
      vue(),
      createHtmlPlugin({
        inject: {
          data: {
            injectScript: `<script 
          defer='true'
          src='https://static.cloudflareinsights.com/beacon.min.js'
           data-cf-beacon='{"token": "${env.VITE_ANALYTICS_TOKEN}"}'></script>`,
          },
        },
      }),
    ],
    test: {
      globals: true,
      environment: 'happy-dom',
    },
  }
})
