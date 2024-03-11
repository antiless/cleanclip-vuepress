module.exports = {
  getLocales(string) {
    return {
      lang: string.lang,
      description: string.description,
      search: false,
      title: string.title,
    }
  }
}