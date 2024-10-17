const fs = require('fs')
const path = require('path')

// const officialPlugins = fs
//   .readdirSync(path.resolve(__dirname, '../../../articles/developer'))
//   .map(filename => 'developer/' + filename.slice(0, -3))
//   .sort()

function getDirArticles(relativePath, prefix) {
  return fs
    .readdirSync(path.resolve(__dirname, relativePath))
    .map(filename => prefix + '/' + filename.slice(0, -3))
    .sort()
}

function getArticlesSidebar(title) {
  return [{
    title: title,
    path: "/zh/articles/",
    collapsable: false,
    children: [
      'Why-not-all-clipboard-managers-support-Final-Cut-Pro-copies/',
      'clipboard-managers-a-must-have-for-every-mac-user',
      'clipboard-managers-an-underrated-utility',
      'why-you-need-clipboard-manager',
      'advanced-mac-clipboard-management-tips',
      'mac-clipboard-managers-top-6-review'
    ]
  }]
}

function getDeveloperSidebar(title) {
  return [{
    title: title,
    collapsable: false,
    children: [
      'cloudflare-worker-implements-purchasing-power-parity/',
      'cloudflare-worker-gmail-resend-enterprise-email/',
      'swiftui-nswindow-inactive-firstmouse',
      'web-axios-CROS',
    ]
  }]
}

function getDocsSidebar(startTitle, featuresTitle, featuresMainWindow, featuresQuickMenu, featuresPasteStack) {
  return [
    {
      collapsable: true,
      children: [{
        title: startTitle,
        collapsable: false,
        children: [
          'manual', 'roadmap', 'changelog'
        ]
      },
      {
        title: featuresTitle,
        collapsable: false,
        children: [
          {
            title: featuresMainWindow,
            collapsable: true,
            children: [
              "cleanclip/mac/features/main-window",
              "cleanclip/mac/features/main-window-follow-frontmost-app",
              "cleanclip/mac/features/main-window-collection-lists",
              "cleanclip/mac/features/main-window-sketch",
              "cleanclip/mac/features/main-window-youtube-links",
            ]
          },
          {
            title: featuresQuickMenu,
            collapsable: false,
            children: [
              "cleanclip/mac/features/quick-use",
              "cleanclip/mac/features/quickmenu-format-preset",
              "cleanclip/mac/features/quickmenu-format",
              "cleanclip/mac/features/pastestack-drag",
            ]
          },
          {
            title: featuresPasteStack,
            collapsable: false,
            children: [
              "cleanclip/mac/features/pastestack-present",
              "cleanclip/mac/features/pastestack-collect",
              "cleanclip/mac/features/pastestack-fill-form",
              "cleanclip/mac/features/pastestack-split"
            ]
          },
        ]
      },
      ]
    }
  ]
}

// function getArticlesSidebar() {
//   const sidebar = [
//     {
//       title: "About Clipboard Manager",
//       collapsable: false,
//       children: getDirArticles('../../../articles/clipboardmanager', "clipboardmanager")
//     },
//     {
//       title: "Developer Blog",
//       collapsable: false,
//       children: getDirArticles('../../../articles/developer', "developer")
//     }
//   ]
//   return sidebar
// }
module.exports = {
  getArticlesSidebar, getDeveloperSidebar, getDocsSidebar
}
