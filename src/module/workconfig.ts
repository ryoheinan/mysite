export interface Work {
  title: string
  description?: string
  technology: string
  category: 'School' | 'Hobby' | 'Work'
  year: string
  image?: Image
  urls?: Array<Urls>
}

interface Urls {
  text: string
  url: string
}

interface Image {
  src: string
  alt: string
  srcset: string
}

export const workData: Work[] = [
  {
    title: 'Personal website',
    description: 'This website!!',
    technology: 'Vue 3, TypeScript',
    category: 'Hobby',
    year: '2021 summer ~ now',
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
    technology: 'Nuxt 2, LIFF (LINE Front-end Framework), Django',
    category: 'Hobby',
    year: '2021 spring',
    image: {
      src: 'morphomusic.jpg',
      alt: 'an image of morphomusic',
      srcset: 'morphomusic.webp',
    },
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
    description:
      'A famous story, "The Tortoise and the Hare (a.k.a. Usagitokame)"-themed PC game.',
    technology: 'Unity, C#',
    category: 'School',
    year: '2020 winter',
    image: {
      src: 'usakame.png',
      alt: 'an image of "The Tortoise and the Hare"-themed PC game',
      srcset: 'usakame.webp',
    },
    urls: [
      {
        text: 'Presentation slides (Japanese)',
        url: 'https://drive.google.com/file/d/1xxH5_Qy7aW5y2vZaHA58JObgFMvNRKwm/view?usp=sharing',
      },
      {
        text: 'Website (PC)',
        url: 'https://usakame.ryohei.dev/',
      },
    ],
  },
  {
    title: 'UniWeather',
    description: 'Universal design weather forecast site.',
    technology: 'Vue 2',
    category: 'School',
    year: '2020 summer',
    /*
    urls: [
      {
        text: 'Source code',
        url: '#',
      },
    ],
    */
  },
  {
    title: 'Sugawara Soroban website',
    description: 'My first job.',
    technology: 'Nuxt 2',
    category: 'Work',
    year: '2019 winter ~ now',
    image: {
      src: 'soroban.png',
      alt: 'an image of Sugawara Soroban website',
      srcset: 'soroban.webp',
    },
    urls: [
      {
        text: 'Website',
        url: 'https://sugawara-soroban.com/',
      },
    ],
  },
]
