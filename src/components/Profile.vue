<script setup lang="ts">
  import { computed } from 'vue'
  import { useSettingsStore } from '../stores/settings'

  const settings = useSettingsStore()
  const getLang = computed(() => settings.getLang)
</script>

<template>
  <section>
    <h2>My Profile</h2>
    <div class="Box mb-3">
      <div class="intro p-md-4 p-2">
        <div class="p-2">
          <img
            class="profile-img"
            alt="profile avatar image"
            src="https://avatars.githubusercontent.com/ryoheinan"
          />
        </div>
        <div>
          <div v-if="getLang.lang === 'en'" class="pl-md-4">
            <p class="m-0 mb-1">
              Hello! I'm <span class="h3">Ryohei Nagasawa</span>!<br />
              Currently, I'm a Japanese student at
              <a
                href="https://www.iniad.org/"
                target="_blank"
                rel="noopener noreferrer"
                >INIAD</a
              >
              and I'm majoring in computer science there.<br />
              Nowadays, I'm interested in web frontend and UI/UX.
            </p>
            <p class="m-0 mb-2">I passed FE (基本情報技術者試験) in 2021.</p>
          </div>
          <div v-else class="pl-md-4">
            <p class="m-0 mb-1">
              こんにちは! <span class="h4">長澤 椋平</span>です!<br />
              現在は
              <a
                href="https://www.iniad.org/"
                target="_blank"
                rel="noopener noreferrer"
                >INIAD</a
              >
              に通い、コンピュータ・サイエンスを学んでいる学生です。<br />
              WebフロントエンドとUI/UX関連に興味があります。
            </p>
            <p class="m-0 mb-2">2021年に基本情報技術者試験 合格</p>
          </div>
          <div
            class="d-flex ml-md-4 flex-justify-center flex-md-justify-start link-buttons"
          >
            <a
              class="btn btn-outline"
              href="https://github.com/ryoheinan"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              class="btn btn-outline"
              href="https://gitlab.com/ryoheinan"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitLab</a
            >
            <a
              class="btn btn-outline"
              href="https://www.linkedin.com/in/ryoheinan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn</a
            >
          </div>
        </div>
      </div>

      <div class="d-flex p-md-4 px-2 py-4 flex-justify-center">
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
                  - Gen Hoshino, Hikaru Utada, Sakanaction, The Weeknd...
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
    width: 100%;
    justify-content: space-between;

    @media screen and (min-width: 350px) {
      justify-content: start;
      a.btn {
        margin-right: 0.5rem;
      }
    }
  }
</style>
