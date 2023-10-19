<template>
  <div>
    <div class="text-white fixed bottom-0 w-full backdrop-blur-xl lg:h-20 md:h-24 h-32 text-center">
      <div class="opacity-90 bg-blue-800 lg:h-20 md:h-32 h-32  w-full absolute"></div>
      <div class="md:flex lg:h-20 md:h-24 h-32 justify-around items-center p-4 relative">
        <div class="flex items-center justify-around">
          <!-- <a class="pl-4 w-60" href="https://www.producthunt.com/posts/find-next-wow-app?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-find&#0045;next&#0045;wow&#0045;app" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=418594&theme=light" alt="Find&#0032;Next&#0032;Wow&#0032;App - Find&#0032;your&#0032;next&#0032;&#0034;Wow&#0034;&#0032;App&#0044;&#0032;for&#0032;100&#0037;&#0032;Free&#0046; | Product Hunt"> </a> -->
          <span class="text-xl">Early bird price - <b>50% off</b> ends soon!</span>
        </div>
        <!-- 展示优惠码，点击复制 -->
        <div class="">
          <span class="text-xl pr-4 m-auto">Discount code: <b>EARLYBIRD</b></span>
          <a href="https://clip-purchase.macaify.com/" target="_blank">
            <button class="bg-white text-blue-900 text-lg px-4 py-2 rounded-md font-semibold">Get Pro Access - <b>$9.99</b> <del class="text-base text-slate-400">$19.99</del></button>
          </a>
        </div>
      </div>
    </div>
    <div class="lg:h-20 md:h-24 h-32">
    </div>
  </div>
</template>

<script>

export default {
  name: 'Promotion',

  props: {
    threshold: {
      type: Number,
      default: 300
    }
  },

  data () {
    return {}
  },

  computed: {},

  mounted () {},

  methods: {}
}
</script>

<style lang='stylus' scoped>
.go-to-top {
  cursor: pointer;
  position: fixed;
  bottom: 5rem;
  right: 15rem;
  width: 2rem;
  color: $accentColor;
  z-index: 1;
}

.go-to-top:hover {
  color: lighten($accentColor, 30%);
}

@media (max-width: 959px) {
  .go-to-top {
    display: none;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

* {
  border-inline-style: none !important;
  border-style: none !important;
}
</style>