<script>
import axios from 'axios';

export default {
  methods: {
    // handleClick,

    async subscribe(email) {
      try {
        console.log('email', email);
        const response = await axios.post(`https://discounts.cleanclip.cc/discounts/student`, { mail: email }, {
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
        if (response.data.code === 0) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.log('error');
        console.error(error);
        return false;
      }
    },

    isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    },

    async handleClick() {
      // 发送 put请求到 fndx-newsletter.auv1107.workers.dev/subscribe?mail=xxx
      // 获取 input 的值
      this.requestState = -2
      const email = document.querySelector('input')?.value
      console.log("email", email)
      if (email && this.isValidEmail(email)) {
        if (await this.subscribe(email)) {
          console.log('获取成功')
          this.requestState = 0
          // alert('Verification successful, please check your email for the exclusive link!')
        } else {
          console.log('获取失败')
          this.requestState = 1
          // alert('Not a valid educational email address.')
        }
      } else {
        this.requestState = 1
        // alert('Email is not a valid education email!')
      }
    }
  },
  computed: {
    items() {
      if (this.$lang === 'zh-CN') {
        return this.items_zh;
      } else {
        return this.items_en;
      }
    },
  },
  data() {
    return {
      requestState: -1,
      items_en: {
        largeTitle: "Special pricing for students",
        subtitle: "Get 30% off on CleanClip. Just use your education email.",
        placeholder: "Enter your educational email...",
        placeholder_error: "Enter correct educational email...",
        cta: "Get Offer",
        tip: "Your educational email cannot be applied? Send an email to edu@cleanclip.cc.",
        howTo: "How to get your offer",
        step1Title: "Enter your email",
        step1Desc: "Type your EDU email above.",

        step2Title: "Check your email",
        step2Desc: "Open the email we sent you.",

        step3Title: "Get your discount",
        step3Desc: "Buy apps with the link in the email.",

        successText: "Successful, please check your email."
      },
      items_zh: {
        largeTitle: "学生特价优惠",
        subtitle: "使用您的教育邮箱，在 CleanClip 享受 7 折优惠。",
        placeholder: "输入您的教育邮箱",
        placeholder_error: "输入正确的教育邮箱",
        cta: "获取优惠",
        tip: "你的邮箱无法申请？发邮件至 edu@cleanclip.cc。",
        howTo: "如何获取您的优惠",
        step1Title: "输入您的邮箱",
        step1Desc: "在上方输入您的.EDU邮箱",

        step2Title: "检查您的邮箱",
        step2Desc: "打开我们发送给您的邮件",

        step3Title: "获取您的折扣",
        step3Desc: "使用邮件中的链接购买应用",

        successText: "成功，请检查您的邮箱。"
      }
    }
  }
};
</script>

<template>
  <!--
// v0 by Vercel.
// https://v0.dev/t/jFOZVZ95kj6
-->
  <div class="mx-auto my-12 pt-24">
    <div class="max-w-4xl mx-auto">
      <div class="flex justify-between items-center gap-8">
        <div class="w-1/2">
          <h1 class="text-5xl font-bold mb-20">{{ items.largeTitle }}</h1>
          <p class="text-lg mb-4">
            {{  items.subtitle  }}
          </p>
          <div class="flex gap-4 mb-4" v-if="requestState == -1 || requestState == 1 || requestState == -2">
            <input
              :class="['flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50', { 'placeholder:text-red-500, text-red-500': requestState == 1 }]"
              :placeholder="requestState == -1 ? items.placeholder : items.placeholder_error">
            <button v-if="requestState != -2" v-on:click="handleClick"
              class="bg-blue-600 text-white bold inline-flex items-center justify-center text-sm font-medium ring-offset-background  hover:bg-primary/90 h-10 px-4 py-2 rounded-lg whitespace-nowrap hover:bg-blue-700">{{ items.cta }}</button>
            <div v-else class="h-10 px-4 py-2 ">
              <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->
              <div
                class="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span
                  class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
              </div>
            </div>
          </div>
          <div v-else>
            <p>{{  items.successText }}</p>
          </div>
          <p class="text-xs mb-12">
            {{ items.tip }}
          </p>
        </div>
        <div class="text-red-500 text-[128px] font-bold bg-transparent p-2 rounded"><span
            class="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">-30%</span></div>
      </div>
    </div>
    <div class=" bg-slate-50 pb-20 pt-1 mt-10 full-width">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-4xl font-semibold mb-8 text-center mt-24">{{ items.howTo }}</h2>
        <div class="grid grid-cols-3 gap-8">
          <div class="flex flex-col items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" class="mb-2">
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <h3 class="font-semibold">{{ items.step1Title }}</h3>
            <p class="text-center text-base">{{ items.step1Desc }}</p>
          </div>
          <div class="flex flex-col items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" class="mb-2">
              <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              <path d="m16 19 2 2 4-4"></path>
            </svg>
            <h3 class="font-semibold">{{ items.step2Title }}</h3>
            <p class="text-center text-base">{{ items.step2Desc }}</p>
          </div>
          <div class="flex flex-col items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" class="mb-2">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
            <h3 class="font-semibold">{{ items.step3Title }}</h3>
            <p class="text-center text-base">{{ items.step3Desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

.theme-container.students {
  .theme-antdocs-content:not(.custom) {
      max-width: unset !important;
      padding: unset !important;
  }
}

</style>