<template>
  <section>
    <h2>Work</h2>
    <div v-for="item in workDataset" :key="item.title">
      {{ item.title }}
    </div>
  </section>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { workData } from '../module/workconfig'

  export default defineComponent({
    name: 'Work',
    props: {
      msg: {
        type: String,
        required: true,
      },
    },
    setup: () => {
      const workDataset = computed(() => workData)
      return { workDataset }
    },
  })
</script>

<style lang="scss" scoped></style>
