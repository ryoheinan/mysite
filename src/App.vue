<script setup lang="ts">
  import Profile from './components/Profile.vue'
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import Work from './components/Work.vue'
  import Contact from './components/Contact.vue'
  import Skill from './components/Skill.vue'
</script>

<template>
  <Header />
  <main>
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
  }

  #app {
    font-family: Avenir, Roboto, 'Segoe UI', Helvetica, Arial, sans-serif;
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
    }

    h3 {
      font-size: 1.3rem;
    }

    section {
      margin-bottom: 1rem;
    }
  }

  .nobreak {
    display: inline-block;
  }
</style>
