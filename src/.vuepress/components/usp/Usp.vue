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
import strings from '../../config/strings';
import UseCase from '../usecase/UseCase.vue'
import VueHorizontal from '../vue-horizontal.vue';

export default {
  components: {
    UseCase,
    VueHorizontal
  },
  computed: {
    t() {
      return this.$t().usp
    },
    items() {
      return [
        {
          title: this.t.true_minimalist_ui_title,
          subtitle: this.t.true_minimalist_ui_subtitle,
          body: this.t.true_minimalist_ui_body,
          video: "/videos/clean265.mp4",
          poster: "/images/clean.webp"
        },
        {
          title: this.t.reduce_context_switching_title,
          subtitle: this.t.reduce_context_switching_subtitle,
          body: this.t.reduce_context_switching_body,
          video: "/videos/followcursornoshadow265.mp4",
          poster: "/images/followcursornoshadow.webp"
        },
        {
          title: this.t.keep_shortcuts_minimal_title,
          subtitle: this.t.keep_shortcuts_minimal_subtitle,
          body: this.t.keep_shortcuts_minimal_body,
          poster: "/images/pinboards.webp"
        },
        {
          title: this.t.paste_queue_assistant_title,
          subtitle: this.t.paste_queue_assistant_subtitle,
          body: this.t.paste_queue_assistant_body,
          video: "/videos/pastestack.mp4",
          poster: "/images/pastestack.webp"
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