# Netzwerk-Endpunkte

> **Wichtig**: CleanClip nimmt Ihre Privatsphäre ernst. Alle Zwischenablage-Daten werden ausschließlich lokal auf Ihrem Gerät gespeichert. Wenn Sie die iCloud-Synchronisierung aktivieren, werden Ihre Daten über Ihr persönliches iCloud-Konto synchronisiert. Wir laden keine Zwischenablage-Daten auf andere Server hoch.

## Netzwerk-Endpunkte

CleanClip verbindet sich für verschiedene Funktionalitäten mit den folgenden Domains:

### Analyse & Absturzberichte
- crashlyticsreports-pa.googleapis.com
- firebaselogging-pa.googleapis.com  
- firebase-settings.crashlytics.com
- app-measurement.com
- firebaseinstallations.googleapis.com

Diese Domains gehören zu Google Firebase-Diensten und werden verwendet, um Absturzberichte und grundlegende Nutzungsanalysen zu sammeln, die zur Verbesserung der App-Stabilität und -Leistung beitragen.

### Lizenzüberprüfung
- cleanclip.macaify.com

Diese Domain wird zur Überprüfung der CleanClip-Mitgliedschaftsrechte und des Lizenzstatus verwendet.

### Updates & Distribution
- github-api-proxy.cleanclip.cc
- objects.githubusercontent.com
- github.com
- github-production-user-asset-6210df.s3.amazonaws.com

Diese Domains werden zum Überprüfen und Herunterladen von App-Updates verwendet.

### Partner-Services
- api.cleanclip.cc
- theaffs.com

Diese Domains verarbeiten Vorgänge des Partnerprogramms, darunter:
- Generierung von Partner-Links
- Abrufen von Partner-Informationen
- Laden des TheAffs Affiliate SDK und Erfassen der Empfehlungszuordnung

Hinweis: Das Abrufen von Partner-Informationen ist nur beim Zugriff auf die Partner-Seite verfügbar.

Das TheAffs SDK speichert Kennungen für Partner, Klick, Besucher, Quelle und Unterpartner in Cookies für die Domain `cleanclip.cc`. Der Browser sendet diese Cookies bei passenden Anfragen an `cleanclip.cc` und dessen Checkout-Subdomains, damit das Checkout-Backend eine Bestellung zuordnen kann. Diese Cookies enthalten keine Inhalte der Zwischenablage.

### Zahlungen
- checkout.stripe.com

Stripe stellt den Zahlungs-Checkout bereit und verarbeitet Zahlungen. Zahlungsdaten werden von Stripe verarbeitet; CleanClip sendet keine Inhalte der Zwischenablage an Stripe.

> **Hinweis**: Mit der Weiterentwicklung der Anwendung sind die in diesem Dokument aufgeführten Netzwerk-Endpunkte möglicherweise nicht mehr aktuell. Wenn Sie Netzwerkanfragen bemerken, die hier nicht aufgeführt sind, können Sie sich gerne zur Klärung unter support@cleanclip.cc an uns wenden.
