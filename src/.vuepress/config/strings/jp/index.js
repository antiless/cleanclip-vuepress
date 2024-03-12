const footer = require('./footer')
const students = require('./students')
const discounts = require('./discounts')
const download = require('./download')
const usp = require('./usp')
const tab_features = require('./tab_features')
const quick_menu = require('./quick_menu')
const paste_stack = require('./paste_stack')
const main_window = require('./main_window')
const usecases = require('./usecases')
const sidebar = require('./sidebar')
const nav = require('./nav')

module.exports = {
  name: "CleanClip",
  lang: 'jp',
  title: 'CleanClip - Mac 上最もクリーンなクリップボードマネージャ。シンプルでパワフル！',
  description: 'おそらく macOS 上で最もクリーンなクリップボード管理ツール！コピー内容を自動保存し、簡単に管理し、瞬時に検索します。シンプルでパワフル。CleanClip は、貴重なコンテンツが失われないように保護するだけでなく、強力なコンテンツフィルタリング、ブックマーク、組織能力を提供します。Mac の日常的な使用に浸透しています。',
  selectText: '言語を選択',
  label: '日本語',
  lastUpdated: '最終更新日',
  footer: footer,
  students: students,
  discounts: discounts,
  download: download,
  usp: usp,
  tab_features: tab_features,
  quick_menu: quick_menu,
  quick_menu_subtitle: "キーボードを離さずに記録を検索できる、即座に使用できるクイックウィンドウ",
  quick_menu_title: "クイックウィンドウ - レコードを1秒で見つける",
  paste_stack: paste_stack,
  paste_stack_subtitle: "順番にコンテンツを貼り付ける方法を提供するペーストキュー",
  paste_stack_title: "ペーストキュー - 順番に貼り付ける",
  main_window: main_window,
  main_window_title: "メインウィンドウ - 簡単な管理",
  main_window_subtitle: "現在のアプリのコピー履歴を簡単に表示できます。無制限のブックマーク、スマートリストもサポート。コンテンツのフィルタリングが容易",
  usecases: usecases,
  promotion: "<b>{0}</b> からの友達に購入力平価優待 - <b>{1}% OFF</b>",
  promotion_code: "プロモーションコード: <b>{0}</b>",
  promotion_action: "プロ版を入手",
  sidebar: sidebar,
  nav: nav,
}