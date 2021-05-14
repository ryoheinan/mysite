export interface Work {
  title: string
  description?: string
  technology: string
  category: 'School' | 'Hobby' | 'Work'
  urls?: Array<Urls>
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
        text: 'Source code',
        url: 'https://github.com/ryoheinan/mysite',
      },
    ],
  },
  {
    title: 'Morphomusic',
    description:
      'My friend, Taito and I joined hackathon in the spring of 2021. We developed this web app for it.',
    technology: 'Nuxt.js, LIFF (LINE Front-end Framework), Django',
    category: 'Hobby',
    urls: [
      {
        text: 'Source code (client)',
        url: 'https://github.com/ryoheinan/MorphoMusicClient',
      },
      {
        text: 'Source code (backend)',
        url: 'https://github.com/Taito-Code/MorphoMusicBackend',
      },
    ],
  },
  {
    title: 'Game : The Tortoise and the Hare',
    description: 'A famous story, "The Tortoise and the Hare"-themed PC game.',
    technology: 'Unity, C#',
    category: 'School',
    urls: [
      {
        text: 'Presentation slides (Japanese)',
        url:
          'https://drive.google.com/file/d/1xxH5_Qy7aW5y2vZaHA58JObgFMvNRKwm/view?usp=sharing',
      },
      {
        text: 'Website (PC)',
        url: 'https://usakame.netlify.app/',
      },
    ],
  },
  {
    title: 'Sugawara Soroban website',
    description: 'My first job.',
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
    description: 'Universal design weather forecast site.',
    technology: 'Vue 2',
    category: 'School',
    /*
    urls: [
      {
        text: 'Source code',
        url: '#',
      },
    ],
    */
  },
]
