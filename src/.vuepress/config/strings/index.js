const en = require("./en");
const zh = require("./zh");
const jp = require("./jp");
const ko = require("./ko");

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
  ko: ko,
  strings: function(lang) {
    switch (lang) {
      case "en-US":
        return en;
      case "zh-CN":
        return zh;
      case "jp":
        return jp;
      case "ko":
        return ko;  
      default:
        return en;
    }
  }
}
