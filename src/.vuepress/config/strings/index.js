const en = require("./en");
const zh = require("./zh");
const jp = require("./jp");

String.prototype.format = function() {
  let formatted = this;
  for (let i = 0; i < arguments.length; i++) {
      const regexp = new RegExp('\\{' + i + '\\}', 'gi');
      formatted = formatted.replace(regexp, arguments[i]);
  }
  return formatted;
};

module.exports = {
  en: en,
  zh: zh,
  jp: jp,
  strings: function(lang) {
    switch (lang) {
      case "en-US":
        return en;
      case "zh-CN":
        return zh;
      case "jp":
        return jp;
      default:
        return en;
    }
  }
}
