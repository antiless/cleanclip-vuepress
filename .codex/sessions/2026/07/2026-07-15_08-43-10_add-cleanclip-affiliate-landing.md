---
title: "add cleanclip affiliate landing"
created_at: "2026-07-15T08:43:10.998296+08:00"
agent: "Codex"
workspace_root: "/Users/lixindong/ThirdPartyProjects/cleanclip-vuepress"
session_path: "/Users/lixindong/ThirdPartyProjects/cleanclip-vuepress/.codex/sessions/2026/07/2026-07-15_08-43-10_add-cleanclip-affiliate-landing.md"
git_repo: true
branch: "main"
head_before_commit: "d8e1c7b"
---

# Session Record

## Request

接入 CleanClip 的 TheAffs 联盟归因，并在官网补齐可发现的联盟计划入口和说明页；完成验证后提交并推送，让仓库自动部署。

## Constraints

- Affiliate Cookie 必须以 `cleanclip.cc` 为域在官网、Pricing 与 Dashboard 间共享。
- 新增页面需要使用 Imagegen 生成视觉并实际落地。
- 不依赖本地生产构建触发部署；推送 `main` 后由仓库自动部署。
- 保留原有多语言站点结构，不把已停用的旧购买域重新带回。

## Decisions

- 新增英文 `/affiliate` 与中文 `/zh/affiliate` 页面，其余语言页脚回退英文页，避免一次性生成质量不稳定的机器翻译页面。
- 页面静态展示已由 TheAffs 公开产品接口确认的 15% 佣金和三档示例；实时规则仍以 TheAffs 控制台为准。
- 申请入口使用产品子域 `https://cleanclip.theaffs.com/login`，确保登录、申请和回调始终保留 CleanClip 上下文。
- 移除旧 `/affiliate` 外跳别名，并将页脚和结构化数据统一指向站内说明页。

## Work Performed

- 全站加载 TheAffs SDK，产品 ID 为 `prod_64143075d697`，Cookie 域为 `cleanclip.cc`。
- 清理官网发布源中的旧 `clip-purchase.macaify.com` 和旧 Affiliate 入口。
- 使用内置 Imagegen 生成联盟流程 3D 插画，压缩为 32 KB WebP 并落入 public 资源目录。
- 新增响应式 `AffiliateLanding.vue`，包含中英文介绍、加入流程、佣金示例、适合人群和常见问题。
- 更新九种语言页脚的 Affiliate URL 与 15% 佣金标签，并同步隐私、网络端点和 README 状态。

## Key Exchanges

- 用户先要求参照 ScreenSage 的后续改动，将 CleanClip 接入 TheAffs，并明确归因通过全局 Cookie 在前后端同步。
- 用户确认管理员姓名/邮箱编辑和试用配置属于本次必要范围。
- 第一轮实现和独立 QA 完成后，用户说明三个仓库推送即自动部署，并要求官网增加 TheAffs 链接与说明；若新增页面则使用 Imagegen。
- Codex 判断旧页脚直达外部登录且佣金文案过期，因而新增站内说明页，并通过 TheAffs 公开接口核实 CleanClip 当前为 15% 佣金。

## Workspace Snapshot

- workspace root: `/Users/lixindong/ThirdPartyProjects/cleanclip-vuepress`
- session file: `/Users/lixindong/ThirdPartyProjects/cleanclip-vuepress/.codex/sessions/2026/07/2026-07-15_08-43-10_add-cleanclip-affiliate-landing.md`
- git repo: `yes`
- branch: `main`
- HEAD before commit: `d8e1c7b`

### git status --short

```text
 M README.md
 M combined_markdown_zh.md
 M src/.vuepress/components/NewFooter.vue
 M src/.vuepress/config.js
 M src/.vuepress/config/strings/ar/download.js
 M src/.vuepress/config/strings/ar/faqs.js
 M src/.vuepress/config/strings/ar/footer.js
 M src/.vuepress/config/strings/ar/nav.js
 M src/.vuepress/config/strings/de/download.js
 M src/.vuepress/config/strings/de/faqs.js
 M src/.vuepress/config/strings/de/footer.js
 M src/.vuepress/config/strings/de/nav.js
 M src/.vuepress/config/strings/en/download.js
 M src/.vuepress/config/strings/en/faqs.js
 M src/.vuepress/config/strings/en/footer.js
 M src/.vuepress/config/strings/en/nav.js
 M src/.vuepress/config/strings/gb/download.js
 M src/.vuepress/config/strings/gb/faqs.js
 M src/.vuepress/config/strings/gb/footer.js
 M src/.vuepress/config/strings/gb/nav.js
 M src/.vuepress/config/strings/jp/download.js
 M src/.vuepress/config/strings/jp/faqs.js
 M src/.vuepress/config/strings/jp/footer.js
 M src/.vuepress/config/strings/jp/nav.js
 M src/.vuepress/config/strings/ko/download.js
 M src/.vuepress/config/strings/ko/faqs.js
 M src/.vuepress/config/strings/ko/footer.js
 M src/.vuepress/config/strings/ko/nav.js
 M src/.vuepress/config/strings/se/download.js
 M src/.vuepress/config/strings/se/faqs.js
 M src/.vuepress/config/strings/se/footer.js
 M src/.vuepress/config/strings/se/nav.js
 M src/.vuepress/config/strings/sk/download.js
 M src/.vuepress/config/strings/sk/faqs.js
 M src/.vuepress/config/strings/sk/footer.js
 M src/.vuepress/config/strings/sk/nav.js
 M src/.vuepress/config/strings/zh/download.js
 M src/.vuepress/config/strings/zh/faqs.js
 M src/.vuepress/config/strings/zh/footer.js
 M src/.vuepress/config/strings/zh/nav.js
 M src/.vuepress/plugins/promotion/Promotion.vue
 M src/.vuepress/plugins/referral/enhanceAppFile.js
 M src/.vuepress/theme/templates/dev.html
 M src/.vuepress/theme/templates/ssr.html
 M src/ar/docs/network-endpoints.md
 M src/ar/docs/privacy.md
 M src/ar/index.md
 M src/de/docs/network-endpoints.md
 M src/de/docs/privacy.md
 M src/de/index.md
 M src/docs/network-endpoints.md
 M src/docs/privacy.md
 M src/gb/docs/network-endpoints.md
 M src/gb/docs/privacy.md
 M src/gb/index.md
 M src/index.md
 M src/jp/docs/network-endpoints.md
 M src/jp/docs/privacy.md
 M src/jp/index.md
 M src/ko/docs/network-endpoints.md
 M src/ko/docs/privacy.md
 M src/ko/index.md
 M src/pages/a-cheaper-more-systematic-alternative-to-paste.md
 M src/pages/a-feature-rich-alternative-to-maccy.md
 M src/pages/a-more-powerful-system-level-alternative-to-pastepal.md
 M src/se/docs/network-endpoints.md
 M src/se/docs/privacy.md
 M src/se/index.md
 M src/sk/docs/network-endpoints.md
 M src/sk/docs/privacy.md
 M src/sk/index.md
 M src/zh/docs/network-endpoints.md
 M src/zh/docs/privacy.md
 M src/zh/index.md
 M src/zh/pages/a-cheaper-more-systematic-alternative-to-paste.md
 M src/zh/pages/a-feature-rich-alternative-to-maccy.md
 M src/zh/pages/a-more-powerful-system-level-alternative-to-pastepal.md
?? src/.vuepress/components/AffiliateLanding.vue
?? src/.vuepress/public/images/affiliate/
?? src/affiliate.md
?? src/zh/affiliate.md
```

### git diff --stat

```text
 README.md                                          | 43 ++++++++--------------
 combined_markdown_zh.md                            | 19 +++++-----
 src/.vuepress/components/NewFooter.vue             |  6 +--
 src/.vuepress/config.js                            | 14 ++++---
 src/.vuepress/config/strings/ar/download.js        |  2 +-
 src/.vuepress/config/strings/ar/faqs.js            |  4 +-
 src/.vuepress/config/strings/ar/footer.js          |  5 ++-
 src/.vuepress/config/strings/ar/nav.js             |  2 +-
 src/.vuepress/config/strings/de/download.js        |  2 +-
 src/.vuepress/config/strings/de/faqs.js            |  4 +-
 src/.vuepress/config/strings/de/footer.js          |  5 ++-
 src/.vuepress/config/strings/de/nav.js             |  2 +-
 src/.vuepress/config/strings/en/download.js        |  2 +-
 src/.vuepress/config/strings/en/faqs.js            |  4 +-
 src/.vuepress/config/strings/en/footer.js          |  3 +-
 src/.vuepress/config/strings/en/nav.js             |  2 +-
 src/.vuepress/config/strings/gb/download.js        |  2 +-
 src/.vuepress/config/strings/gb/faqs.js            |  4 +-
 src/.vuepress/config/strings/gb/footer.js          |  5 ++-
 src/.vuepress/config/strings/gb/nav.js             |  2 +-
 src/.vuepress/config/strings/jp/download.js        |  2 +-
 src/.vuepress/config/strings/jp/faqs.js            |  4 +-
 src/.vuepress/config/strings/jp/footer.js          |  5 ++-
 src/.vuepress/config/strings/jp/nav.js             |  2 +-
 src/.vuepress/config/strings/ko/download.js        |  2 +-
 src/.vuepress/config/strings/ko/faqs.js            |  4 +-
 src/.vuepress/config/strings/ko/footer.js          |  5 ++-
 src/.vuepress/config/strings/ko/nav.js             |  2 +-
 src/.vuepress/config/strings/se/download.js        |  2 +-
 src/.vuepress/config/strings/se/faqs.js            |  4 +-
 src/.vuepress/config/strings/se/footer.js          |  5 ++-
 src/.vuepress/config/strings/se/nav.js             |  2 +-
 src/.vuepress/config/strings/sk/download.js        |  2 +-
 src/.vuepress/config/strings/sk/faqs.js            |  4 +-
 src/.vuepress/config/strings/sk/footer.js          |  5 ++-
 src/.vuepress/config/strings/sk/nav.js             |  2 +-
 src/.vuepress/config/strings/zh/download.js        |  2 +-
 src/.vuepress/config/strings/zh/faqs.js            |  4 +-
 src/.vuepress/config/strings/zh/footer.js          |  3 +-
 src/.vuepress/config/strings/zh/nav.js             |  2 +-
 src/.vuepress/plugins/promotion/Promotion.vue      | 36 +++---------------
 src/.vuepress/plugins/referral/enhanceAppFile.js   |  4 +-
 src/.vuepress/theme/templates/dev.html             |  6 +--
 src/.vuepress/theme/templates/ssr.html             |  6 +--
 src/ar/docs/network-endpoints.md                   | 13 ++++++-
 src/ar/docs/privacy.md                             | 18 ++++++---
 src/ar/index.md                                    |  2 +-
 src/de/docs/network-endpoints.md                   | 13 ++++++-
 src/de/docs/privacy.md                             | 20 +++++++---
 src/de/index.md                                    |  2 +-
 src/docs/network-endpoints.md                      | 15 ++++++--
 src/docs/privacy.md                                | 20 +++++++---
 src/gb/docs/network-endpoints.md                   | 15 ++++++--
 src/gb/docs/privacy.md                             | 20 +++++++---
 src/gb/index.md                                    |  2 +-
 src/index.md                                       |  6 +--
 src/jp/docs/network-endpoints.md                   | 13 ++++++-
 src/jp/docs/privacy.md                             | 20 +++++++---
 src/jp/index.md                                    |  2 +-
 src/ko/docs/network-endpoints.md                   | 13 ++++++-
 src/ko/docs/privacy.md                             | 20 +++++++---
 src/ko/index.md                                    |  2 +-
 ...cheaper-more-systematic-alternative-to-paste.md |  6 +--
 src/pages/a-feature-rich-alternative-to-maccy.md   |  4 +-
 ...owerful-system-level-alternative-to-pastepal.md |  4 +-
 src/se/docs/network-endpoints.md                   | 13 ++++++-
 src/se/docs/privacy.md                             | 20 +++++++---
 src/se/index.md                                    |  4 +-
 src/sk/docs/network-endpoints.md                   | 13 ++++++-
 src/sk/docs/privacy.md                             | 20 +++++++---
 src/sk/index.md                                    |  2 +-
 src/zh/docs/network-endpoints.md                   | 13 ++++++-
 src/zh/docs/privacy.md                             | 20 +++++++---
 src/zh/index.md                                    |  4 +-
 ...cheaper-more-systematic-alternative-to-paste.md |  6 +--
 .../pages/a-feature-rich-alternative-to-maccy.md   |  4 +-
 ...owerful-system-level-alternative-to-pastepal.md |  4 +-
 77 files changed, 365 insertions(+), 235 deletions(-)
```

## Validation

- `git diff --check` 通过。
- 变更的 JavaScript 文件通过 `node --check`。
- `AffiliateLanding.vue` 使用 `vue-template-compiler@2.6.14` 完成 Vue 2 SFC 模板编译，无错误。
- TheAffs 公开产品接口返回 CleanClip 三档套餐，佣金率均为 15%，佣金金额为 $3/$4.50/$9。
- 外部 HTTP 探测节点确认 `cleanclip.theaffs.com/login` 返回 200；当前机器的 CONNECT 代理访问该新子域存在局部 TLS 握手问题。
- 官网发布源中旧购买域、旧 Affiliate 商店链接和过期 $10 文案均为 0 处。
- 完整 VuePress 生产构建未在本地重复执行；部署由推送后的自动流水线负责。

## Commit

- message: `接入 TheAffs 联盟计划与官网说明页`
- hash: 见包含本记录的 Git 提交
- result: 准备随本次官网改动提交并推送到 `main`
