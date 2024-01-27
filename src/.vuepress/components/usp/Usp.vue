<template>
  <div>
    <div class="max-md:hidden" @mousedown.left="onMouseDown">
      <VueHorizontal class="horizontal" ref="horizontal" snap="none" @scroll="onScroll">
        <i class="pl"></i>
        <div class="item" v-for="(item, index) in items" :key="index">
          <UseCase class="max-w-md" :usecase="item" />
        </div>
      </VueHorizontal>
    </div>
    <div class="md:hidden">
      <i class="pl"></i>
      <div class="item" v-for="(item, index) in items" :key="index">
        <UseCase class="max-w-md" :usecase="item" />
      </div>
    </div>
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
          subtitle: "对于任何 UI 元素，如果你不需要，则不显示",
          body: "初始只显示最近的 5 条记录，当你想浏览更多时会展开成每页 10 条，输入字母搜索时才出现搜索 UI。",
          video: "/videos/clean265.mp4",
          poster: "/images/clean.webp"
        },
        {
          title: "极致地减少上下文切换",
          subtitle: "在文字输入位置展示弹窗",
          body: "上下文切换打断思路很烦人，我们把「拒绝上下文切换」做到了极致——在文字输入位置展示弹窗。",
          video: "/videos/followcursornoshadow265.mp4",
          poster: "/images/followcursornoshadow.webp"
        },
        {
          title: "保持快捷键简约和清晰",
          subtitle: "更少的快捷键需要记住，更少的键要按下，却更快速",
          body: "从设计上深入思考，在不影响效率的前提下尽量减少需要记住的快捷键，尽量减少需要按下的按键",
          poster: "/images/pinboards.webp"
        },
        {
          title: "粘贴队列 - 完美的工作流助手",
          subtitle: "复制到队列，按顺序粘贴",
          body: "我们的工作总会遇到需要一些文字序列，需要我们按顺序复制、粘贴。不断的选择下一条、复制，然后选择下个位置、粘贴，是枯燥且低效的。用 PasteStack 把它们一键全塞到序列里，然后每次粘贴自动粘贴下一条，节省你的时间。",
          video: "/videos/pastestack.mp4",
          poster: "/images/pastestack.webp"
        }
      ],
      items_en: [
        {
          title: "True minimalist UI",
          subtitle: "If you don't need it, CleanClip doesn't display it",
          body: "Initially, only show the latest 5 records. When you want to browse more, it will expand to show 10 records per page. The search UI will only appear when you start typing letters.",
          video: "/videos/clean265.mp4",
          poster: "/images/clean.webp"
        },
        {
          title: "Extreme Context Switching-Free",
          subtitle: "Pop up near the input cursor",
          body: "Context switching interrupts the flow of thoughts and can be very annoying. We have taken \"refusing context switching\" to the extreme by displaying it at the text input position.",
          video: "/videos/followcursornoshadow265.mp4",
          poster: "/images/followcursornoshadow.webp"
        },

        {
          title: "Keep shortcuts simple and clear",
          subtitle: "Keyboard first, but fewer shortcuts to remember and fewer keys to press",
          body: "Think deeply about the design and try to minimize the number of shortcuts that need to be remembered and the number of keys that need to be pressed, without compromising efficiency.",
          poster: "/images/pinboards.webp"
        },
        {
          title: "Paste Stack - Perfect workflow assistant",
          subtitle: "Copy to stack, paste in sequence",
          body: "Our work always encounters the need for some text sequences that require us to copy and paste in order. Continuously selecting the next item, copying, and then selecting the next position to paste is tedious and inefficient. Use PasteStack to put them all into a sequence with just one click, and then automatically paste the next item each time you paste, saving you time.",
          video: "/videos/pastestack.mp4",
          poster: "/images/pastestack.webp"
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