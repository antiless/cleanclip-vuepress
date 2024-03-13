---
canonicalUrl: "https://cleanclip.cc/ar/developer/web-axios-CROS"
---
# حل بسيط لخطأ تجاوز النطاق الجغرافي في طلبات الشبكة باستخدام Web axios

الطريقة الأسهل بدون عناء هي:

إضافة رأس الاستجابة في الخادم:
```js
headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT, DELETE",
    "Access-Control-Max-Age": "86400"
}
```

يرجى ملاحظة أنه عند إجراء طلب axios، سيتم إرسال طلب الـ OPTIONS مسبقًا للتحقق مما إذا كان يدعم هذا الطلب أم لا. لذلك، يجب أيضًا الرد بشكل صحيح على طلب OPTIONS.

---

المؤلف: Sintone Li

رابط المقال: {{ $page.frontmatter.canonicalUrl }}
