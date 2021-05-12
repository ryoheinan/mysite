<template>
  <section>
    <Blankslate
      btn-text="Contact me"
      btn-url="#"
      description="This contact form use Google Form."
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
