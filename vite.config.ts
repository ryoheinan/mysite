import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl'
import { createHtmlPlugin } from 'vite-plugin-html'

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    css: {
      preprocessorOptions: {
        sass: { charset: false },
        scss: { charset: false },
      },
    },
    plugins: [
      vue(),
      ViteWebfontDownload(),
      createHtmlPlugin({
        inject: {
          data: {
            injectScript: `<script 
          defer='true'
          src='https://static.cloudflareinsights.com/beacon.min.js'
           data-cf-beacon='{"token": "${process.env.VITE_ANALYTICS_TOKEN}"}'></script>`,
          },
        },
      }),
    ],
  })
}
