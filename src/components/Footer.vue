<script setup lang="ts">
  import { ref, computed } from 'vue'
  const nowYear = computed(() => new Date().getFullYear())
  const year = ref(nowYear)
</script>

<template>
  <footer class="text-center mt-5 pb-2">
    <p>
      Favicon image by Twitter is licensed under CC-BY 4.0 <br />
      &copy;{{ year }}, Ryohei Nagasawa Some Rights Reserved.
    </p>
  </footer>
</template>

<style lang="scss" scoped>
  footer p {
    margin-bottom: env(safe-area-inset-bottom);
  }
</style>
