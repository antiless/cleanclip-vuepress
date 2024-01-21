<template>
  <!--
// v0 by Vercel.
// https://v0.dev/t/jjE1XZ8cHhV
-->
  <footer class="text-white py-10 px-5 md:px-10">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- 遍历list -->
      <div v-for="item in items">
        <h3 class="font-bold text-lg mb-3 text-black">{{ item.title }}</h3>
        <ul class="space-y-2">
          <li v-for="subItem in item.items">
            <a class="text-black text-base" :class="subItem.class" :href="subItem.url">{{ subItem.name }}</a>
            <span v-if="subItem.label" class="inline-block px-2 py-0.5 text-xs font-semibold text-gray-800 bg-yellow-300 rounded-full">
                {{  subItem.label }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'NewFooter',
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
      items_en: [
        {
          title: "Products",
          items: [
            {
              name: "CleanClip",
              url: "https://cleanclip.cc",
            },
            {
              name: "Macaify",
              url: "https://macaify.com",
            },
          ]
        },
        {
          title: "Support",
          items: [
            {
              name: "Roadmap",
              url: "/docs/roadmap.html",
            },
            {
              name: "Download",
              // url: "https://macaify.lemonsqueezy.com/checkout/buy/69bd0056-9182-4030-9aaf-bd0604db751b?embed=1&media=0&logo=0&desc=0&discount=0&enabled=114543",
              url: "https://cleanclip.cc/releases/download/v2.0.0/CleanClip.dmg",
              class: "lemonsqueezy-button"
            },
            {
              name: "License Manager",
              url: "https://app.lemonsqueezy.com/my-orders",
            },
            {
              name: "Contact Support",
              url: "mailto:support@cleanclip.cc",
            },
            {
              name: "Feature Requests",
              url: "https://github.com/auv1107/cleancliprun/issues",
            }
          ]
        },
        {
          title: "Sales",
          items: [
            {
              name: "Student Discount",
              url: "mailto:support@cleanclip.cc",
              label: "30%"
            },
            {
              name: "Competitor Discount",
              url: "mailto:support@cleanclip.cc",
              label: "30%"
            },
            {
              name: "OSS Contributor Discount",
              url: "mailto:support@cleanclip.cc",
              label: "10%"
            },
          ]
        },
        {
          title: "Company",
          items: [
            {
              name: "Twitter",
              url: "https://x.com/cleanclipapp",
            },
            // {
            //   name: "Blog",
            //   url: "https://cleanclip.cc/blog",
            // },
            {
              name: "Affiliate",
              url: "https://store.cleanclip.cc/affiliates",
            },
            {
              name: "Help Translate",
              url: "https://crowdin.com/project/cleanclipapp",
              label: "New"
            },
            {
              name: "Privacy Policy",
              url: "/docs/privacy",
            },
          ]
        },
      ],
      items_zh: [
        {
          title: "产品",
          items: [
            {
              name: "CleanClip",
              url: "https://cleanclip.cc/zh",
            },
            {
              name: "Macaify",
              url: "https://macaify.com",
            },
          ]
        },
        {
          title: "支持",
          items: [
            {
              name: "路线图",
              url: "/zh/docs/roadmap.html",
            },
            {
              name: "下载",
              // url: "https://macaify.lemonsqueezy.com/checkout/buy/69bd0056-9182-4030-9aaf-bd0604db751b?embed=1&media=0&logo=0&desc=0&discount=0&enabled=114543",
              url: "https://cleanclip.cc/releases/download/v2.0.0/CleanClip.dmg",
              class: "lemonsqueezy-button"
            },
            {
              name: "许可证管理器",
              url: "https://app.lemonsqueezy.com/my-orders",
            },
            {
              name: "联系支持",
              url: "mailto:support@cleanclip.cc",
            },
            {
              name: "功能请求",
              url: "https://github.com/auv1107/cleancliprun/issues",
            }
          ]
        },
        {
          title: "销售",
          items: [
            {
              name: "学生折扣",
              url: "mailto:support@cleanclip.cc",
              label: "30%"
            },
            {
              name: "竞争对手折扣",
              url: "mailto:support@cleanclip.cc",
              label: "30%"
            },
            {
              name: "开源软件贡献者折扣",
              url: "mailto:support@cleanclip.cc",
              label: "10%"
            },
          ]
        },
        {
          title: "公司",
          items: [
            {
              name: "Twitter",
              url: "https://x.com/cleanclipapp",
            },
            // {
            //   name: "博客",
            //   url: "https://cleanclip.cc/zh/blog",
            // },
            {
              name: "联盟计划",
              url: "https://store.cleanclip.cc/affiliates",
            },
            {
              name: "协助翻译",
              url: "https://crowdin.com/project/cleanclipapp",
              label: "新"
            },
            {
              name: "隐私政策",
              url: "/zh/docs/privacy",
            },
          ]
        },
      ]
    }
  },
}
</script>
<style scoped>
  ul {
    padding-left: 0%;
  }
</style>