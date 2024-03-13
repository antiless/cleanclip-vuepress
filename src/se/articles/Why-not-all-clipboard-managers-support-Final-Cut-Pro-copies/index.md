---
canonicalUrl: "https://cleanclip.cc/se/articles/Why-not-all-clipboard-managers-support-Final-Cut-Pro-copies/"
---

# Besvara användarens fråga: Varför stöder inte alla urklippsverktyg inspelningar av kopior i Final Cut Pro?

Final Cut Pro har aldrig haft en användbar bokmärkesfunktion, så ett urklippsverktyg med bokmärkesfunktion skulle vara det perfekta komplementet till Final Cut Pro.
![Final Cut Pro samarbetar med gratis urklippsverktyget CleanClip](./cooperate-with-final-cut-pro.png)

Men inte alla urklippsverktyg stöder bokmärkesfunktion och inte alla verktyg stöder inspelning av kopierad data från Final Cut Pro.

## **Användarens fråga:**

> Loggar den (CleanClip) kopierade objekt från professionella appar som Final Cut Pro? Jag använder Paste för att snabbt klistra in klipp och klippeffekter, och jag vet att inte alla urklippsverktyg loggar den här typen av icke-text- eller icke-bildurklippsobjekt. Av nyfikenhet, vilka extra steg krävdes för att göra detta (frågar som en icke-utvecklare)? Jag undrar varför inte alla urklippsverktyg stöder detta.

> [CleanClip](https://cleanclip.cc) om den loggar objekt som kopierats från proffsappar som Final Cut Pro? Jag använder Paste för att snabbt klistra in klipp och klippeffekter, och jag vet att inte alla urklippsverktyg loggar den här typen av icke-text- eller icke-bildurklippsobjekt. Av ren nyfikenhet, krävs extra steg för att uppnå detta (frågar från en icke-utvecklarståndpunkt)? Jag undrar varför inte alla urklippsverktyg stöder detta.

https://www.reddit.com/r/macapps/comments/193ds1j/comment/khe5xjx/?utm_source=share&utm_medium=web2x&context=3

## **Svar:**

Jag ska förklara det enkelt.

Arbetsflödet för urklipp är ganska enkelt, Appen A lägger sina saker i urklippet, Appen B tar sedan ut det och placerar i sig själv.

Men här uppstår en fråga, **hur vet B vad A har lagt i, och hur ska den här datan användas?**
Mac har en konvention att allt som läggs i urklippet måste ha åtminstone två saker: 1. **Typnamn**, för att skilja vilken typ av kopierad data det är. 2. **Själva innehållet**.

På så sätt, när B tar datan, frågar den först: Vad är detta för data? Urklippet svarar: Det är en **bild (typnamn)**. B säger då: Okej, ge mig datan. Sedan parser B datan med avsikt att hantera det som **en bild**, och sedan visar det.

Det här gäller för alla typer av data.

------
**Låt oss prata om offentliga och privata typer av urklipp.**

**Offentliga typer:**
De mest grundläggande är text, bilder, filer, dessa är offentliga typer. Eftersom det är definierat av Mac-systemet, alla appar på en Mac vet vilken typ av data de är och hur strukturen ser ut.

**Privata typer:**
Det finns också appar som FCP som vill kopiera mycket komplex data, varje gång du trycker på CMD+C måste den kanske spara data som: 3 videoklipp, varje klipps längd, var de var placerade på tidslinjen, deras hierarki och så vidare.
Här är de offentliga typerna som Mac stöder otillräckliga, vad gör man då? FCP säger: Jag ska skapa en ny typ som kallas "fcp", och bestämma min egen datastruktur.
På det här sättet, inom FCP-appen vet den hur den ska kopiera, klistra in och hantera "fcp" typen av data. Eftersom FCP vet hur man hanterar data under den typen "fcp".

**Något som appen definerar själv, som andra appar inte känner till, är en privat typ.**

I själva verket kan varje app se att det finns en sådan typ som "fcp" i datan, men de vet inte hur man hanterar det och därav kan de inte visa det.

-------
**Vad är skillnaden mellan att tolka privat data eller inte?**


En mycket viktig punkt är att ett urklippsverktyg bara behöver veta vilken typ av data som finns, inte nödvändigtvis tolka datan.

**Genom att veta vilken typ av data det är, kan vi markera typen av detta kopierade objekt i urklippverktyget**: texttyp, bildtyp, fcp-typ.

**Om vi kan tolka datan kan vi göra gränssnittet mer användarvänligt**, vi kan ha en uppskattning av data:
- Om det är text, kan vi tolka de första tecknen och visa dem.
- Om det är en bild, kan vi tolka och visa en förhandsvisning samt bildstorlek.
- Om det är fcp, kan vi inte tolka det. Så förutom att bara visa tecknen "fcp", kan vi inte göra gränssnittet mer användarvänligt.

------

**Varför stöder vissa urklippsverktyg det och andra inte?**

Det kan finnas många olika skäl. En möjlig anledning enligt ovanstående förklaring är:

**1. Dessa privata data har inga speciella kännetecken, man vet bara typen vilket inte är användarvänligt**

Om jag till exempel kopierar tio objekt i FCP, men eftersom jag inte vet datan, även om jag stöder det skulle användaren inte kunna skilja mellan dessa tio objekt. Det har ingen nytta för användaren.

**2. Begränsningar för produktpositionering**

Vissa appar kan ha funktioner som vitlistar specifika typer som ska övervakas. Till exempel Maccy. Det tillåter användare att välja vitlistade typer som ska övervakas.

Eftersom de privata typerna är oändligt många, är det omöjligt att lista alla. Om vi inte kan göra en fullständig listning, kommer vi inte att kunna tillåta alla privata typer. Därför är många privata data tvungna att blockeras.

**3. Nischbehov, teamet väljer att inte stödja**

Jämfört med de offentliga typerna är behoven för dessa privata typer små. Det påverkar en liten användarbas, teamet kan då medvetet välja att inte stödja det.

Men jag tror att det finns stor potential för urklipp i redigeringsvärlden, jag planerar att stödja det och jag hoppas kunna ha mer kommunikation med er om möjligheten att utforska användarnas behov.

**4. Utvecklarfel**

Det är mycket möjligt, om det finns inte tillräcklig feedback från användarbasen eller om utvecklaren inte har tillräcklig erfarenhet av urklippsutveckling, kan det hända att de inte märker det här problemet.

Jag tänkte bara ge en kort förklaring, men råkade säga lite för mycket, haha. Jag hoppas att dessa ord tillfredsställer din nyfikenhet.

---

Författare: Sintone Li

Artikelns länk: {{ $page.frontmatter.canonicalUrl }}
