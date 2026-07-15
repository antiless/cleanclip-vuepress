# Network Endpoints

> **Important**: CleanClip takes your privacy seriously. All clipboard data is stored locally on your device only. If you choose to enable iCloud sync, your data will be synced through your personal iCloud account. We do not upload any clipboard data to any other servers.

## Network Endpoints

CleanClip connects to the following domains for various functionalities:

### Analytics & Crash Reporting
- crashlyticsreports-pa.googleapis.com
- firebaselogging-pa.googleapis.com  
- firebase-settings.crashlytics.com
- app-measurement.com
- firebaseinstallations.googleapis.com

These domains belong to Google Firebase services and are used for collecting crash reports and basic usage analytics to help improve app stability and performance.

### License Verification
- cleanclip.macaify.com

This domain is used for verifying CleanClip membership privileges and license status.

### Updates & Distribution
- github-api-proxy.cleanclip.cc
- objects.githubusercontent.com
- github.com
- github-production-user-asset-6210df.s3.amazonaws.com

These domains are used for checking and downloading application updates.

### Affiliate Services
- api.cleanclip.cc
- theaffs.com

These domains handle affiliate program operations including:
- Affiliate link generation
- Retrieving affiliate information
- Loading the TheAffs Affiliate SDK and recording referral attribution

Note: Retrieving affiliate information is only available when accessing the affiliate page.

The TheAffs SDK stores affiliate, click, visitor, source, and sub-partner attribution identifiers in cookies scoped to `cleanclip.cc`. The browser sends those cookies with matching requests to `cleanclip.cc` and its checkout subdomains so that the checkout backend can attribute an order. These cookies do not contain clipboard content.

### Payments
- checkout.stripe.com

Stripe hosts and processes payment checkout. Payment details are handled by Stripe; CleanClip does not send clipboard content to Stripe.

> **Note**: As the application evolves, the network endpoints listed in this document may not be up to date. If you notice any network requests not declared here, please feel free to contact us at support@cleanclip.cc for clarification.
