const footer = require('./footer')
const students = require('./students')
const discounts = require('./discounts')
const download = require('./download')
const usp = require('./usp')
const quick_menu = require('./quick_menu')
const paste_stack = require('./paste_stack')
const main_window = require('./main_window')
const usecases = require('./usecases')
const sidebar = require('./sidebar')
const nav = require('./nav')

module.exports = {
  name: "CleanClip",
  lang: "en-US",
  title: 'CleanClip - Clipboard Manager for macOS. Simple, but powerful.',
  description: 'The cleanest Clipboard Manager on macOS. Auto save copies, easy management, find in seconds. Simple, but powerful. CleanClip not only protects your valuable content from being lost, but also provides powerful content filtering, bookmarking, and organizing capabilities. It permeates every aspect of your Mac usage.',
  selectText: 'Languages',
  label: 'English',
  lastUpdated: 'Last Updated',
  footer: footer,
  students: students,
  discounts: discounts,
  download: download,
  usp: usp,
  quick_menu: quick_menu,
  quick_menu_subtitle: "Designed specifically for keyboard operations, a quick window that appears and disappears at the input position at any time",
  quick_menu_title: "Quick Menu - Find Records in One Second",
  paste_stack: paste_stack,
  paste_stack_subtitle: "Paste Stack provides a way to paste content quickly in order",
  paste_stack_title: "Paste Stack - Paste in Sequence",
  main_window: main_window,
  main_window_title: "Main Window - Easy Management",
  main_window_subtitle: "A window pinned on screen has a powerful bookmark list and smart list",
  usecases: usecases,
  promotion: "Parity Purchasing Power for friends from <b> {0}</b> - <b>{1}% off</b> on certain lifetime plans.",
  promotion_code: "Using code: <b>{0}</b>",
  promotion_action: "Get Pro Access",
  sidebar: sidebar,
  nav: nav,
}