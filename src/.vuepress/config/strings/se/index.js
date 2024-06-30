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
  lang: 'se',
  title: 'CleanClip - den renaste klippbords hanteraren på Mac. Enkel och kraftfull!',
  description: 'Kanske den renaste klippbords-hanteraren på macOS! Automatiskt spara kopierat innehåll, enkel hantering, snabbt att hitta. Enkel men kraftfull. CleanClip skyddar inte bara ditt värdefulla innehåll från förlust, utan ger också kraftfulla filtrerings-, bokmärknings- och organisationsfunktioner. Den genomsyrar varje hörn av din dagliga användning på din Mac.',
  selectText: 'Välj språk',
  label: 'Sami',
  lastUpdated: 'Senast uppdaterad',
  ...footer,
  students: students,
  discounts: discounts,
  download: download,
  usp: usp,
  quick_menu: quick_menu,
  quick_menu_subtitle: "Håll händerna på tangentbordet och hitta dina poster på nolltid med ett ögonblicksfönster",
  quick_menu_title: "Snabbmeny - Hitta poster på en sekund",
  paste_stack: paste_stack,
  paste_stack_subtitle: "Klippbordskö ger ett sätt att snabbt klistra in innehåll i ordning",
  paste_stack_title: "Klippbordskö - Klistra in i ordning",
  main_window: main_window,
  main_window_title: "Huvudfönster - Enkel hantering",
  main_window_subtitle: "Enkel visning av kopierade poster för nuvarande app. Stöd för obegränsade bokmärken och smarta listor. Enkel filtrering av innehåll",
  usecases: usecases,
  promotion: "Erbjuder vän från <b>{0}</b> ett prisvärt köpkraftserbjudande - <b>{1}% rabatt</b>",
  promotion_code: "Rabattkod: <b>{0}</b>",
  promotion_action: "Skaffa Pro-version",
  sidebar: sidebar,
  nav: nav,
}