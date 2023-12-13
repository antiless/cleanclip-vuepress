const autometa_options = {
  site: {
    name   : 'CleanClip - macOS Clipboard Manager'
  },
  twitter: false,
  canonical_base: 'https://cleanclip.cc'
};

module.exports = {
    title: 'CleanClip',
    description: 'An immersive clipboard management application designed for Mac, allowing you to quickly search, preview, and use clipboard history at your input position.',
    plugins: [
      [ require('./plugins/autometa'), autometa_options ],
      // [ require('./plugins/promotion')],
      [
        'vuepress-plugin-sitemap',
        { hostname: 'https://cleanclip.cc' }
      ]
    ],
    theme: 'antdocs',
    head: [
      ["link", { rel: "icon", type: "image/ico", href: "/images/favicon.ico" }],
      ["link", { rel: "shortcut icon", type: "image/x-icon", href: "/images/favicon.ico" }],
      ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon-32x32.png' }],
      ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon-16x16.png' }],
      ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/apple-touch-icon.png' }],  
      ['link', { rel: 'manifest', href: '/site.webmanifest' }],
      ['meta', { property: 'og:title', content: 'CleanClip - Rediscover the Value of Clipboard Content' }],
      ['meta', { property: 'og:description', content: 'An immersive clipboard management tool designed for Mac, allowing you to quickly search, preview, and use clipboard history at your input position.' }],
      ['meta', { property: 'og:image', content: 'https://cleanclip.cc/images/twitter_card.webp' }],
      ['meta', { property: 'og:url', content: 'https://cleanclip.cc/' }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { name: 'keywords', content: 'mac,clipboard,productivity,writing,tool,剪贴板,剪切板,效率,剪贴板管理器,best clipboard,best mac app,best productivity,clipboard management app,paste,maccy,clipy,iCopy,Copy\'em,pasta,raycast,top 10 clipboard,clean clip,clean clipboard,simple clipboard,mac clipboard manager,free,free cliboard manager,copyclip,app,application,mac app,clipboard app'}],
      ['meta', { name: "robots", content: "index,follow"}],
      ['meta', { name: "twitter:card", content: "summary_large_image"}],
      ['meta', { name: "twitter:site", content: "@s1ntone"}],
      ['meta', { name: "twitter:creator", content: "@s1ntone"}],
      ['meta', { name: "twitter:image", content: "https://cleanclip.cc/images/twitter_card.webp"}],
      ['script', { src: '/js/base.js' }],
      // ['script', { src: '/js/enhanceApp.js' }],
      ['script', { src: 'https://cdn.tailwindcss.com' }],
      ['script', { src: 'https://lmsqueezy.com/affiliate.js' }],
      ['link', { rel: "preconnect", href: "https://fonts.googleapis.com" }],
      ['link', { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true }],
      ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200;12..96,400;12..96,600;12..96,800&display=swap' }],
    ],
    themeConfig: {
      logo: '/images/logo.png',
      smoothScroll: true,
      backToTop: true,
      search: false,
      locales: {
        '/': {
          // text for the language dropdown
          selectText: 'Languages',
          // label for this locale in the language dropdown
          label: 'English',
          lastUpdated: 'Last Updated',
          nav: [
            {
              text: 'Product',
              ariaLabel: 'Product Menu',
              items: [
                { text: 'User Manual', link: '/docs/manual.html' },
                { text: 'Changelog', link: '/docs/changelog.html' },
                { text: 'Roadmap 📅', link: '/docs/roadmap.html' },
              ]
            },
            {
              text: 'Help',
              ariaLabel: 'Feedback Menu',
              items: [
                { text: 'CleanClip on X', link: 'https://twitter.com/cleanclipapp', target:'_blank' },
                { text: 'Report an Issue', link: 'mailto:cleanclip@gokoding.com', target:'_blank'},
                { text: 'Affiliate', link: 'https://store.cleanclip.cc/affiliates' },
                { text: 'License Manager', link: 'https://app.lemonsqueezy.com/my-orders' },
                { text: 'Student Discount 30% off', link: 'mailto:edu@cleanclip.cc?subject=%5Bedu%20discount%5D%20Requesting%20Discount%20Code%20for%2030%25%20Off%20CleanClip%20License&body=Requesting%20Discount%20Code%20for%2030%25%20Off%20CleanClip%20License', target:'_blank'},
              ]
            },
            { "text": "Pricing", "link": "https://clip-purchase.macaify.com" },
          ],
          search: false
        },
        '/zh/': {
          // text for the language dropdown
          selectText: '选择语言',
          // label for this locale in the language dropdown
          label: '简体中文',
          lastUpdated: '最近更新',
          nav: [
            {
              text: '产品介绍',
              ariaLabel: '产品介绍菜单',
              items: [
                { text: '用户手册', link: '/zh/docs/manual.html' },
                { text: '更新日志', link: '/zh/docs/changelog.html' },
                { text: '更新计划 📅', link: '/zh/docs/roadmap.html' },
              ]
            },
            {
              text: '帮助',
              ariaLabel: '反馈菜单',
              items: [
                { text: '@CleanClip', link: 'https://twitter.com/cleanclipapp', target:'_blank' },
                { text: '反馈问题📮', link: 'https://github.com/auv1107/cleancliprun/issues', target:'_blank'},
                { text: '推荐返现', link: 'https://store.cleanclip.cc/affiliates' },
                { text: '许可证管理', link: 'https://app.lemonsqueezy.com/my-orders' },
                { text: '学生优惠 7 折', link: 'mailto:edu@cleanclip.cc?subject=%5Bedu%20discount%5D%20Requesting%20Discount%20Code%20for%2030%25%20Off%20CleanClip%20License&body=Requesting%20Discount%20Code%20for%2030%25%20Off%20CleanClip%20License', target:'_blank'},
              ]
            },
            { text: '价格', link: 'https://clip-purchase.macaify.com' },
          ],
          search: false
        }
      }
      },
      locales: {
        '/': {
          lang: 'en-US',
          description: 'An immersive clipboard management application designed for Mac, allowing you to quickly search, preview, and use clipboard history at your input position.',
          search: false
        },
        '/zh/': {
          lang: 'zh-CN',
          description: '专为 Mac 打造的沉浸式剪贴板管理工具，在你的输入位置快速查询、预览、使用剪贴板历史记录',
          search: false
        }
      }
}