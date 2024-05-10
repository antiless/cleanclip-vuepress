const configs = require('./config/index.js')

const autometa_options = {
  site: {
    name: 'CleanClip - The cleanest Clipboard Manager on macOS, ever!'
  },
  twitter: true,
  canonical_base: 'https://cleanclip.cc'
};

module.exports = {
  description: 'Auto save copies, easy management, find in seconds. Simple, but powerful. CleanClip not only protects your valuable content from being lost, but also provides powerful content filtering, bookmarking, and organizing capabilities. It permeates every aspect of your Mac usage.',
  plugins: [
    [require('./plugins/autometa'), autometa_options],
    [require('./plugins/promotion')],
    [require('./plugins/localization')],
    // [
    //   'vuepress-plugin-sitemap',
    //   { hostname: 'https://cleanclip.cc' }
    // ]
  ],
  theme: 'antdocs',
  head: [
    ['link', { rel: 'stylesheet', href: '/css/tailwindcss.min.css' }],
    ["link", { rel: "icon", type: "image/ico", href: "/images/favicon.ico" }],
    ["link", { rel: "shortcut icon", type: "image/x-icon", href: "/images/favicon.ico" }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { property: 'og:title', content: 'CleanClip - The cleanest Clipboard Manager on macOS, ever!' }],
    ['meta', { property: 'og:description', content: 'An immersive clipboard management tool designed for Mac, allowing you to quickly search, preview, and use clipboard history at your input position.' }],
    ['meta', { property: 'og:image', content: 'https://cleanclip.cc/images/twitter_card2.webp' }],
    ['meta', { property: 'og:url', content: 'https://cleanclip.cc/' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'keywords', content: 'mac,clipboard,productivity,writing,tool,剪贴板,剪切板,效率,剪贴板管理器,best clipboard,best mac app,best productivity,clipboard management app,paste,maccy,clipy,iCopy,Copy\'em,pasta,raycast,top 10 clipboard,clean clip,clean clipboard,simple clipboard,mac clipboard manager,free,free cliboard manager,copyclip,app,application,mac app,clipboard app' }],
    ['meta', { name: "robots", content: "index,follow" }],
    ['meta', { name: "twitter:title", content: "CleanClip - The cleanest Clipboard Manager on macOS, ever!" }],
    ['meta', { name: "twitter:card", content: "summary_large_image" }],
    ['meta', { name: "twitter:site", content: "@s1ntone" }],
    ['meta', { name: "twitter:creator", content: "@s1ntone" }],
    ['meta', { name: "twitter:image", content: "https://cleanclip.cc/images/twitter_card2.webp" }],
    ['script', { src: '/js/base.js' }],
    // ['script', { src: '/js/enhanceApp.js' }],
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
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    title: "CleanClip",
    logo: '/images/logo.webp',
    latestDownloadUrl: 'https://cleanclip.cc/releases/download/v2.1.5/CleanClip.dmg',
    freeTrailUrl: 'https://macaify.lemonsqueezy.com/checkout/buy/176e339c-ac2b-40d7-b253-c10b3dfdb929',
    purchaseUrl: 'https://clip-purchase.macaify.com',
    smoothScroll: true,
    backToTop: false,
    search: false,
    discuss: true,
    alias: {
      '/affiliate': 'https://store.cleanclip.cc/affiliates',
      '/pricing': 'https://clip-purchase.macaify.com',
    },
    pageAnchor: {
      isDisabled: true,
    },
    locales: configs.theme_locale
  },
  locales: configs.locales
}