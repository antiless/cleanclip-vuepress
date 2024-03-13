---
canonicalUrl: "https://cleanclip.cc/de/developer/cloudflare-worker-implements-purchasing-power-parity/"
---

# Mit einem Cloudflare Worker schnell Kaufkraftparität für Ihre internationale Produkte implementieren

<img src="/images/headers/ppp.png" width="80%" style="max-width: unset;" class="mt-8"/>

> **Da die Kaufkraft in verschiedenen Ländern und Regionen unterschiedlich ist, müssen internationale Produkte für Regionen mit unterschiedlicher Kaufkraft unterschiedliche Preise festlegen.**

Um Kaufkraftparität zu erreichen, **benötigen Sie zwei Daten:**

1. Benutzerstandortdaten
2. Eine Liste der Kaufkraftniveaus verschiedener Länder

**Die Logik ist sehr einfach:**
Standortdaten -> Kaufkraftniveau -> Übereinstimmende Preisinformationen anwenden

**Aber wie erhalten Sie diese beiden Daten?**

## Standortdaten
Der Cloudflare Worker enthält sehr detaillierte **Standortdaten** in den **Request-Parametern**, sodass Sie den Standort einfach abrufen können, ohne auf Drittanbieterdienste angewiesen zu sein:
<img alt="Cloudflare Worker-Anforderungsfeld" src="./cloudflare-request-location-field.png" width="300px"/>

Es enthält Längen- und Breitengrad, Ländercode usw. Unsere Genauigkeit reicht bis auf Länderebene, hier nutzen wir das **Ländercode-Feld**.

## Daten zu Kaufkraftniveaus
Sie können die Liste der Kaufkraftniveaus von diesem Gist herunterladen: [Liste der Kaufkraftniveaus der Länder](https://gist.github.com/auv1107/999c97a62338833f93b6c3cc5ae08ce8)

## Logik und Implementierungscode
Die grobe Logik lautet wie folgt:
1. Landescode aus den Request-Parametern des Workers **abfragen**
2. Das Kaufkraftniveau aus der Liste der Kaufkraftniveaus **für das Land abrufen**
3. Entsprechende **Rabattinformationen suchen und anwenden** basierend auf dem Niveau

> Im [CleanClip](https://cleanclip.cc) (Zwischenablage-Tool für Mac) wende ich einfach unterschiedliche Rabatte auf verschiedene Länder an.
> LemonSqueezy kann einen Rabattcode direkt so anwenden: PRODUCT_URL + "?checkout%5Bdiscount_code%5D=" + discountCode

**Einige Details:**
- Rabattinformationen werden in Umgebungsvariablen gespeichert, um Änderungen einfach vornehmen zu können.
- Der Cache für Access-Control-Max-Age ist auf 0 gesetzt, um Änderungen sofort wirksam werden zu lassen. (Ohne diese Einstellung würde das Ergebnis lange Zeit gespeichert bleiben. Praktisch gesehen dauert es etwa 3 bis 4 Tage, bis neue Einstellungen wirksam werden. Mit 0 wird es sofort wirksam.)
- Dieser Worker kann mit einem anderen Worker verbunden werden, um Preisinformationen zentral zu pflegen und die Verwendung auf mehreren Seiten oder in verschiedenen Geschäftsprozessen zu erleichtern.

```js
import ppp from "./pppdata.js";

// Die Liste der Kaufkraftdaten wird zur einfacheren Suche gemappt
const flatppp = ppp.flatMap(category => category.countries.map( countryInfo => {
  return {
    range: category.range,
    countryCode: countryInfo.country,
    countryName: countryInfo.countryName
  }
}))

// Sucht das Land entsprechend des Kaufkraftniveaus in der Liste der Kaufkraftniveaus
function findCountry(countryCode) {
  return flatppp.find(deal => deal.countryCode == countryCode)
}

// Sucht basierend auf dem Kaufkraftniveau die konfigurierten Rabattinformationen in den Umgebungsvariablen
function getDiscount(env, range) {
  switch(range) {
    case "0.0-0.1": return { code: env.level0_1 ?? "", discount: parseInt(env.level0_1_discount ?? "0") ?? 0 }
    case "0.1-0.2": return { code: env.level1_2 ?? "", discount: parseInt(env.level1_2_discount ?? "0") ?? 0 }
    // Fügen Sie hier die weiteren Fälle hinzu...
    default: return {code: "", discount: 0}
  }
}

// Kombiniert Informationen zum Landeskaufkraftniveau und Rabattinformationen
function mergeDiscountResult(countryPPP, discount) {
  return JSON.stringify({
    range: countryPPP.range,
    countryCode: countryPPP.countryCode,
    countryName: countryPPP.countryName,
    discountCode: discount.code,
    discount: discount.discount
  });
}

// Erstellt die Antwort
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

// ✨ Kerncode
export default {
  async fetch(request, env, ctx) {
    // 1. Ländercode abrufen
    const countryCode = request.cf.country

    // 2. Das Land in der Liste der Kaufkraft finden
    let countryPPP = findCountry(countryCode)

    // 3. Mit dem Kaufkraftniveau des Landes die entsprechenden Rabattinformationen abrufen
    let discount = getDiscount(env, countryPPP.range)

    if (countryPPP && discount) {
      // Ergebnis erstellen
      let result = mergeDiscountResult(countryPPP, discount)
      // 4. Das Ergebnis kann direkt zurückgegeben werden, um von anderen Diensten abgerufen zu werden
      return responseFor(result, 200)
    } else {
      return responseFor("Error", 500)
    }

    // 5. Oder direkt 301 Redirect zu einem bestimmten Rabattlink
    // let url = env.TARGET_DOMAIN
    // if (discountCode !== undefined && discountCode.length > 0) {
    //   url = env.TARGET_DOMAIN + "?checkout%5Bdiscount_code%5D=" + discountCode
    // }
    // var response = Response.redirect(url, 301);
  },
};
```

---

Autor: Sintone Li

Artikel-Link: {{ $page.frontmatter.canonicalUrl }}
