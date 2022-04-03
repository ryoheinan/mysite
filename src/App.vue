<script setup lang="ts">
  import { computed } from 'vue'
  import { useHead, Head } from '@vueuse/head'
  import Profile from './components/Profile.vue'
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import Work from './components/Work.vue'
  import Contact from './components/Contact.vue'
  import Skill from './components/Skill.vue'
  import { useSettingsStore } from './stores/settings'
  import Alert from './components/Alert.vue'

  const settings = useSettingsStore()
  const getLang = computed(() => settings.getLang)
  const introSlideLink = {
    title: 'チェックする!',
    url: 'https://speakerdeck.com/ryoheinan/zi-ji-shao-jie-suraido',
  }

  useHead({
    script: [
      {
        src: 'https://static.cloudflareinsights.com/beacon.min.js',
        defer: true,
        dataCfBeacon: `{"token": ${import.meta.env.VITE_ANALYTICS_TOKEN}}`,
      },
    ],
  })
</script>

<template>
  <Head>
    <html :lang="getLang.lang" />
  </Head>
  <Header />
  <main>
    <Alert
      v-if="getLang.lang == 'ja'"
      msg="自己紹介スライド公開中!"
      :link="introSlideLink"
      class="mb-3"
    />
    <Work class="mb-7" />
    <Profile class="mb-7" />
    <Skill class="mb-7" />
    <Contact />
  </main>
  <Footer />
</template>

<style lang="scss">
  @import '@primer/css/core/index.scss';
  @import '@primer/css/color-modes/index.scss';
  @import '@primer/css/labels/index.scss';

  body {
    margin: 0;
    font-family: Avenir, 'Noto Sans JP', 'Noto Sans CJK JP', Roboto, 'Segoe UI',
      'BIZ UDPGothic', 'Helvetica Neue', Arial, Helvetica,
      'Hiragino Kaku Gothic ProN', 'Hiragino Sans', '游ゴシック', 'YuGothic',
      sans-serif;
  }

  #app {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    @media (prefers-color-scheme: light) {
      color: #2c3e50;
    }
  }

  main {
    margin-top: 1rem;
    width: min(93%, 992px);
    h2 {
      font-size: 1.8rem;
      font-weight: 700;
    }

    h3 {
      font-size: 1.3rem;
      font-weight: 700;
    }

    section {
      margin-bottom: 1rem;
    }
  }

  .nobreak {
    display: inline-block;
  }
</style>
