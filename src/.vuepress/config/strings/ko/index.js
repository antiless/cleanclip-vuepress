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
  lang: 'ko',
  title: 'CleanClip - Mac에서 가장 깔끔한 클립 보관함 관리자. 간편하고 강력합니다!',
  description: '아마도 macOS에서 가장 깔끔한 클립 보관함 도구 일 것입니다! 복사한 내용을 자동으로 저장하고, 쉽게 관리하며, 초고속 검색합니다. 간단하고 강력합니다. CleanClip은 소중한 콘텐츠가 손실되지 않도록 해줄 뿐만 아니라 강력한 콘텐츠 필터링, 즐겨찾기 및 조직 기능도 제공합니다. 맥을 사용하는 일상의 모든 코너에 스며듭니다.',
  selectText: '언어 선택',
  label: '한국어',
  lastUpdated: '최근 업데이트',
  footer: footer,
  students: students,
  discounts: discounts,
  download: download,
  usp: usp,
  quick_menu: quick_menu,
  quick_menu_subtitle: "키보드를 떠나지 않고 레코드를 찾아보세요. 즉시 사용 가능한 빠른 창",
  quick_menu_title: "빠른 창 - 레코드를 초 단위로 찾기",
  paste_stack: paste_stack,
  paste_stack_subtitle: "순서대로 콘텐츠를 빠르게 붙여넣을 수 있는 붙여넣기 대기열",
  paste_stack_title: "붙여넣기 대기열 - 순서대로 붙여넣기",
  main_window: main_window,
  main_window_title: "주 창 - 쉽게 관리하기",
  main_window_subtitle: "현재 애플리케이션의 복사 기록을 쉽게 볼 수 있습니다. 무제한 북마크, 스마트 리스트도 지원합니다. 콘텐츠 필터링이 편리합니다",
  usecases: usecases,
  promotion: "<b>{0}</b> 친구를 위한 구매력평정 혜택 - <b>{1}% 할인</b>",
  promotion_code: "프로모션 코드: <b>{0}</b>",
  promotion_action: "프로버전 얻기",
  sidebar: sidebar,
  nav: nav,
}