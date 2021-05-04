<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <Footer />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import HelloWorld from './components/HelloWorld.vue'
  import Footer from './components/Footer.vue'

  export default defineComponent({
    name: 'App',
    components: {
      HelloWorld,
      Footer,
    },
  })
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
