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
  lang: 'zh-CN',
  title: 'CleanClip - Mac 上最干净的剪贴板管理器。简单且强大！',
  description: '可能是 macOS 上最干净的剪贴板管理工具！自动保存复制内容，轻松管理，秒速查找。简单而强大。CleanClip 不仅可以保护您宝贵的内容不丢失，还提供强大的内容过滤、书签和组织能力。它渗透到您 Mac 使用日常的每个落。',
  selectText: '选择语言',
  label: '简体中文',
  lastUpdated: '最近更新',
  ...footer,
  students: students,
  discounts: discounts,
  ...download,
  ...faqs,
  usp: usp,
  quick_menu: quick_menu,
  quick_menu_subtitle: "双手无需离开键盘即可查找记录，一个即用即走的快捷窗口",
  quick_menu_title: "快捷窗口 - 一秒找到记录",
  paste_stack: paste_stack,
  paste_stack_subtitle: "粘贴队列提供了一个可以快速按顺序粘贴内容的方式",
  paste_stack_title: "粘贴队列 - 按顺序粘贴",
  main_window: main_window,
  main_window_title: "主窗口 - 轻松管理",
  main_window_subtitle: "可轻松查看当前应用的复制记录。还支持无限制的收藏夹、智能列表。方便过滤内容",
  usecases: usecases,
  promotion: "为来自 <b>{0}</b> 的朋友提供购买力平价优惠 - <b>{1}% 优惠</b>",
  promotion_code: "优惠代码: <b>{0}</b>",
  promotion_action: "获取专业版",
  sidebar: sidebar,
  nav: nav,
  // promotion
  // promotion_alternative_to_vote: '限时活动：投票获取 <em><b>9 折优惠</b><span class="underline underline-5px background-image-tint-red"></span></em>。截止时间：2024-09-07',
  // promotion_alternative_to_vote_url: '/zh/pages/activity-alternative-to-vote.html',
  // promotion_alternative_to_vote_action: '获取优惠 >',
  promotion_alternative_to_vote: '黑五特惠：所有多设备计划限时 <em><b>7折</b><span class="underline underline-5px background-image-tint-red"></span></em>。优惠截止：2024-12-04',
  promotion_alternative_to_vote_url: 'https://clip-purchase.macaify.com?utm_source=cleanclip&checkout[discount_code]=BF2024',
  promotion_alternative_to_vote_action: '获取优惠 >',
}