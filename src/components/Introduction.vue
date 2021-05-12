<template>
  <section>
    <h2>Introduction</h2>
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
      Nowadays, I'm interested in WEB frontend and UI/UX.
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
    <h3>Excellent</h3>
    <ul>
      <li>HTML</li>
    </ul>
    <h3>Good</h3>
    <ul>
      <li>Python</li>
      <li>C</li>
      <li>JavaScript</li>
      <li>Django</li>
      <li>Vue 2</li>
      <li>Nuxt.js</li>
    </ul>
    <h3>Some</h3>
    <ul>
      <li>Sass / CSS</li>
      <li>Unity</li>
    </ul>
    <h3>Learning</h3>
    <ul>
      <li>OCaml</li>
      <li>Vue 3</li>
      <li>TypeScript</li>
      <li>Go</li>
    </ul>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'Introduction',
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
