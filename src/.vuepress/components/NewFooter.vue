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
    t() {
      return this.$t().footer
    },
    items() {
      return [
        {
          title: this.t.product_title,
          items: [
            {
              name: "CleanClip",
              url: this.t.product_cleanclip_url,
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
          title: this.t.support_title,
          items: [
            {
              name: this.t.support_roadmap_name,
              url: this.t.support_roadmap_url,
            },
            {
              name: this.t.download_roadmap_name,
              url: this.t.download_roadmap_url,
              class: "lemonsqueezy-button"
            },
            {
              name: this.t.license_manager_name,
              url: "https://app.lemonsqueezy.com/my-orders",
            },
            {
              name: this.t.contact_support_name,
              url: "mailto:support@cleanclip.cc",
            },
            {
              name: this.t.feature_request_name,
              url: "https://cleanclip.sleekplan.app/",
            }
          ]
        },
        {
          title: this.t.sales_title,
          items: [
            {
              name: this.t.sales_affiliate_name,
              url: "https://store.cleanclip.cc/affiliates",
              label: this.t.sales_affiliate_label
            },
            {
              name: this.t.sales_discounts_name,
              url: this.t.sales_discounts_url,
              label: this.t.sales_discounts_label
            },
          ]
        },
        {
          title: this.t.company_title,
          items: [
            {
              name: "Twitter",
              url: "https://x.com/cleanclipapp",
            },
            {
              name: this.t.company_articles_name,
              url: this.t.company_articles_url,
            },
            {
              name: this.t.company_developer_blog_name,
              url: this.t.company_developer_blog_url,
            },
            {
              name: this.t.company_translation_name,
              url: "https://crowdin.com/project/cleanclipapp",
              label: this.t.label_new
            },
            {
              name: this.t.company_privacy_name,
              url: this.t.company_privacy_url,
            },
            {
              name: "Terms of Service",
              url: "/docs/terms-of-service"
            }
          ]
        },
      ]
    },
  }
}
</script>
<style scoped>
ul {
  padding-left: 0%;
}
</style>