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
  title: 'CleanClip - Mac 上最清潔なクリップボードマネージャー。シンプルでパワフル！',
  description: '恐らく macOS 上で最もクリーンなクリップボード管理ツール！コピー内容を自動保存し、簡単に管理し、素早く検索。シンプルで強力。CleanClip は、貴重なコンテンツが失われないように保護するだけでなく、強力なコンテンツフィルタリング、ブックマーク、整理能力を提供します。Mac の日常的な使用のすべての角に浸透しています。',
  selectText: '言語を選択',
  label: '簡体中文',
  lastUpdated: '最終更新',
  footer: footer,
  students: students,
  discounts: discounts,
  download: download,
  usp: usp,
  tab_features: tab_features,
  quick_menu: quick_menu,
  quick_menu_subtitle: "キーボードを離すことなく記録を検索できる、即座に使用可能なクイックメニュー",
  quick_menu_title: "クイックメニュー - レコードを1秒で見つける",
  paste_stack: paste_stack,
  paste_stack_subtitle: "順番に内容を貼り付ける方法を素早く提供するペーストスタック",
  paste_stack_title: "ペーストスタック - 順番に貼り付け",
  main_window: main_window,
  main_window_title: "メインウィンドウ - 簡単な管理",
  main_window_subtitle: "現在のアプリケーションのコピー記録を簡単に表示できます。無制限のブックマーク、スマートリストもサポートされています。コンテンツのフィルタリングが簡単に",
  usecases: usecases,
  promotion: "<b>{0}</b> からの友達のために購入力価優遇 - <b>{1}% 割引</b>",
  promotion_code: "プロモーションコード: <b>{0}</b>",
  promotion_action: "プロ版を入手",
  sidebar: sidebar,
  nav: nav,
}