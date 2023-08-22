module.exports = {
    title: 'CleanClip',
    description: 'Mac 上完美的白色家电，专注于沉浸式体验的极简剪贴板应用',
    themeConfig: {
        nav: [
          { text: '演示视频', link: 'https://www.bilibili.com/video/BV1594y1r7nF/?vd_source=49d41f6da6ceddbaeb919efc1f0d9f00' },
        //   { text: '早鸟 12 元限时优惠', link: 'https://macaify.lemonsqueezy.com/checkout/buy/ea407526-6a45-443e-8cc1-ba69ff760f54', target:'_blank' },
          { text: '国区用户进群获取五折优惠码', link: 'https://p.ipic.vip/m9duho.JPG', target:'_blank' },
          {
            text: '联系我们',
            ariaLabel: '反馈菜单',
            items: [
              { text: 'Twitter', link: 'https://twitter.com/s1ntone', target:'_blank' },
              { text: 'Weibo', link: 'https://weibo.com/u/2293237681', target:'_blank' },
              { text: '邮箱 📮', link: 'mailto:cleanclip.gokoding.com', target:'_blank'},
              { text: '微信群', link: 'https://p.ipic.vip/m9duho.JPG', target:'_blank'}
            ]
          }
        ],
        search: false,
        sidebar: [
          '/',
          '/text'
        ]
      }    
}