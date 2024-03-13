---
canonicalUrl: "https://cleanclip.cc/ar/developer/cloudflare-worker-implements-purchasing-power-parity/"
---

# استخدام Cloudflare Worker لتحقيق قدرة الشراء المتساوية بالأسعار (Purchasing Power Parity) بسرعة لمنتجك العالمي

<img src="/images/headers/ppp.png" width="80%" style="max-width: unset;" class="mt-8"/>

> **نظرًا لاختلاف قدرة الشراء في مختلف البلدان والمناطق، يحتاج منتجك العالمي إلى ضبط أسعار مختلفة لمختلف المناطق ذات القدرة الشرائية المتباينة.**

تحقيق قدرة الشراء المتساوية يتطلب **اثنين من البيانات:**

1. بيانات موقع المستخدم
2. قائمة بمستويات قدرة الشراء في مختلف البلدان

**المنطق بسيط جدًا:**
بيانات الموقع -> مستوى القدرة الشرائية -> تطبيق معلومات السعر المناسبة

**فكيف يمكن الحصول على هاتين البيانتين؟**

## بيانات الموقع
يوفر **معلم Cloudflare Worker الطلبات** بيانات دقيقة جدًا حول **الموقع**، مما يتيح لنا الحصول على الموقع بسهولة دون الحاجة إلى خدمات خارجية:
<img alt="حقول طلب Cloudflare Worker" src="./cloudflare-request-location-field.png" width="300px"/>

تحتوي على خصائص مثل خطوط الطول والعرض ورمز المنطقة، ويتم التركيز على مستوى الدقة في الدولة، حيث يُستخدم حقل **رمز البلد country** هنا.

## بيانات مستوى الشراء
يمكن العثور على مستويات قدرة الشراء في هذا الملخص: [قائمة بمستويات قدرة الشراء في مختلف البلدان](https://gist.github.com/auv1107/999c97a62338833f93b6c3cc5ae08ce8)

## المنطق وشفرة التنفيذ
المنطق بشكل عام هو:
1. الحصول على **رمز البلد** من بيانات طلب Worker
2. استخدام رمز البلد للحصول على **مستوى القدرة الشرائية** من قائمة القدرة الشرائية
3. تطابقه مع معلومات الخصم المناسبة وتطبيقها

> ببساطة في [CleanClip](https://cleanclip.cc) (أداة حافظة على macOS)، يُطبق الخصم المناسب مباشرة على مختلف البلدان.
> يمكنك استخدام LemonSqueezy لتطبيق رمز الخصم مباشرة هكذا: PRODUCT_URL + "?checkout%5Bdiscount_code%5D=" + discountCode

**بعض التفاصيل:**
- تتم حفظ معلومات الخصم في متغيرات البيئة لسهولة التعديل في أي وقت
- يُعد إعداد ذاكرة التخزين المؤقت لـ Access-Control-Max-Age بـ 0 أمرًا مفيدًا، حيث يمكن تعديله بسهولة في أي وقت والتأثير الفوري. (عدم تعيينه قد يؤدي إلى الاحتفاظ بالنتائج السابقة لفترة طويلة، حيث يكون التأثير فعليًا بعد حوالي 3 إلى 4 أيام، لكن عند تعيينها بـ 0 يكون التأثير الفوري)
- يُمكن ربط هذا الـ worker بـ worker آخر، حيث يتم توحيد معلومات الأسعار هنا، مما يجعل الأمر سهلًا للاستخدام المتعدد الصفحات والعمليات التجارية

```js
import ppp from "./pppdata.js";

// يتم تنظيم قائمة بيانات شراء القوة لسهولة البحث
const flatppp = ppp.flatMap(category => category.countries.map( countryInfo => {
  return {
    range: category.range,
    countryCode: countryInfo.country,
    countryName: countryInfo.countryName
  }
}))

// إيجاد البلد المطابق في قائمة شراء القوة
function findCountry(countryCode) {
  return flatppp.find(deal => deal.countryCode == countryCode)
}

// بناء على مستوى شراء القوة، العثور على معلومات الخصم المكونة في متغيرات البيئة
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

// دمج معلومات البلد مستوى الشراء + معلومات الخصم
function mergeDiscountResult(countryPPP, discount) {
  return JSON.stringify({
    range: countryPPP.range,
    countryCode: countryPPP.countryCode,
    countryName: countryPPP.countryName,
    discountCode: discount.code,
    discount: discount.discount
  });
}

// إنشاء الاستجابة
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

// ✨ الشيفرة الأساسية
export default {
  async fetch(request, env, ctx) {
    // 1. الحصول على رمز البلد
    const countryCode = request.cf.country

    // 2. البحث عن البلد في قائمة شراء القوة
    let countryPPP = findCountry(countryCode)

    // 3. باستخدام شراء القوة لهذا البلد، الحصول على معلومات الخصم المناسبة
    let discount = getDiscount(env, countryPPP.range)

    if (countryPPP && discount) {
      // بناء النتيجة
      let result = mergeDiscountResult(countryPPP, discount)
      // 4. يمكنك إعادة النتيجة مباشرة لاستخدامها في خدمات أخرى
      return responseFor(result, 200)
    } else {
      return responseFor("خطأ", 500)
    }

    // 5. أو يمكن توجيهها مباشرة 301 إلى رابط الخصم المحدد
    // let url = env.TARGET_DOMAIN
    // if (discountCode !== undefined && discountCode.length > 0) {
    //   url = env.TARGET_DOMAIN + "?checkout%5Bdiscount_code%5D=" + discountCode
    // }
    // var response = Response.redirect(url, 301);
  },
};
```


---

الكاتب: Sintone Li

رابط المقال: {{ $page.frontmatter.canonicalUrl }}
