<template>
  <footer>
    <p>&copy; {{ year }}, Ryohei Nagasawa All Rights Reserved.</p>
  </footer>
</template>

<script lang="ts">
  import { defineComponent, ref, computed } from 'vue'
  export default defineComponent({
    name: 'HelloWorld',
    setup: () => {
      const nowYear = computed(() => new Date().getFullYear())
      const year = ref(nowYear)
      return { year }
    },
  })
</script>

<style lang="scss" scoped></style>
