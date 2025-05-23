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
      'mac-clipboard-managers-top-6-review',
      'best-clipboard-managers-mac-2024',
      'best-clipboard-managers-windows-mac-cleanclip',
      'mac-clipboard-guide-faq-tips-tricks',
      'understanding-clipboard-on-mac-guide',
      'how-to-view-clipboard-history-on-mac',
      'mac-clipboard-history-default-and-cleanclip',
      'macos-clipboard-history-tools',
      'cleanclip-clipboard-history-manager',
      'mac-clipboard-guide-7-steps-to-master',
      '15-best-mac-clipboard-manager-apps-comparison-and-features',
      'my_minimal_app_list_8_mac_essentials',
      'mac-productivity-apps-top-8',
      '10-best-mac-productivity-apps-to-supercharge-your-workflow-2024',
      'macos-essential-menu-bar-and-background-apps'
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
