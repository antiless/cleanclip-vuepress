<template>
  <!--
// v0 by Vercel.
// https://v0.dev/t/AKlyjq7MPSH
-->
  <div class="flex flex-col items-center justify-center px-4 pt-24">
    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500 text-[100px]">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" x2="12" y1="15" y2="3"></line>
    </svg>
    <h1 class="mt-6 text-5xl font-bold text-gray-900">{{ items.title }}</h1>
    <p class="mt-4 text-lg text-gray-600 max-w-5xl">
      {{ items.desc }}
    </p>
    <div class="mt-6 flex space-x-4">
      <a href="https://apps.apple.com/us/app/cleanclip/id6463153747">
        <button
          class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white">{{ items.appStore }}</button>
      </a>
      <a :href="$site.themeConfig.latestDownloadUrl"><button
          class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white">{{ items.download }}</button>
      </a>
    </div>
    <p class="mt-4 text-sm text-gray-500">
      {{ items.system }}
    </p>
  </div>
</template>

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
      items_zh: {
        title: "在 Mac 上下载 CleanClip",
        desc: "如果您没有许可证密钥，您仍然可以使用所有功能，但在一定数量的粘贴后将出现激活窗口。",
        appStore: "从 AppStore 下载",
        download: "下载 .dmg",
        system: "建议使用 macOS Monterey 12.0 或更高版本。"
      },
      items_en: {
        title: "Download CleanClip for macOS",
        desc: "If you do not have a license key, you can still use all the features, but the activation window will appear after a certain number of pastes.",
        appStore: "Download from AppStore",
        download: "Download .dmg",
        system: "macOS Monterey 12.0 or higher is recommended."
      }
    }
  },
  mounted () {
  }
}
</script>

<style>
.theme-container.download {
  .theme-antdocs-content:not(.custom) {
    max-width: unset !important;
    padding: unset !important;
  }
}
</style>