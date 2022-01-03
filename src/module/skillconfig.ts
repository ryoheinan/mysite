export interface Skill {
  title: string
  styleName: string | 'skill-excellent'
  items: Array<{ title: string }>
}

export const skillData: Skill[] = [
  {
    title: 'Excellent',
    styleName: 'skill-excellent',
    items: [
      {
        title: 'HTML',
      },
      {
        title: 'Python',
      },
    ],
  },
  {
    title: 'Good',
    styleName: 'skill-good',
    items: [
      {
        title: 'C',
      },
      {
        title: 'Django',
      },
      {
        title: 'JavaScript',
      },
      {
        title: 'Nuxt 2',
      },
      {
        title: 'Vue 2',
      },
    ],
  },
  {
    title: 'Some',
    styleName: 'skill-some',
    items: [
      {
        title: 'OCaml',
      },
      {
        title: 'Sass/CSS',
      },
      {
        title: 'TypeScript',
      },
      {
        title: 'Unity',
      },
      {
        title: 'Vue 3',
      },
    ],
  },
  {
    title: 'Learning',
    styleName: 'skill-learning',
    items: [
      {
        title: 'Android',
      },
      {
        title: 'Go',
      },
      {
        title: 'Java',
      },
      {
        title: 'Next.js',
      },
      {
        title: 'SQL',
      },
    ],
  },
]
