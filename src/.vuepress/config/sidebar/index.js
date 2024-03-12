const string = require("../strings/index")
const { getArticlesSidebar, getDeveloperSidebar, getDocsSidebar } = require('./shared.js');

function getSidebar(t) {
  return {
    [t.articles_path]: getArticlesSidebar(t.articles),
    [t.developer_path]: getDeveloperSidebar(t.developer_blog),
    [t.docs_path]: getDocsSidebar(
      startTitle = t.start_title,
      featuresTitle = t.features_title,
      featuresMainWindow = t.features_main_window,
      featuresQuickMenu = t.features_quick_menu,
      featuresPasteStack = t.features_paste_stack
    )
  }
}

module.exports = {
  en: getSidebar(string.en.sidebar),
  zh: getSidebar(string.zh.sidebar),
  jp: getSidebar(string.jp.sidebar),
}
