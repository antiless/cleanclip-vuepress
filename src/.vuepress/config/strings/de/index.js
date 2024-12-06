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
  lang: 'de',
  title: 'CleanClip - Der sauberste Zwischenablage-Manager für Mac. Einfach und leistungsstark!',
  description: 'Möglicherweise das sauberste Zwischenablage-Verwaltungstool für macOS! Speichert automatisch Kopien, einfaches Management, schnelle Suche. Einfach und leistungsstark. CleanClip schützt nicht nur Ihre wertvollen Inhalte vor Verlust, sondern bietet auch leistungsstarke Inhaltsfilter, Lesezeichen und Organisationsfunktionen. Es durchdringt jeden Winkel Ihres täglichen Mac-Gebrauchs.',
  selectText: 'Sprache wählen',
  label: 'Deutsch',
  lastUpdated: 'Zuletzt aktualisiert',
  ...footer,
  students: students,
  discounts: discounts,
  ...download,
  ...faqs,
  usp: usp,
  quick_menu: quick_menu,
  quick_menu_subtitle: "Finden Sie Einträge bequem, ohne die Hände von der Tastatur nehmen zu müssen. Ein praktisches Fenster auf Abruf.",
  quick_menu_title: "Schnellmenü - Eintrag in Sekunden finden",
  paste_stack: paste_stack,
  paste_stack_subtitle: "Die Zwischenablage ermöglicht schnelles, sequenzielles Einfügen von Inhalten.",
  paste_stack_title: "Zwischenablage - Sequenzielles Einfügen",
  main_window: main_window,
  main_window_title: "Hauptfenster - Einfache Verwaltung",
  main_window_subtitle: "Zeigen Sie mühelos die Kopien des aktuellen Anwendungsfensters an. Mit unbegrenzten Lesezeichen und intelligenten Listen. Bequemes Filtern von Inhalten.",
  usecases: usecases,
  promotion: "Sonderangebot für Freunde von <b>{0}</b> - <b>{1}% Rabatt</b>",
  promotion_code: "Gutscheincode: <b>{0}</b>",
  promotion_action: "Hol dir die Pro-Version",
  promotion_alternative_to_vote: 'Multi-Device-Pläne <em><b>20% Rabatt</b><span class="underline underline-5px background-image-tint-red"></span></em> · Endet bald',
  promotion_alternative_to_vote_url: 'https://clip-purchase.macaify.com?utm_source=cleanclip&checkout[discount_code]=CCIOS',
  promotion_alternative_to_vote_action: 'Rabatt sichern >',
  sidebar: sidebar,
  nav: nav,
}