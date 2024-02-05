---
canonicalUrl: "https://cleanclip.cc/zh/developer/web-axios-CROS"
---
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
