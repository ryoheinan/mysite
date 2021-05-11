<template>
  <Header />
  <main>
    <Introduction />
    <Work />
  </main>
  <Footer />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Introduction from './components/Introduction.vue'
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import Work from './components/Work.vue'

  export default defineComponent({
    name: 'App',
    components: {
      Introduction,
      Header,
      Footer,
      Work,
    },
  })
</script>

<style lang="scss">
  @import '@primer/css/support/index.scss';
  @import '@primer/css/base/index.scss';
  @import '@primer/css/utilities/index.scss';
  @import '@primer/css/box/index.scss';
  @import '@primer/css/buttons/index.scss';
  @import '@primer/css/labels/index.scss';

  body {
    margin: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    color: #2c3e50;
  }

  main {
    width: min(80%, 992px);

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
</style>
