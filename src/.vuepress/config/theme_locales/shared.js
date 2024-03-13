module.exports = {
  getThemeLocale(string, nav, sidebar, tag, label) {
    return {
      // text for the language dropdown
      selectText: string.selectText,
      // label for this locale in the language dropdown
      label: label,
      lastUpdated: string.lastUpdated,
      tag: tag,
      nav: nav,
      search: false,
      sidebar: sidebar
    }
  }
}