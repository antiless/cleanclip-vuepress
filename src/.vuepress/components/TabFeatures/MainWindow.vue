<template>
  <TabFeatures :items="items" :title="title" :subtitle="subtitle" />
</template>

<script>
import TabFeatures from './TabFeatures.vue';

export default {
  components: {
    TabFeatures
  },
  computed: {
    items() {
      if (this.$lang === 'zh-CN') {
        return this.items_zh;
      } else {
        return this.items_en;
      }
    },
    title() {
      if (this.$lang === 'zh-CN') {
        return this.title_zh;
      } else {
        return this.title_en;
      }
    },
    subtitle() {
      if (this.$lang === 'zh-CN') {
        return this.subtitle_zh;
      } else {
        return this.subtitle_en;
      }
    },
  },
  data() {
    return {
      left: 0,
      originX: 0,
      originLeft: 0,
      lastTime: 0,
      lastPageX: 0,
      speed: 0,
      title_en: "Main Window",
      title_zh: "主窗口",
      subtitle_en: "A window pinned on screen has a powerful bookmark list and smart list",
      subtitle_zh: "可轻松查看当前应用的复制记录。还支持无限制的收藏夹、智能列表。方便过滤内容",
      items_zh: [
        {
          "title": "跟随前台应用",
          "subtitle": "内容可自动跟随前台应用的变化，随时查看该应用的剪贴板历史记录。",
          "video": "/videos/followfrontmost_1080.mp4",
          "poster": "/images/followfrontmost_1080.webp"
        },
        {
          "title": "每个应用的独占收藏空间",
          "subtitle": "上下文切换会打断思维流程，非常烦人。",
          "video": "/videos/sketch-simple-full.mp4",
          "poster": "/images/sketch-simple-full.webp"
        },
        {
          "title": "智能列表",
          "subtitle": "根据条件智能过滤项目。",
          "video": "/videos/youtubelinks-1080.mp4",
          "poster": "/images/youtubelinks-1080.webp"
        },
        {
          "title": "收藏列表",
          "subtitle": "您可以创建无限的书签列表来保存不同的内容。",
          "video": "/videos/collection-lists.mp4",
          "poster": "/images/collection-lists.webp"
        }
      ],
      items_en: [
        {
          title: "Follow Frontmost App",
          subtitle: "The content can automatically follow the changes of the frontmost app and view the clipboard history of the app at any time.",
          video: "/videos/followfrontmost_1080.mp4",
          poster: "/images/followfrontmost_1080.webp"
        },
        {
          title: "Exclusive Collection Space for Each App",
          subtitle: "Many apps do not provide a good bookmarking feature, CleanClip provides it for you.",
          video: "/videos/sketch-simple-full.mp4",
          poster: "/images/sketch-simple-full.webp"
        },
        {
          title: "Smart Lists",
          subtitle: "Smart filtering items based on conditions.",
          video: "/videos/youtubelinks-1080.mp4",
          poster: "/images/youtubelinks-1080.webp"
        },
        {
          title: "Collection Lists",
          subtitle: "You can create unlimited bookmark lists to save different content.",
          video: "/videos/collection-lists.mp4",
          poster: "/images/collection-lists.webp"
        }
      ]
    }
  },
  destroyed() {
    this.onMouseUp()
  },
  methods: {
    onScroll({ left }) {
      this.left = left
    },
    onMouseDown(e) {
      this.originX = e.pageX
      this.originLeft = this.left
      this.lastPageX = e.pageX
      this.speed = 0

      window.addEventListener("mouseup", this.onMouseUp);
      window.addEventListener("mousemove", this.onMouseMove);
    },
    onMouseUp(e) {
      window.removeEventListener("mouseup", this.onMouseUp);
      window.removeEventListener("mousemove", this.onMouseMove);
      this.$refs.horizontal.scrollToLeft(this.left - this.speed * 100, 'smooth')
    },
    onMouseMove(e) {
      const offset = e.pageX - this.originX
      this.lastOffsetLeft = offset
      const left = this.originLeft - offset
      this.$refs.horizontal.scrollToLeft(left, 'auto')

      this.calculateSpeed(e.pageX - this.lastPageX)
      this.lastPageX = e.pageX
    },

    calculateSpeed(offset) {
      console.log(offset)
      const now = new Date().getTime()
      const time = now - this.lastTime;
      this.lastTime = now
      this.speed = offset / time;
    }
  }
}

</script>

<style scoped>
* {
  --home-page-width: 960px;
}

.scroll-container {
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
}

.list {
  display: flex;
  white-space: nowrap;
}

.item {
  padding: 15px;
}

.horizontal {
  .v-hl-btn-prev {
    transform: unset !important;
  }

  .v-hl-btn-next {
    transform: unset !important;
  }
}

.pl {
  padding-left: calc((100% - var(--home-page-width))/2 - 20px);
}
</style>