<!--
// v0 by Vercel.
// https://v0.dev/t/5D8WpwfoJCq
-->
<template>
  <!--
// v0 by Vercel.
// https://v0.dev/t/5D8WpwfoJCq
-->
  <div class="bg-white m-auto">
    <div>
      <h2 class="text-4xl font-bold mb-4">{{ title }}</h2>
      <p class="text-lg mb-8 text-center">
        {{ subtitle }}
      </p>
      <!-- pc 端 -->
      <div class="flex max-md:hidden">
        <div class="flex flex-col w-1/2 pr-4">
          <transition-group name="fade" mode="out-in" appear>
            <div v-for="(item, index) in items" :key="item.title" v-on:click="onSelect(item, index)">
              <div
                :class="['p-4 pt-1 pb-1 rounded-lg', { 'bg-gray-200': item === selected }, 'cursor-pointer', 'mb-2', 'hover:bg-gray-200']">
                <h3 class="text-xl font-semibold mb-0">{{ item.title }}</h3>
                <p class="text-sm">
                  {{ item.subtitle }}
                </p>
              </div>
            </div>
          </transition-group>
        </div>
        <div class="w-1/2">
            <video autoplay loop controls playsinline="" muted draggable="true" :poster="selected.poster" class="rounded-lg"
              :style="{ marginTop: selectedIndex * 60 + 'px', transition: 'margin-top 0.3s ease-in-out' }" ref="videoPlayer">
              <source :src="selected.video" type="video/mp4">
            </video>
        </div>
      </div>

      <!-- 移动端 -->
      <div class="flex-col md:hidden">
        <div class="flex flex-col pr-4">
          <transition-group name="fade" mode="out-in" appear>
            <div v-for="(item, index) in items" :key="item.title">
              <div
                :class="['p-4 pt-1 pb-1 rounded-lg', 'mb-2']">
                <h3 class="text-xl font-semibold mb-0">{{ item.title }}</h3>
                <p class="text-sm">
                  {{ item.subtitle }}
                </p>
                <video autoplay loop controls playsinline="" muted draggable="true" :poster="item.poster" class="rounded-lg" ref="videoPlayer">
              <source :src="item.video" type="video/mp4">
            </video>
              </div>
            </div>
          </transition-group>
        </div>
        <div class="">
            
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  computed: {
    // items() {
    //   if (this.$lang === 'zh-CN') {
    //     return this.items_zh;
    //   } else {
    //     return this.items_en;
    //   }
    // },
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    },
  },
  data() {
    return {
      show: true,
      selected: {},
      selectedIndex: 0,
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
          subtitle: "For any UI element, if you don't need it, CleanClip doesn't display it",
          video: "/videos/followfrontmost_1080.mp4",
          // poster: "/images/clean.webp"
        },
        {
          title: "Nearby Text Cursor",
          subtitle: "Context switching interrupts the flow of thoughts and can be very annoying. We have taken.",
          video: "/videos/followfrontmost_1080.mp4",
          // poster: "/images/clean.webp"
        },
        {
          title: "True minimalist UI",
          subtitle: "For any UI element, if you don't need it, CleanClip doesn't display it: Initially, only show the latest 5 records. When you.",
          video: "/videos/followfrontmost_1080.mp4",
          // poster: "/images/clean.webp"
        },
        {
          title: "Nearby Text Cursor",
          subtitle: "Context switching interrupts the flow of thoughts and can be very annoying.",
          video: "/videos/followfrontmost_1080.mp4",
          // poster: "/images/clean.webp"
        },
      ]
    }
  },
  destroyed() {
  },
  methods: {
    onSelect(item, index) {
      console.log("select", item, index)
      this.selected = item
      this.selectedIndex = index
      this.playVideo()
    },
    playVideo() {
      const videoPlayer = this.$refs.videoPlayer;
      // 设置为当前video
      videoPlayer.load();
      if (videoPlayer.paused) {
        videoPlayer.play();
        this.playing = true;
      } else {
        videoPlayer.pause();
        this.playing = false;
      }
    }
  },
  mounted() {
    this.selected = this.items[0]
    console.log("mounted video")
    const videoPlayer = this.$refs.videoPlayer;
    videoPlayer.addEventListener('ended', () => {
      console.log("video play ended")
      videoPlayer.load();
      videoPlayer.autoplay = false;
      this.playing = false;
    })
  }
}

</script>

<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>