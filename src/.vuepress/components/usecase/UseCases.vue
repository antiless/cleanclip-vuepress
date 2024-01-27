<template>
  <div>
    <!-- pc -->
    <div class="max-md:hidden" @mousedown.left="onMouseDown">
      <vue-horizontal class="horizontal" ref="horizontal" snap="none" @scroll="onScroll">
        <i class="pl"></i>
        <div class="item" v-for="(item, index) in items" :key="index">
          <UseCase class="max-w-md" :usecase="item" />
        </div>
      </vue-horizontal>
    </div>

    <!-- 移动 -->
    <div class="md:hidden">
        <div class="item flex-col" v-for="(item, index) in items" :key="index">
          <UseCase class="max-w-md" :usecase="item" />
        </div>
    </div>
  </div>
</template>

<script>
import UseCase from './UseCase.vue'
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
          title: "收集图片",
          subtitle: "使用 CleanClip，寻找设计灵感的过程中无需打断过程，来回切换 App。只需要复制喜欢的图片，回到 App 后一次性粘贴。",
          video: "/videos/designer265.mp4",
          poster: "/images/designer.webp"
        },
        {
          title: "从手机同步截图制作 App 预览图",
          subtitle: "在手机和 Mac 间同步数据有时候非常繁琐，现在你可以直接在手机上截图、复制完所有信息，CleanClip 会自动帮你记下所有的复制记录。等所有信息收集完成，再回到 Mac 上使用这些信息，制作预览图，很方便。",
          video: "/videos/screenshots265.mp4",
          poster: "/images/screenshots.webp"
        },
        {
          title: "攒写旅行计划✈️",
          subtitle: "写旅行计划的过程中通常需要收集很多图片、截图、文字，CleanClip 帮助我一次性收集所有信息，再回到 App 中使用。",
          video: "/videos/disneyland265.mp4",
          poster: "/images/disneyland.webp"
        },
        {
          title: "搜索邮箱模板",
          subtitle: "作为一个营销人员，需要给不同客户发送各种类型的邮件。CleanClip 帮我保存了使用过的所有邮件模板，让我随时取用。",
          video: "/videos/emailtemplate265.mp4",
          poster: "/images/emailtemplate.webp"
        },
        {
          title: "Solopreneur 在 40+ 网站提交项目信息",
          subtitle: "在推广 App 的过程中需要去很多网站提交项目信息，使用 CleanClip 我不需要多次往返项目文档复制信息，再回到不同的网站粘贴。一次复制，多次使用，是 CleanClip 最酷的地方。",
          video: "/videos/formfill265.mp4",
          poster: "/images/formfill.webp"
        },
        {
          title: "搜索命令使用历史",
          subtitle: "有些常用的命令参数复杂难以记忆，比如 ffmpeg，但是我记得我之前用过，我可以在 CleanClip 中搜索到并快速使用。",
          video: "/videos/terminal265.mp4",
          poster: "/images/terminal.webp"
        }
      ],
      items_en: [
        {
          title: "Collecting Images",
          subtitle: "With CleanClip, I can seamlessly find design inspiration without the need to constantly switch between apps. Just copy the images you like and paste them all at once when you return to the app.",
          video: "/videos/designer265.mp4",
          poster: "/images/designer.webp",
          label: "Design"
        },
        {
          title: "Creating App Preview Images",
          subtitle: "Syncing data between iPhones and Macs can be a hassle at times. But now, with CleanClip, I can easily capture screenshots and copy all the information on your phone. CleanClip will automatically save all my copied records. Once you have collected all the information, I can effortlessly access it on my Mac and use it to create preview images.",
          video: "/videos/screenshots265.mp4",
          poster: "/images/screenshots.webp",
          label: "Design"
        },
        {
          title: "Write travel plan",
          subtitle: "When I'm in the process of creating a travel plan, I often need to gather a multitude of images, screenshots, and text. CleanClip comes to my aid by allowing me to collect all this information in one go, making it convenient for me to use it later within the app.",
          video: "/videos/disneyland265.mp4",
          poster: "/images/disneyland.webp",
          label: "Write"
        },
        {
          title: "Search email template",
          subtitle: "As a marketer, I need to send different types of emails to various clients. CleanClip has been a great tool for me as it stores all the email templates I have used, enabling me to retrieve them whenever needed.",
          video: "/videos/emailtemplate265.mp4",
          poster: "/images/emailtemplate.webp",
          label: "Marketing"
        },
        {
          title: "Submit project information on 40+ websites",
          subtitle: "When promoting an app, it is often required to submit project information to multiple websites. With CleanClip, I can save time and effort by copying the information once and using it multiple times without having to go back and forth between project documents and different websites. This convenience makes CleanClip truly remarkable.",
          video: "/videos/formfill265.mp4",
          poster: "/images/formfill.webp",
          label: "Solopreneur"
        },
        {
          title: "Search past commands",
          subtitle: "Some commonly used command parameters can be complex and hard to remember, like ffmpeg. However, I recall that I have used it before and I can easily find and use it in CleanClip.",
          video: "/videos/terminal265.mp4",
          poster: "/images/terminal.webp",
          label: "Terminal"
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