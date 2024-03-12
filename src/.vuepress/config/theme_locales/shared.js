module.exports = {
  getThemeLocale(string, nav, sidebar, tag) {
    return {
      // text for the language dropdown
      selectText: string.selectText,
      // label for this locale in the language dropdown
      label: string.label,
      lastUpdated: string.lastUpdated,
      tag: tag,
      nav: nav,
      search: false,
      sidebar: sidebar
    }
  }
}