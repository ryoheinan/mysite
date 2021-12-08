export interface Skill {
  title: string
  bgColor?: string
  items: Array<Item>
}

interface Item {
  title: string
}

export const skillData: Skill[] = [
  {
    title: 'Excellent',
    bgColor: '#F2C1B6',
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
    bgColor: '#A0E3F2',
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
    bgColor: '#9AD9C2',
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
    bgColor: '#F5F1BF',
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
