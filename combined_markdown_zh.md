# CleanClip 项目合成文件

本文件包含了 CleanClip 项目的所有 Markdown 文件和部分 JavaScript 配置文件的合并内容。CleanClip 是一个为 macOS 设计的剪贴板管理工具，具有自动保存、快速使用、多格式支持、智能列表等功能。

该合成文件用于作为 LLM（大型语言模型）的知识库语料，以便于模型理解和回答有关 CleanClip 功能、使用方法、配置等相关问题。文件包含了多语言网站内容、用户文档、功能说明等信息。

文件格式说明：
====== <文件名> ======
<文件内容>
------- <文件名> ------

以下是合并的文件内容：

====== src/zh/lizhi.md ======


<div class="lizhi text-center">

## 授权证明

**CleanClip 团队** 授权 **上海立七数码科技有限公司** 为大中国区官方合作伙伴，

并享有本公司旗下正版软件 **CleanClip** 在中国的销售资质。

该合作伙伴旗下店铺域名或名称中均包含商标 **数码荔枝** 或 **DIGITALYCHEE**，

对应店铺网址为 **digitalychee**.taobao.com / **lizhi.shop**。

请勿在其他未经授权的网站购买我们的软件。

我们不再为这样的顾客提供任何售后服务，

包括：密钥找回、版本更新、技术支持。

![alt text](/images/lizhi.png)

## AUTHORIZATION CERTIFICATE

We, the development team of **CleanClip**

authorizes **DIGITALYCHEE TECHNOLOGY CO, LTD** as our official partner in China,

and it owns the right to sell the copyrighted software of us on their stores:

**digitalychee**.taobao.com / **lizhi.shop**

Please don't purchase our product(s) from any other unauthorized websites.

Customers who purchase from them are not allowed to enjoy the official customer support,

including license retrieval, version update, tech assistance.

</div>------- src/zh/lizhi.md ------

====== src/zh/students.md ======


<Students/>------- src/zh/students.md ------

====== src/zh/index.md ======


<div class="segments">
  <TabFeatures-MainWindow class="tabfeatures"/>
  <TabFeatures-QuickMenu class="tabfeatures"/>
  <TabFeatures-PasteStack class="tabfeatures"/>

  <div class="usp">

  ## CleanClip 的独特之处 ✨
  #### CleanClip 与其他剪贴板软件有何不同？

  <usp-Usp/>

  </div>
  
  <div class="usecase">

  ## 👩‍💻 人们如何使用 CleanClip
  #### 不同职业的人是如何使用 CleanClip 提高生产力的？

  <usecase-UseCases/>

  </div>


  <div class="faq">
  <div>

  ## 🙋🏻 常见问题

::: details 我可以在哪里找到我的许可证？
> 在成功购买后,您会收到来自 LemonSqueezy 的电子邮件,其中包含收据和您的唯一许可证密钥。请务必同时检查您的垃圾邮件文件夹。如果您仍然找不到,请访问<a href="https://www.creem.io/portal/orders">许可证管理器</a>,然后按照说明进行操作。
:::

::: details 如何将我的许可证转移到其他 Mac 上？
> 您只需使用许可证密钥在新的 Mac 上激活应用程序即可。旧机器将自动被停用。如果您拥有多台 Mac 的许可证,您可以使用<a href="https://www.creem.io/portal/orders">许可证管理器</a>管理活动设备。
:::

::: details 支持的系统版本？
> 支持 macOS 12.0+。
:::

::: details 是否可以试用？
> 基础功能免费使用，不限制时间。所以你可以在不付费的情况下永久使用 CleanClip 的基础功能。
:::

::: details 不满意是否可以退款？
> No，我们提供了免费试用，你可以在试用满意后再付款。
:::

::: details 有无教育优惠？
  > 您可以使用您的教育邮箱发送电子邮件至<a href="MAILTO:EDU@CLEANCLIP.CC?SUBJECT=%5BEDU%20DISCOUNT%5D%20REQUESTING%20DISCOUNT%20CODE%20FOR%2030%25%20OFF%20CLEANCLIP%20LICENSE&BODY=REQUESTING%20DISCOUNT%20CODE%20FOR%2030%25%20OFF%20CLEANCLIP%20LICENSE">edu@cleanclip.cc</a>，以获取*7折教育折扣**！
:::

::: details 我已经付费买了其它剪贴板管理器，可以获得折扣吗？
  > 您可以使用您的电子邮件发送电子邮件给<a href="mailto:veteran@cleanclip.cc?subject=%5Bveteran%20discount%5D%20Requesting%20Discount%20Code%20for%2030%25%20Off%20CleanClip%20License&body=Hello%20CleanClips%2C%0A%0AI%20have%20previously%20purchased%20other%20clipboard%20management%20software%20and%20I%20am%20requesting%20a%2030%25%20discount%20on%20the%20CleanClip%20License.%0A%0AThe%20link%20to%20the%20one%20I%20used%3A%20%5Blink%5D%0A%0AHere%20is%20the%20purchase%20receipt%3A%20%5BScreenshots%5D">📮veteran@cleanclip.cc</a>获取**7折剪贴板专家折扣**！
:::
  </div>
  </div>

  <div class="encourage">
  </br>

  ## 🚀 提高 10 倍生产力并不容易，先提高 2 倍

  </br>
  </br>

  <div style="display: flex; justify-content: center;">
    <div style="text-align: center">
      <button type="button" class="ant-btn ant-btn-primary ant-btn-round ant-btn-lg" style="margin-top: 64px">
        <!-- <a href="https://macaify.lemonsqueezy.com/checkout/buy/69bd0056-9182-4030-9aaf-bd0604db751b?embed=1&media=0&logo=0&desc=0&discount=0&enabled=114543" class="lemonsqueezy-button"> -->
        <a :href="$site.themeConfig.freeTrailUrl">
                      免费获取 2 倍生产力
        </a>
      </button>
    </div>
  </div>

  </br>
  </br>
  </br>
  </div>

</div>

<NewFooter/>------- src/zh/index.md ------

====== src/zh/discounts.md ======

<Discounts/>------- src/zh/discounts.md ------

====== src/zh/download.md ======

<Download/>------- src/zh/download.md ------

====== src/zh/developer/README.md ======

# 开发者博客
------- src/zh/developer/README.md ------

====== src/zh/developer/swiftui-nswindow-inactive-firstmouse.md ======

# SwiftUI 点击未激活的 NSWindow 上的按钮时，默认让按钮处理鼠标事件，而不是窗口

NSView 重载 [acceptsFirstMouse](https://developer.apple.com/documentation/appkit/nsview/1483410-acceptsfirstmouse) 方法，始终返回 `true`。
SwiftUI 的视图里 overlay 添加这个重载的 View。

```swift
import SwiftUI
import Cocoa

// Just mouse accepter
class MyViewView : NSView {
    override func acceptsFirstMouse(for event: NSEvent?) -> Bool {
        return true
    }
}

// Representable wrapper (bridge to SwiftUI)
struct AcceptingFirstMouse : NSViewRepresentable {
    func makeNSView(context: NSViewRepresentableContext<AcceptingFirstMouse>) -> MyViewView {
        return MyViewView()
    }

    func updateNSView(_ nsView: MyViewView, context: NSViewRepresentableContext<AcceptingFirstMouse>) {
        nsView.setNeedsDisplay(nsView.bounds)
    }

    typealias NSViewType = MyViewView
}

// Usage (somewhere in your SwiftUI view stack)
Text("Click me")
  .padding(20)
  .background(Color.yellow)
  .overlay(AcceptingFirstMouse()) // must be on top (no confuse, it is transparent)
  .onTapGesture {
      print("Label tapped")
  }
```


---

作者：Sintone Li

文章地址：{{ $page.frontmatter.canonicalUrl }}

------- src/zh/developer/swiftui-nswindow-inactive-firstmouse.md ------

====== src/zh/developer/web-axios-CROS.md ======

# 简单解决 Web axios 网络请求跨域错误

不想折腾的办法是：

服务端加上 response header：
```js
headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT, DELETE",
    "Access-Control-Max-Age": "86400"
  }
```

注意 axios 请求时会先发送 OPTIONS 预请求，以确认是否支持该请求。所以也要对 OPTIONS 请求也返回正确的应答。



---

作者：Sintone Li

文章地址：{{ $page.frontmatter.canonicalUrl }}
------- src/zh/developer/web-axios-CROS.md ------

====== src/zh/developer/cloudflare-worker-gmail-resend-enterprise-email/index.md ======


# 域名搁着别浪费，Cloudflare + Gmail + Resend 十分钟轻松拥有免费的企业邮箱

现在的独立开发者们基本上是人手 N 个域名了，不过企业邮箱可能不是人人都有。

这里和大家分享一下我个人定制**完全免费的企业邮箱**的方案：**「Cloudflare + Gmail + Resend」**。

首先说下**企业邮箱的优点**：

- 对用户来说，企业邮箱显得更专业，更容易被信任。
- 利用 catch-all 功能，相当于拥有了无数个邮箱，可以方便我们注册各种服务。

注意事项：
- 如果您只需要进行邮件的收发，而不涉及群发等操作，那么这种方案可以说是非常简单且无成本的选择。

## 示意图
![how to get free enterprise email using cloudflare-worker + gmail + resend](./concept.png)

## 0. 前提
你拥有一个域名，且域名的 dns 在 Cloudflare 管理。（当然任何其它拥有电子邮件路由功能的服务都可以，这里只介绍 Cloudflare）

## 1. 使用 Cloudflare 接收邮件，设置邮件转发到 Gmail
> Cloudflare 是知名的网络安全公司，独立开发界最伟大的慈善家。如果你是刚起步的独立开发者，它的后台服务提供的免费额度可以让你零成本起步。

## 1.1 进入域名下的「电子邮件路由」
![cloudflare email router](./cloudflare-email-router.png)

## 1.2 进入目标规则标签，开启 Catch-All，点击编辑
![cloudflare email router rules](./cloudflare-email-router-rules.png)

## 1.3 设置转发操作，将所有邮件转发到 Gmail 邮箱
添加目标位置时会发送一封确认邮件到邮箱，邮件里点确认即可。

![cloudflare email router catch all](./cloudflare-email-router-catch-all.png)

> 注意 Gmail 有一个小技巧是你可以在你的账号后面写上「+来源」，比如我这里写的是 auv1107+cleanclip@gmail，所有的邮件仍然会发送到 auv1107@gmail.com 中。如果你有多个域名就会非常方便，你可以根据这个字段在 Gmail 中筛选邮件。


🎉🎉🎉 好了，到这里**邮件的接收**就搞定了。
你可以发送邮件到你域名下的任意账户上试试。

## 2. 获取 Resend API Key

> Resend 是邮件发送服务，提供发送邮件 API。免费用户支持 1 个自定义域名，发送额度每天 100，每月 3000。
> ::: details 查看免费计划
> ![Resend plan send email freely](./resend-plan.png))
> :::

## 2.1 在 API Keys 标签下申请新的 API Key
![resend create api key](./resend-create-api-key.png)

## 2.2 去 Settings 查看 smtp 设置
![resed smtp config](./resed-smtp-config.png)

## 3. Gmail 添加使用 Resend 服务的邮箱


## 3.1 找到 Settings -> Accounts and Import -> 在 Send mail as 中点击 Add another email address：
![gmail add send email account](./gmail-add-send-email-account.png)

## 3.2 填入名字和用于发送邮件的账号
填写信息，点下一步。
![gmail add send email account step1](./gmail-add-send-email-account-step1.png)

## 3.3 填入 Resend smtp 服务信息
Username 固定填 resend，Password 填上面获取的 API Key，点 Add Account。
![gmail add send email account step2](./gmail-add-send-email-account-step2.png)

## 3.4 你会收到来自 Gmail 的确认邮件，点击 confirm 就好
![gmail add send email account step3](./gmail-add-send-email-account-step3.png)

## 大功告成！你的免费企业邮箱已经可以使用啦！🎉🎉🎉 
现在，无论你是在手机还是电脑，都可以使用自定义邮箱发送邮箱啦！
![gmail add send email account step4 webpage](./gmail-add-send-email-account-step4.png)


---


作者：Sintone Li

文章地址：{{ $page.frontmatter.canonicalUrl }}

------- src/zh/developer/cloudflare-worker-gmail-resend-enterprise-email/index.md ------

====== src/zh/developer/cloudflare-worker-implements-purchasing-power-parity/README.md ======


# 借助 Cloudflare Worker 一个文件快速为你的出海产品实现购买力平价能力（Purchasing Power Parity）

<img src="/images/headers/ppp.png" width="80%" style="max-width: unset;" class="mt-8"/>

> **由于各个国家、地区购买力不一，出海产品需要为不同购买力的地区设定不同的价格。**

实现购买力平价**需要两个数据：**

1. 用户的位置数据
2. 一份各国家的购买力水平清单

**逻辑就很简单了：**
位置数据 -> 购买力水平 -> 匹配相应价格信息并应用

**那么这两个数据怎么获取呢？**

## 位置数据
Cloudflare Worker 的 **request 参数**带了非常详细的**位置数据**，这让我们不需要再使用第三方服务就能方便地获取位置：
<img alt="Cloudflare Worker request 字段" src="./cloudflare-request-location-field.png" width="300px"/>

它包括了经纬度、地区代码等，我们的颗粒度精确到国家，这里用**国家代码 country 字段**。

## 购买力水平数据
购买力水平等级可以在这个 gist 下载：[各国家购买力水平清单](https://gist.github.com/auv1107/999c97a62338833f93b6c3cc5ae08ce8)

## 逻辑和实现代码
大致逻辑是：
1. 从 Worker 的 request 参数**获取国家代码**
2. 使用国家代码从购买能力列表**获取购买力水平**
3. 根据水平匹配相应的**折扣信息并应用**

> 我在 [CleanClip](https://cleanclip.cc)(Mac 上的剪贴板工具) 中简单起见，直接为不同国家应用不同的折扣。
> LemonSqueezy 可以这样直接应用折扣码：PRODUCT_URL + "?checkout%5Bdiscount_code%5D=" + discountCode

**一些细节：**
- 折扣信息保存在环境变量里，方便随时修改
- Access-Control-Max-Age 缓存设为 0，可方便随时改动，即时生效。（不设置会导致上次结果保留过久，实践大概是 3、4 天左右才生效，设为 0 即时生效）
- 可以将这个 worker 连接到其它 worker 下，价格信息在这里统一维护，方便多页面、业务使用

```js
import ppp from "./pppdata.js";

// map 一下购买力数据的列表，方便搜索
const flatppp = ppp.flatMap(category => category.countries.map( countryInfo => {
  return {
    range: category.range,
    countryCode: countryInfo.country,
    countryName: countryInfo.countryName
  }
}))

// 在购买力水平列表中找到对应国家
function findCountry(countryCode) {
  return flatppp.find(deal => deal.countryCode == countryCode)
}

// 根据购买力水平，在环境变量里找到配置的折扣信息
function getDiscount(env, range) {
  switch(range) {
    case "0.0-0.1": return { code: env.level0_1 ?? "", discount: parseInt(env.level0_1_discount ?? "0") ?? 0 }
    case "0.1-0.2": return { code: env.level1_2 ?? "", discount: parseInt(env.level1_2_discount ?? "0") ?? 0 }
    case "0.2-0.3": return { code: env.level2_3 ?? "", discount: parseInt(env.level2_3_discount ?? "0") ?? 0 }
    case "0.3-0.4": return { code: env.level3_4 ?? "", discount: parseInt(env.level3_4_discount ?? "0") ?? 0 }
    case "0.4-0.5": return { code: env.level4_5 ?? "", discount: parseInt(env.level4_5_discount ?? "0") ?? 0 }
    case "0.5-0.6": return { code: env.level5_6 ?? "", discount: parseInt(env.level5_6_discount ?? "0") ?? 0 }
    case "0.6-0.7": return { code: env.level6_7 ?? "", discount: parseInt(env.level6_7_discount ?? "0") ?? 0 }
    case "0.7-0.8": return { code: env.level7_8 ?? "", discount: parseInt(env.level7_8_discount ?? "0") ?? 0 }
    case "0.8-0.9": return { code: env.level8_9 ?? "", discount: parseInt(env.level8_9_discount ?? "0") ?? 0 }
    case "0.9-1.0": return { code: env.level9_10 ?? "", discount: parseInt(env.level9_10_discount ?? "0") ?? 0 }
    case "1.0-1.1": return { code: env.level10_11 ?? "", discount: parseInt(env.level10_11_discount ?? "0") ?? 0 }
    case "1.1-1.2": return { code: env.level11_12 ?? "", discount: parseInt(env.level11_12_discount ?? "0") ?? 0 }
    case "1.2-1.3": return { code: env.level12_13 ?? "", discount: parseInt(env.level12_13_discount ?? "0") ?? 0 }
    case "1.3-1.4": return { code: env.level13_14 ?? "", discount: parseInt(env.level13_14_discount ?? "0") ?? 0 }
    default: return {code: "", discount: 0}
  }
}

// 合并国家购买力信息+折扣信息
function mergeDiscountResult(countryPPP, discount) {
  return JSON.stringify({
    range: countryPPP.range,
    countryCode: countryPPP.countryCode,
    countryName: countryPPP.countryName,
    discountCode: discount.code,
    discount: discount.discount
  });
}

// 构造 response
function responseFor(result, code) {
  return new Response(result, {
    status: code,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT, DELETE",
      "Access-Control-Max-Age": "0"
    }
  });
}

// ✨ 核心代码
export default {
  async fetch(request, env, ctx) {
    // 1. 获取国家编码
    const countryCode = request.cf.country

    // 2. 在购买力列表中找到该国家
    let countryPPP = findCountry(countryCode)

    // 3. 通过该国家购买力获取对应优惠信息
    let discount = getDiscount(env, countryPPP.range)

    if (countryPPP && discount) {
      // 构造结果
      let result = mergeDiscountResult(countryPPP, discount)
      // 4. 可以直接返回结果供其它服务调用
      return responseFor(result, 200)
    } else {
      return responseFor("Error", 500)
    }

    // 5. 或者直接 301 重定向到指定优惠链接
    // let url = env.TARGET_DOMAIN
    // if (discountCode !== undefined && discountCode.length > 0) {
    //   url = env.TARGET_DOMAIN + "?checkout%5Bdiscount_code%5D=" + discountCode
    // }
    // var response = Response.redirect(url, 301);
  },
};
```


---

作者：Sintone Li

文章地址：{{ $page.frontmatter.canonicalUrl }}
------- src/zh/developer/cloudflare-worker-implements-purchasing-power-parity/README.md ------

====== src/zh/articles/why-you-need-clipboard-manager.md ======


# 为什么你需要一款剪贴板管理软件

## 为什么剪贴板内容重要
我们每天都在使用剪贴板复制粘贴，但很少意识到，那些文字和图片都包含着重要的思路火花。它们来自灵感一现，却可能在计算机关闭时就消失。

## 剪贴板管理器能帮助你做什么
### 无感记录
一款出色的剪贴板管理器，可以自动保存这些容易遗忘的创意碎片，无需你刻意记录。例如，当你在浏览网页时，看到某个数据或设计灵感，三两下就可以复制保存。后续即使忘记出处，该想法也不会就此丢失。

在工作时，你也可以将需要的文件路径、会议代码等暂存于剪贴板，无需重复操作就可以快速取用。这样你可以保留工作过程中的重要碎片思路，并随时将它们融入到新的项目中去。

### 没有弄乱笔记软件的心理压力
它省去打开其他应用新建笔记的繁琐步骤，也不会因存档大量碎片内容而增加管理负担。这样一款工具，将持续留存每一处习惯遗忘的闪念火花，让你随时重新点燃创造的火种。

### 随时取用
拥有一款剪贴板管理器，意味着你可以建立自己的知识宝库，更高效地管理数据、获取灵感、完成工作。它会成为你最实用的创意助手和工作伙伴。


---

作者：Sintone Li

文章地址：{{ $page.frontmatter.canonicalUrl }}
------- src/zh/articles/why-you-need-clipboard-manager.md ------

====== src/zh/articles/advanced-mac-clipboard-management-tips.md ======


# Mac 剪贴板进阶：3 个实用技巧让你的复制粘贴效率翻倍

嘿，Mac 用户们！你们是不是经常被系统默认的单条剪贴板记录搞得焦头烂额？别担心，今天我们就来一起探索如何解锁 Mac 剪贴板的无限潜能！

## 访达里的隐藏功能：一键查看当前剪贴板内容

首先，让我们来揭秘一个鲜为人知的小技巧。在访达里，其实藏着一个简单但超实用的剪贴板查看器！

操作超简单：
1. 打开访达
2. 点击顶部菜单栏的"编辑"
3. 选择"显示剪贴板"

![](/images/finder_clipboard.png)

瞬间，你就能看到当前剪贴板里的内容了！虽然这个功能很基础，只能查看不能编辑，但它绝对是避免粘贴错误的救命稻草。

## 剪贴板管理神器大PK：Maccy vs CleanClip

但是，如果你想要更强大的剪贴板管理功能，那就得借助一些第三方应用了。让我们来看看两款超赞的工具！

### Maccy：免费轻量的文本剪贴板管理器

Maccy 是一款免费又轻量的剪贴板管理器，特别适合处理文本内容。它默认可以存储 200 条复制记录，简直就是记忆力加强版！

使用步骤：
1. 从 GitHub 下载 Maccy，拖进应用程序文件夹
2. 打开 Maccy，进入偏好设置
3. 勾选"登录时启动"和"自动粘贴"等选项

![](/images/maccy_prefs.png)

4. 点击菜单栏的 Maccy 图标，就能看到你的复制历史啦！

![](/images/maccy_history.png)

Maccy 还有搜索功能，让你瞬间找到需要的内容。而且它的设置选项超多，比如可以设置忽略某些应用的复制操作，或者在退出时清空历史记录，简直是隐私保护小能手！

### CleanClip：全能型剪贴板管理器，让复制粘贴更智能

如果你想要更专业的剪贴板管理体验，那 CleanClip 绝对是你的不二之选！

使用方法：
1. 访问 [https://cleanclip.cc/](https://cleanclip.cc/) 下载安装 CleanClip
2. 首次启动时，按照引导设置个性化选项
3. 点击菜单栏的 CleanClip 图标，瞬间进入剪贴板管理的新世界！

<video autoplay muted loop>
    <source src="/videos/quickuse.mp4" type="video/mp4">
    <iframe src="/videos/quickuse.mp4" scrolling="no" border="0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</video>

CleanClip 的界面设计简洁直观，让你一眼就能看到所有剪贴板历史。它的搜索功能超强大，还能根据当前使用的应用自动筛选相关的复制记录，简直是效率狂魔的最爱！

CleanClip 最厉害的是它的"收藏列表"功能。你可以创建多个收藏列表，把重要的剪贴板内容分类保存，再也不用担心找不到之前复制的重要信息了！

![](/images/cleanclip_lists.png)

而且，CleanClip 在隐私保护方面也做得很棒。你可以设置排除特定应用，甚至设置自动清除时间，让你的隐私安全无忧！

## 总之，告别单调剪贴板，拥抱高效 Mac 生活

有了这些神器加持，你的 Mac 剪贴板管理技能绝对能升级到新境界！无论你是选择轻量级的 Maccy，还是功能全面的 CleanClip，都能让你的复制粘贴效率飞速提升。

快去试试吧，相信你会爱上这些强大的剪贴板管理工具的！让我们一起告别单调的系统剪贴板，拥抱更高效的 Mac 使用体验吧!------- src/zh/articles/advanced-mac-clipboard-management-tips.md ------

====== src/zh/articles/README.md ======

# 文章

帮助您理解剪贴板管理器所需的所有文章。------- src/zh/articles/README.md ------

====== src/zh/articles/clipboard-managers-an-underrated-utility.md ======

# 剪贴板管理器：一个被低估的实用工具

我们都曾经这样做过——你复制一些文本或图像以便粘贴到其他地方，结果在粘贴之前不小心又复制了一次。

![Alt text](https://media.giphy.com/media/NpL4D3Oc2bJUMAXF9P/giphy.gif)

剪贴板管理器通过保存剪贴板历史记录来优雅地解决了这个问题：

![剪贴板管理器是如何解决这个问题的](https://media.giphy.com/media/aiHezEAxtJjI5VZdLH/giphy.gif)

1. 它们允许你访问之前复制过的任何内容。它们还提供其他很多好处。

2. 剪贴板管理器的一个关键优势是它们将复制和粘贴解耦。你可以在粘贴到需要的地方之前从多个来源复制片段。不再需要在应用程序和窗口之间来回切换。只需复制、复制、复制，然后粘贴、粘贴、粘贴。这是一种更高效的工作流程。

3. 剪贴板管理器还可以快速访问文本片段，特别是频繁使用的项目，如密码和联系信息。与繁琐的电子表格不同，你需要的一切都安全地存储在一个地方，方便在登录网站和服务时轻松访问。不再需要在笔记中寻找那个促销代码。

当然，对于高度敏感的凭据，你应该使用专用的密码管理器。但对于低风险的登录，剪贴板管理器是一个方便的选择，可以让你掌控密码。

像许多高级用户工具一样，剪贴板管理器是一个优雅简单的解决方案，解决了一个令人讨厌的问题。一旦成为你的工作流程的一部分，当它们不可用时，你会想念它们。而且它们是免费的！

**这就是剪贴板管理器的优点。**

![哇，剪贴板管理器太棒了](https://media.giphy.com/media/rVVFWyTINqG7C/giphy.gif)

对于Mac用户来说，CleanClip是一个很好的剪贴板管理器。它拥有简单而简约的设计，提供强大的剪贴板历史记录功能，没有不必要的臃肿。你可以[在这里查看CleanClip](https://cleanclip.cc/)。


---

作者：Sintone Li

文章地址：{{ $page.frontmatter.canonicalUrl }}
------- src/zh/articles/clipboard-managers-an-underrated-utility.md ------

====== src/zh/articles/clipboard-managers-a-must-have-for-every-mac-user.md ======

# 剪贴板管理器：每个 Mac 用户必备的工具

听好了，朋友们。今天我有一些重要的东西要与大家分享。这是关于**剪贴板管理器**的——那些方便的小工具，可以将您复制或剪切的所有内容保存在易于访问的历史记录中。

现在我知道你们在想什么：“剪贴板管理器？那些是给超级书呆子🤓️和高效率极客😎的！”
![剪贴板管理器？那些是给超级书呆子🤓️和高效率极客😎的！](https://media.giphy.com/media/eU2sRBEme4GIM/giphy.gif)

好吧，伙计们，慢下来。我要告诉你们，**剪贴板管理器实际上是你从未意识到需要的最有用的应用之一**。

## 基础知识

让我们从基础知识开始。剪贴板管理器为您提供：

- **无限的剪贴板历史记录** - 可以存储任意数量的剪贴内容，而不仅仅是一个
- **即时访问** - 通过点击或键盘快捷键检索任何剪贴内容
- **跨设备同步** - 在iPhone上复制，在Mac上粘贴 - 它就是这么简单

![](https://media.giphy.com/media/da75JuW2HHuBNqOHHE/giphy-downsized.gif)

## 为什么你需要一个剪贴板管理器

以下是今天获取剪贴板管理器的5个绝佳理由：

### 1. 不再丢失剪贴内容

曾经复制了某些内容，切换应用程序，然后*噗*它就消失了？有了剪贴板管理器，您复制的任何内容都会永久保存在历史记录中。不再疯狂搜索那些丢失的文本或图像。

### 2. 复制和粘贴的超能力

厌倦了繁琐的复制粘贴？剪贴板工具通过提供剪贴板预览、收藏夹、搜索、编辑和拖放粘贴等功能，让您的剪贴板变得更强大。您将像老板一样复制和粘贴。

### 3. 专注工作流程

保持“状态”而不被之前复制的剪贴内容打断。您的剪贴板历史记录始终在手边，因此您可以在几秒钟内获取剪贴内容并继续工作。啊...高效率的幸福。

### 4. 编码和写作的魔力

开发人员、作家和编辑们，欢呼吧！许多剪贴板管理器都为您提供了专门的功能，如模板、代码/文本格式化和顺序粘贴。将您的工作提升到一个新的水平。

### 5. 它只是更好

一旦您尝试了专用的剪贴板工具，您将永远不会再回到有限的默认剪贴板。它以许多方式改善了您的工作流程，您会想知道自己以前是如何没有它而生存的。

![剪贴板管理器刚刚开启了我的思维](https://media.giphy.com/media/SJX3gbZ2dbaEhU92Pu/giphy.gif)

## 看看剪贴板管理器有多酷！

如果我已经说服您获取一个剪贴板管理器，请查看[CleanClip](https://cleanclip.cc)。这是一个全新的Mac剪贴板工具，简单而快速。

![我需要立即使用剪贴板管理器](https://media.giphy.com/media/MXJQinVv3o4NwcaRhA/giphy.gif)

去试试CleanClip，将您的剪贴板提升到一个新的水平。未来的自己会感谢您的复制粘贴！


---

作者：Sintone Li

文章地址：{{ $page.frontmatter.canonicalUrl }}
------- src/zh/articles/clipboard-managers-a-must-have-for-every-mac-user.md ------

====== src/zh/articles/Why-not-all-clipboard-managers-support-Final-Cut-Pro-copies/index.md ======


# 答用户问：为什么不是所有的剪贴板 App 都支持记录 Final Cut Pro 的复制项?

Final Cut Pro从来没有一个有用的书签功能，所以一个带有书签功能的剪贴板工具将是Final Cut Pro的绝佳伴侣。
![Final Cur Pro与免费剪贴板管理工具 CleanClip 合作](./cooperate-with-final-cut-pro.png)

然而，并不是所有的剪贴板管理工具都支持书签功能，也不是所有工具都支持记录 Final Cut Pro 的复制数据。

## **用户问:**

> Does it (CleanClip) log copied items from pro apps like Final Cut Pro? I use Paste to quickly paste clips and clip effects, and I know not all clipboard managers log these kind of non-text non-image clipboard items. 
Out of curiosity, what extra steps were required to do this (asking as a non-developer)? I wonder why not all clipboard managers support this.

> 它 ([CleanClip](https://cleanclip.cc)) 是否记录来自专业应用程序（如Final Cut Pro）的复制项目？我使用Paste快速粘贴剪辑和剪辑效果，我知道并非所有剪贴板管理器都记录这些非文本非图像的剪贴板项目。
出于好奇，需要额外的步骤来实现这一点吗（作为非开发人员提问）？我想知道为什么并非所有剪贴板管理器都支持这个功能。

https://www.reddit.com/r/macapps/comments/193ds1j/comment/khe5xjx/?utm_source=share&utm_medium=web2x&context=3

## **回答：**

我简单解释一下。

剪贴板工作流程很简单，A App 把自己的东西放到剪贴板里，B 从剪贴板里取出来放到自己里面。

这里面就涉及一个问题，**B 怎么知道 A 放的是啥，该怎么用这个数据呢？**
Mac 约定，每个放到剪贴板里的内容都要有至少两个东西：1. **类型名**，用来区分这是复制的啥类型。2. **复制的内容本身**。

这样 B 取数据时就会先问一下剪贴板：这是啥数据呀？剪贴板说是**图片（类型名）**。B 会再说，那你把数据给我吧。然后 B 拿到数据后就会用**解析图片的方式解析这段数据**，然后再去显示。
其它类型的数据都是这个道理。

------
**这就要再讲讲公有剪贴板类型和私有剪贴板类型。**

**公有类型：**
最基本的文字、图片、文件，它们是公有类型。因为这是 Mac 系统定义的，所有 Mac 上的 app 都知道它们的类型名是啥，数据结构啥样。

**私有类型：**
另外有一些，就像 FCP 这样子的app，它们想要复制的内容很复杂，每按一次 CMD+C，可能都要在剪贴板里存储这些数据：3 段视频，每一段的时长，复制时它们在时间轴上的位置，层级关系等等。
这时候，Mac支持的那些公有类型就不够用了，那怎么办呢？FCP 说，我新建一个类型就叫 “fcp”，数据结构我自己定。
这样，在 FCP App 的内部，他就能自由地复制、粘贴 “fcp” 类型的数据了。因为 FCP 自己知道这个类型名叫“fcp”的数据，它应该怎么解析。

**某个 app 自己定义，其他 app 不知道的，这是私有类型。**

事实上，每个 app 都能看到有这么一个类型是 ”fcp“ 的数据，只是不知道怎么解析而已。

-------
**能不能解析私有数据有什么区别？**


一个很重要的点是，剪贴板 App 只需要知道有啥类型的数据，而不一定要解析数据。

**知道有啥类型的数据，能帮助我们在 剪贴板 App 的 界面上标记出这个复制项的类型**：文字类型、图片类型、fcp 类型。

**如果能解析数据，能帮助我们把界面变得更友好**，我们就能在剪贴板 App 的界面上标记出这段数据的大致内容：
- 如果是文字，就解析出前几个字符显示。
- 如果是图片，就解析出然后显示个预览图、图片尺寸。
- 如果是 fcp，我们解析不了。因此界面上除了“fcp”字符外，我们没法让这段数据更友好。
![image](https://github.com/auv1107/blug/assets/2681464/e0f8786a-7078-449d-83b4-21d080853f28)

------

**为什么有些剪贴板支持有些不支持？**

理由可能是多种多样的。根据上面的说明，我们可以知道一个可能的原因：

**1. 这些私有数据没有数据特征，只知道类型名，对用户体验不友好**

比如我在 FCP 中复制了十个内容，但因为不知道数据内容。所以就算支持了，用户也区分不出来这十段哪个是哪个。对使用没有意义。

**2. 产品定位限制**

有的 app 为了某些用户需求，设置了类型白名单功能。比如 maccy。它允许用户选择允许监听的类型白名单。

因为私有类型是无限多的，我们不可能把它穷举出来。无法穷举，就无法让所有的私有类型都被允许。因此注定会屏蔽大量的私有数据。

**3. 小众需求，团队选择不支持**

相较于那些公有类型，这些私有类型的需求都属于小众需求。影响的用户群体小，团队有可能主动选择不支持。

不过我认为在剪贴板在剪辑领域里有非常大的可挖掘空间，我打算支持，有机会的话希望能和你们多沟通，挖掘挖掘使用需求。

**4. 开发者失误**

这是很有可能的，如果没有足够的用户群体反映问题，开发者对剪贴版的开发经验又不够的话。有概率不会注意到这个问题。 


我能想到大概就这些吧：**要么是开发团队选择不支持，要么是因为经验没有意识到有这类问题。**

我本来想简单地解释一下，但是不小心说了太多哈哈。希望这些话满足了你的好奇心。


---

作者：Sintone Li

文章地址：{{ $page.frontmatter.canonicalUrl }}

------- src/zh/articles/Why-not-all-clipboard-managers-support-Final-Cut-Pro-copies/index.md ------

====== src/zh/docs/changelog.md ======

# 更新日志

## 2.2.0-beta.1
日期: 2024年8月10日

**更新内容**
- 优化整体视觉框架
- 修复大量bug
- 优化用户体验
- 支持暗黑模式适配🌟
- 支持右键菜单
- 支持右键分割复制🌟
- 预览可固定到桌面🌟
- 全面暗黑模式适配
- 可选声音支持
- 快捷键直接打开分组🌟
- 重写设置页面
- 支持sf symbols显示🌟
- 快速菜单支持查看所有列表🌟
- 快速菜单中添加分组导航快捷键
- 支持选择弹出式备选位置
- 粘贴队列支持多种顺序
- 粘贴后支持文本输入🌟
- 可选beta版本更新

[Download](https://cleanclip.cc/releases/download/v2.2.0-beta.1/CleanClip.dmg)

# 更新日志
## 2.1.5
日期: 2024.5.10

**更新内容**
- 修复粘贴队列重复内容无效的问题

[Download](https://cleanclip.cc/releases/download/v2.1.5/CleanClip.dmg)

## 2.1.4
Date: May 8, 2024

**Updates**
- 支持日语、希腊语
- 修复粘贴队列错误

[Download](https://cleanclip.cc/releases/download/v2.1.4/CleanClip.dmg)

## 2.1.3
日期: 2024.3.6

**更新内容**
- 修复数据重复迁移问题

[Download](https://cleanclip.cc/releases/download/v2.1.3/CleanClip.dmg)

## 2.1.2
日期: 2024.3.5

**更新内容**
- 修复新手引导视频不能播放的问题
- 修复中文文案显示问题

[Download](https://cleanclip.cc/releases/download/v2.1.2/CleanClip.dmg)

## 2.1.1
日期: 2024.3.4

**更新内容**
- 强化 FinalCutPro 字段解析能力
- 优化存储结构，加快复制效率
- 优化 web 页面快捷窗口位置
- 优化内存占用

[Download](https://cleanclip.cc/releases/download/v2.1.1/CleanClip.dmg)

## 2.1.0
日期: 2024.2.19

**更新内容**
- 支持按图片内文字搜索（ocr）
- 支持更多语言 Slovak/French/Dutch

[Download](https://cleanclip.cc/releases/download/v2.1.0/CleanClip.dmg)

## 2.0.3
日期: 2024年2月9日

**更新内容**
- 修复暗黑模式问题

[Download](https://cleanclip.cc/releases/download/v2.0.3/CleanClip.dmg)

## 2.0.2
日期: 2024年2月7日

**更新内容**
- 快捷菜单增加快捷操作栏
- 快捷菜单增加更多个性化设置
- 修复一些bug

[Download](https://cleanclip.cc/releases/download/v2.0.2/CleanClip.dmg)

## 2.0.1
日期: 2024年1月23日

**更新内容**
- 打开 app 时不展示主界面

[Download](https://cleanclip.cc/releases/download/v2.0.1/CleanClip.dmg)

## 2.0.0
日期: 2024年1月21日

**更新内容**
- 添加新的桌面固定窗口
- 支持批量管理
- 支持自动跟随前台应用
- 支持收藏列表、智能列表，支持多种过滤器
- 支持拖拽操作
- 支持 fcp、sketch 等的复制项

[Download](https://cleanclip.cc/releases/download/v2.0.0/CleanClip.dmg)

## 1.5.12
日期: 2024年1月9日

**更新内容**
- 修复纯文本/原始格式粘贴的逻辑错误

[Download](https://cleanclip.cc/releases/download/v1.5.12/CleanClip.dmg)

## 1.5.11
日期: 2024年1月9日

**更新内容**
- 添加快速入门指南
- 修复不能pin的问题
- 修复粘贴格式菜单的位置问题
- 优化粘贴格式菜单细节

[Download](https://cleanclip.cc/releases/download/v1.5.11/CleanClip.dmg)

## 1.5.10
日期: 2024年1月7日

**更新内容**
- 支持配置弹窗位置
- 修复直接安装 1.5.7-1.5.9 版本无法获取复制内容的问题

[Download](https://cleanclip.cc/releases/download/v1.5.10/CleanClip.dmg)

## 1.5.9
日期: 2023.12.30

**更新内容**
- 支持编辑历史记录
- 支持把记录拖拽到其它 App
- 支持把图片粘贴成文件
- 粘贴队列支持拖拽排序

## 1.5.8
日期：2023年12月28日

**更新**
- 删除从动物园跑出来的猴子

## 1.5.7
日期: 2023.12.27

更新内容:
- 修复长文本预览卡顿问题
- 修复一些闪退问题

## 1.5.4
日期: 2023.12.18

**更新内容**
- 支持空格预览格式化后的内容

## 1.5.3
日期: 2023.12.18

**更新内容**
- 添加enter长按
- 粘贴队列支持粘贴后自动按下按键

## 1.5.2
日期: 2023.12.16

**更新内容**
- 修复格式化粘贴的焦点问题

## 1.5.1
日期: 2023.12.16

**更新内容**
- 支持清除全部历史记录
- 支持长按数字格式化文本

## 1.5.0
日期: 2023.12.14

**更新内容**
- 支持纯文本粘贴
- 支持粘贴内容格式化
- 支持隐藏菜单栏图标
- 菜单栏支持显示最近的复制项
- 粘贴队列支持点击 # 跳到指定的项
- 图标微调
- 修复了一些 bug

## 1.4.2
日期: 2023.12.7

**更新内容**
- 支持修改拆分复制快捷键

## 1.4.1
日期: 2023.12.7

**更新内容**
- 更新搜索结果过度动画
- 适配夜间模式
- 支持 CMD+SHIFT+C 自动拆分多行复制

## 1.4.0
日期: 2023.12.6

**更新内容**
- 支持固定标签
- 支持删除内容
- 支持中文、数字搜索
- 优化搜索速度
- 修复了一些 bug

## 1.3.0
日期: 2023.11.9

**更新内容**
- 新增粘贴队列
- 修复一些 bug

## 1.2.2
日期: 2023.9.22

**更新内容**
- 更新图标
- 添加设置项：最大保存条数/忽略App

## 1.2.1
日期：2023.9.14

**更新内容**
- 优化在浏览器中的弹出位置

## 1.2.0
日期：2023.9.4

**更新内容**
- 支持图片、文件记录📖
- 支持历史记录预览👀
- 支持 「fn+数字键」 搜索数字🔢
- 添加用户手册📗

![](/images/roadmap/phase3.webp)

## 1.1.0
日期：2023.8.27

**更新内容**
- 支持查询更多历史记录📖
- 新增搜索功能🔍
- 添加音效🎵
- 鼠标 hover 时展示详情📗

Bug修复：
- 激活码窗口输入格式检查
- 解决开机无网络情况下弹窗问题
- notion 多段文本复制问题

![](/images/roadmap/snap2.png)

## 1.0.2
日期：2023.8.23

**更新内容**
- 购买地址 404 问题

## 1.0.1
日期：2023.8.22

**更新内容：**
- 支持暗黑模式
- 支持自动更新
- 调整 UI 及文案
- 修复了长文本粘贴不全的 bug

## 1.0.0
日期：2023.8.19

**更新内容：**
- 💡 「 ⌘ + ; 」 呼出快捷菜单
- ⌨️ 呼出位置跟随输入光标
- ❤️ 沉浸式交互风格
- 支持订阅激活码

![](/images/roadmap/snap1.png)------- src/zh/docs/changelog.md ------

====== src/zh/docs/privacy.md ======

# CleanClip 隐私政策
欢迎您访问我们的产品。 CleanClip （包括App等产品提供的服务，以下简称“产品和服务”）是由 Nanjing Zuimeijia Technology Co., Ltd. （以下简称“我们”）开发并运营的。 确保用户的数据安全和隐私保护是我们的首要任务， 本隐私政策载明了您访问和使用我们的产品和服务时所收集的数据及其处理方式。

请您在继续使用我们的产品前务必认真仔细阅读并确认充分理解本隐私政策全部规则和要点， 一旦您选择使用，即视为您同意本隐私政策的全部内容，同意我们按其收集和使用您的相关信息。 如您在在阅读过程中，对本政策有任何疑问，可联系我们的客服咨询， 请通过 hello@cleanclip.cc 或产品中的反馈方式与我们取得联系。 如您不同意相关协议或其中的任何条款的，您应停止使用我们的产品和服务。

本隐私政策帮助您了解以下内容：

一、我们如何收集和使用您的个人信息；

二、我们如何存储和保护您的个人信息；

三、我们如何共享、转让、公开披露您的个人信息；

## 一、我们如何收集和使用您的个人信息
个人信息是指以电子或者其他方式记录的能够单独或者与其他信息， 结合识别特定自然人身份或者反映特定自然人活动情况的各种信息。由于我们的产品和服务并不需要此类信息，因此很高兴的告知您， 我们不会收集关于您的任何个人信息。

## 二、我们如何存储和保护您的个人信息
作为一般规则，我们仅在实现信息收集目的所需的时间内保留您的个人信息。 我们会在对于管理与您之间的关系严格必要的时间内保留您的个人信息 （例如，当您开立帐户，从我们的产品获取服务时）。 出于遵守法律义务或为证明某项权利或合同满足适用的诉讼时效要求的目的， 我们可能需要在上述期限到期后保留您存档的个人信息，并且无法按您的要求删除。 当您的个人信息对于我们的法定义务或法定时效对应的目的或档案不再必要时， 我们确保将其完全删除或匿名化。

我们使用符合业界标准的安全防护措施保护您提供的个人信息，并加密其中的关键数据， 防止其遭到未经授权访问、公开披露、使用、修改、损坏或丢失。我们会采取一切合理可行的措施，保护您的个人信息。 我们会使用加密技术确保数据的保密性；我们会使用受信赖的保护机制防止数据遭到恶意攻击。

## 三、我们如何共享、转让、公开披露您的个人信息
在管理我们的日常业务活动所需要时，为追求合法利益以更好地服务客户， 我们将合规且恰当的使用您的个人信息。出于对业务和各个方面的综合考虑， 我们仅自身使用这些数据，不与任何第三方分享。

我们可能会根据法律法规规定，或按政府主管部门的强制性要求，对外共享您的个人信息。 在符合法律法规的前提下，当我们收到上述披露信息的请求时，我们会要求必须出具与之相应的法律文件，如传票或调查函。 我们坚信，对于要求我们提供的信息，应该在法律允许的范围内尽可能保持透明。

在以下情形中，共享、转让、公开披露您的个人信息无需事先征得您的授权同意：

1、与国家安全、国防安全直接相关的；

2、与犯罪侦查、起诉、审判和判决执行等直接相关的；

3、出于维护您或其他个人的生命、财产等重大合法权益但又很难得到本人同意的；

4、您自行向社会公众公开的个人信息；

5、从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道。

6、根据个人信息主体要求签订和履行合同所必需的；

7、用于维护所提供的产品或服务的安全稳定运行所必需的，例如发现、处置产品或服务的故障；

8、法律法规规定的其他情形。------- src/zh/docs/privacy.md ------

====== src/zh/docs/README.md ======

# 开始

关于 CleanClip 的一切你需要知道的：[从这里开始](/zh/docs/manual)------- src/zh/docs/README.md ------

====== src/zh/docs/roadmap.md ======


# CleanClip 规划路线
我们对 CleanClip 的愿景和设想。

## 正在做 🕙
### 插件能力
**📅 发布日期**
- 待定

**🔧 特点**
- 插件能力将开放给开发者使用。
这一能力允许有能力的开发者为每条记录开发特定的预处理、后处理能力。
比如：
- 为特定 App 的私有数据添加解析能力
- 为文本/url 添加转 markdown 能力
- 为图片添加压缩能力

## 计划中 📅

### 支持 TouchBar
**📅 发布日期**
- 待定

**🔧 特点**
- 在 TouchBar 展示复制记录
结合 “Follow frontmost app" mode 或 lists，可以在指定 App 中自动展示特定的内容。比如，打开 Final Cut Pro 时自动显示保存过的一些模板内容，打开 Photoshop 时自动显示某个色卡等，打开浏览器是自动显示常用网址等。

### iCloud 同步 📅
**📅 上线日期**
- 待定

**🔧 功能**
- 支持多端历史记录通过 iCloud 同步

### iOS 版本
**📅 上线日期**
- 待定

**🔧 功能**
- 支持 mac 端、手机端记录共享

### 网页来源
**📅 上线日期**
- 待定

**🔧 功能**
- 来源具体到某个网页

## 已完成 ✅
### 一期：基础功能 ✅

**📅 上线日期**
- 2023.8.19

**🔧 功能**
- 快捷键呼出历史记录
- 呼出位置跟随输入光标

![](/images/roadmap/snap1.png)

### 二期：高效查询 ✅

**📅 上线日期**
- 2023.8.27

**🔧 功能**
- 快速查询更多历史记录📝
- 支持 pinyin 搜索

![](/images/roadmap/snap2.png)

### 三期：图片、文件等多种格式 ✅
**📅 上线日期**
- 2023.9.4

**🔧 功能**
- 支持图片、文件格式

![](/images/roadmap/phase3.webp)

### 四期：粘贴队列 ✅
**📅 上线日期**
- 2023.11.09

**🔧 功能**
- 连续复制内容到一个队列中，使用 CMD+V 会按顺序依次粘贴

<video autoplay muted loop width=700>
    <source src="/videos/pastestack265.mp4" type="video/mp4">
    <iframe width="700" src="/videos/search.mp4" scrolling="no" border="0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</video>


### 五期: 更强大的管理功能
**📅 Launch Date**
- 2023.11.19

**🔧 Features**
- 大功能一：收藏列表、智能列表！智能地管理、浏览、使用你的历史记录。
- 大功能二：拖拽拖拽拖拽！所有内容都可拖拽！使用记录更高效！对内容收集、内容创造者友好。
- 大功能三：专业功能！正则筛选→sed 脚本处理，解决复杂应用场景的工作流。（移到下一阶段）

### 六期：优化阶段
**📅 Launch Date**
- 2024.5.10

**🔧 Features**
- 同步 MainWindow 和 Quick Menu 功能
- 修复一些重要 bug
- fcp 增强/bug 解决
- 重写设置
- 自定义文字处理脚本
- 粘贴队列/主窗口内容同步------- src/zh/docs/roadmap.md ------

====== src/zh/docs/manual.md ======


# 用户手册

<video autoplay muted loop width=700>
    <source src="/videos/search.mp4" type="video/mp4">
    <iframe width="700" src="/videos/search.mp4" scrolling="no" border="0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</video>


## 快捷键操作
- Tab: 展开/下一页
- Shift+Tab: 上一页
- Space: 预览
- a-z: 搜索
- fn+[0-9]: 数字搜索
- ⌘H: 操作提示
- ↑↓: 切换选项

## 操作技巧

### ⌘H 查看操作提示
如果忘记了操作按键，可以 `⌘H` 或点击右下角的 `操作提示` 查看快捷键。

<img src=/images/helptip.webp width="500"/>

<br/>
<br/>
<br/>

### Space 长按/短按效果不同
长按 Space 临时预览。按住不放后预览，松开后预览消失。
短按 Space 开启/关闭预览。开启后预览一直显示，再次点击消失。

预览过程中，仍然可以按 Tab/上下键翻页或切换选项，预览状态下移动鼠标🖱️也可切换预览的项。

<video autoplay muted loop width=500>
    <source src="/videos/spacetopreview.mp4" type="video/mp4">
    <iframe width="500" src="/videos/spacetopreview.mp4" scrolling="no" border="0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</video>

<br/>
<br/>
<br/>

### 查看图片、文件
搜索「image」「file」可筛选出所有图片、文件

<video autoplay muted loop width=300>
    <source src="/videos/searchimagefile.mp4" type="video/mp4">
    <iframe width="300" src="/videos/searchimagefile.mp4" scrolling="no" border="0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</video>

<br/>
<br/>
<br/>

### 查找链接
搜索「http」

<video autoplay muted loop width=300>
    <source src="/videos/searchhttp.mp4" type="video/mp4">
    <iframe width="300" src="/videos/searchhttp.mp4" scrolling="no" border="0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</video>

<br/>
<br/>
<br/>

### 我想选取文字记录中的一部分来粘贴
1. 预览目标字符串
2. 鼠标在预览弹窗中选择部分文字
3. 「⌘ + C」复制

<video autoplay muted loop width=700>
    <source src="/videos/selectpart.mp4" type="video/mp4">
    <iframe width="700" src="/videos/selectpartsm.mp4" scrolling="no" border="0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</video>

<br/>
<br/>
<br/>

## 用户场景

### 查找过去的文本记录
我复制过一段代码、文档信息、文字等，没有及时保存在 snippet 里，只要记得一点线索，打开剪贴板记录直接搜索线索。

### 填表，多段文本来回复制
我要填写一些表格，其中需要填电话、地址、身份证号、邮箱📮等等。

过去我可能每一次都手动输入，或者从给文件里复制电话，切换到网页，粘贴。然后回到文件复制地址，切换到网页，粘贴。

使用 CleanClip，可以在文件里依次「⌘ + C」电话、地址、身份证号、邮箱📮，然后回到网页里：「⌘ + ;」选电话，「⌘ + ;」选地址...。
不需要再次来回切换。

### 手机📱信息同步到电脑💻
手机刷小红书呢，看到一些图文帖子里的一部分内容特别好，想在电脑💻端整理成一个文档。

过去步骤非常繁琐，以下步骤可以不看，突出一个看都不想看。可以直接跳到最后看 CleanClip 的使用办法：
手机多次重复以下步骤：
1. 保存图片，复制部分文字
2. 打开微信，导入图片，粘贴文字
3. 回到小红书，复制另一段文字
4. 回到微信，粘贴另一段文字
5. 重复 1-4
电脑💻
1. 微信复制图片
2. 文本编辑器粘贴图片
3. 微信复制文字
4. 文本编辑器粘贴图片

使用 CleanClip：
1. 小红书复制图片，复制文字，复制图片，复制文字...
2. 电脑在编辑器里「⌘ + ;」后依次选择复制的文字------- src/zh/docs/manual.md ------

====== src/zh/docs/cleanclip/README.md ======

# 介绍

CleanClip 支持三大用法：

**主窗口**：

适合对内容进行筛选查找、组织管理、批量操作。

它支持按照多种条件进行筛选，能把不同的内容保存到不同的收藏列表中，也能自动根据前台 App 显示不同内容。

**快捷菜单**：
**粘贴队列**：------- src/zh/docs/cleanclip/README.md ------

====== src/zh/docs/cleanclip/mac/README.md ======

# 介绍------- src/zh/docs/cleanclip/mac/README.md ------

====== src/zh/docs/cleanclip/mac/features/quickmenu-format-preset.md ======


# 统一预设粘贴格式

预设置好格式后，所有的项目都按照指定格式粘贴。

目前支持的格式有：纯文本粘贴、全小写、全大写等。

<video autoplay muted loop>
    <source src="/videos/quickmenu-format-preset.mp4" type="video/mp4">
    <iframe src="/videos/quickmenu-format-preset.mp4" scrolling="no" border="0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</video>------- src/zh/docs/cleanclip/mac/features/quickmenu-format-preset.md ------

====== src/zh/docs/cleanclip/mac/features/quickmenu-format.md ======


# 快速格式化粘贴

1. 长按内容下标数字弹出格式菜单按下
2. 长按空格键预览格式化后的文字
3. 短按格式下标数字确认选择

<video autoplay muted loop>
    <source src="/videos/quickmenu-format.mp4" type="video/mp4">
    <iframe src="/videos/quickmenu-format.mp4" scrolling="no" border="0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</video>------- src/zh/docs/cleanclip/mac/features/quickmenu-format.md ------

====== src/zh/docs/cleanclip/mac/features/main-window-follow-frontmost-app.md ======


# 自动跟随前台应用

选择跟随前台应用模式后，应用筛选器会自动跟随前台应用变化，显示该应用的历史复制记录。

该模式与列表配合使用，可以扩展出很多玩法，可以为每一个 App 新增专用收藏空间，释放应用潜力。

<video autoplay muted loop>
    <source src="/videos/followfrontmost_1080.mp4" type="video/mp4">
    <iframe src="/videos/followfrontmost_1080.mp4" scrolling="no" border="0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</video>------- src/zh/docs/cleanclip/mac/features/main-window-follow-frontmost-app.md ------

====== src/zh/docs/cleanclip/mac/features/statusbar_marked.md ======


# 菜单栏功能

1. 显示最近一条复制记录
2. 左键点击弹出主窗口，右键弹出菜单
3. 快速屏蔽来自当前应用的复制内容
4. 序列号管理
5. 快速入门教程

![cleanclip status bar](/images/statusbar_marked.png)------- src/zh/docs/cleanclip/mac/features/statusbar_marked.md ------

====== src/zh/docs/cleanclip/mac/features/pastestack-drag.md ======


# 拖拽

无论是使用快捷窗口还是粘贴队列，都支持把目标拖拽到其它窗口进行粘贴。

<video autoplay muted loop>
    <source src="/videos/pastestack-drag.mp4" type="video/mp4">
    <iframe src="/videos/pastestack-drag.mp4" scrolling="no" border="0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</video>------- src/zh/docs/cleanclip/mac/features/pastestack-drag.md ------

====== src/zh/docs/cleanclip/mac/features/main-window-collection-lists.md ======


# 收藏列表 - 手动管理

选中单个或多个"项目"，右键菜单选择"添加到列表"，即可将项目收藏到指定的列表中。

收藏列表可以被智能列表筛选，这样就可以实现更多的玩法。

<video autoplay muted loop>
    <source src="/videos/collection-lists.mp4" type="video/mp4">
    <iframe src="/videos/collection-lists.mp4" scrolling="no" border="0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</video>------- src/zh/docs/cleanclip/mac/features/main-window-collection-lists.md ------

====== src/zh/docs/cleanclip/mac/features/main-window.md ======


# 介绍

主窗口是固定在屏幕上，拥有对剪贴板记录进行批量操作、管理、使用的窗口。


**筛选**：支持根据 App 筛选、筛选当前 App、 收藏列表筛选、智能列表根据多条件筛选。

**搜索**：在筛选范围内快速搜索。

**选择**：左键单击进行单选；**⌘+单击**添加项目；**⇧+单击**添加两次选择间的全部项目。

**使用**：双击粘贴单个项目，**拖拽**或右键菜单**批量操作**多个项目。

<video autoplay muted loop>
    <source src="/videos/intro-1080.mp4" type="video/mp4">
    <iframe src="/videos/intro-1080.mp4" scrolling="no" border="0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</video>------- src/zh/docs/cleanclip/mac/features/main-window.md ------

====== src/zh/docs/cleanclip/mac/features/pastestack-present.md ======


# 介绍

⌘' 打开粘贴队列后，复制的内容会自动进入队列，⌘V 会按序列依次粘贴队列里的下一项。

1. 点击底部的「上下箭头按钮」可反转列表
2.「拖拽项目」可调换顺序
3.「点击 #」 切换到指定项目
4.「粘贴后按下」选项会在粘贴后自动按下对应按键

<video autoplay muted loop>
    <source src="/videos/pastestack-present.mp4" type="video/mp4">
    <iframe src="/videos/pastestack-present.mp4" scrolling="no" border="0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</video>------- src/zh/docs/cleanclip/mac/features/pastestack-present.md ------

====== src/zh/docs/cleanclip/mac/features/pastestack-split.md ======


# 快速填表-拆分复制

使用 ⌘⇧C 「拆分复制」，可以把多行直接拆分成多项复制到粘贴队列里。「粘贴后按下」选项自动帮助切换到下一个格子，快速填表不要太强！

<video autoplay muted loop>
    <source src="/videos/pastestack-split.mp4" type="video/mp4">
    <iframe src="/videos/pastestack-split.mp4" scrolling="no" border="0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</video>------- src/zh/docs/cleanclip/mac/features/pastestack-split.md ------

====== src/zh/docs/cleanclip/mac/features/pastestack-fill-form.md ======



# 辅助填表

使用粘贴队列可以辅助填写表单，依次复制、然后依次粘贴。

<video autoplay muted loop>
    <source src="/videos/pastestack-fill-form.mp4" type="video/mp4">
    <iframe src="/videos/pastestack-fill-form.mp4" scrolling="no" border="0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</video>------- src/zh/docs/cleanclip/mac/features/pastestack-fill-form.md ------

====== src/zh/docs/cleanclip/mac/features/main-window-sketch.md ======


# 收藏列表 - 自动收集

选择一个收藏列表，启用下方自动收集选项，你复制的内容会自动收集到指定目录。

你可以为它设置别名，以后随时打开这个目录，方便取用。

很多 App 特别是内容创作 App 缺少好用的收藏功能，比如 Sketch、Final Cut Pro 等等。

如果你的常用 App 不支持收藏夹功能，那么这个功能对你非常有用！

<video autoplay muted loop>
    <source src="/videos/sketch-simple-full.mp4" type="video/mp4">
    <iframe src="/videos/sketch-simple-full.mp4" scrolling="no" border="0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</video>------- src/zh/docs/cleanclip/mac/features/main-window-sketch.md ------

====== src/zh/docs/cleanclip/mac/features/main-window-youtube-links.md ======


# 智能列表 - 根据条件智能筛选项目

利用智能列表，可以自由地设定筛选条件，从而获取到想要的内容。

目前支持的筛选条件有: 媒体类型、关键字匹配、正则匹配、字符长度、来源 App、来源设备、所在收藏夹。

<video autoplay muted loop>
    <source src="/videos/youtubelinks-1080.mp4" type="video/mp4">
    <iframe src="/videos/youtubelinks-1080.mp4" scrolling="no" border="0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</video>------- src/zh/docs/cleanclip/mac/features/main-window-youtube-links.md ------

====== src/zh/docs/cleanclip/mac/features/quick-use.md ======


# 快速使用

1. ⌘；调起快捷菜单
2. a-z 直接开始搜索，输入 image 可搜索图片，输入 file 可搜索文件
3. 空格键预览
4. ⇥/⇧⇥ 上下翻页
5. 数字键/回车 粘贴对应的项

<video autoplay muted loop>
    <source src="/videos/quickuse.mp4" type="video/mp4">
    <iframe src="/videos/quickuse.mp4" scrolling="no" border="0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</video>------- src/zh/docs/cleanclip/mac/features/quick-use.md ------

====== src/zh/docs/cleanclip/mac/features/pastestack-collect.md ======


# 收集信息

在多个页面收集内容后，到目标页面统一粘贴，优化流程，节约时间。

<video autoplay muted loop>
    <source src="/videos/pastestack-collect.mp4" type="video/mp4">
    <iframe src="/videos/pastestack-collect.mp4" scrolling="no" border="0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</video>------- src/zh/docs/cleanclip/mac/features/pastestack-collect.md ------

====== src/zh/pages/a-feature-rich-alternative-to-maccy.md ======


<div class="present-home">

# 一个<em>功能丰富<span class="underline underline-12px"></span></em>的 Maccy 替代品
#### 为多种工作流贴身打造，节省大量时间

<br/>
<div style="display: flex; justify-content: center;">
  <div style="text-align: center">
    <!-- <img src="/images/twitter_card.webp"/> -->
    <button type="button" class="ant-btn ant-btn-primary ant-btn-round ant-btn-lg" style="">
      <!-- <a href="https://macaify.lemonsqueezy.com/checkout/buy/69bd0056-9182-4030-9aaf-bd0604db751b?embed=1&media=0&logo=0&desc=0&discount=0&enabled=114543" class="lemonsqueezy-button"> -->
      <a href="https://clip-purchase.macaify.com/freetrail">
                    30 天免费使用
      </a>
    </button>
  </div>
</div>

<br/>

<img src="/images/cleanclip-vs-paste.webp" class="img-fullwidth" />

<br/><br/><br/><br/>

## Maccy 的不足
#### 功能单一，不支持分组、按顺序粘贴等

<img src="/images/cleanclip-vs-maccy.png" class="img-fullwidth" />

<br/><br/><br/><br/>

## CleanClip 更好
#### <em>快速菜单<span class="underline underline-5px"></span></em>：设计专为键盘操作，提供即用即走的快捷窗口

<div class="rounded-video">
  <video autoplay muted loop>
      <source src="/videos/quickuse.mp4" type="video/mp4">
      <iframe src="/videos/quickuse.mp4" scrolling="no" border="0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  </video>
</div>
<br/><br/><br/><br/>

#### <em>主窗口<span class="underline underline-5px"></span></em>：支持分组、智能筛选、别名，更好地组织、筛选内容
<br/>

<video autoplay muted loop>
    <source src="/videos/intro-1080.mp4" type="video/mp4">
    <iframe src="/videos/intro-1080.mp4" scrolling="no" border="0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</video>
<br/><br/><br/><br/>

#### 支持<em>粘贴队列<span class="underline underline-5px"></span></em>，按顺序粘贴内容，工作流更流畅
<video autoplay muted loop>
    <source src="/videos/pastestack-split.mp4" type="video/mp4">
    <iframe src="/videos/pastestack-split.mp4" scrolling="no" border="0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</video>

<br/><br/><br/><br/>

## CleanClip 像系统级别的应用
#### CleanClip 的列表显示在输入文字的位置，像是系统级的功能，不会打断创作思路
<br/>

<video autoplay muted loop>
    <source src="/videos/followcursor16x9.mp4" type="video/mp4">
    <iframe src="/videos/followcursor16x9.mp4" scrolling="no" border="0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</video>
<br/><br/><br/><br/>

## 还包含
#### 你可能想要的这些特性（还有更多！）
<br/>

<div style="display: flex; justify-content: center;">
  <div class="center">

4. **跟随前台App模式**
   - 自动显示当前App的复制内容，适应不同工作场景
<br/><br/>

5. **全格式支持**
   - 支持文本、图片、文件等多种格式
   - 支持特定 App 的私有格式，如 Final Cut Pro 名称支持
<br/><br/>

6. **智能功能**
   - 支持拼音搜索
   - 十六进制颜色支持
   - 快速分割复制
<br/><br/>

7. **系统级体验**
   - 列表显示跟随输入光标，提供类似系统级功能的体验

<video autoplay muted loop style="width:100%;max-width:600px;">
    <source src="/videos/followcursor16x9.mp4" type="video/mp4">
    您的浏览器不支持视频标签。
</video>

*视频：CleanClip系统级体验演示*
<br/><br/>

8. **多语言支持**
   - 支持多种语言，包括中文、英文等

  </div>
</div>

<br/><br/><br/>

## 适用场景


<div style="display: flex; justify-content: center;">
  <div class="center">

CleanClip 适用于各种工作场景，特别是:

- 开发人员：代码片段管理、多段代码顺序粘贴
- 设计师：颜色代码管理、设计元素收藏
- 写作者：文本片段整理、素材收集
- 日常办公：文件路径管理、常用信息快速访问

<img src="/images/cleanclip-vs-paste.webp" alt="CleanClip使用场景" style="width:100%;max-width:600px;">
</div>
</div>

<br/><br/><br/><br/>

## 今天就开始免费使用 CleanClip
<br/>
<div style="display: flex; justify-content: center;">
  <div style="text-align: center">
    <!-- <img src="/images/twitter_card.webp"/> -->
    <button type="button" class="ant-btn ant-btn-primary ant-btn-round ant-btn-lg" style="">
      <!-- <a href="https://macaify.lemonsqueezy.com/checkout/buy/69bd0056-9182-4030-9aaf-bd0604db751b?embed=1&media=0&logo=0&desc=0&discount=0&enabled=114543" class="lemonsqueezy-button"> -->
      <a href="https://clip-purchase.macaify.com/freetrail">
                    30 天免费使用
      </a>
    </button>
  </div>
</div>

<br/><br/>
#### 购买过 Maccy？我们为你提供<em> 30% 的优惠<span class="underline underline-5px"></span></em>
<p style="text-align: center; margin-top: -20px;">
填写<a href="https://forms.gle/v1ya3x93Z1ud3H4A7" target="blank">这个表单</a>，我们会在审核完成后，为你发送优惠码
</p>

<br/><br/>

</div>

<style>
video {
  border-radius: 1rem;
  overflow: hidden;
}
</style>------- src/zh/pages/a-feature-rich-alternative-to-maccy.md ------

====== src/zh/pages/a-more-powerful-system-level-alternative-to-pastepal.md ======


<div class="present-home">

# 一个更强大、<em>系统级<span class="underline underline-12px"></span></em>的 PastePal 替代品

#### 像系统功能一样无缝增强剪贴板，而不是另一个第三方应用

<br/>

<div style="display: flex; justify-content: center;">
  <div style="text-align: center">
    <button type="button" class="ant-btn ant-btn-primary ant-btn-round ant-btn-lg" style="">
      <a href="https://clip-purchase.macaify.com/freetrail">
                    30 天免费试用
      </a>
    </button>
  </div>
</div>

<br/>

<img src="/images/cleanclip-vs-paste.webp" class="img-fullwidth" />

<br/><br/><br/><br/>

## 问题
#### 任何对创作过程的打断都会导致低效和精力的浪费，辅助工具应当无缝融入创作过程，而不是打断创作过程

<img src="/images/immersive.png" class="img-fullwidth" />

<br/><br/><br/><br/>

## CleanClip 更好

#### <em>系统级体验<span class="underline underline-5px"></span></em>：跟随光标显示，双手无需离开键盘，思维无需离开当前工作区

<br/>

<video autoplay muted loop>
    <source src="/videos/followcursor16x9.mp4" type="video/mp4">
    <iframe src="/videos/followcursor16x9.mp4" scrolling="no" border="0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</video>
<br/><br/><br/><br/>


#### <em>快速菜单<span class="underline underline-5px"></span></em>：设计专为键盘操作，提供即用即走的快捷窗口

<div class="rounded-video">
  <video autoplay muted loop>
      <source src="/videos/quickuse.mp4" type="video/mp4">
      <iframe src="/videos/quickuse.mp4" scrolling="no" border="0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  </video>
</div>
<br/><br/><br/><br/>

#### 支持<em>粘贴队列<span class="underline underline-5px"></span></em>,按顺序粘贴内容,工作流更流畅
<video autoplay muted loop>
    <source src="/videos/pastestack-split.mp4" type="video/mp4">
    <iframe src="/videos/pastestack-split.mp4" scrolling="no" border="0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</video>

<br/><br/><br/><br/>


#### <em>主窗口<span class="underline underline-5px"></span></em>：支持分组、智能筛选、别名，更好地组织、筛选内容
<br/>

<video autoplay muted loop>
    <source src="/videos/intro-1080.mp4" type="video/mp4">
    <iframe src="/videos/intro-1080.mp4" scrolling="no" border="0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</video>
<br/><br/><br/><br/>


## 还包含
#### 这些你可能想要的特性（还有更多！）
<br/>

<div style="display: flex; justify-content: center;">
  <div class="center">

4. **跟随前台 App 模式**
   - 自动显示当前 App 的复制内容，适应不同工作场景
<br/><br/>

5. **全格式支持**
   - 支持文本、图片、文件等多种格式
   - 支持特定 App 的私有格式，如 Final Cut Pro 名称支持
<br/><br/>

6. **智能功能**
   - 支持拼音搜索
   - 十六进制颜色支持
   - 快速分割复制
<br/><br/>

7. **多语言支持**
   - 支持多种语言，包括中文、英文等

  </div>
</div>

<br/><br/><br/>

## 适用场景

<div style="display: flex; justify-content: center;">
  <div class="center">

CleanClip 适用于各种工作场景，特别是：

- 开发人员：代码片段管理、多段代码顺序粘贴
- 设计师：颜色代码管理、设计元素收藏
- 写作者：文本片段整理、素材收集
- 日常办公：文件路径管理、常用信息快速访问

<img src="/images/cleanclip-vs-paste.webp" alt="CleanClip使用场景" style="width:100%;max-width:600px;">
</div>
</div>

<br/><br/><br/><br/>

## 今天就开始免费使用 CleanClip
<br/>
<div style="display: flex; justify-content: center;">
  <div style="text-align: center">
    <button type="button" class="ant-btn ant-btn-primary ant-btn-round ant-btn-lg" style="">
      <a href="https://clip-purchase.macaify.com/freetrail">
                    30 天免费使用
      </a>
    </button>
  </div>
</div>

<br/><br/>
#### 购买过 PastePal？我们为你提供<em> 30% 的优惠<span class="underline underline-5px"></span></em>
<p style="text-align: center; margin-top: -20px;">
填写<a href="https://forms.gle/v1ya3x93Z1ud3H4A7" target="blank">这个表单</a>，我们会在审核完成后，为你发送优惠码
</p>

<br/><br/>

</div>


<style>
video {
  border-radius: 1rem;
  overflow: hidden;
}
</style>------- src/zh/pages/a-more-powerful-system-level-alternative-to-pastepal.md ------

====== src/zh/pages/a-cheaper-more-systematic-alternative-to-paste.md ======


<div class="present-home">

# 一个更便宜、<em>系统级<span class="underline underline-12px"></span></em>的 Paste 替代品
#### 像系统功能一样沉浸式地增强剪贴板，而不像在使用第三方 app

<br/>
<div style="display: flex; justify-content: center;">
  <div style="text-align: center">
    <!-- <img src="/images/twitter_card.webp"/> -->
    <button type="button" class="ant-btn ant-btn-primary ant-btn-round ant-btn-lg" style="">
      <!-- <a href="https://macaify.lemonsqueezy.com/checkout/buy/69bd0056-9182-4030-9aaf-bd0604db751b?embed=1&media=0&logo=0&desc=0&discount=0&enabled=114543" class="lemonsqueezy-button"> -->
      <a href="https://clip-purchase.macaify.com/freetrail">
                    30 天免费使用
      </a>
    </button>
  </div>
</div>

<br/>

<img src="/images/cleanclip-vs-paste.webp" class="img-fullwidth" />

<br/><br/><br/><br/>

## 问题
#### 横向列表且单项区块太大，不易于快速浏览找到目标
<br/>

<video autoplay muted loop>
    <source src="/videos/horizontal16x9.mp4" type="video/mp4">
    <iframe src="/videos/horizontal16x9.mp4" scrolling="no" border="0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</video>
<br/><br/><br/><br/>

## CleanClip 更好
#### 使用纵向列表，一项一行，方便一目十行定位目标
<br/>

<video autoplay muted loop>
    <source src="/videos/vertical16x9.mp4" type="video/mp4">
    <iframe src="/videos/vertical16x9.mp4" scrolling="no" border="0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</video>
<br/><br/><br/><br/>

## CleanClip 像系统级别的应用
#### CleanClip 的列表显示在输入文字的位置，像是系统级的功能，不会打断创作思路
<br/>

<video autoplay muted loop>
    <source src="/videos/followcursor16x9.mp4" type="video/mp4">
    <iframe src="/videos/followcursor16x9.mp4" scrolling="no" border="0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</video>
<br/><br/><br/><br/>

## 没有订阅价格，一次性买断
#### 买断价格不到 Paste 的年费，但功能全有
<br/>

<div class="text-center">

查看价格: [Pricing](https://clip-purchase.macaify.com/)

</div>
<br/><br/><br/><br/>

## 还包含
#### 你可能想要的这些特性 (还有更多!)
<br/>

<div style="display: flex; justify-content: center;">
  <div class="center">
  <div>
💡 Final Cut Pro 名字支持<br/>
💡 十六进制颜色支持<br/>
💡 全格式支持<br/>
💡 粘贴队列支持<br/>
💡 智能筛选列表<br/>
💡 快速分割复制<br/>
💡 可选择仅显示当前 app 内容<br/>
</div>
  </div>
</div>

<br/><br/><br/><br/>

## 今天就开始免费使用 CleanClip
<br/>
<div style="display: flex; justify-content: center;">
  <div style="text-align: center">
    <!-- <img src="/images/twitter_card.webp"/> -->
    <button type="button" class="ant-btn ant-btn-primary ant-btn-round ant-btn-lg" style="">
      <!-- <a href="https://macaify.lemonsqueezy.com/checkout/buy/69bd0056-9182-4030-9aaf-bd0604db751b?embed=1&media=0&logo=0&desc=0&discount=0&enabled=114543" class="lemonsqueezy-button"> -->
      <a href="https://clip-purchase.macaify.com/freetrail">
                    30 天免费使用
      </a>
    </button>
  </div>
</div>

<br/><br/>
#### 购买过 Paste？我们为你提供<em> 30% 的优惠<span class="underline underline-5px"></span></em>
<p style="text-align: center; margin-top: -20px;">
填写<a href="https://forms.gle/v1ya3x93Z1ud3H4A7" target="blank">这个表单</a>，我们会在审核完成后，为你发送优惠码
</p>

<br/><br/>

</div>

<style>
video {
  border-radius: 1rem;
  overflow: hidden;
}
</style>------- src/zh/pages/a-cheaper-more-systematic-alternative-to-paste.md ------

====== src/zh/pages/activity-alternative-to-vote.md ======


<div class="present-home">

# 投票获取 9 折优惠

## 活动奖励
适用于 CleanClip 所有计划的 **9 折优惠**，优惠有效期至 **2024-09-30 23:59:59**。

## 参加流程
1. 点击[链接](https://alternativeto.net/software/paste-for-mac/?toid=cleanclip)，**给 CleanClip 投票**

<img src="/images/alternative_to_vote.png" style="max-width: 80%;" class="img-fullwidth" />


2. **截图**，截图区域请参照步骤一👆

3. **填写[申领表单](https://forms.gle/RQRYps9YuzEfmQhYA)**，申领优惠。优惠信息会通过邮件发送到你的邮箱。

## 活动时间
2024-09-07 截止。



</div>


<style>
video {
  border-radius: 1rem;
  overflow: hidden;
}
</style>------- src/zh/pages/activity-alternative-to-vote.md ------

====== llm/images.txt ======

下面是 CleanClip 相关的所有可使用的images文件
格式为<资源url>|<资源解释>

https://cleanclip.cc/images/favicon-16x16.png|
https://cleanclip.cc/images/quickmenu-format-preset.webp|
https://cleanclip.cc/images/twitter_card2.webp|
https://cleanclip.cc/images/formfill.webp|
https://cleanclip.cc/images/clean.webp|
https://cleanclip.cc/images/quickuse.webp|
https://cleanclip.cc/images/cleanclip-vs-paste.webp|
https://cleanclip.cc/images/sketch-simple-1080.webp|
https://cleanclip.cc/images/terminal.webp|
https://cleanclip.cc/images/designer.webp|
https://cleanclip.cc/images/android-chrome-192x192.png|
https://cleanclip.cc/images/apple-touch-icon.png|
https://cleanclip.cc/images/cleanclip_lists.png|
https://cleanclip.cc/images/helptip.webp|
https://cleanclip.cc/images/disneyland.webp|
https://cleanclip.cc/images/hero2.webp|
https://cleanclip.cc/images/pastestack-present.webp|
https://cleanclip.cc/images/pinboards.webp|
https://cleanclip.cc/images/pastestack.webp|
https://cleanclip.cc/images/maccy_prefs.png|
https://cleanclip.cc/images/logo.webp|
https://cleanclip.cc/images/pastestack-split.webp|
https://cleanclip.cc/images/lizhi.png|
https://cleanclip.cc/images/finder_clipboard.png|
https://cleanclip.cc/images/quickmenu-pinboard.webp|
https://cleanclip.cc/images/maccy_history.png|
https://cleanclip.cc/images/followfrontmost_1080.webp|
https://cleanclip.cc/images/pastestack-collect.webp|
https://cleanclip.cc/images/android-chrome-512x512.png|
https://cleanclip.cc/images/followcursornoshadow.webp|
https://cleanclip.cc/images/pastestack-fill-form.webp|
https://cleanclip.cc/images/intro-1080.webp|
https://cleanclip.cc/images/cleanclip-vs-maccy.png|
https://cleanclip.cc/images/immersive.png|
https://cleanclip.cc/images/producthunt.svg|
https://cleanclip.cc/images/twitter_card_zh.webp|
https://cleanclip.cc/images/emailtemplate.webp|
https://cleanclip.cc/images/sketch-simple-full.webp|
https://cleanclip.cc/images/youtubelinks-1080.webp|
https://cleanclip.cc/images/statusbar_marked.png|
https://cleanclip.cc/images/alternative_to_vote.png|
https://cleanclip.cc/images/collection-lists.webp|
https://cleanclip.cc/images/screenshots.webp|
https://cleanclip.cc/images/favicon-32x32.png|
https://cleanclip.cc/images/blogs/install.png|
https://cleanclip.cc/images/blogs/vote_for_alternative.png|
https://cleanclip.cc/images/blogs/preference.png|
https://cleanclip.cc/images/blogs/multi-formats-preview-image.png|
https://cleanclip.cc/images/blogs/quickmenu-lists.png|
https://cleanclip.cc/images/blogs/theme.png|
https://cleanclip.cc/images/blogs/perferences-general-quickmenu.png|
https://cleanclip.cc/images/blogs/add-lists.png|
https://cleanclip.cc/images/blogs/search.png|
https://cleanclip.cc/images/blogs/settings-general.png|
https://cleanclip.cc/images/blogs/quickmenu-shortcuts.png|
https://cleanclip.cc/images/blogs/preferences-quickmenu.png|
https://cleanclip.cc/images/blogs/default_action.png|
https://cleanclip.cc/images/blogs/add-lists-with-background.png|
https://cleanclip.cc/images/blogs/open-cleanclip.png|
https://cleanclip.cc/images/blogs/drag-image-to-use.png|
https://cleanclip.cc/images/roadmap/snap2.png|
https://cleanclip.cc/images/roadmap/snap1.png|
https://cleanclip.cc/images/roadmap/phase3.webp|
https://cleanclip.cc/images/headers/ppp.png|
------- llm/images.txt ------

====== llm/videos.txt ======

下面是 CleanClip 相关的所有可使用的videos文件
格式为<资源url>|<资源解释>

https://cleanclip.cc/videos/spacetopreview.mp4|
https://cleanclip.cc/videos/youtubelinks-1080.mp4|
https://cleanclip.cc/videos/quickmenu-format-preset.mp4|
https://cleanclip.cc/videos/followfrontmost_1080.mp4|
https://cleanclip.cc/videos/screenshots265.mp4|
https://cleanclip.cc/videos/intro-1080.mp4|
https://cleanclip.cc/videos/sketch-simple-1080.mp4|
https://cleanclip.cc/videos/pastestack.mp4|
https://cleanclip.cc/videos/pastestack-split.mp4|
https://cleanclip.cc/videos/designer265.mp4|
https://cleanclip.cc/videos/vertical16x9.mp4|
https://cleanclip.cc/videos/search-expand.mp4|
https://cleanclip.cc/videos/search-real.mp4|
https://cleanclip.cc/videos/pastestack-drag.mp4|
https://cleanclip.cc/videos/horizontal16x9.mp4|
https://cleanclip.cc/videos/searchimagefile.mp4|
https://cleanclip.cc/videos/disneyland265.mp4|
https://cleanclip.cc/videos/followcursornoshadow265.mp4|
https://cleanclip.cc/videos/followcursor16x9.mp4|
https://cleanclip.cc/videos/pastestack-fill-form.mp4|
https://cleanclip.cc/videos/collection-lists.mp4|
https://cleanclip.cc/videos/selectpart.mp4|
https://cleanclip.cc/videos/sketch-simple-full.mp4|
https://cleanclip.cc/videos/searchhttp.mp4|
https://cleanclip.cc/videos/clean265.mp4|
https://cleanclip.cc/videos/search.mp4|
https://cleanclip.cc/videos/quickmenu-pinboard.mp4|
https://cleanclip.cc/videos/pastestack-present.mp4|
https://cleanclip.cc/videos/terminal265.mp4|
https://cleanclip.cc/videos/quickuse.mp4|
https://cleanclip.cc/videos/preview.mp4|
https://cleanclip.cc/videos/formfill265.mp4|
https://cleanclip.cc/videos/emailtemplate265.mp4|
https://cleanclip.cc/videos/quickmenu-format.mp4|
https://cleanclip.cc/videos/pastestack-collect.mp4|
https://cleanclip.cc/videos/pastestack265.mp4|
------- llm/videos.txt ------

