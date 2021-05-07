<template>
  <section>
    <h2>Work</h2>
    <div v-for="item in workDataset" :key="item.title">
      <WorkCard :work-data="item" />
    </div>
  </section>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { workData } from '../module/workconfig'
  import WorkCard from './WorkCard.vue'

  export default defineComponent({
    name: 'Work',
    components: {
      WorkCard,
    },
    setup: () => {
      const workDataset = computed(() => workData)
      return { workDataset }
    },
  })
</script>

<style lang="scss" scoped></style>
