<template>
  <div>
    <script src="https://giscus.app/client.js" data-repo="auv1107/cleancliprun" data-repo-id="R_kgDOKI4QKQ"
      data-category="ArticleDiscussion" data-category-id="DIC_kwDOKI4QKc4Cdutb" data-mapping="og:title" data-strict="0"
      data-reactions-enabled="1" data-emit-metadata="1" data-input-position="top" data-theme="preferred_color_scheme"
      data-loading="lazy" crossorigin="anonymous" async>
      </script>
  </div>
</template>

<script>

export default {
  name: 'PageDiscussion'
}
</script>

<style lang="less">
@import '../styles/palette.less';
@import "../styles/wrapper.less";

.giscus {

  // @extend @wrapper
  & {
    .wrapper;
  }

  padding-top: 1rem;
  padding-bottom: 1rem;
  overflow: auto;
}
</style>
