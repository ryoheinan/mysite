<template>
  <footer class="text-center mt-5 pb-3">
    <p>
      Favicon image by Twitter is licensed under CC-BY 4.0 <br />
      &copy;{{ year }}, Ryohei Nagasawa Some Rights Reserved.
    </p>
  </footer>
</template>

<script lang="ts">
  import { defineComponent, ref, computed } from 'vue'
  export default defineComponent({
    name: 'Footer',
    setup: () => {
      const nowYear = computed(() => new Date().getFullYear())
      const year = ref(nowYear)
      return { year }
    },
  })
</script>

<style lang="scss" scoped></style>
