<template>
  <div @mousedown.left="onMouseDown">
    <VueHorizontal class="horizontal" ref="horizontal" snap="none" @scroll="onScroll">
      <i class="pl"></i>
      <div class="item" v-for="(item, index) in items" :key="index">
          <UseCase class="max-w-md" :usecase="item" />
      </div>
    </VueHorizontal>
  </div>
</template>

<script>
import UseCase from '../usecase/UseCase.vue'
import VueHorizontal from '../vue-horizontal.vue';

export default {
  components: {
    UseCase,
    VueHorizontal
  },
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
      left: 0,
      originX: 0,
      originLeft: 0,
      lastTime: 0,
      lastPageX: 0,
      speed: 0,
      items_zh: [
           {
          title: "真正的极简 UI",
          subtitle: "对于任何 UI 元素，如果你不需要，则不显示：初始只显示最近的 5 条记录，当你想浏览更多时会展开成每页 10 条，输入字母搜索时才出现搜索 UI。",
          video: "/videos/clean265.mp4",
          poster: "/images/clean.webp"
        },
        {
          title: "跟随文字输入位置",
          subtitle: "上下文切换打断思路很烦人，我们把「拒绝上下文切换」做到了极致——在文字输入位置展示弹窗。",
          video: "/videos/followcursornoshadow265.mp4",
          poster: "/images/followcursornoshadow.webp"
        },
      ],
      items_en: [
        {
          title: "True minimalist UI",
          subtitle: "For any UI element, if you don't need it, CleanClip doesn't display it: Initially, only show the latest 5 records. When you want to browse more, it will expand to show 10 records per page. The search UI will only appear when you start typing letters.",
          video: "/videos/clean265.mp4",
          poster: "/images/clean.webp"
        },
        {
          title: "Follow the text cursor",
          subtitle: "Context switching interrupts the flow of thoughts and can be very annoying. We have taken \"refusing context switching\" to the extreme by displaying it at the text input position.",
          video: "/videos/followcursornoshadow265.mp4",
          poster: "/images/followcursornoshadow.webp"
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