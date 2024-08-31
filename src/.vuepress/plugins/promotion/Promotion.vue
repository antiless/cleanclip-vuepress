<template>
  <div v-if="$page.frontmatter.home && (ppp.discount && ppp.discount > 0 || activity.enabled)">
    <div class="text-white fixed bottom-0 w-full backdrop-blur-xl text-center">
      <div class="opacity-90 bg-blue-800 lg:h-20 md:h-32 h-32  w-full absolute"></div>
      <div class="md:flex justify-around items-center p-2 relative">
        <div class="flex items-center justify-around">
          <!-- <a class="pl-4 w-60" href="https://www.producthunt.com/posts/find-next-wow-app?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-find&#0045;next&#0045;wow&#0045;app" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=418594&theme=light" alt="Find&#0032;Next&#0032;Wow&#0032;App - Find&#0032;your&#0032;next&#0032;&#0034;Wow&#0034;&#0032;App&#0044;&#0032;for&#0032;100&#0037;&#0032;Free&#0046; | Product Hunt"> </a> -->
          <span v-if="activity.enabled" class="text-lg" v-html="activity.message"></span>
          <span v-else class="text-lg" v-html="$t().promotion.format(ppp.countryName, ppp.discount)"></span>
        </div>
        <!-- 展示优惠码，点击复制 -->
        <div v-if="activity.enabled" class="">
          <span v-if="activity.discountCode" class="text-xl pr-4 m-auto" v-html="$t().promotion_code.format(activity.discountCode)"></span>
          <a :href="activity.url" target="_blank">
              <button v-if="activity.discountCode" class="bg-white text-blue-900 text px-4 py-2 rounded-xl font-semibold">{{ $t().promotion_action }} - <b>${{ (19.99 * (100 - activity.discount) / 100).toFixed(2) }}</b> <del class="text-base text-slate-400">$19.99</del></button>
              <button v-else class="bg-white text-blue-900 text px-4 py-2 rounded-lg font-semibold">{{ activity.actionText }}</button>
          </a>
        </div>
        <div v-else class="">
          <span class="text-xl pr-4 m-auto" v-html="$t().promotion_code.format(ppp.discountCode)"></span>
          <a href="https://clip-purchase.macaify.com" target="_blank">
            <button class="bg-white text-blue-900 text-lg px-4 py-2 rounded-xl font-semibold">{{ $t().promotion_action }} - <b>${{ (19.99 * (100 - ppp.discount) / 100).toFixed(2) }}</b> <del class="text-base text-slate-400">$19.99</del></button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { message } from 'ant-design-vue';
import axios from 'axios';

export default {
  name: 'Promotion',

  props: {
    threshold: {
      type: Number,
      default: 300
    }
  },

  data () {
    return {
      ppp: {},
    }
  },

  computed: {
    activity() {
      return {
        enabled: false,
          message: this.$td("promotion_alternative_to_vote"),
          url: this.$td("promotion_alternative_to_vote_url"),
          actionText: this.$td("promotion_alternative_to_vote_action")
        }
    },
  },

  mounted () {
    new Promise((resolve, reject) => {
      this.fetchPPP();
    });
  },

  methods: {
    async fetchPPP() {
      try {
        const response = await axios.get(`https://discounts.cleanclip.cc/discounts/ppp`, {
          // const response = await axios.post(`https://newsletter-api.fndx.app/subscribe?mail=${email}`, { mail: email }, {
          // const response = await axios.post(`/helloworld`, null, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS, POST, PUT, DELETE',
            'Access-Control-Max-Age': '86400',
          }
        });
        console.log(response);
        this.ppp = response.data;
      } catch (error) {
        console.log('error');
        console.error(error);
      }
    },
  }
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