<script setup lang="ts">
  import { Work } from '../module/workconfig'

  interface Props {
    workData: Work
  }

  defineProps<Props>()
</script>

<template>
  <div class="Box px-md-3 px-2 mb-3 pt-5 pb-1">
    <h3 class="mb-2">{{ workData.title }}</h3>
    <div class="container-lg clearfix">
      <div class="col-md-6 float-left mb-2 mb-md-0">
        <p class="mb-1">
          Powered by <span class="strong">{{ workData.technology }}</span>
        </p>
        <p class="mb-3">{{ workData.year }}</p>
        <p class="mb-2 text-gray-light">{{ workData.description }}</p>

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
      <div class="col-md-6 float-md-left">
        <div v-if="workData.image" class="img text-center">
          <picture>
            <source
              type="image/webp"
              :srcset="`/img/${workData.image.srcset}`"
            />
            <img
              class="img"
              :alt="workData.image.alt"
              :src="`/img/${workData.image.src}`"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </div>

    <div class="mt-3">
      <a
        v-for="urlItem in workData.urls"
        :key="urlItem.text"
        :href="urlItem.url"
        class="btn mr-2 mb-2"
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

  .img {
    img {
      max-width: 100%;
      // border: solid 1px #d0d7de;
      border-radius: 6px;
      max-height: 20rem;
    }
  }

  @media screen and (max-width: 768px) {
    [class^='col-md-'] {
      width: 100%;
    }
  }
</style>
