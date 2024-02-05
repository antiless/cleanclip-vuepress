const autometa_options = {
  site: {
    name   : 'CleanClip - macOS Clipboard Manager'
  },
  twitter: true,
  canonical_base: 'https://cleanclip.cc'
};

module.exports = {
    title: 'CleanClip - macOS Clipboard Manager',
    description: 'Auto save copies, easy management, find in seconds. Simple, but powerful. CleanClip not only protects your valuable content from being lost, but also provides powerful content filtering, bookmarking, and organizing capabilities. It permeates every aspect of your Mac usage.',
    plugins: [
      [ require('./plugins/autometa'), autometa_options ],
      [ require('./plugins/promotion')],
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
      ['meta', { property: 'og:image', content: 'https://cleanclip.cc/images/twitter_card2.webp' }],
      ['meta', { property: 'og:url', content: 'https://cleanclip.cc/' }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { name: 'keywords', content: 'mac,clipboard,productivity,writing,tool,剪贴板,剪切板,效率,剪贴板管理器,best clipboard,best mac app,best productivity,clipboard management app,paste,maccy,clipy,iCopy,Copy\'em,pasta,raycast,top 10 clipboard,clean clip,clean clipboard,simple clipboard,mac clipboard manager,free,free cliboard manager,copyclip,app,application,mac app,clipboard app'}],
      ['meta', { name: "robots", content: "index,follow"}],
      ['meta', { name: "twitter:card", content: "summary_large_image"}],
      ['meta', { name: "twitter:site", content: "@s1ntone"}],
      ['meta', { name: "twitter:creator", content: "@s1ntone"}],
      ['meta', { name: "twitter:image", content: "https://cleanclip.cc/images/twitter_card2.webp"}],
      ['script', { src: '/js/base.js' }],
      ['script', { src: '/js/enhanceApp.js' }],
      ['script', { src: 'https://cdn.tailwindcss.com' }],
      ['script', { src: 'https://lmsqueezy.com/affiliate.js' }],
      // ['script', { src: 'https://cdn.paritydeals.com/banner.js' }],
      ['script', { src: 'https://assets.lemonsqueezy.com/lemon.js' }],
      ['script', {}, `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        console.log("init clarity")
      })(window, document, "clarity", "script", "ksydzliajy");
    `],
    ['script', { src: 'https://www.googletagmanager.com/gtag/js?id=G-DT4VDM6DK7', async: true }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-DT4VDM6DK7');
    `],
      ['link', { rel: "preconnect", href: "https://fonts.googleapis.com" }],
      ['link', { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true }],
      ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200;12..96,400;12..96,600;12..96,800&display=swap' }],
    ],
    themeConfig: {
      title: "CleanClip",
      logo: '/images/logo.webp',
      latestDownloadUrl: 'https://cleanclip.cc/releases/download/v2.0.1/CleanClip.dmg',
      freeTrailUrl: 'https://macaify.lemonsqueezy.com/checkout/buy/176e339c-ac2b-40d7-b253-c10b3dfdb929',
      purchaseUrl: 'https://clip-purchase.macaify.com',
      smoothScroll: true,
      backToTop: false,
      search: false,
      alias: {
        '/affiliate': 'https://store.cleanclip.cc/affiliates',
        '/pricing': 'https://clip-purchase.macaify.com',
      },
      pageAnchor:{
        isDisabled: true,
      },
      markdown: {
        lineNumbers: true
      },
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
                { text: 'Roadmap', link: '/docs/roadmap.html' },
              ]
            },
            {
              text: 'Download',
              link: '/download'
              // link: 'https://macaify.lemonsqueezy.com/checkout/buy/69bd0056-9182-4030-9aaf-bd0604db751b?enabled=114543'
            },
            { "text": "Pricing", "link": "/pricing" },
          ],
          search: false,
          sidebar: {
            '/docs/': ['', 'manual', 'roadmap', 'changelog'],
            '/developer/': [{
              title: "Developer Blog",
              collapsable: false,
              children: [
                'cloudflare-worker-implements-purchasing-power-parity/',
                'cloudflare-worker-gmail-resend-enterprise-email/',
                'swiftui-nswindow-inactive-firstmouse',
                'web-axios-CROS',
              ]
            }],
            '/articles/': [{
              title: "Articles",
              path: "/articles/",
              collapsable: false,
              children: [
                'Why-not-all-clipboard-managers-support-Final-Cut-Pro-copies/',
                'clipboard-managers-a-must-have-for-every-mac-user',
                'clipboard-managers-an-underrated-utility',
                'why-you-need-clipboard-manager'
              ]
          }],
        },
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
                { text: '更新计划', link: '/zh/docs/roadmap.html' },
              ]
            },
            {
              text: '下载',
              // link: 'https://macaify.lemonsqueezy.com/checkout/buy/69bd0056-9182-4030-9aaf-bd0604db751b?enabled=114543'
              link: '/zh/download'
            },
            { text: '价格', link: '/pricing' },
          ],
          search: false,
          sidebar: {
            '/zh/docs/': ['', 'manual', 'roadmap', 'changelog'],
            '/zh/developer/': [{
              title: "开发者博客",
              collapsable: false,
              children: [
                'cloudflare-worker-implements-purchasing-power-parity/',
                'cloudflare-worker-gmail-resend-enterprise-email/',
                'swiftui-nswindow-inactive-firstmouse',
                'web-axios-CROS',
              ]
            }],
            '/zh/articles/': [{
              title: "文章",
              path: "/zh/articles/",
              collapsable: false,
              children: [
                'Why-not-all-clipboard-managers-support-Final-Cut-Pro-copies/',
                'clipboard-managers-a-must-have-for-every-mac-user',
                'clipboard-managers-an-underrated-utility',
                'why-you-need-clipboard-manager'
              ]
          }],
        },
        }
      }
      },
      locales: {
        '/': {
          lang: 'en-US',
          description: 'Auto save copies, easy management, find in seconds. Simple, but powerful. CleanClip not only protects your valuable content from being lost, but also provides powerful content filtering, bookmarking, and organizing capabilities. It permeates every aspect of your Mac usage.',
          search: false
        },
        '/zh/': {
          lang: 'zh-CN',
          description: '专为 Mac 打造的沉浸式剪贴板管理工具，在你的输入位置快速查询、预览、使用剪贴板历史记录',
          search: false
        }
      }
}