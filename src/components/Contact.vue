<template>
  <section>
    <Blankslate
      btn-text="Contact me"
      btn-url="https://forms.gle/NC4t6RMXaKtE2voe6"
      description="This contact form use Google Forms"
    />
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Blankslate from './Blankslate.vue'
  export default defineComponent({
    name: 'Contact',
    components: {
      Blankslate,
    },
  })
</script>
