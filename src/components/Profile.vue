<script setup lang="ts">
  import { computed } from 'vue'
  import { skillData } from '../module/skillconfig'
  import SkillCard from './SkillCard.vue'
  const skillDataset = computed(() => skillData)
</script>

<template>
  <section>
    <h2>My Profile</h2>
    <div class="Box mb-3">
      <div class="intro p-4">
        <div class="p-2">
          <img
            class="profile-img"
            src="https://avatars.githubusercontent.com/ryoheinan"
          />
        </div>
        <div>
          <p class="pl-4 m-0 mb-2">
            Hello! I'm <span class="h3">Ryohei Nagasawa</span>!<br />
            Currently, I'm a Japanese student at
            <a
              href="https://www.iniad.org/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              >INIAD</a
            >
            and I'm majoring in computer science there.<br />
            Nowadays, I'm interested in Web frontend and UI/UX.
          </p>
          <div class="d-flex ml-4 link-buttons">
            <a
              class="btn"
              href="https://github.com/ryoheinan"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              GitHub
            </a>
            <a
              class="btn"
              href="https://gitlab.com/ryoheinan"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              GitLab</a
            >
            <a
              class="btn"
              href="https://www.hackerrank.com/ryoheina"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              HackerRank</a
            >
          </div>
        </div>
      </div>

      <div class="d-flex p-4 flex-justify-center">
        <div>
          <h3 class="ml-1">Hobby</h3>
          <ul class="hobby mb-1">
            <li>
              <span class="h4 p-1">Programming</span>
              <ul>
                <li>TypeScript and OCaml are my favorite</li>
              </ul>
            </li>
          </ul>
          <ul class="hobby">
            <li>
              <span class="h4 p-1">Music</span>
              <ul>
                <li>
                  Electronic / Dance<br />- Yasutaka Nakata, Perfume, YMO,
                  Justice...
                </li>
                <li>
                  Pop<br />
                  - Gen Hoshino, Hikaru Utada, Sakanaction...
                </li>
              </ul>
            </li>
            <li>
              <span class="h4 p-1">Movies</span>
              <ul>
                <li>
                  All genres except for horror<br />- Star Wars, Back to the
                  Future, Disney, Hidden Figures...
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
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

<style lang="scss" scoped>
  @import '@primer/css/timeline/index.scss';
  .intro {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    // larger screen
    .intro {
      align-items: center;
      flex-direction: column;
    }
  }

  .profile-img {
    border-radius: 50%;
    max-height: 10rem;
  }

  ul {
    list-style: none;
  }

  .hobby {
    display: flex;
    ul {
      margin-left: 1rem;
    }
  }

  .link-buttons {
    a.btn {
      margin-right: 0.5rem;
    }
  }
</style>
