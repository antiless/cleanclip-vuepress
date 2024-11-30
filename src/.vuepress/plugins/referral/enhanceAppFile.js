import Cookies from 'js-cookie'

export default ({ router }) => {
  // 确保代码只在客户端执行
  if (typeof window !== 'undefined') {
    // 处理 referrer URL，只保留域名和路径
    const cleanReferrerUrl = (url) => {
      try {
        if (!url) return ''
        const urlObj = new URL(url)
        return urlObj.origin + urlObj.pathname
      } catch (error) {
        console.error('Error cleaning referrer URL:', error)
        return ''
      }
    }

    // 检查是否为外部引荐
    const isExternalReferrer = (referrer) => {
      try {
        if (!referrer) return false
        const referrerUrl = new URL(referrer)
        const currentUrl = new URL(window.location.href)
        console.log("current referrerUrl hostname", referrerUrl.hostname)
        console.log("current currentUrl hostname", currentUrl.hostname)
        return referrerUrl.hostname !== currentUrl.hostname
      } catch (error) {
        console.error('Error checking referrer:', error)
        return false
      }
    }

    // 修改所有购买链接的函数
    const updatePurchaseLinks = () => {
      try {
        const urlParams = new URLSearchParams(window.location.search)
        const currentAff = urlParams.get('aff')
        const currentRef = document.referrer
        console.log("currentRef", currentRef)

        // 处理 aff 参数
        if (currentAff) {
          Cookies.set('aff', currentAff, { expires: 30 })
        }

        // 处理 ref 参数 - 如果是外部引荐，保存到 last_ref
        if (currentRef && isExternalReferrer(currentRef)) {
          Cookies.set('last_ref', cleanReferrerUrl(currentRef), { expires: 30 })
        }

        console.log("Checking for purchase links...")
        document.querySelectorAll('a').forEach(link => {
          // console.log("link", link.href)
          if (link.href && link.href.includes('clip-purchase.macaify.com')) {
            const url = new URL(link.href)
            
            // 添加 aff 参数
            const affValue = currentAff || Cookies.get('aff')
            if (affValue) {
              url.searchParams.set('checkout[custom][aff]', affValue)
            }
            
            // 添加 ref 参数：直接使用 last_ref
            const lastRef = Cookies.get('last_ref')
            if (lastRef) {
              url.searchParams.set('checkout[custom][ref]', lastRef)
            }
            
            link.href = url.toString()
            console.log("Updated link:", link.href)
          }
        })
      } catch (error) {
        console.error('Error processing referral params:', error)
      }
    }

    // 在路由变化时更新链接
    router.afterEach(() => {
      // 等待 DOM 更新完成
      setTimeout(updatePurchaseLinks, 100)
    })

    // 在页面加载完成时更新链接
    window.addEventListener('load', updatePurchaseLinks)

    // 监听 DOM 变化
    const observer = new MutationObserver((mutations) => {
      let shouldUpdate = false
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
          shouldUpdate = true
        }
      })
      if (shouldUpdate) {
        updatePurchaseLinks()
      }
    })

    // 开始观察 DOM 变化
    observer.observe(document.body, {
      childList: true,
      subtree: true
    })
  }
} 