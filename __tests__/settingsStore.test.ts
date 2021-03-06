import { setActivePinia, createPinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { useSettingsStore } from '../src/stores/settings'

describe('Settings store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('デフォルト（英語）のPiniaのテスト', () => {
    const settings = useSettingsStore()
    expect(settings.getLang.lang).toBe('en')
    expect(settings.getLang.langText).toBe('English')
  })

  it('英語のPiniaのテスト', () => {
    const settings = useSettingsStore()
    settings.lang = 'ja'
    expect(settings.getLang.lang).toBe('ja')
    expect(settings.getLang.langText).toBe('日本語')
  })
})
