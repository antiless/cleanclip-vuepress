<template>
  <div></div>
</template>
<script setup>
var mixpanel = require('mixpanel-browser');
const TOKEN = "b5cde503ff2a03a5d34165c99c41b367"

// mixpanel.init(TOKEN, { debug: false, track_pageview: true, persistence: 'localStorage', api_host: "https://mixpanel-proxy.cleanclip.cc" });
mixpanel.init(TOKEN, { debug: false, track_pageview: true, persistence: 'localStorage' });
console.log("mixpanel inited")
</script>
<style scoped>
</style>