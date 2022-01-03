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
    border: 0;
  }

  @media (prefers-color-scheme: light) {
    .Box {
      color: #2c3e50;
    }

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

  @media (prefers-color-scheme: dark) {
    .Box {
      color: #070a0d;

      h3::selection,
      span::selection {
        background-color: #070a0d;
        color: #ffffff;
      }
    }

    .skill-excellent {
      background-color: #dd5d40;
    }

    .skill-good {
      background-color: #4bcae7;
    }

    .skill-some {
      background-color: #4ebc93;
    }

    .skill-learning {
      background-color: #e6dd60;
    }
  }
</style>
