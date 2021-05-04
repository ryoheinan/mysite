<template>
  <header>
    <div class="link">
      <a href="https://github.com/ryoheinan" target="_blank">GitHub</a>
    </div>
    <h1>
      Hi there <span class="hand">👋</span><br />
      I'm<br />
      Ryohei Nagasawa
    </h1>
  </header>
</template>

<script lang="ts">
  import { ref, defineComponent } from 'vue'
  export default defineComponent({
    name: 'Header',
    setup: () => {
      return {}
    },
  })
</script>

<style lang="scss" scoped>
  .link {
    text-align: right;
    margin: 1rem 0;
  }
  h1 {
    margin-top: 0;
    font-size: min(10vw, 120px);
    transform-origin: center top;
    animation: show 1s both;
  }
  @keyframes show {
    0% {
      transform: translate(0, 2rem);
      opacity: 0;
    }
    100% {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
</style>
