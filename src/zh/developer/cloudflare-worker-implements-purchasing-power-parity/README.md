---
canonicalUrl: "https://cleanclip.cc/zh/developer/cloudflare-worker-implements-purchasing-power-parity/"
---

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

export default {
  async fetch(request, env, ctx) {
    // 获取国家编码
    const countryCode = request.cf.country
    console.log(countryCode)

    // 在购买力列表中找到该国家
    let countryPPP = findCountry(countryCode)
    console.log("find", countryPPP)

    // 通过该国家购买力获取对应优惠信息
    let discount = getDiscount(env, countryPPP.range)
    console.log(discount)

    // 构造结果
    if (countryPPP && discount) {
      let result = JSON.stringify({
        range: countryPPP.range,
        countryCode: countryPPP.countryCode,
        countryName: countryPPP.countryName,
        discountCode: discount.code,
        discount: discount.discount
      });
      console.log("result", result);

      // 可以直接返回结果共其它服务调用
      return new Response(result, {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT, DELETE",
          "Access-Control-Max-Age": "0"
        }
      });
    } else {
      return new Response("Error", { status: 500, headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT, DELETE",
        "Access-Control-Max-Age": "0"
      }});
    }

    // 或者直接 301 重定向到指定优惠链接
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
