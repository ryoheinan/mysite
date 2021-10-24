<template>
  <section>
    <h2>My Profile</h2>
    <p>
      Hello! I'm Ryohei Nagasawa!<br />
      Currently, I'm a Japanese student at
      <a
        href="https://www.iniad.org/"
        target="_blank"
        rel="noopener noreferrer nofollow"
        >INIAD</a
      >
      and I'm learning computer science there.<br />
      Nowadays, I'm interested in Web frontend and UI/UX.
    </p>
    <h3>Hobby</h3>
    <ul class="hobby">
      <li><span class="f4">Programming</span></li>
      <li>
        <span class="f4">Music</span>
        <ul>
          <li>
            Electronic / Dance<br />- Yasutaka Nakata, Perfume, YMO, Justice...
          </li>
          <li>
            Pop<br />
            - Gen Hoshino, Hikaru Utada, Sakanaction...
          </li>
        </ul>
      </li>
      <li>
        <span class="f4">Movies</span>
        <ul>
          <li>
            All genres except for horror<br />- Star Wars, Back to the Future,
            Disney, Hidden Figures...
          </li>
        </ul>
      </li>
    </ul>
  </section>
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

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { skillData } from '../module/skillconfig'
  import SkillCard from './SkillCard.vue'

  export default defineComponent({
    name: 'Profile',
    components: {
      SkillCard,
    },
    setup: () => {
      const skillDataset = computed(() => skillData)
      return { skillDataset }
    },
  })
</script>

<style lang="scss" scoped>
  ul {
    list-style: none;
  }

  .hobby {
    ul {
      margin-left: 1rem;
    }
  }
</style>
