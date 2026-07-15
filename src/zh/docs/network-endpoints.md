# 网络端点

> **重要提示**：CleanClip 严格保护您的隐私。所有剪贴板数据仅存储在您的本地设备上。如果您选择开启 iCloud 同步功能，数据将会通过您的个人 iCloud 账户进行同步。我们不会将任何剪贴板数据上传到其他服务器。

## 网络端点

CleanClip 连接以下域名以提供各种功能：

### 分析和崩溃报告
- crashlyticsreports-pa.googleapis.com
- firebaselogging-pa.googleapis.com  
- firebase-settings.crashlytics.com
- app-measurement.com
- firebaseinstallations.googleapis.com

这些域名属于 Google Firebase 服务，用于收集崩溃报告和基本使用分析，以帮助改善应用程序的稳定性和性能。

### 许可证验证
- cleanclip.macaify.com

此域名用于验证 CleanClip 会员权限和许可证状态。

### 更新和分发
- github-api-proxy.cleanclip.cc
- objects.githubusercontent.com
- github.com
- github-production-user-asset-6210df.s3.amazonaws.com

这些域名用于检查和下载应用程序更新。

### 推广服务
- api.cleanclip.cc
- theaffs.com

这些域名用于处理推广计划，包括：
- 生成推广链接
- 获取推广信息
- 加载 TheAffs Affiliate SDK 并记录推广归因

注意：仅在访问推广页面时才能获取推广信息。

TheAffs SDK 会将推广者、点击、访客、来源和子推广者标识保存在作用域为 `cleanclip.cc` 的 Cookie 中。浏览器向 `cleanclip.cc` 及其结账子域发起匹配请求时会自动携带这些 Cookie，结账后端据此归因订单。这些 Cookie 不包含剪贴板内容。

### 网站分析
- datafa.st

CleanClip 主站和价格子域使用 DataFast 统计页面浏览及特定转化事件。DataFast 的访客与会话 Cookie 作用域为 `cleanclip.cc`，Dashboard 会把这些标识写入 Stripe Checkout metadata 以进行收入归因。DataFast 不会接收剪贴板内容。

### 支付
- checkout.stripe.com

Stripe 提供结账页面并处理支付。支付信息由 Stripe 处理；CleanClip 不会向 Stripe 发送剪贴板内容。

> **注意**：随着应用程序的发展，本文档中列出的网络端点可能不是最新的。如果您发现此处未声明的任何网络请求，请随时通过 support@cleanclip.cc 与我们联系以获取说明。
