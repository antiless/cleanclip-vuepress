---
canonicalUrl: "https://cleanclip.cc/developer/web-axios-CROS"
---
# Simple solution to resolve Web axios network request cross-origin errors

The easy way to solve this is:

Add the following response header on the server side:

```js
headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT, DELETE",
    "Access-Control-Max-Age": "86400"
  }
```

Note that when making an axios request, an OPTIONS preflight request will be sent first to confirm if the request is supported. Therefore, the correct response should also be returned for OPTIONS requests.

---

Author: Sintone Li

Article address: {{ $page.frontmatter.canonicalUrl }}