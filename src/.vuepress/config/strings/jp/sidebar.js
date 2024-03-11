const { getArticlesSidebar, getDeveloperSidebar, getDocsSidebar } = require('../../sidebar/shared.js');

module.exports = {
  '/jp/articles/': getArticlesSidebar('記事'),
  '/jp/developer/': getDeveloperSidebar('開発者ブログ'),
  '/jp/docs/': getDocsSidebar(
    startTitle = "開始",
    featuresTitle = "機能",
    featuresMainWindow = "メインウィンドウ - 強力なコンテンツ整理能力",
    featuresQuickMenu = "クイックメニュー - キーボードの使用効率を重視",
    featuresPasteStack = "貼り付けキュー - 一括貼り付け、速やかなフォーム入力"
  )
}
