const string = require('../strings/index')
const { getLocales } = require('./shared')

module.exports = {
  '/': getLocales(string.en),
  '/zh/': getLocales(string.zh)
}
