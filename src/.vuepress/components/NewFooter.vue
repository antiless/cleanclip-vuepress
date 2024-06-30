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
            <span v-if="subItem.label"
              class="inline-block px-2 py-0.5 text-xs font-semibold text-gray-800 bg-yellow-300 rounded-full">
              {{ subItem.label }}
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
      return [
        {
          title: this.td("product_title"),
          items: [
            {
              name: "CleanClip",
              url: this.td("product_cleanclip_url"),
            },
            {
              name: "Macaify",
              url: "https://macaify.com",
            },
            {
              name: "Copi",
              url: "https://secureclipx.cleanclip.cc",
            },
          ]
        },
        {
          title: this.td("support_title"),
          items: [
            {
              name: this.td("support_roadmap_name"),
              url: this.td("support_roadmap_url"),
            },
            {
              name: this.td("download_roadmap_name"),
              url: this.td("download_roadmap_url"),
              class: "lemonsqueezy-button"
            },
            {
              name: this.td("license_manager_name"),
              url: "https://app.lemonsqueezy.com/my-orders",
            },
            {
              name: this.td("contact_support_name"),
              url: "mailto:support@cleanclip.cc",
            },
            {
              name: this.td("feature_request_name"),
              url: "https://cleanclip.sleekplan.app/",
            }
          ]
        },
        {
          title: this.td("for_pros_title"),
          items: [
            {
              name: this.td("for_pros_vs_paste"),
              url: this.td("for_pros_vs_paste_url")
            },
            {
              name: this.td("sales_affiliate_name"),
              url: "https://store.cleanclip.cc/affiliates",
              label: this.td("sales_affiliate_label")
            },
            {
              name: this.td("sales_discounts_name"),
              url: this.td("sales_discounts_url"),
              label: this.td("sales_discounts_label")
            },
          ]
        },
        {
          title: this.td("company_title"),
          items: [
            {
              name: "Twitter",
              url: "https://x.com/cleanclipapp",
            },
            {
              name: this.td("company_articles_name"),
              url: this.td("company_articles_url"),
            },
            {
              name: this.td("company_developer_blog_name"),
              url: this.td("company_developer_blog_url"),
            },
            {
              name: this.td("company_translation_name"),
              url: "https://crowdin.com/project/cleanclipapp",
              label: this.td("label_new")
            },
            {
              name: this.td("company_privacy_name"),
              url: this.td("company_privacy_url"),
            },
            {
              name: "Terms of Service",
              url: "/docs/terms-of-service"
            }
          ]
        },
      ]
    },
  },
  methods: {
    td(key) {
      return this.$td(key)
    },
  }
}
</script>
<style scoped>
ul {
  padding-left: 0%;
}
</style>