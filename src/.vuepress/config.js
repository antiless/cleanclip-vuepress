module.exports = {
    title: 'CleanClip',
    description: 'Mac 上完美的白色家电，专注于沉浸式体验的极简剪贴板应用',
    themeConfig: {
      locales: {
        '/': {
          // text for the language dropdown
          selectText: 'Languages',
          // label for this locale in the language dropdown
          label: 'English',
          // text for the edit-on-github link
          editLinkText: 'Edit this page on GitHub',
          // config for Service Worker 
          serviceWorker: {
            updatePopup: {
              message: "New content is available.",
              buttonText: "Refresh"
            }
          },
          nav: [
            // { text: 'Demo Video Phase 1', link: 'https://www.bilibili.com/video/BV1594y1r7nF/?vd_source=49d41f6da6ceddbaeb919efc1f0d9f00' },
            // { text: 'Demo Video Phase 2', link: 'https://clip.macaify.com/videos/search.mp4' },
            // { text: 'Early Bird Phase 2 Discount 🎁', link: 'https://macaify.lemonsqueezy.com/checkout/buy/ea407526-6a45-443e-8cc1-ba69ff760f54', target:'_blank' },
            // { text: 'Join Group for 50% Off Code (China Users)', link: 'https://p.ipic.vip/m9duho.JPG', target:'_blank' },
            { text: 'User Manual', link: '/docs/manual.html' },
            { text: 'Changelog', link: '/docs/changelog.html' },
            { text: 'Roadmap 📅', link: '/docs/roadmap.html' },
            {
              text: 'Contact Us',
              ariaLabel: 'Feedback Menu',
              items: [
                { text: 'Twitter', link: 'https://twitter.com/s1ntone', target:'_blank' },
                { text: 'Weibo', link: 'https://weibo.com/u/2293237681', target:'_blank' },
                { text: 'Email 📮', link: 'mailto:cleanclip.gokoding.com', target:'_blank'},
                { text: 'WeChat Group', link: 'https://p.ipic.vip/m9duho.JPG', target:'_blank'}
              ]
            },
          ],
          search: false
        },
        '/zh/': {
          // text for the language dropdown
          selectText: '选择语言',
          // label for this locale in the language dropdown
          label: '简体中文',
          // text for the edit-on-github link
          editLinkText: '在 GitHub 上编辑此页',
          // config for Service Worker 
          serviceWorker: {
            updatePopup: {
              message: "发现新内容可用.",
              buttonText: "刷新"
            }
          },
          nav: [
            // { text: '一期演示视频', link: 'https://www.bilibili.com/video/BV1594y1r7nF/?vd_source=49d41f6da6ceddbaeb919efc1f0d9f00' },
            // { text: '二期演示视频', link: 'https://clip.macaify.com/videos/search.mp4' },
            // { text: '早鸟二期优惠 🎁', link: 'https://macaify.lemonsqueezy.com/checkout/buy/ea407526-6a45-443e-8cc1-ba69ff760f54', target:'_blank' },
            // { text: '国区用户进群获取五折优惠码', link: 'https://p.ipic.vip/m9duho.JPG', target:'_blank' },
            { text: '用户手册', link: '/zh/docs/manual.html' },
            { text: '更新日志', link: '/zh/docs/changelog.html' },
            { text: '更新计划 📅', link: '/zh/docs/roadmap.html' },
            {
              text: '联系我们',
              ariaLabel: '反馈菜单',
              items: [
                { text: 'Twitter', link: 'https://twitter.com/s1ntone', target:'_blank' },
                { text: 'Weibo', link: 'https://weibo.com/u/2293237681', target:'_blank' },
                { text: '邮箱 📮', link: 'mailto:cleanclip.gokoding.com', target:'_blank'},
                { text: '微信群', link: 'https://p.ipic.vip/m9duho.JPG', target:'_blank'}
              ]
            },
          ],
          search: false
        }
      }
      },
      locales: {
        '/': {
          lang: 'en-US',
          title: 'CleanClip',
          description: 'Perfect white home appliances on Mac, a minimalist clipboard application that focuses on immersive experience.',
          search: false
        },
        '/zh/': {
          lang: 'zh-CN',
          title: 'CleanClip',
          description: 'Mac 上完美的白色家电，专注于沉浸式体验的极简剪贴板应用',
          search: false
        }
      }
}