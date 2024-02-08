---
canonicalUrl: "https://cleanclip.cc/developer/cloudflare-worker-implements-purchasing-power-parity/"
---

# Cloudflare Worker: Achieving Purchasing Power Parity for your overseas products quickly

<img src="/images/headers/ppp.png" width="80%" style="max-width: unset;" class="mt-8"/>

> **Due to different purchasing power in different countries and regions, overseas products need to set different prices for areas with different purchasing power.**

To achieve purchasing power parity, **two pieces of data are needed:**

1. User location data
2. A list of purchasing power levels for different countries

**The logic is simple:**
Location data -> Purchasing power level -> Match corresponding price information and apply

**So how do we obtain these two pieces of data?**

## Location Data
Cloudflare Worker's **request parameter** contains very detailed **location data**, which allows us to easily obtain the location without using third-party services:
<img alt="Cloudflare Worker request field" src="./cloudflare-request-location-field.png" width="300px"/>

It includes latitude and longitude, region codes, etc. Our granularity is accurate to the country level, and we use the **country code field** here.

## Purchasing Power Level Data
The purchasing power level can be downloaded from this gist: [List of Purchasing Power Levels for Different Countries](https://gist.github.com/auv1107/999c97a62338833f93b6c3cc5ae08ce8)

## Logic and Implementation Code
The general logic is as follows:
1. **Retrieve the country code** from the Worker's request parameter.
2. Use the country code to **retrieve the purchasing power level** from the list.
3. Match the corresponding **discount information based on the level** and apply it.

> For simplicity, I directly apply different discounts for different countries in [CleanClip](https://cleanclip.cc) (a clipboard tool on Mac).
> LemonSqueezy can apply discount codes like this: PRODUCT_URL + "?checkout%5Bdiscount_code%5D=" + discountCode

**Some details:**
- The discount information is stored in environment variables for easy modification.
- The Access-Control-Max-Age cache is set to 0 for easy modification and immediate effect. (Not setting it will cause the previous result to be retained for a long time, and it takes about 3-4 days for the changes to take effect. Setting it to 0 makes it take effect immediately.)
- This worker can be connected to other workers, and the price information can be maintained here for easy use in multiple pages and businesses.

```js
import ppp from "./pppdata.js";

const flatppp = ppp.flatMap(category => category.countries.map( countryInfo => {
  return {
    range: category.range,
    countryCode: countryInfo.country,
    countryName: countryInfo.countryName
  }
}))

// Find the corresponding country in the purchasing power level list
function findCountry(countryCode) {
  return flatppp.find(deal => deal.countryCode == countryCode)
}

// Find the configured discount information in the environment variables based on the purchasing power level
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
    // Get the country code
    const countryCode = request.cf.country
    console.log(countryCode)

    // Find the country in the purchasing power list
    let countryPPP = findCountry(countryCode)
    console.log("find", countryPPP)

    // Get the corresponding discount information based on the country's purchasing power
    let discount = getDiscount(env, countryPPP.range)
    console.log(discount)

    // Return the result
    if (countryPPP && discount) {
      let result = JSON.stringify({
        range: countryPPP.range,
        countryCode: countryPPP.countryCode,
        countryName: countryPPP.countryName,
        discountCode: discount.code,
        discount: discount.discount
      });
      console.log("result", result);
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
        "Access-Control-Max-Age": "86400"
      }});
    }

    // Or directly 301 redirect to the specified discount link
    // let url = env.TARGET_DOMAIN
    // if (discountCode !== undefined && discountCode.length > 0) {
    //   url = env.TARGET_DOMAIN + "?checkout%5Bdiscount_code%5D=" + discountCode
    // }
    // var response = Response.redirect(url, 301);
  },
};
```


---

Author: Sintone Li

Article address: {{ $page.frontmatter.canonicalUrl }}