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
  lang: 'sk',
  title: 'CleanClip - Najčistejší správca schránok na Macu. Jednoduchý a silný!',
  description: 'Pravdepodobne najčistejší nástroj na správu schránok na macOS! Automaticky ukladá skopírovaný obsah, ľahko spravuje, rýchlo vyhľadáva. Jednoduchý a silný. CleanClip nielenže chráni vaše cenné údaje pred strátou, ale poskytuje aj silné filtračné, záložkovacie a organizačné schopnosti. Prepracuje každý kút vášho každodenného používania Macu.',
  selectText: 'Vyberte jazyk',
  label: 'Zjednodušená čínština',
  lastUpdated: 'Naposledy aktualizované',
  footer: footer,
  students: students,
  discounts: discounts,
  download: download,
  usp: usp,
  quick_menu: quick_menu,
  quick_menu_subtitle: "Skrz klávesnicu vyhľadávať záznamy bez toho, aby ste museli zdvihnúť ruky, okamžitý prístupový rámec",
  quick_menu_title: "Rýchly menu - Nájdite záznam za sekundu",
  paste_stack: paste_stack,
  paste_stack_subtitle: "Zásobník vloženia poskytuje spôsob rýchleho postupného vkladania obsahu",
  paste_stack_title: "Zásobník vloženia - Postupné vkladanie",
  main_window: main_window,
  main_window_title: "Hlavné okno - Jednoduchá správa",
  main_window_subtitle: "Ľahko prezerajte záznamy z aktuálneho aplikácie. Podpora neobmedzeného zoznamu obľúbených položiek, inteligentných filtrov. Pomocou filtrov sa ľahko zorientujete vo vašom obsahu",
  usecases: usecases,
  promotion: "Ponuka rovnakú zľavu ako pre vašich priateľov z <b>{0}</b> - <b>{1}% zľava</b>",
  promotion_code: "Kód zľavy: <b>{0}</b>",
  promotion_action: "Získať profesionálnu verziu",
  sidebar: sidebar,
  nav: nav,
}