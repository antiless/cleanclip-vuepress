# ネットワークエンドポイント

> **重要**：CleanClipはユーザーのプライバシーを重視しています。すべてのクリップボードデータはお使いのデバイスにのみ保存されます。iCloud同期を有効にした場合、データは個人のiCloudアカウントを通じて同期されます。クリップボードデータを他のサーバーにアップロードすることは一切ありません。

## ネットワークエンドポイント

CleanClipは以下のドメインに接続して様々な機能を提供しています:

### 分析とクラッシュレポート
- crashlyticsreports-pa.googleapis.com
- firebaselogging-pa.googleapis.com  
- firebase-settings.crashlytics.com
- app-measurement.com
- firebaseinstallations.googleapis.com

これらのドメインはGoogle Firebaseサービスに属しており、アプリの安定性とパフォーマンスの向上に役立つクラッシュレポートと基本的な使用状況分析の収集に使用されています。

### ライセンス認証
- cleanclip.macaify.com

このドメインはCleanClipのメンバーシップ特権とライセンスステータスの確認に使用されています。

### アップデートと配布
- github-api-proxy.cleanclip.cc
- objects.githubusercontent.com
- github.com
- github-production-user-asset-6210df.s3.amazonaws.com

これらのドメインはアプリケーションのアップデートの確認とダウンロードに使用されています。

### アフィリエイトサービス
- api.cleanclip.cc
- theaffs.com

これらのドメインは以下を含むアフィリエイトプログラムの処理に使用されます:
- アフィリエイトリンクの生成
- アフィリエイト情報の取得
- TheAffs Affiliate SDKの読み込みと紹介元の記録

注意: アフィリエイト情報の取得はアフィリエイトページにアクセスする場合のみ利用可能です。

TheAffs SDKは、アフィリエイト、クリック、訪問者、参照元、サブパートナーの識別子を`cleanclip.cc`ドメインのCookieに保存します。ブラウザは`cleanclip.cc`および該当する決済用サブドメインへのリクエスト時にこれらのCookieを送信し、決済バックエンドが注文の紹介元を判定できるようにします。これらのCookieにクリップボードの内容は含まれません。

### 決済
- checkout.stripe.com

決済ページの提供と支払い処理はStripeが行います。支払い情報はStripeによって処理され、CleanClipがクリップボードの内容をStripeに送信することはありません。

> **注意**: アプリケーションの進化に伴い、このドキュメントに記載されているネットワークエンドポイントは最新ではない可能性があります。ここに記載されていないネットワークリクエストに気付いた場合は、support@cleanclip.ccまでお気軽にお問い合わせください。
