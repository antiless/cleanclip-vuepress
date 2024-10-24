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
const faqs = require('./faqs')

module.exports = {
  name: "CleanClip",
  lang: 'gb',
  title: 'CleanClip - The Cleanest Clipboard Manager on Mac. Simple yet Powerful!',
  description: 'Possibly the cleanest clipboard manager on macOS! Automatically save copied content, manage with ease, find instantly. Simple yet powerful. CleanClip not only safeguards your precious content from getting lost but also provides robust content filtering, bookmarking, and organizing capabilities. It permeates every corner of your Mac usage daily.',
  selectText: 'Select Language',
  label: 'British English',
  lastUpdated: 'Last Updated',
  ...footer,
  students: students,
  discounts: discounts,
  ...download,
  ...faqs,
  usp: usp,
  quick_menu: quick_menu,
  quick_menu_subtitle: "No need to leave the keyboard to search for records, a quick window that is ready to use and go",
  quick_menu_title: "Quick Menu - Find Records in a Second",
  paste_stack: paste_stack,
  paste_stack_subtitle: "The paste stack provides a quick way to paste content in order",
  paste_stack_title: "Paste Stack - Paste in Order",
  main_window: main_window,
  main_window_title: "Main Window - Manage with Ease",
  main_window_subtitle: "Easily view copy records of the current app. Also supports unlimited collections, smart lists. Convenient content filtering",
  usecases: usecases,
  promotion: "Offer affordable purchase for friends from <b>{0}</b> - <b>{1}% off</b>",
  promotion_code: "Promo Code: <b>{0}</b>",
  promotion_action: "Get Pro Version",
  sidebar: sidebar,
  nav: nav,
}