module.exports = {
  getLocales(string, lang) {
    return {
      lang: lang,
      description: string.description,
      search: false,
      title: string.title,
    }
  }
}