---
canonicalUrl: "https://cleanclip.cc/ko/developer/web-axios-CROS"
---
# Web axios 네트워크 요청 크로스 오류 간단히 해결하기

감투할 필요 없이 간편한 방법은:

서버에 다음 response header 추가:
```js
headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT, DELETE",
    "Access-Control-Max-Age": "86400"
  }
```

axios 요청시 OPTIONS 사전 요청을 먼저 보낼 것이므로 해당 요청을 지원하는지 확인합니다. 따라서 OPTIONS 요청에도 올바른 응답을 반환해야 합니다.

---

저자: Sintone Li

글 주소: {{ $page.frontmatter.canonicalUrl }}
