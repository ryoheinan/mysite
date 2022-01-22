import { defineStore } from 'pinia'

type LangType = 'en' | 'ja'

interface getLangResult {
  lang: LangType
  langText: string
}

export const useSettingsStore = defineStore('settings', {
  state: () => ({ lang: 'ja' as LangType }),
  getters: {
    getLang(): getLangResult {
      const lang = this.lang
      const langText = lang === 'en' ? 'English' : '日本語'
      return { lang, langText }
    },
  },
})
