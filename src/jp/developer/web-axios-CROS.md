---
canonicalUrl: "https://cleanclip.cc/jp/developer/web-axios-CROS"
---
# Web axios ネットワークリクエストのクロスエラーを簡単に解決する

手間をかけたくない場合の解決法は以下の通りです：

サーバーに次の response ヘッダーを追加します：
```js
headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT, DELETE",
    "Access-Control-Max-Age": "86400"
  }
```

axiosリクエスト時には、まずOPTIONSリクエストを送信し、そのリクエストをサポートするかどうかを確認します。そのため、OPTIONSリクエストにも正しい応答を返す必要があります。

---

著者：Sintone Li

記事のURL：{{ $page.frontmatter.canonicalUrl }}
