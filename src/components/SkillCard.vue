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
      color: #141b22;

      h3::selection,
      span::selection {
        background-color: #141b22;
        color: #ffffff;
      }
    }

    .skill-excellent {
      background-color: #ff4f4f;
    }

    .skill-good {
      background-color: #04d9ff;
    }

    .skill-some {
      background-color: #03e9bb;
    }

    .skill-learning {
      background-color: #fdd42e;
    }
  }
</style>
