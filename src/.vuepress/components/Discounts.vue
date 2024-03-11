<template>
  <!--
// v0 by Vercel.
// https://v0.dev/t/QxqrGmaLveN
-->
  <section class="w-full py-12 md:py-24 lg:py-16">
    <div class="container px-4 md:px-6 max-w-5xl mx-auto">
      <h1
        class="text-4xl md:text-5xl font-bold text-center mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500"> {{ items.title }}</h1>
      <h3 class="text-lg md:text-lg text-center mb-8 md:mb-12 text-gray-500 dark:text-gray-400">{{ items.subtitle }}</h3>
      <div class="grid gap-6 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <div class="flex flex-col items-center space-y-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" class="h-10 w-10 text-gray-500 dark:text-gray-400">
            <path d="m4 6 8-4 8 4"></path>
            <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"></path>
            <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"></path>
            <path d="M18 5v17"></path>
            <path d="M6 5v17"></path>
            <circle cx="12" cy="9" r="2"></circle>
          </svg>
          <h3 class="text-xl font-bold">{{ items.student_title }}</h3>
          <p class="text-gray-500 dark:text-gray-400" v-html="items.student_desc"></p>
        </div>
      <div class="flex flex-col items-center space-y-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" class="h-10 w-10 text-gray-500 dark:text-gray-400">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
        <h3 class="text-xl font-bold">{{ items.competitor_title }}</h3>
        <p class="text-gray-500 dark:text-gray-400" v-html="items.competitor_desc"></p>
      </div>
      <div class="flex flex-col items-center space-y-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" class="h-10 w-10 text-gray-500 dark:text-gray-400">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M9 9.35a4 4 0 1 1 0 5.3"></path>
        </svg>
        <h3 class="text-xl font-bold">{{ items.open_source_contributor_title }}</h3>
        <p class="text-gray-500 dark:text-gray-400" v-html="items.open_source_contributor_desc"></p>
      </div>
      <div class="flex flex-col items-center space-y-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" class="h-10 w-10 text-gray-500 dark:text-gray-400">
          <path d="m5 8 6 6"></path>
          <path d="m4 14 6-6 2-3"></path>
          <path d="M2 5h12"></path>
          <path d="M7 2h1"></path>
          <path d="m22 22-5-10-5 10"></path>
          <path d="M14 18h6"></path>
        </svg>
        <h3 class="text-xl font-bold">{{ items.translator_title }}</h3>
        <p class="text-gray-500 dark:text-gray-400" v-html="items.translator_desc"></p>
      </div>
      <div class="flex flex-col items-center space-y-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" class="h-10 w-10 text-gray-500 dark:text-gray-400">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"></path>
          <path d="M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"></path>
        </svg>
        <h3 class="text-xl font-bold">{{ items.content_creator_title }}</h3>
        <p class="text-gray-500 dark:text-gray-400" v-html="items.content_creator_desc"></p>
      </div>
      <div class="flex flex-col items-center space-y-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-10 w-10 text-gray-500 dark:text-gray-400"
        >
          <circle cx="11" cy="13" r="9"></circle>
          <path d="m19.5 9.5 1.8-1.8a2.4 2.4 0 0 0 0-3.4l-1.6-1.6a2.41 2.41 0 0 0-3.4 0l-1.8 1.8"></path>
          <path d="m22 2-1.5 1.5"></path>
        </svg>
        <h3 class="text-xl font-bold">{{ items.war_zone_title }}</h3>
        <p class="text-gray-500 dark:text-gray-400" v-html="items.war_zone_desc"></p>
      </div>
    </div>
  </div>
</section></template>

<script>
import strings from '../config/strings';

export default {
  computed: {
    items() {
      if (this.$lang === 'zh-CN') {
        return this.items_zh;
      } else {
        return this.items_en;
      }
    },
  },
  data() {
    return {
      items_en: strings.en.discounts,
      items_zh: strings.zh.discounts
    }
  }
}
</script>

<style>.theme-container.discounts {
  .theme-antdocs-content:not(.custom) {
    max-width: unset !important;
    padding: unset !important;
  }

  p {
    font-size: 1rem;
  }
  .page-edit {
    display: none;
  }
}
</style>