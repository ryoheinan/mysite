<script setup lang="ts">
  import BlankSlate from './BlankSlate.vue'
  import { useSettingsStore } from '../stores/settings'
  import { computed } from 'vue'

  const settings = useSettingsStore()
  const getLang = computed(() => settings.getLang)
</script>

<template>
  <section>
    <BlankSlate
      btn-text="Contact me"
      btn-url="https://forms.gle/NC4t6RMXaKtE2voe6"
      :description="
        getLang.lang === 'en'
          ? 'This contact form uses Google Forms'
          : 'Googleフォームを使用しています'
      "
    />
  </section>
</template>
