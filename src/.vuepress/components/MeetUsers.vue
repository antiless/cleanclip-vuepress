<template>
  <div @mousedown.left="onMouseDown" class="mt-12">
    <vue-horizontal class="horizontal" ref="horizontal" snap="none" @scroll="onScroll">
      <i class="pl"></i>
      <blockquote class="reddit-embed-bq" data-embed-height="312"><a href="https://www.reddit.com/r/macapps/comments/16p3a0k/comment/k1pjtck/">Comment</a><br> by<a href="https://www.reddit.com/user/auv1107/">u/auv1107</a> from discussion<a href="https://www.reddit.com/r/macapps/comments/16p3a0k/cleanclip_searchpreviewpaste_the_simplest_way_to/"><no value=""></no></a><br> in<a href="https://www.reddit.com/r/macapps/">macapps</a></blockquote><script async="" src="https://embed.reddit.com/widgets.js" charset="UTF-8"></script>
      <i class="ml-8"></i>
      <blockquote class="reddit-embed-bq" data-embed-height="260"><a href="https://www.reddit.com/r/macapps/comments/16pt3ok/comment/k1toaff/">Comment</a><br> by<a href="https://www.reddit.com/user/auv1107/">u/auv1107</a> from discussion<a href="https://www.reddit.com/r/macapps/comments/16pt3ok/yesterday_i_posted_cleanclip_here_but_the_results/"><no value=""></no></a><br> in<a href="https://www.reddit.com/r/macapps/">macapps</a></blockquote><script async="" src="https://embed.reddit.com/widgets.js" charset="UTF-8"></script>
      <i class="ml-8"></i>
      <blockquote class="reddit-embed-bq" data-embed-height="372"><a href="https://www.reddit.com/r/macapps/comments/16p3a0k/comment/k1pka0h/">Comment</a><br> by<a href="https://www.reddit.com/user/auv1107/">u/auv1107</a> from discussion<a href="https://www.reddit.com/r/macapps/comments/16p3a0k/cleanclip_searchpreviewpaste_the_simplest_way_to/"><no value=""></no></a><br> in<a href="https://www.reddit.com/r/macapps/">macapps</a></blockquote><script async="" src="https://embed.reddit.com/widgets.js" charset="UTF-8"></script>
      <i class="ml-8"></i>
      <blockquote class="reddit-embed-bq" data-embed-height="260"><a href="https://www.reddit.com/r/macapps/comments/16pt3ok/comment/k1t192o/">Comment</a><br> by<a href="https://www.reddit.com/user/auv1107/">u/auv1107</a> from discussion<a href="https://www.reddit.com/r/macapps/comments/16pt3ok/yesterday_i_posted_cleanclip_here_but_the_results/"><no value=""></no></a><br> in<a href="https://www.reddit.com/r/macapps/">macapps</a></blockquote><script async="" src="https://embed.reddit.com/widgets.js" charset="UTF-8"></script>
      <i class="ml-8"></i>
      <blockquote class="reddit-embed-bq" data-embed-height="240"><a href="https://www.reddit.com/r/macapps/comments/16pt3ok/comment/k1u5pq9/">Comment</a><br> by<a href="https://www.reddit.com/user/auv1107/">u/auv1107</a> from discussion<a href="https://www.reddit.com/r/macapps/comments/16pt3ok/yesterday_i_posted_cleanclip_here_but_the_results/"><no value=""></no></a><br> in<a href="https://www.reddit.com/r/macapps/">macapps</a></blockquote><script async="" src="https://embed.reddit.com/widgets.js" charset="UTF-8"></script>
      <i class="ml-8"></i>
      <blockquote class="reddit-embed-bq" data-embed-height="220"><a href="https://www.reddit.com/r/macapps/comments/16pt3ok/comment/k1tv9gb/">Comment</a><br> by<a href="https://www.reddit.com/user/auv1107/">u/auv1107</a> from discussion<a href="https://www.reddit.com/r/macapps/comments/16pt3ok/yesterday_i_posted_cleanclip_here_but_the_results/"><no value=""></no></a><br> in<a href="https://www.reddit.com/r/macapps/">macapps</a></blockquote><script async="" src="https://embed.reddit.com/widgets.js" charset="UTF-8"></script>
      <i class="ml-8"></i>
    </vue-horizontal>
  </div>

</template>

<script>
import VueHorizontal from 'vue-horizontal';

export default {
  name: 'MeetUsers',

  components: {
    VueHorizontal
  },

  computed: {},

  mounted () {},

  data() {
    return {
      left: 0,
      originX: 0,
      originLeft: 0,
      lastTime: 0,
      lastPageX: 0,
      speed: 0
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