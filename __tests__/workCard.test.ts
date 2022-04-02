import { mount } from '@vue/test-utils'
import WorkCard from '../src/components/WorkCard.vue'
import { describe, expect, it } from 'vitest'

describe.each([['Hobby'], ['School'], ['Work']])(
  'WorkCard component (category: %s)',
  (categoryName) => {
    expect(WorkCard).toBeTruthy()

    const wrapper = mount(WorkCard, {
      props: {
        workData: {
          title: 'すごい成果物',
          description: 'これは\n説明です。',
          technology: 'Vue 3, TypeScript, Django Rest Framework, PostgreSQL',
          category: categoryName as 'School' | 'Hobby' | 'Work',
          year: '2021 夏 ~  2022 初頭',
          image: {
            src: 'work.jpg',
            alt: 'workのスクリーンショット画像',
            srcset: 'work.webp',
          },
          urls: [
            {
              text: 'Source code (client)',
              url: 'https://example.com/client',
            },
            {
              text: 'Source code (backend)',
              url: 'https://example.com/backend',
            },
          ],
        },
      },
    })

    it('titleが正しく設定されているか', () => {
      expect(wrapper.find('h3').text()).toBe('すごい成果物')
    })
    it('descriptionが正しく設定されているか', () => {
      expect(wrapper.find('[data-test="description"]').text()).toEqual(
        'これは\n説明です。'
      )
    })
    it('technologyが正しく設定されているか', () => {
      expect(wrapper.find('[data-test="technology"]').text()).toBe(
        'Vue 3, TypeScript, Django Rest Framework, PostgreSQL'
      )
    })
    it(`category (${categoryName}) が正しく設定されているか`, () => {
      expect(wrapper.text()).toContain(categoryName)
    })
    it('yearが正しく設定されているか', () => {
      expect(wrapper.find('[data-test="year"]').text()).toBe(
        '2021 夏 ~  2022 初頭'
      )
    })
    it('画像が正しく設定されているか', () => {
      expect(wrapper.find('img').attributes().src).toBe('/img/work.jpg')
      expect(wrapper.find('img').attributes().alt).toBe(
        'workのスクリーンショット画像'
      )
      expect(wrapper.find('source').attributes().srcset).toBe('/img/work.webp')
    })
    it('urlが正しく設定されているか', () => {
      const buttons = wrapper.findAll('a')
      expect(buttons).toHaveLength(2)
      expect(buttons[0].attributes().href).toBe('https://example.com/client')
      expect(buttons[1].attributes().href).toBe('https://example.com/backend')
      expect(buttons[0].text()).toBe('Source code (client)')
      expect(buttons[1].text()).toBe('Source code (backend)')
    })
    it('Snapshot', () => {
      expect(wrapper.html()).toMatchSnapshot()
    })
  }
)
