<template>
  <div class="faq bg-white min-h-screen">
    <div class="max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl text-center mb-32">
        {{ this.$td("faq_title") }}
      </h2>
      <dl class="space-y-8 mt-12">
        <div v-for="(item, index) in faqItems" :key="index" class="pb-8">
          <button
            class="flex justify-between items-center w-full py-6 text-left focus:outline-none hover:bg-gray-50 rounded-lg transition-colors duration-200"
            @click="toggleItem(index)"
          >
            <span class="text-lg font-medium text-gray-900">{{ item.question }}</span>
            <span
              class="chevron-down ml-4 flex-shrink-0"
              :class="{ 'rotate-180': openItems[index] }"
            ></span>
          </button>
          <transition
            name="expand"
            @enter="enter"
            @after-enter="afterEnter"
            @leave="leave"
          >
            <div v-if="openItems[index]" class="answer-content text-base pb-6 text-gray-600 pl-4 pt-4 leading-relaxed" v-html="item.answer"></div>
          </transition>
          <hr v-if="index !== faqItems.length - 1" class="faq-divider">
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqItems: [],
      openItems: []
    }
  },
  created() {
    this.faqItems = this.td("faqs")
    this.openItems = new Array(this.faqItems.length).fill(false)
  },
  methods: {
    td(key) {
      return this.$td(key)
    },
    toggleItem(index) {
      this.$set(this.openItems, index, !this.openItems[index])
    },
    enter(element) {
      const width = getComputedStyle(element).width
      element.style.width = width
      element.style.position = 'absolute'
      element.style.visibility = 'hidden'
      element.style.height = 'auto'

      const height = getComputedStyle(element).height

      element.style.width = null
      element.style.position = null
      element.style.visibility = null
      element.style.height = 0

      // 触发动画
      setTimeout(() => {
        element.style.height = height
      })
    },
    afterEnter(element) {
      element.style.height = 'auto'
    },
    leave(element) {
      const height = getComputedStyle(element).height

      element.style.height = height

      // 触发动画
      setTimeout(() => {
        element.style.height = 0
      })
    }
  }
}
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: height 0.3s ease-out, opacity 0.3s ease-out, padding 0.3s ease-out;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.chevron-down {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-right: 2px solid #6b7280;
  border-bottom: 2px solid #6b7280;
  transform: rotate(45deg);
  transition: transform 0.3s ease;
}

.chevron-down.rotate-180 {
  transform: rotate(225deg);
}

button:hover .chevron-down {
  border-color: #4b5563;
}

.space-y-8 > * + * {
  margin-top: 2rem;
}

.faq-divider {
  margin-top: 1rem;
  margin-bottom: 3.5rem;
  border-top: 1px solid #e9ecf1;
}

.answer-content {
  margin-top: 1rem; /* 增加问题和回答之间的间距 */
}
</style>
