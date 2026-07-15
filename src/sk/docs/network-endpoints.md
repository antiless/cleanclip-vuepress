# Sieťové koncové body

> **Dôležité**: CleanClip berie vaše súkromie vážne. Všetky údaje schránky sú uložené len lokálne na vašom zariadení. Ak sa rozhodnete povoliť synchronizáciu iCloud, vaše údaje budú synchronizované prostredníctvom vášho osobného účtu iCloud. Žiadne údaje schránky nenahrávame na iné servery.

## Sieťové koncové body

CleanClip sa pripája k nasledujúcim doménam pre rôzne funkcie:

### Analytika a hlásenie zlyhaní
- crashlyticsreports-pa.googleapis.com
- firebaselogging-pa.googleapis.com  
- firebase-settings.crashlytics.com
- app-measurement.com
- firebaseinstallations.googleapis.com

Tieto domény patria službám Google Firebase a používajú sa na zhromažďovanie hlásení o zlyhaní a základnej analytiky používania na zlepšenie stability a výkonu aplikácie.

### Overenie licencie
- cleanclip.macaify.com

Táto doména sa používa na overenie členských privilégií CleanClip a stavu licencie.

### Aktualizácie a distribúcia
- github-api-proxy.cleanclip.cc
- objects.githubusercontent.com
- github.com
- github-production-user-asset-6210df.s3.amazonaws.com

Tieto domény sa používajú na kontrolu a sťahovanie aktualizácií aplikácie.

### Partnerské služby
- api.cleanclip.cc
- theaffs.com

Tieto domény spracúvajú operácie partnerského programu vrátane:
- Generovanie partnerských odkazov
- Získavanie informácií o partneroch
- Načítanie TheAffs Affiliate SDK a zaznamenanie priradenia odporúčania

Poznámka: Získavanie informácií o partneroch je k dispozícii len pri prístupe na partnerskú stránku.

TheAffs SDK ukladá identifikátory partnera, kliknutia, návštevníka, zdroja a podpartnera do súborov cookie pre doménu `cleanclip.cc`. Prehliadač tieto súbory cookie odosiela s príslušnými požiadavkami na `cleanclip.cc` a jeho platobné subdomény, aby platobný backend mohol priradiť objednávku. Tieto súbory cookie neobsahujú obsah schránky.

### Platby
- checkout.stripe.com

Stripe poskytuje platobnú stránku a spracúva platby. Platobné údaje spracúva Stripe; CleanClip neposiela spoločnosti Stripe obsah schránky.

> **Poznámka**: Keďže sa aplikácia vyvíja, sieťové koncové body uvedené v tomto dokumente nemusia byť aktuálne. Ak si všimnete akékoľvek sieťové požiadavky, ktoré tu nie sú uvedené, neváhajte nás kontaktovať na support@cleanclip.cc pre objasnenie.
