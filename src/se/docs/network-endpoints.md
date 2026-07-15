# Nätverksändpunkter

> **Viktigt**: CleanClip tar din integritet på allvar. All urklippsdata lagras endast lokalt på din enhet. Om du väljer att aktivera iCloud-synkronisering kommer din data att synkroniseras via ditt personliga iCloud-konto. Vi laddar inte upp någon urklippsdata till andra servrar.

## Nätverksändpunkter

CleanClip ansluter till följande domäner för olika funktioner:

### Analys och kraschrapportering
- crashlyticsreports-pa.googleapis.com
- firebaselogging-pa.googleapis.com  
- firebase-settings.crashlytics.com
- app-measurement.com
- firebaseinstallations.googleapis.com

Dessa domäner tillhör Google Firebase-tjänster och används för att samla in kraschrapporter och grundläggande användningsanalys för att hjälpa till att förbättra appens stabilitet och prestanda.

### Licensverifiering
- cleanclip.macaify.com

Denna domän används för att verifiera CleanClip-medlemskapsprivilegier och licensstatus.

### Uppdateringar och distribution
- github-api-proxy.cleanclip.cc
- objects.githubusercontent.com
- github.com
- github-production-user-asset-6210df.s3.amazonaws.com

Dessa domäner används för att kontrollera och ladda ner applikationsuppdateringar.

### Partnertjänster
- api.cleanclip.cc
- theaffs.com

Dessa domäner hanterar partnerprogrammet, inklusive:
- Generering av partnerlänkar
- Hämtning av partnerinformation
- Inläsning av TheAffs Affiliate SDK och registrering av hänvisningsattribution

Obs: Hämtning av partnerinformation är endast tillgänglig vid åtkomst till partnersidan.

TheAffs SDK lagrar identifierare för partner, klick, besökare, källa och underpartner i cookies för domänen `cleanclip.cc`. Webbläsaren skickar dessa cookies med matchande begäranden till `cleanclip.cc` och dess underdomäner för betalning, så att betalningsservern kan tillskriva en beställning. Dessa cookies innehåller inget innehåll från urklipp.

### Betalningar
- checkout.stripe.com

Stripe tillhandahåller betalningssidan och behandlar betalningar. Betalningsuppgifter behandlas av Stripe; CleanClip skickar inget innehåll från urklipp till Stripe.

> **Obs**: I takt med att applikationen utvecklas kan nätverksändpunkterna som listas i detta dokument vara inaktuella. Om du upptäcker några nätverksförfrågningar som inte deklareras här, är du välkommen att kontakta oss på support@cleanclip.cc för förtydligande.
