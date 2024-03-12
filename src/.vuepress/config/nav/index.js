const string = require("../strings/index")

function getNav(t) {
  return [
    {
      text: t.product_documentation,
      ariaLabel: t.product_documentation_ariaLabel,
      link: t.product_documentation_link
    },
    { text: t.pricing, link: t.pricing_link },
    {
      text: t.download,
      link: t.download_link
    },
  ]
}
module.exports = {
  en: getNav(string.en.nav),
  zh: getNav(string.zh.nav),
  jp: getNav(string.jp.nav),
}