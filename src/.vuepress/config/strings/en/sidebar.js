const { getArticlesSidebar, getDeveloperSidebar, getDocsSidebar } = require('../../sidebar/shared.js');

module.exports = {
  '/articles/': getArticlesSidebar('Articles'),
  '/developer/': getDeveloperSidebar('Developer Blog'),
  '/docs/': getDocsSidebar(
    startTitle = "Quick Start",
    featuresTitle = "Features",
    featuresMainWindow = "Main Window - Powerful Content Organization and Management",
    featuresQuickMenu = "Quick Menu - Focused on Keyboard Efficiency",
    featuresPasteStack = "Paste Queue - Batch Pasting, Quick Form Filling"
  )
}