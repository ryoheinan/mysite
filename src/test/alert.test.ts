import { mount } from '@vue/test-utils'
import Alert from '../components/Alert.vue'
import { describe, expect, it } from 'vitest'

describe('alert component', () => {
  expect(Alert).toBeTruthy()

  const wrapper = mount(Alert, {
    props: {
      msg: 'こちらからアクセスできます。',
      link: {
        title: 'リンク',
        url: 'https://example.com',
      },
    },
  })

  it('msgにhelloと表示されているか', () => {
    expect(wrapper.text()).toContain('こちらからアクセスできます。')
  })
  it('aタグが正しく設定されているか', () => {
    expect(wrapper.find('a').exists()).toBeTruthy()
    expect(wrapper.find('a').text()).toContain('リンク')
    expect(wrapper.find('a').attributes().href).toContain('https://example.com')
  })
  it('スナップショット', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
