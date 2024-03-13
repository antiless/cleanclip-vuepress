---
canonicalUrl: "https://cleanclip.cc/se/developer/web-axios-CROS"
---
# Enkel lösning för Web axios nätverksbegärande korsfel

Ett enkelt sätt att hantera detta är att:

Lägg till följande svarshuvuden på servern:
```js
headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT, DELETE",
    "Access-Control-Max-Age": "86400"
  }
```

Observera att när du använder axios för en begäran skickas först en OPTIONS förfrågan för att verifiera om begäran stöds. Därför måste rätt svar också returneras för OPTIONS-förfrågningen.

---

Författare: Sintone Li

Artikellänk: [Länk]({{ $page.frontmatter.canonicalUrl }})
