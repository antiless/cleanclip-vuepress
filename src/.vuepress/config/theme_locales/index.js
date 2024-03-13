const { getThemeLocale } = require('./shared')

const i18nInfo = require('../strings/index').i18nInfo
const getNav = require("../nav/index").getNav
const getSidebar = require("../sidebar/index").getSidebar

function i18nInfo2ThemeLocale() {
  let themeLocale = {}
  for (let i = 0; i < i18nInfo.length; i++) {
    const langInfo = i18nInfo[i]
    themeLocale[langInfo.path] = getThemeLocale(langInfo.translation, getNav(langInfo.translation.nav), getSidebar(langInfo.translation.sidebar), langInfo.isAI ? "AI" : "", langInfo.label)
  }
  return themeLocale
}

module.exports = {
  ...i18nInfo2ThemeLocale()
}
