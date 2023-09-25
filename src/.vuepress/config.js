module.exports = {
    title: 'CleanClip',
    description: '专为 Mac 打造的沉浸式剪贴板管理应用',
    plugins: [
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
      ['meta', { property: 'og:image', content: 'https://cleanclip.cc/images/twitter_card.png' }],
      ['meta', { property: 'og:url', content: 'https://cleanclip.cc/' }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { name: 'keywords', content: 'mac,clipboard,productivity,writing,tool,剪贴板,剪切板,效率,剪贴板管理器,best clipboard,best mac app,best productivity,clipboard management app,paste,maccy,clipy,iCopy,Copy\'em,pasta,raycast,top 10 clipboard,clean clip,clean clipboard,simple clipboard'}],
      ['meta', { name: "robots", content: "index,follow"}],
      ['meta', { name: "twitter:card", content: "summary_large_image"}],
      ['meta', { name: "twitter:site", content: "@s1ntone"}],
      ['meta', { name: "twitter:creator", content: "@s1ntone"}],
      ['meta', { name: "twitter:image", content: "https://cleanclip.cc/images/twitter_card.png"}]
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
          nav: [
            // { text: 'Phase 1 Demo Video', link: 'https://www.bilibili.com/video/BV1594y1r7nF/?vd_source=49d41f6da6ceddbaeb919efc1f0d9f00' },
            // { text: 'Phase 2 Demo Video', link: 'https://clip.macaify.com/videos/search.mp4' },
            // { text: 'Early Bird Phase 2 Discount 🎁', link: 'https://macaify.lemonsqueezy.com/checkout/buy/ea407526-6a45-443e-8cc1-ba69ff760f54', target:'_blank' },
            // { text: 'Join the Group for 50% Off for Users in China', link: 'https://p.ipic.vip/m9duho.JPG', target:'_blank' },
            // { text: 'Early Bird Discount 🎁', link: 'https://macaify.lemonsqueezy.com/checkout/buy/ea407526-6a45-443e-8cc1-ba69ff760f54' },
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
                { text: 'Follow Progress 🐦', link: 'https://twitter.com/s1ntone', target:'_blank' },
                { text: 'Report an Issue 📮', link: 'mailto:cleanclip@gokoding.com', target:'_blank'},
              ]
            },
            { "text": "Pricing", "link": "https://clip-purchase.macaify.com" }
          ],
          search: false
        },
        '/zh/': {
          // text for the language dropdown
          selectText: '选择语言',
          // label for this locale in the language dropdown
          label: '简体中文',
          nav: [
            // { text: '一期演示视频', link: 'https://www.bilibili.com/video/BV1594y1r7nF/?vd_source=49d41f6da6ceddbaeb919efc1f0d9f00' },
            // { text: '二期演示视频', link: 'https://clip.macaify.com/videos/search.mp4' },
            // { text: '早鸟二期优惠 🎁', link: 'https://macaify.lemonsqueezy.com/checkout/buy/ea407526-6a45-443e-8cc1-ba69ff760f54', target:'_blank' },
            // { text: '国区用户进群获取五折优惠码', link: 'https://p.ipic.vip/m9duho.JPG', target:'_blank' },
            // { text: '早鸟优惠🎁', link: 'https://macaify.lemonsqueezy.com/checkout/buy/ea407526-6a45-443e-8cc1-ba69ff760f54' },
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
                { text: '跟踪进展🐦', link: 'https://twitter.com/s1ntone', target:'_blank' },
                { text: '反馈问题📮', link: 'https://github.com/auv1107/cleancliprun/issues', target:'_blank'},
                { text: '申请退款', link: 'mailto:cleanclip@gokoding.com', target:'_blank'}
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
          description: 'An immersive clipboard management tool designed for Mac, allowing you to quickly search, preview, and use clipboard history at your input position.',
          search: false
        },
        '/zh/': {
          lang: 'zh-CN',
          description: '专为 Mac 打造的沉浸式剪贴板管理工具，在你的输入位置快速查询、预览、使用剪贴板历史记录',
          search: false
        }
      }
}