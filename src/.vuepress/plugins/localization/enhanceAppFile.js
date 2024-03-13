// globalMethods.js
const strings = require("../../config/strings/index")

export default ({ Vue }) => {
  // eslint-disable-next-line vue/match-component-file-name
  // 注册全局方法
  Vue.prototype.$t = function () {
    return strings.strings(this.$lang)
  };
}