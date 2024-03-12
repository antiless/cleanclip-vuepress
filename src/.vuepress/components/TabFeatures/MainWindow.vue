<template>
  <TabFeatures :items="items" :title="title" :subtitle="subtitle" />
</template>

<script>
import strings from '../../config/strings';
import TabFeatures from './TabFeatures.vue';

export default {
  components: {
    TabFeatures
  },
  computed: {
    t() {
      return this.$t().main_window
    },
    items() {
      return [
        {
          "title": this.t.follow_frontmost_title,
          "subtitle": this.t.follow_frontmost_subtitle,
          "video": "/videos/followfrontmost_1080.mp4",
          "poster": "/images/followfrontmost_1080.webp"
        },
        {
          "title": this.t.exclusive_space_title,
          "subtitle": this.t.exclusive_space_subtitle,
          "video": "/videos/sketch-simple-full.mp4",
          "poster": "/images/sketch-simple-full.webp"
        },
        {
          "title": this.t.smart_list_title,
          "subtitle": this.t.smart_list_subtitle,
          "video": "/videos/youtubelinks-1080.mp4",
          "poster": "/images/youtubelinks-1080.webp"
        },
        {
          "title": this.t.collection_list_title,
          "subtitle": this.t.collection_list_subtitle,
          "video": "/videos/collection-lists.mp4",
          "poster": "/images/collection-lists.webp"
        }
      ]
    },
    title() {
      return this.$t().main_window_title
    },
    subtitle() {
      return this.$t().main_window_subtitle
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
    }
  },
  destroyed() {
    this.onMouseUp()
  },
  methods: {
    onScroll({ left }) {
      eft = left
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