<script setup lang="ts">
  interface Props {
    title: string
    styleName: string | 'skill-excellent'
    items: Array<{ title: string }>
  }
  defineProps<Props>()
</script>

<template>
  <div class="Box text-center py-3" :class="styleName">
    <h3 class="mb-3">{{ title }}</h3>
    <div>
      <span v-for="item in items" :key="item.title" class="mx-1 nobreak">{{
        item.title
      }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .Box {
    color: #2c3e50;
    border: 0;
  }

  @media (prefers-color-scheme: light) {
    .skill-excellent {
      background-color: #f2c1b6;
    }

    .skill-good {
      background-color: #a0e3f2;
    }

    .skill-some {
      background-color: #9ad9c2;
    }

    .skill-learning {
      background-color: #f5f1bf;
    }
  }
</style>
