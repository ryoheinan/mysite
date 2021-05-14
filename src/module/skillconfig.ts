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
    ],
  },
  {
    title: 'Good',
    bgColor: '#A0E3F2',
    items: [
      {
        title: 'Python',
      },
      {
        title: 'C',
      },
      {
        title: 'JavaScript',
      },
      {
        title: 'Django',
      },
      {
        title: 'Vue 2',
      },
      {
        title: 'Nuxt.js',
      },
    ],
  },
  {
    title: 'Some',
    bgColor: '#9AD9C2',
    items: [
      {
        title: 'Sass/CSS',
      },
      {
        title: 'Unity',
      },
    ],
  },
  {
    title: 'Learning',
    bgColor: '#F5F1BF',
    items: [
      {
        title: 'OCaml',
      },
      {
        title: 'TypeScript',
      },
      {
        title: 'Go',
      },
      {
        title: 'Vue 3',
      },
    ],
  },
]
