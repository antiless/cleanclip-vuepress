<template>
  <TabFeatures :items="items" :title="title" :subtitle="subtitle" />
</template>

<script>
import TabFeatures from './TabFeatures.vue';
import strings from '../../config/strings';

export default {
  components: {
    TabFeatures
  },
  computed: {
    t() {
      return this.$t().quick_menu
    },
    items() {
      return [
        {
          "title": this.t.contextless_menu_title,
          "subtitle": this.t.contextless_menu_subtitle,
          "video": "/videos/quickuse.mp4",
          "poster": "/images/quickuse.webp"
        },
        {
          "title": this.t.preset_paste_format_title,
          "subtitle": this.t.preset_paste_format_subtitle,
          "video": "/videos/quickmenu-format-preset.mp4",
          "poster": "/images/quickmenu-format-preset.webp"
        },
        {
          "title": this.t.quick_paste_format_title,
          "subtitle": this.t.quick_paste_format_subtitle,
          "video": "/videos/quickmenu-format.mp4",
          "poster": "/images/quickmenu-format.webp"
        },
        {
          "title": this.t.pin_frequently_used_title,
          "subtitle": this.t.pin_frequently_used_subtitle,
          "video": "/videos/quickmenu-pinboard.mp4",
          "poster": "/images/quickmenu-pinboard.webp"
        }
      ]
    },
    title() {
      return this.$t().quick_menu_title
    },
    subtitle() {
      return this.$t().quick_menu_subtitle
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