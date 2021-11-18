<script setup lang="ts">
  import { PropType } from 'vue'
  import { Work } from '../module/workconfig'

  interface Props {
    workData: Work
    textLeft?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    textLeft: false,
  })

</script>

<template>
  <div class="Box px-3 mb-3 pt-5 pb-1">
    <div class="flex-auto">
      <h3>{{ workData.title }}</h3>
      <p class="mb-1">
        Powered by <span class="strong">{{ workData.technology }}</span>
      </p>
      <p class="text-gray-light">{{ workData.description }}</p>

      <span
        v-if="workData.category == 'Hobby'"
        title="Label: Hobby"
        class="Label Label--success v-align-middle"
        >Hobby</span
      >
      <span
        v-else-if="workData.category == 'School'"
        title="Label: School"
        class="Label mt-1 Label--info v-align-middle"
        >School</span
      >
      <span
        v-else-if="workData.category == 'Work'"
        title="Label: Work"
        class="Label mt-1 Label--warning v-align-middle"
        >Work</span
      >
    </div>
    <div class="mt-3 text-right">
      <a
        v-for="urlItem in workData.urls"
        :key="urlItem.text"
        :href="urlItem.url"
        class="btn ml-2 mb-2"
        role="button"
        target="_blank"
        rel="noopener noreferrer nofollow"
        >{{ urlItem.text }}</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .strong {
    font-size: 1.1rem;
    font-weight: 500;
  }
</style>
