---
canonicalUrl: "https://cleanclip.cc/ko/developer/cloudflare-worker-implements-purchasing-power-parity/"
---

# 클라우드플레어 워커를 활용하여 해외 제품의 구매력 평등을 실현하세요

<img src="/images/headers/ppp.png" width="80%" style="max-width: unset;" class="mt-8"/>

> **각 국가 및 지역의 구매력이 다르기 때문에 해외 제품은 다른 지역의 구매력에 맞춰 가격을 설정해야 합니다.**

구매력 평등을 실현하기 위해 **두 가지 데이터가 필요합니다:**

1. 사용자의 위치 데이터
2. 각 국가의 구매력 수준 목록

**로직은 매우 간단합니다:**
위치 데이터 -> 구매력 수준 -> 해당하는 가격 정보를 매칭하고 적용

**그렇다면 이러한 두 가지 데이터를 어떻게 얻을까요?**

## 위치 데이터
클라우드플레어 워커의 **request 매개변수**에는 매우 자세한 **위치 데이터**가 포함되어 있어 제3자 서비스를 사용하지 않고 손쉽게 위치를 확인할 수 있습니다:
<img alt="Cloudflare Worker request 필드" src="./cloudflare-request-location-field.png" width="300px"/>

이에는 위도, 경도, 지역 코드 등이 포함되어 있으며 국가 수준의 정확도까지 제공되므로 **국가 코드 country 필드**를 사용합니다.

## 구매력 수준 데이터
구매력 수준은 다음 gist에서 다운로드할 수 있습니다: [각국의 구매력 수준 목록](https://gist.github.com/auv1107/999c97a62338833f93b6c3cc5ae08ce8)

## 로직 및 구현 코드
대략적인 로직은 다음과 같습니다:
1. 워커의 request 매개변수에서 **국가 코드를 가져옵니다.**
2. 국가 코드를 사용하여 구매력 목록에서 **구매력 수준을 가져옵니다.**
3. 수준을 기준으로 **해당하는 할인 정보를 매칭하고 적용합니다.**

> 저는 [CleanClip](https://cleanclip.cc)(맥용 클립보드 도구)에서 단순히 다른 국가에 다른 할인을 적용하고 있습니다.
> LemonSqueezy에서 할인 코드를 이렇게 적용할 수 있습니다: PRODUCT_URL + "?checkout%5Bdiscount_code%5D=" + discountCode

**일부 세부 사항:**
- 할인 정보는 환경 변수에 저장되어 있어 언제든지 수정할 수 있습니다.
- Access-Control-Max-Age 캐시를 0으로 설정하여 언제든지 변경이 가능하고 즉각 적용됩니다. (설정하지 않으면 이전 결과가 오랫동안 유지되며 대략 3~4일이 소요됩니다.)
- 이 워커를 다른 워커에 연결하여 가격 정보를 여기서 통합 관리할 수 있어 여러 페이지 및 비즈니스에서 사용하기 편리합니다.

```js
import ppp from "./pppdata.js";

// 구매력 데이터 목록을 매핑하여 검색을 용이하게 합니다
const flatppp = ppp.flatMap(category => category.countries.map( countryInfo => {
  return {
    range: category.range,
    countryCode: countryInfo.country,
    countryName: countryInfo.countryName
  }
}))

// 해당 국가를 구매력 목록에서 찾습니다
function findCountry(countryCode) {
  return flatppp.find(deal => deal.countryCode == countryCode)
}

// 구매력 수준에 따라 환경 변수에서 구성된 할인 정보를 찾습니다
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

// 국가 구매력 정보와 할인 정보를 병합합니다
function mergeDiscountResult(countryPPP, discount) {
  return JSON.stringify({
    range: countryPPP.range,
    countryCode: countryPPP.countryCode,
    countryName: countryPPP.countryName,
    discountCode: discount.code,
    discount: discount.discount
  });
}

// response를 생성합니다
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

// ✨ 핵심 코드
export default {
  async fetch(request, env, ctx) {
    // 1. 국가 코드 가져오기
    const countryCode = request.cf.country

    // 2. 구매력 목록에서 해당 국가 찾기
    let countryPPP = findCountry(countryCode)

    // 3. 국가 구매력을 통해 해당 할인 정보 가져오기
    let discount = getDiscount(env, countryPPP.range)

    if (countryPPP && discount) {
      // 결과 생성
      let result = mergeDiscountResult(countryPPP, discount)
      // 4. 다른 서비스가 사용할 결과 반환
      return responseFor(result, 200)
    } else {
      return responseFor("Error", 500)
    }

    // 5. 또는 특정 할인 링크로 301 리디렉션
    // let url = env.TARGET_DOMAIN
    // if (discountCode !== undefined && discountCode.length > 0) {
    //   url = env.TARGET_DOMAIN + "?checkout%5Bdiscount_code%5D=" + discountCode
    // }
    // var response = Response.redirect(url, 301);
  },
};
```


---

저자: Sintone Li

원문 주소: {{ $page.frontmatter.canonicalUrl }}
