export interface Work {
  title: string
  description?: string
  technology: string
  category: 'School' | 'Hobby' | 'Work'
  urls: Array<Urls>
}

interface Urls {
  text: string
  url: string
}

export const workData: Work[] = [
  {
    title: 'Personal website',
    description: 'This website!!',
    technology: 'Vue 3, TypeScript',
    category: 'Hobby',
    urls: [
      {
        text: 'GitHub Repository',
        url: '#',
      },
    ],
  },
  {
    title: 'Morphomusic',
    description:
      'I and my friend, Taito joined hackathon in the spring of 2021. We developed this web app for the hackathon.',
    technology: 'Nuxt.js, LIFF (LINE Front-end Framework), Django',
    category: 'Hobby',
    urls: [
      {
        text: 'GitHub Repository (client app)',
        url: 'https://github.com/ryoheinan/MorphoMusicClient',
      },
      {
        text: 'GitHub Repository (backend app)',
        url: 'https://github.com/Taito-Code/MorphoMusicBackend',
      },
    ],
  },
  {
    title: 'Game : The Tortoise and the Hare',
    technology: 'Unity, C#',
    category: 'School',
    urls: [
      {
        text: 'Presentation slides (Japanese)',
        url: '#',
      },
      {
        text: 'Website',
        url: '#',
      },
    ],
  },
  {
    title: 'Sugawara Soroban website',
    description: '',
    technology: 'Nuxt.js',
    category: 'Work',
    urls: [
      {
        text: 'Website',
        url: 'https://sugawara-soroban.com/',
      },
    ],
  },
  {
    title: 'UniWeather',
    technology: 'Vue 2 (CDN)',
    category: 'School',
    urls: [
      {
        text: 'GitHub Repository',
        url: '#',
      },
    ],
  },
]
