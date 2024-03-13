---
canonicalUrl: "https://cleanclip.cc/gb/developer/web-axios-CROS"
---
# Simple Solution to Web axios Cross-Origin Request Errors

The easiest way is:

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

Note that when sending an axios request, an OPTIONS preflight request is sent first to confirm if the request is supported. Therefore, the OPTIONS request needs to be responded to correctly as well.



---

Author: Sintone Li

Article link: [{{ $page.frontmatter.canonicalUrl }}](https://cleanclip.cc/gb/developer/web-axios-CROS)