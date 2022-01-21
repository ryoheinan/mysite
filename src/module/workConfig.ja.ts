import { Work } from './workConfig.en'

export const workData: Work[] = [
  {
    title: 'e-Shoku',
    description:
      '情報連携実習3のプロジェクトです。\nオンライン食事会のニューノーマルをテーマに開発しました。',
    technology: 'Next.js, TypeScript, Django Rest Framework, PostgreSQL',
    category: 'School',
    year: '開発中',
    urls: [
      {
        text: 'Source code (client)',
        url: 'https://github.com/eshoku/frontend',
      },
      {
        text: 'Source code (backend)',
        url: 'https://github.com/eshoku/backend',
      },
    ],
  },
  {
    title: 'Disco Event Hub',
    description: 'Discordでのオンラインイベントを管理できるサービスです。',
    technology: 'Vue 3, TypeScript, Firebase, Python',
    category: 'School',
    year: '2021 夏',
    image: {
      src: 'disco_event_hub.jpg',
      alt: 'an image of Disco Event Hub',
      srcset: 'disco_event_hub.webp',
    },
    urls: [
      {
        text: 'Source code (client)',
        url: 'https://github.com/ryoheinan/disco-event-hub-frontend',
      },
      {
        text: 'Source code (backend)',
        url: 'https://github.com/ryoheinan/disco-event-hub-backend',
      },
    ],
  },
  {
    title: '個人サイト',
    description:
      '本Webサイト\nVue 3.2から使用可能になった <script setup> を用いています。',
    technology: 'Vue 3, TypeScript',
    category: 'Hobby',
    year: '2021 夏 ~ 現在',
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
      '友人のTaitoと2021年の春にハッカソンに出場した際に開発したWebアプリです。\n形態素解析を用いて、LINEのトーク情報をもとに楽曲をリコメンドしてくれるLINE Botです。\n履歴情報などは、LIFFアプリで確認することができます。',
    technology: 'Nuxt 2, LIFF (LINE Front-end Framework), Django',
    category: 'Hobby',
    year: '2021 春',
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
    title: '「うさぎとかめ」をテーマにしたゲーム',
    description:
      '有名な童話である「うさぎとかめ」をテーマにしたPC向け2Dゲームです。\n楽曲のアレンジも行いました。',
    technology: 'Unity, C#',
    category: 'School',
    year: '2020 冬',
    image: {
      src: 'usakame.png',
      alt: 'an image of "The Tortoise and the Hare"-themed PC game',
      srcset: 'usakame.webp',
    },
    urls: [
      {
        text: 'Presentation slides (Japanese)',
        url: 'https://speakerdeck.com/ryoheinan/pcgemu-usagitokame-fa-biao-suraido',
      },
      {
        text: 'Website (PC)',
        url: 'https://usakame.ryohei.dev/',
      },
    ],
  },
  {
    title: 'UniWeather',
    description:
      'アクセシビリティを重視したユニバーサルデザインな天気予報サイトです。\nアクセシビリティに関して学ぶ良いきっかけになりました。',
    technology: 'Vue 2',
    category: 'School',
    year: '2020 夏',
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
    title: '菅原そろばん教室のWebサイト',
    description: 'アルバイトで開発・運用しているサイトです。',
    technology: 'Nuxt 2',
    category: 'Work',
    year: '2019 冬 ~ 現在',
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
