import { mount } from '@vue/test-utils'
import BlankSlate from '../components/BlankSlate.vue'
import { describe, expect, it } from 'vitest'

describe('BlankSlate component', () => {
  expect(BlankSlate).toBeTruthy()

  const wrapper = mount(BlankSlate, {
    props: {
      description: 'これは説明です。',
      btnText: 'リンク',
      btnUrl: 'https://example.com',
    },
  })

  it('descriptionが正しく設定されているか', () => {
    expect(wrapper.text()).toContain('これは説明です。')
  })
  it('aタグが正しく設定されているか', () => {
    expect(wrapper.find('a').exists()).toBeTruthy()
    expect(wrapper.find('a').text()).toContain('リンク')
    expect(wrapper.find('a').attributes().href).toContain('https://example.com')
  })
  it('Snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
