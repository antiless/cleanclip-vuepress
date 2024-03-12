<template>
  <!--
// v0 by Vercel.
// https://v0.dev/t/jjE1XZ8cHhV
-->
  <footer class="text-white py-10 px-5 md:px-10">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- 遍历list -->
      <div v-for="item in items">
        <h3 class="font-bold text-lg mb-3 text-black">{{ item.title }}</h3>
        <ul class="space-y-2">
          <li v-for="subItem in item.items">
            <a class="text-black text-base" :class="subItem.class" :href="subItem.url">{{ subItem.name }}</a>
            <span v-if="subItem.label" class="inline-block px-2 py-0.5 text-xs font-semibold text-gray-800 bg-yellow-300 rounded-full">
                {{  subItem.label }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'NewFooter',
  computed: {
    items() {
      return this.$t().footer
    },
  }
}
</script>
<style scoped>
  ul {
    padding-left: 0%;
  }
</style>