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
      return this.$t().paste_stack
    },
    items() {
      return [
        {
          "title": this.t.paste_in_order_title,
          "subtitle": this.t.paste_in_order_subtitle,
          "video": "/videos/pastestack-present.mp4",
          "poster": "/images/pastestack-present.webp"
        },
        {
          "title": this.t.collect_info_title,
          "subtitle": this.t.collect_info_subtitle,
          "video": "/videos/pastestack-collect.mp4",
          "poster": "/images/pastestack-collect.webp"
        },
        {
          "title": this.t.quick_form_filling_title,
          "subtitle": this.t.quick_form_filling_subtitle,
          "video": "/videos/pastestack-split.mp4",
          "poster": "/images/pastestack-split.webp"
        },
        {
          "title": this.t.assist_form_filling_title,
          "subtitle": this.t.assist_form_filling_subtitle,
          "video": "/videos/pastestack-fill-form.mp4",
          "poster": "/images/pastestack-fill-form.webp"
        }
      ]
    },
    title() {
      return this.$t().paste_stack_title
    },
    subtitle() {
      return this.$t().paste_stack_subtitle
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