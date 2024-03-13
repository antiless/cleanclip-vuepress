---
canonicalUrl: "https://cleanclip.cc/sk/developer/web-axios-CROS"
---
# Jednoduché vyriešenie chýb pri sietových požiadavkách Web axios

Jednoduchý spôsob, ako sa tomu vyhnúť, je:

Pridať na server odpoveď response header:
```js
headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT, DELETE",
    "Access-Control-Max-Age": "86400"
  }
```

Všimnite si, že axios posiela OPTIONS predžiadosť na overenie, či je táto požiadavka podporovaná. Preto je potrebné tiež správne zareagovať na OPTIONS požiadavky.

---

Autor: Sintone Li

Článok nájdete na: [Tu]({{ $page.frontmatter.canonicalUrl }})
