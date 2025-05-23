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
  lang: "en-US",
  title: 'CleanClip - Clipboard Manager for macOS. Simple, but powerful.',
  description: 'The cleanest Clipboard Manager on macOS. Auto save copies, easy management, find in seconds. Simple, but powerful. CleanClip not only protects your valuable content from being lost, but also provides powerful content filtering, bookmarking, and organizing capabilities. It permeates every aspect of your Mac usage.',
  selectText: 'Languages',
  label: 'English',
  lastUpdated: 'Last Updated',
  ...footer,
  students: students,
  discounts: discounts,
  ...download,
  ...faqs,
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
  // promotion
  // promotion_alternative_to_vote: 'Limited Time Activity: Vote to get <em><b>10% OFF</b><span class="underline underline-5px background-image-tint-red"></span></em>. Deadline: 2024-09-07',
  // promotion_alternative_to_vote_url: '/pages/activity-alternative-to-vote.html',
  // promotion_alternative_to_vote_action: 'Get Discount >',
  promotion_alternative_to_vote: 'iOS version now available · <em><b>Exclusive 30% OFF for Early Birds</b><span class="underline underline-5px background-image-tint-red"></span></em> · One License for Mac/iPhone/iPad (Limited Spots)',
  promotion_alternative_to_vote_url: 'https://ios.cleanclip.cc',
  promotion_alternative_to_vote_action: 'Claim Your Discount Now',
}