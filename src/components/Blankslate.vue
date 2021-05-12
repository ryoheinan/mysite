<template>
  <div class="blankslate">
    <a
      v-if="btnText"
      :href="btnUrl"
      class="btn-mktg btn-primary-mktg mb-1"
      role="button"
      target="_blank"
      rel="noopener noreferrer nofollow"
      >{{ btnText }}</a
    >
    <p>{{ description }}</p>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'Blankslate',
    props: {
      btnText: {
        type: String,
        required: false,
        default: '',
      },
      btnUrl: {
        type: String,
        required: false,
        default: '#',
      },
      description: {
        type: String,
        required: true,
      },
    },
  })
</script>

<style lang="scss" scoped>
  @import '@primer/css/blankslate/index.scss';
  @import '@primer/css/marketing/index.scss';
</style>
