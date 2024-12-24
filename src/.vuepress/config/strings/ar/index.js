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
  lang: 'ar',
  title: 'CleanClip - أنظف مدير حافظة على أجهزة Mac. بسيط وقوي!',
  description: 'قد تكون أداة إدارة الحافظة الأنظف على macOS! حفظ المحتوى تلقائيًا، إدارة بسهولة، البحث الفوري. بسيطة وقوية. إلى جانب حماية محتوياتك الثمينة من الضياع، يقدم CleanClip قدرات قوية لتصفية المحتويات ووضع علامات مرجعية وتنظيمها. إنه يتسلل إلى كل زاوية من روتينك اليومي على Mac.',
  selectText: 'اختيار اللغة',
  label: 'اللغة العربية',
  lastUpdated: 'تم التحديث لآخر مرة',
  ...footer,
  students: students,
  discounts: discounts,
  ...download,
  ...faqs,
  usp: usp,
  quick_menu: quick_menu,
  quick_menu_subtitle: "يمكنك البحث في السجلات دون الحاجة إلى فصل اليدين عن لوحة المفاتيح، نافذة سريعة للاستخدام فوري",
  quick_menu_title: "القائمة السريعة - العثور على السجل في ثانية",
  paste_stack: paste_stack,
  paste_stack_subtitle: "توفر الطابورة لصق طريقة سريعة للصق المحتويات بالترتيب",
  paste_stack_title: "الطابورة للصق - الصق بالترتيب",
  main_window: main_window,
  main_window_title: "النافذة الرئيسية - إدارة سهلة",
  main_window_subtitle: "يمكنك عرض سجلات النسخ الحالية للتطبيق. بالإضافة إلى الدعم للعلامات التجارية اللانهائية وقوائم ذكية. من السهل تصفية المحتويات",
  usecases: usecases,
  promotion: "قدم خصمًا يساوي <b>{0}</b> لأصدقائك من <b>{1}% </b> - خصمًا عادلاً",
  promotion_code: "كود الخصم: <b>{0}</b>",
  promotion_action: "الحصول على النسخة المحترفة",
  promotion_alternative_to_vote: 'عروض عيد الميلاد ورأس السنة <em><b>خصم 30%</b><span class="underline underline-5px background-image-tint-red"></span></em> · ينتهي في 4 يناير',
  promotion_alternative_to_vote_url: 'https://clip-purchase.macaify.com?utm_source=cleanclip&checkout[discount_code]=XMAS24',
  promotion_alternative_to_vote_action: 'احصل على الخصم >',
  sidebar: sidebar,
  nav: nav,
}