import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { useSettingsStore } from './stores/settings'

import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'index', component: App },
    { path: '/:lang', name: 'lang', component: App },
  ],
})

router.beforeEach((to) => {
  // set lang setting via query param
  const lang = to.params.lang
  const settings = useSettingsStore()
  if (lang === 'en') {
    settings.lang = lang
  } else {
    settings.lang = 'ja'
  }
})

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
