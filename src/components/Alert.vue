<script setup lang="ts">
  interface Props {
    msg: string
    link?: {
      title: string
      url: string
    }
  }
  const props = defineProps<Props>()
</script>

<template>
  <div class="flash">
    {{ props.msg }}
    <a
      v-if="props.link"
      class="btn btn-primary btn-sm flash-action"
      :href="props.link.url"
      target="_blank"
      rel="noopener noreferrer"
      >{{ props.link.title }}</a
    >
  </div>
</template>

<style lang="scss" scoped>
  @import '@primer/css/alerts/index.scss';
</style>
