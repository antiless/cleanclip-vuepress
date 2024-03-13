const i18nInfo = require('../strings/index').i18nInfo
const { getLocales } = require('./shared')

function i18nInfo2Locales() {
  let locales = {}
  for (let i = 0; i < i18nInfo.length; i++) {
    const langInfo = i18nInfo[i]
    locales[langInfo.path] = getLocales(langInfo.translation, langInfo.lang)
  }
  return locales
}

module.exports = {
  ...i18nInfo2Locales()
}
