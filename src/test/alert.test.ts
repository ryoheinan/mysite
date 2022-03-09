import { mount } from '@vue/test-utils'
import Alert from '../components/Alert.vue'
import { describe, expect, it } from 'vitest'

describe('Alert component', () => {
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

  it('msgが正しく設定されているか', () => {
    expect(wrapper.text()).toContain('こちらからアクセスできます。')
  })
  it('aタグが正しく設定されているか', () => {
    expect(wrapper.find('a').exists()).toBeTruthy()
    expect(wrapper.find('a').text()).toBe('リンク')
    expect(wrapper.find('a').attributes().href).toBe('https://example.com')
  })
  it('Snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
