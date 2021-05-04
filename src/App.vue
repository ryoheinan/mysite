<template>
  <Header />
  <main>
    <Introduction />
  </main>
  <Footer />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Introduction from './components/Introduction.vue'
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'

  export default defineComponent({
    name: 'App',
    components: {
      Introduction,
      Header,
      Footer,
    },
  })
</script>

<style lang="scss">
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
  }
</style>
