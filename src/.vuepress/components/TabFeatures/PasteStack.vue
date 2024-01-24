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
      title_en: "Paste Stack",
      title_zh: "粘贴队列",
      subtitle_en: "Paste Stack provides a way to paste content quickly in order",
      subtitle_zh: "粘贴队列提供了一个可以快速按顺序粘贴内容的方式",
      items_zh: [
      {
          "title": "按顺序粘贴",
          "subtitle": "当打开粘贴堆栈时，复制的内容将自动进入堆栈，⌘V将按顺序粘贴堆栈中的下一项。",
          "video": "/videos/pastestack-present.mp4",
          // "poster": "/images/clean.webp"
        },
        {
          "title": "收集信息",
          "subtitle": "在多个页面上收集内容，然后一次性将它们全部粘贴到目标页面上，优化流程，节省时间。",
          "video": "/videos/pastestack-collect.mp4",
          // "poster": "/images/clean.webp"
        },
        {
          "title": "快速填写表单 - 分割复制",
          "subtitle": "使用⌘⇧C '分割复制'直接将多行分割为多个项目并复制到粘贴堆栈中。",
          "video": "/videos/pastestack-split.mp4",
          // "poster": "/images/clean.webp"
        },
        {
          "title": "辅助填写表单",
          "subtitle": "使用粘贴堆栈可以按顺序复制和粘贴来辅助填写表单。",
          "video": "/videos/pastestack-fill-form.mp4",
          // "poster": "/images/clean.webp"
        },
      ],
      items_en: [
        {
          title: "Paste In Order",
          subtitle: "When the paste stack is opened, the copied content will automatically enter the stack, and ⌘V will paste the next item in the stack in order.",
          video: "/videos/pastestack-present.mp4",
          // poster: "/images/clean.webp"
        },
        {
          title: "Collect Information",
          subtitle: "Collect content on multiple pages and paste them all at once on the target page, optimizing the process and saving time.",
          video: "/videos/pastestack-collect.mp4",
          // poster: "/images/clean.webp"
        },

        {
          title: "Quick Form Filling - Split Copy",
          subtitle: "Use ⌘⇧C 'Split Copy' to directly split multiple lines into multiple items and copy them to the paste stack.",
          video: "/videos/pastestack-split.mp4",
          // poster: "/images/clean.webp"
        },
        {
          title: "Assist in Form Filling",
          subtitle: "Using the paste stack can assist in filling out forms by copying and pasting in order.",
          video: "/videos/pastestack-fill-form.mp4",
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