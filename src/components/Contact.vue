<template>
  <section>
    <BlankSlate
      btn-text="Contact me"
      btn-url="https://forms.gle/NC4t6RMXaKtE2voe6"
      description="This contact form uses Google Forms"
    />
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import BlankSlate from './BlankSlate.vue'
  export default defineComponent({
    name: 'Contact',
    components: {
      BlankSlate,
    },
  })
</script>
