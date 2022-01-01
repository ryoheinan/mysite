<template>
  <div class="Box text-center py-3" :style="{ backgroundColor: bgColor }">
    <h3 class="mb-3">{{ title }}</h3>
    <slot />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'SkillCard',
    props: {
      title: {
        type: String,
        required: true,
      },
      bgColor: {
        type: String,
        required: false,
        default: '#fff',
      },
    },
  })
</script>

<style lang="scss" scoped>
  .Box {
    color: #2c3e50;
    border: 0;
  }
</style>
