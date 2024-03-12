// globalMethods.js
const strings = require("../../config/strings/index")

export default ({ Vue }) => {
  // eslint-disable-next-line vue/match-component-file-name
  // 注册全局方法
  console.log('注册一个全局方法');
  Vue.prototype.$t = function () {
    console.log('这是一个全局方法', this.$lang);
    return strings.strings(this.$lang)
  };
}