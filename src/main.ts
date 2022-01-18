import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { useSettingsStore } from './stores/settings'

import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [],
})

router.beforeEach((to) => {
  // set lang setting via query param
  const lang = to.query.lang
  if (lang === 'en') {
    const settings = useSettingsStore()
    settings.lang = lang
  }
})

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
