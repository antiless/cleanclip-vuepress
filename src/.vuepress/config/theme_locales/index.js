const string = require('../strings/index')
const { getThemeLocale } = require('./shared')

const nav = require("../nav/index")
const sidebar = require("../sidebar/index")

module.exports = {
  '/': getThemeLocale(string.en, nav.en, sidebar.en),
  '/zh/': getThemeLocale(string.zh, nav.zh, sidebar.zh),
  '/jp/': getThemeLocale(string.jp, nav.jp, sidebar.jp),
}