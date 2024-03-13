---
canonicalUrl: "https://cleanclip.cc/de/developer/web-axios-CROS"
---
# Einfache Lösung für CORS-Fehler bei Web axios Netzwerkanfragen

Eine einfache Lösung, um sich nicht damit herumzuschlagen, ist:

Fügen Sie auf dem Server den Response-Header hinzu:
```js
headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT, DELETE",
    "Access-Control-Max-Age": "86400"
  }
```

Beachten Sie, dass bei axios-Anfragen zuerst eine OPTIONS-Voranfrage gesendet wird, um zu bestätigen, ob diese Anfrage unterstützt wird. Daher muss auch auf OPTIONS-Anfragen die richtige Antwort zurückgegeben werden.



---

Autor: Sintone Li

Artikeladresse: {{ $page.frontmatter.canonicalUrl }}