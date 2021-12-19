<script setup lang="ts">
  import { computed } from 'vue'
  import { skillData } from '../module/skillconfig'
  import SkillCard from './SkillCard.vue'
  const skillDataset = computed(() => skillData)
</script>
<template>
  <section>
    <h2>About my skills...</h2>
    <div v-for="skill in skillDataset" :key="skill.title" class="py-1">
      <SkillCard :title="skill.title" :bg-color="skill.bgColor">
        <div>
          <span
            v-for="item in skill.items"
            :key="item.title"
            class="mx-1 nobreak"
            >{{ item.title }}</span
          >
        </div>
      </SkillCard>
    </div>
  </section>
</template>
