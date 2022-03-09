import { mount } from '@vue/test-utils'
import SkillCard from '../components/SkillCard.vue'
import { describe, expect, it } from 'vitest'

describe('SkillCard component', () => {
  expect(SkillCard).toBeTruthy()

  const wrapper = mount(SkillCard, {
    props: {
      title: 'Excellent',
      styleName: 'skill-excellent',
      items: [{ title: 'item1' }, { title: 'item2' }, { title: 'item3' }],
    },
  })

  it('msgが正しく設定されているか', () => {
    expect(wrapper.find('h3').text()).toBe('Excellent')
  })
  it('itemが正しく設定されているか', () => {
    expect(wrapper.find('[data-test="items"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-test="items"]').text()).toContain('item1')
    expect(wrapper.find('[data-test="items"]').text()).toContain('item2')
    expect(wrapper.find('[data-test="items"]').text()).toContain('item3')
    expect(wrapper.findAll('[data-test="item"]')).toHaveLength(3)
  })
  it('Snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
