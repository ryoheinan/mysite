<script setup lang="ts">
  import { computed } from 'vue'
  import { workData } from '../module/workconfig'
  import WorkCard from './WorkCard.vue'
  const workDataset = computed(() => workData)
</script>

<template>
  <section>
    <h2>Work</h2>
    <div v-for="item in workDataset" :key="item.title">
      <WorkCard :work-data="item" />
    </div>
  </section>
</template>
