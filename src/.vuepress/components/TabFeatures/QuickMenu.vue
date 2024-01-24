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
      title_zh: "快捷窗口",
      title_en: "Quick Menu",
      subtitle_zh: "专为键盘操作设计，一个即用即走的快捷窗口",
      subtitle_en: "Designed specifically for keyboard operations, a quick window that appears and disappears at the input position at any time",
      items_zh: [
        {
          "title": "无需切换上下文的菜单",
          "subtitle": "在文本输入位置弹出菜单解决了上下文切换带来的打断思路的烦恼。",
          "video": "/videos/quickuse.mp4",
          // "poster": "/images/clean.webp"
        },
        // {
        //   "title": "拒绝上下文切换",
        //   "subtitle": "上下文切换打断了思路的流动，非常烦人，我们拒绝它。",
        //   "video": "/videos/quickuse.mp4",
        //   // "poster": "/images/clean.webp"
        // },
        {
          "title": "预设粘贴格式",
          "subtitle": "设置格式后，所有项目将按照指定的格式粘贴。",
          "video": "/videos/quickmenu-format-preset.mp4",
          // "poster": "/images/clean.webp"
        },
        {
          "title": "快速粘贴格式",
          "subtitle": "长按内容索引号即可弹出格式菜单。",
          "video": "/videos/quickmenu-format.mp4",
          // "poster": "/images/clean.webp"
        },
        {
          "title": "收藏你的常用内容",
          "subtitle": "按下快捷菜单快捷键⌘;两次即可查看收藏夹，无需记忆新的组合键。",
          "video": "/videos/quickmenu-pinboard.mp4",
          // "poster": "/images/clean.webp"
        }
      ],
      items_en: [
        {
          title: "Context Switching-Free menu",
          subtitle: "A menu popping up at the text input location solves the annoying problem of interrupting thoughts caused by context switching.",
          video: "/videos/quickuse.mp4",
          // poster: "/images/clean.webp"
        },
        // {
        //   title: "Refuse Context-Switching",
        //   subtitle: "Context switching interrupts the flow of thoughts and can be very annoying, we reject it.",
        //   video: "/videos/quickuse.mp4",
        //   // poster: "/images/clean.webp"
        // },
        {
          title: "Preset Paste Format",
          subtitle: "After setting the format, all items will be pasted according to the specified format.",
          video: "/videos/quickmenu-format-preset.mp4",
          // poster: "/images/clean.webp"
        },
        {
          title: "Quick Paste Format",
          subtitle: "Long press the content index number to bring up the format menu.",
          video: "/videos/quickmenu-format.mp4",
          // poster: "/images/clean.webp"
        },
        {
          title: "Star your Commonly Used Content",
          subtitle: "Press the quick menu shortcut ⌘; twice to view the favorites, no need to remember new key combinations.",
          video: "/videos/quickmenu-pinboard.mp4",
          // poster: "/images/clean.webp"
        },
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