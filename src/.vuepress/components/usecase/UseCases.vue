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
    t() {
      return this.$t().usecases
    },
    items() {
      return [
        {
          title: this.t.collect_images_title,
          subtitle: this.t.collect_images_subtitle,
          video: "/videos/designer265.mp4",
          poster: "/images/designer.webp"
        },
        {
          title: this.t.sync_screenshots_title,
          subtitle: this.t.sync_screenshots_subtitle,
          video: "/videos/screenshots265.mp4",
          poster: "/images/screenshots.webp"
        },
        {
          title: this.t.plan_travel_title,
          subtitle: this.t.plan_travel_subtitle,
          video: "/videos/disneyland265.mp4",
          poster: "/images/disneyland.webp"
        },
        {
          title: this.t.search_email_templates_title,
          subtitle: this.t.search_email_templates_subtitle,
          video: "/videos/emailtemplate265.mp4",
          poster: "/images/emailtemplate.webp"
        },
        {
          title: this.t.submit_across_sites_title,
          subtitle: this.t.submit_across_sites_subtitle,
          video: "/videos/formfill265.mp4",
          poster: "/images/formfill.webp"
        },
        {
          title: this.t.search_command_history_title,
          subtitle: this.t.search_command_history_subtitle,
          video: "/videos/terminal265.mp4",
          poster: "/images/terminal.webp"
        }
      ]
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