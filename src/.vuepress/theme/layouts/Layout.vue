<template>
  <div class="theme-container" :class="pageClasses">

    <Navbar v-if="shouldShowNavbar" />

    <Sidebar :items="sidebarItems" v-if="shouldShowSidebar">
      <template #top>
        <slot name="sidebar-top" />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </Sidebar>

    <Home v-if="$page.frontmatter.home" />

    <Page v-else :sidebar-items="sidebarItems">
      <template #top>
        <slot name="page-top" />
      </template>
      <template #bottom>
        <slot name="page-bottom" />
        <NewFooter class="bg-slate-50"/>
      </template>
    </Page>

    <a-back-top v-if="$themeConfig.backToTop" />
  </div>
</template>

<script>
import Home from '@theme/components/Home.vue';
import Navbar from '@theme/components/Navbar.vue';
import Page from '@theme/components/Page.vue';
import Sidebar from '@theme/components/Sidebar.vue';
import { resolveSidebarItems } from '../util';
import NewFooter from '../../components/NewFooter.vue';

export default {
  name: 'Layout',

  components: {
    Home,
    Page,
    Sidebar,
    Navbar,
    NewFooter
},

  computed: {
    shouldShowAnnouncementBar() {
      const { themeConfig } = this.$site;
      const { frontmatter } = this.$page;
      console.log("ref" + this.$route.query.ref)
      // if (frontmatter.announcement === false || themeConfig.announcement === false) {
      //   return false;
      // }
      // 判断页面路径是否带有 ref 参数
      const { ref } = this.$route.query;
      return (
        true
      );
    },

    shouldShowNavbar() {
      const { themeConfig } = this.$site;
      const { frontmatter } = this.$page;
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false;
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      );
    },

    shouldShowSidebar() {
      const { frontmatter } = this.$page;
      return (
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      );
    },

    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      );
    },

    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass;
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          // 'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ];
    }
  }

  // mounted() {
  // this.$router.afterEach(() => {
  //   this.isSidebarOpen = false
  // })
  // },

  // methods: {
  // toggleSidebar (to) {
  //   this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
  //   this.$emit('toggle-sidebar', this.isSidebarOpen)
  // },

  // side swipe
  // onTouchStart (e) {
  // this.touchStart = {
  //   x: e.changedTouches[0].clientX,
  //   y: e.changedTouches[0].clientY
  // }
  // },

  // onTouchEnd (e) {
  // const dx = e.changedTouches[0].clientX - this.touchStart.x
  // const dy = e.changedTouches[0].clientY - this.touchStart.y
  // if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
  //   if (dx > 0 && this.touchStart.x <= 80) {
  //     this.toggleSidebar(true)
  //   } else {
  //     this.toggleSidebar(false)
  //   }
  // }
  // }
  // }
};
</script>
