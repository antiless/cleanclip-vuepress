<template>
  <div v-if="$page.frontmatter.home && (ppp.discount && ppp.discount > 0 || activity.enabled) && isVisible">
    <div class="text-white bg-blue-800 fixed bottom-0 w-full backdrop-blur-xl text-center">
      <div class="opacity-90 bg-blue-800 lg:h-20 md:h-32 h-32 w-full absolute"></div>
      <div class="md:flex justify-around items-center p-4 relative">
        <div class="flex items-center justify-around">
          <span v-if="activity.enabled" class="text-lg" v-html="activity.message"></span>
          <span v-else class="text-lg" v-html="$t().promotion.format(ppp.countryName, ppp.discount)"></span>
        </div>
        <div v-if="activity.enabled" class="">
          <span v-if="activity.discountCode" class="text-xl pr-4 m-auto" v-html="$t().promotion_code.format(activity.discountCode)"></span>
          <a :href="activity.url" target="_blank">
            <button v-if="activity.discountCode" class="bg-white text-blue-900 text px-4 py-2 rounded-xl font-semibold">{{ $t().promotion_alternative_to_vote_action }} - <b>${{ (ppp.price / 100 * (100 - activity.discount) / 100).toFixed(2) }}</b> <del class="text-base text-slate-400">${{ ppp.price / 100 }}</del></button>
            <button v-else class="bg-white text-blue-900 text px-4 py-2 rounded-lg font-semibold">{{ activity.actionText }}</button>
          </a>
        </div>
        <div v-else class="">
          <span class="text-xl pr-4 m-auto" v-html="$t().promotion_code.format(ppp.discountCode)"></span>
          <a href="https://clip-purchase.macaify.com" target="_blank">
            <button class="bg-white text-blue-900 text-lg px-4 py-2 rounded-xl font-semibold">{{ $t().promotion_alternative_to_vote_action }} - <b>${{ (19.99 * (100 - ppp.discount) / 100).toFixed(2) }}</b> <del class="text-base text-slate-400">$19.99</del></button>
          </a>
        </div>
        <button @click="closePromotion" class="absolute top-2 right-2 text-white hover:text-gray-300 flex items-center" style="right: 0.5rem; top: 0.5rem;">
          <img src="/images/close.svg" class="h-4 w-4" alt="关闭"/>
        </button>
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
      isVisible: true,
      activityRaw: null
    }
  },

  computed: {
    activity() {
      const now = new Date()
      const raw = this.activityRaw || {}

      // Map VuePress $lang to API language suffix
      const mapLang = (lang) => {
        if (!lang) return undefined
        if (lang.startsWith('zh')) return 'zh'
        const supported = ['gb', 'de', 'ar', 'jp', 'ko', 'se', 'sk']
        return supported.includes(lang) ? lang : undefined
      }
      const langKey = mapLang(this.$lang)

      const pick = (baseKey) => {
        if (!langKey) return raw[baseKey]
        const k = `${langKey}_${baseKey}`
        return raw[k] || raw[baseKey]
      }

      // Time window check if provided
      const startTime = raw['开始时间'] ? new Date(raw['开始时间']) : null
      const endTime = raw['结束时间'] ? new Date(raw['结束时间']) : null
      const inWindow = (!startTime || now >= startTime) && (!endTime || now <= endTime)

      const enabled = !!raw['开启'] && inWindow

      // Normalized activity object with fallbacks
      const normalized = {
        enabled: enabled,
        message: pick('message'),
        url: pick('url'),
        actionText: pick('actionText'),
        discountCode: raw['折扣码'] || '',
        discount: typeof raw['折扣'] === 'number' ? raw['折扣'] : 30,
      }

      console.log(normalized)
      // If no remote config, default to disabled with translated fallbacks
      if (!this.activityRaw) {
        normalized.enabled = false
      }

      return normalized
    },
  },

  mounted () {
    new Promise((resolve, reject) => {
      this.fetchPPP();
      this.fetchActivity();
    });
  },

  methods: {
    async fetchActivity() {
      try {
        const response = await axios.get('https://api2.screensage.pro/webhook/web_activity', {
          headers: { 'Content-Type': 'application/json' }
        })
        this.activityRaw = response.data || null
        console.log('activityRaw', this.activityRaw)
      } catch (error) {
        console.error('Failed to fetch activity config', error)
        this.activityRaw = null
      }
    },
    async fetchPPP() {
      try {
        const response = await axios.get("https://clip-purchase.macaify.com/config", {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log(response);
        this.ppp = response.data;
      } catch (error) {
        console.log('error');
        console.error(error);
      }
    },
    closePromotion() {
      this.isVisible = false;
    }
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
