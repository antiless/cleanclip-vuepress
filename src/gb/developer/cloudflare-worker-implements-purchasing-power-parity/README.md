---
canonicalUrl: "https://cleanclip.cc/gb/developer/cloudflare-worker-implements-purchasing-power-parity/"
---

# Implement Purchasing Power Parity for Your Overseas Product Quickly with Cloudflare Worker

<img src="/images/headers/ppp.png" width="80%" style="max-width: unset;" class="mt-8"/>

> **Due to different purchasing power in different countries and regions, overseas products need to set different prices for areas with varying purchasing power.**

To achieve **Purchasing Power Parity**, you need two sets of data:

1. User location data.
2. A list of purchasing power levels for various countries.

**The logic is simple:**
Location data -> Purchasing power levels -> Match and apply corresponding price information

**So how do we get these two sets of data?**

## Location Data
Cloudflare Worker's **request parameter** carries very detailed **location data**, allowing us to easily obtain location without the need for third-party services:
<img alt="Cloudflare Worker request field" src="./cloudflare-request-location-field.png" width="300px"/>

It includes latitude, longitude, region codes, etc., with the granularity down to the country level, using the **country code field** here.

## Purchasing Power Level Data
You can download the list of purchasing power levels for each country in this [gist](https://gist.github.com/auv1107/999c97a62338833f93b6c3cc5ae08ce8).

## Logic and Implementation Code
The general logic is as follows:
1. **Retrieve the country code** from the Worker's request parameter.
2. **Retrieve the purchasing power level** from the list based on the country code.
3. Match the level to the corresponding **discount information and apply**.

> For simplicity in [CleanClip](https://cleanclip.cc) (Clipboard tool on Mac), I directly apply different discounts for different countries.
> LemonSqueezy can apply discount codes like this: PRODUCT_URL + "?checkout%5Bdiscount_code%5D=" + discountCode

**Some details:**
- Discount information is saved in environment variables for easy updating.
- Access-Control-Max-Age cache is set to 0 for instant changes and effects (not setting it may result in lasting previous results, typically taking about 3-4 days to update, setting it to 0 updates immediately).
- You can connect this worker to another worker below it, maintaining price information centrally here for ease of use across multiple pages and businesses.

```js
import ppp from "./pppdata.js";

// Map the list of purchasing power data for easy searching
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

// Get the discount information configured in the environment variables based on the purchasing power level
function getDiscount(env, range) {
  switch(range) {
    // Cases for different ranges with corresponding discount information
  }
}

// Merge country's purchasing power information with discount information
function mergeDiscountResult(countryPPP, discount) {
  return JSON.stringify({
    range: countryPPP.range,
    countryCode: countryPPP.countryCode,
    countryName: countryPPP.countryName,
    discountCode: discount.code,
    discount: discount.discount
  });
}

// Construct the response
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

// ✨ Core code
export default {
  async fetch(request, env, ctx) {
    // 1. Get the country code
    const countryCode = request.cf.country

    // 2. Find the country in the purchasing power list
    let countryPPP = findCountry(countryCode)

    // 3. Get the corresponding discount information based on the country's purchasing power
    let discount = getDiscount(env, countryPPP.range)

    if (countryPPP && discount) {
      // Construct the result
      let result = mergeDiscountResult(countryPPP, discount)
      // 4. Can directly return the result for other services to call
      return responseFor(result, 200)
    } else {
      return responseFor("Error", 500)
    }

    // 5. Or directly 301 redirect to the specified discount link
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

Article link: {{ $page.frontmatter.canonicalUrl }}
