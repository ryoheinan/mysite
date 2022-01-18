<script setup lang="ts">
  import { computed } from 'vue'
  import { workData as workDataEn } from '../module/workConfig.en'
  import { workData as workDataJa } from '../module/workConfig.ja'
  import WorkCard from './WorkCard.vue'
  import { useSettingsStore } from '../stores/settings'

  const settings = useSettingsStore()
  const workDataset = computed(() =>
    settings.lang === 'en' ? workDataEn : workDataJa
  )
</script>

<template>
  <section>
    <h2>Work</h2>
    <div v-for="item in workDataset" :key="item.title">
      <WorkCard :work-data="item" />
    </div>
  </section>
</template>
