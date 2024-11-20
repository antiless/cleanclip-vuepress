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
    <!-- <p class="mt-4 text-lg text-gray-600 max-w-5xl">
      {{ items.desc }}
    </p> -->
    <div class="mt-6 flex space-x-4">
      <a :href="$site.themeConfig.latestDownloadUrl">
        <div class="flex rounded-xl font-bold justify-center items-center w-72 sm:w-64 h-16 mx-1 text-white border-2 border-solid cursor-pointer bg-customDarkBg2 hover:bg-customDarkBg3 border-customPrimary">
          <svg t="1691626830519" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4026" width="48" height="48">
            <path d="M747.4 535.7c-0.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7z" p-id="4027" fill="#ffffff"></path>
            <path d="M642.3 230.7c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z" p-id="4028" fill="#ffffff"></path>
          </svg>
        <div class="flex-initial w-56 sm:w-48" style="margin-left:0.5em">
          <span class="block text-xs font-normal justify-left">{{ $site.themeConfig.latestVersion }}</span>
          <span class="block font-bold justify-left">{{ items.download }}</span>
        </div>
      </div>
      </a>
     <!-- <div class="rounded-xl font-bold text-white flex justify-center items-center w-72 sm:w-64 mx-1 h-16 cursor-pointer bg-customDarkBgPrimary hover:bg-customDarkBgPrimary2">
        <svg t="1691626830519" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4026" width="48" height="48">
          <path d="M747.4 535.7c-0.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7z" p-id="4027" fill="#ffffff"></path>
          <path d="M642.3 230.7c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z" p-id="4028" fill="#ffffff"></path>
        </svg>
        <div class="flex-initial w-56 sm:w-48" style="margin-left:0.5em">
          <span class="block text-xs font-normal justify-left"><span class="font-bold">v2.0.1</span></span>
          <span class="block text-lg font-bold justify-left">AppStore</span>
        </div>
      </div> -->
      <div class="rounded-xl font-bold text-white flex justify-center items-center w-72 sm:w-64 mx-1 h-16 cursor-pointer bg-customDarkBgPrimary hover:bg-customDarkBgPrimary2" @click="copyToClipboard('brew install cleanclip')">
        <svg t="1691626830519" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4026" width="48" height="48">
          <path d="M747.4 535.7c-0.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7z" p-id="4027" fill="#ffffff"></path>
          <path d="M642.3 230.7c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z" p-id="4028" fill="#ffffff"></path>
        </svg>
        <div class="flex-initial w-56 sm:w-48" style="margin-left:0.5em">
          <span class="block text-xs font-normal justify-left"><span class="font-bold">{{ $site.themeConfig.latestVersion }}</span></span>
          <span class="block font-bold justify-left">brew install cleanclip</span>
        </div>
      </div>
    </div>
    <p class="mt-4 text-sm text-gray-500" v-html="items.desc">
    </p>
    <p class="text-sm text-gray-500" v-html="items.system">
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      return {
        desc: this.td("desc"),
        system: this.td("system"),
        title: this.td("download_title"),
        download: this.td("download"),
        copied: this.td("brewCopiedToClipboard"),
        copied_error: this.td("brewCopiedToClipboardFailed")
      }
    }
  },
  mounted () {
  },
  methods: {
    td(key) {
      return this.$td(key)
    },
    copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        console.log('复制成功:', text);
        // 使用 alert 显示通知提示
        alert(this.items.copied);
      }).catch(err => {
        console.error('复制失败:', err);
        alert(this.items.copied_error);
      });
    }
  }
}
</script>

<style>
.theme-container.download {
  .theme-antdocs-content:not(.custom) {
    max-width: unset !important;
    padding: unset !important;
  }
  .page-edit {
    display: none;
  }
  .bg-customDarkBgPrimary {
    --tw-bg-opacity: 1;
    background-color: rgb(25 26 30 / var(--tw-bg-opacity));
    padding: 6px;
    padding-right: 1rem;
  }
  .border-customPrimary {
    --tw-border-opacity: 1;
    border-color: rgb(99 102 241 / var(--tw-border-opacity));
  }
  .bg-customDarkBg2 {
    --tw-bg-opacity: 1;
    background-color: rgb(99 102 241 / var(--tw-bg-opacity));
    /* padding-left: 1rem;
    padding-right: 1rem; */
    padding: 6px;
    padding-right: 1rem;
  }

  .border-solid {
      border-style: solid;
  }
}
</style>