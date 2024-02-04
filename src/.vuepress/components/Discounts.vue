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
      items_en: {
        title: "Special Offers",
        subtitle: "We offer a range of discounts for different user groups",
        student_title: "Student Discount",
        student_desc: 'We offer a <b>30%</b> discount for full-time students to help them study and explore better. <a href="/students">Learn more</a>',
        competitor_title: "Competitor User Discount",
        competitor_desc: 'If you are a user of our competitors, we offer a <b>30%</b> discount to help you switch to our product easily. <a href="https://forms.gle/v1ya3x93Z1ud3H4A7" target="_blank">Apply for discount</a>',
        open_source_contributor_title: "Open Source Contributor Discount",
        open_source_contributor_desc: 'For those who contribute to the open source community, we offer a <b>10%</b> discount to express our gratitude. <a href="https://forms.gle/m7TLTbSuZyJdfDgLA" target="_blank">Apply for discount</a>',
        translator_title: "Translation Contributor Appreciation",
        translator_desc: 'For those who help us translate the product into other languages, we offer <b>$5 - $20</b> vouchers to purchase our future products as a token of our gratitude. <a class="" href="https://crowdin.com/project/cleanclipapp" target="_blank">Help Translate</a>',
        content_creator_title: "Content Creator Collaboration Discount",
        content_creator_desc: 'If you are a content creator and plan to create content related to CleanClip, we are willing to provide exclusive discount codes to enhance the influence of content promotion. Cooperation email: <b>cooperation@cleanclip.cc</b>.',
        war_zone_title: "Ordinary People in War Zones",
        war_zone_desc: 'For ordinary people living in war zones, we offer a 55% special discount to express our care and support. <a href="https://forms.gle/sYErhfAD3KpFraqK8" target="_blank">Register your location</a>',
      },
      items_zh: {
        title: "特别优惠",
        subtitle: "我们为不同的用户群体提供了一系列的优惠",
        student_title: "学生优惠",
        student_desc: '我们为全日制学生提供 <b>30%</b> 优惠，帮助他们更好地学习和探索。<a href="/zh/students">了解更多</a>',
        competitor_title: "竞品用户优惠",
        competitor_desc: '如果你是我们竞品的用户，我们提供 <b>30%</b> 优惠，帮助你轻松切换到我们的产品。<a href="https://forms.gle/v1ya3x93Z1ud3H4A7" target="_blank">申请优惠</a>',
        open_source_contributor_title: "开源贡献者优惠",
        open_source_contributor_desc: '对于那些为开源社区做出贡献的人，我们提供 <b>10%</b> 优惠以表达我们的感谢。<a href="https://forms.gle/m7TLTbSuZyJdfDgLA" target="_blank">申请优惠</a>',
        translator_title: "翻译贡献者谢礼",
        translator_desc: '对于那些帮助我们将产品翻译成其他语言的人，我们提供 <b>$5 - $20</b> 代金券用以购买我们后续的产品，以表达我们的感谢。<a class="" href="https://crowdin.com/project/cleanclipapp" target="_blank">去翻译</a>',
        content_creator_title: "内容创作者合作优惠",
        content_creator_desc: '如果你是内容创作者并且计划创建 CleanClip 相关的内容，我们愿意提供专属折扣码以供加强内容宣传影响力。合作邮箱: <b>cooperation@cleanclip.cc</b>。',
        war_zone_title: "战争地区的普通民众",
        war_zone_desc: '对于那些在战争地区生活的普通民众，我们提供 55% 特殊优惠以表达我们的关心和支持。<a href="https://forms.gle/sYErhfAD3KpFraqK8" target="_blank">登记所在地区</a>',
      }
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