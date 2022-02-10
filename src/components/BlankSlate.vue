<script setup lang="ts">
  interface Props {
    description: string
    btnText?: string
    btnUrl?: string
  }

  defineProps<Props>()
</script>

<template>
  <div class="blankslate">
    <a
      v-if="btnText"
      :href="btnUrl"
      class="btn btn-large btn-primary h4 mb-1 py-3"
      role="button"
      target="_blank"
      rel="noopener noreferrer"
      >{{ btnText }}</a
    >
    <p>{{ description }}</p>
  </div>
</template>

<style lang="scss" scoped>
  @import '@primer/css/blankslate/index.scss';
  @import '@primer/css/marketing/index.scss';
</style>
