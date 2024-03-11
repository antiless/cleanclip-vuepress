const { getArticlesSidebar, getDeveloperSidebar, getDocsSidebar } = require('./shared.js');

module.exports = {
  '/zh/articles/': getArticlesSidebar('文章'),
  '/zh/developer/': getDeveloperSidebar('开发者博客'),
  '/zh/docs/': getDocsSidebar(
    startTitle = "开始",
    featuresTitle = "功能",
    featuresMainWindow = "主窗口 - 强大的内容组织、管理能力",
    featuresQuickMenu = "快捷菜单 - 注重键盘使用效率",
    featuresPasteStack = "粘贴队列 - 批量粘贴、快速填表"
  )
}