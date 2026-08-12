---
title: "optimize datafast conversion events"
created_at: "2026-08-12T22:46:47.961974+08:00"
agent: "Codex"
workspace_root: "/Users/lixindong/ThirdPartyProjects/cleanclip-vuepress"
session_path: "/Users/lixindong/ThirdPartyProjects/cleanclip-vuepress/.codex/sessions/2026/08/2026-08-12_22-46-47_optimize-datafast-conversion-events.md"
git_repo: true
branch: "main"
head_before_commit: "b8963f6"
---

# Session Record

## Request

排查 CleanClip 在 DataFast 中事件用量明显高于访问量的原因，按结论精简埋点；完成代码审查后，仅提交有效改动到 `main` 并推送。

## Constraints

- DataFast 套餐按 pageview 与 custom goal 等量计数，必须减少重复、低决策价值事件，同时保留下载、结账和支付链路。
- 工作区已有一组未提交的 Google Ads A/B 落地页与跨域归因实现；本次不能把这些独立改动混入 DataFast 优化提交。
- 不提交本地设计上下文 `.impeccable.md`，不覆盖或删除用户已有工作。

## Decisions

- Pricing 页面本身的 pageview 已表示成功到达，营销站不再额外发送 `view_pricing` / `pricing_cta_click`，每次价格页旅程可少计一个事件。
- review 发现单纯改名不会节省配额且会割裂历史目标，因此放弃事件改名，直接删除冗余目标。
- 只提交本次 DataFast 事件调整、相应 README 和本会话记录；Ads 实验、路由、归因库、测试脚本等预先存在的改动全部留在工作区。

## Work Performed

- 删除营销站 Pricing 链接自定义事件，保留 `download_started`。
- 同步 README 中的事件定义和推荐漏斗：`pricing pageview → initiate_checkout → payment`。
- 审查完整工作区，确认 DataFast 改动安全，并识别出不应随本次提交发布的 Ads/CMP 相关风险代码。

## Key Exchanges

- 用户提供 DataFast Billing 截图，指出 CleanClip 访问量不高但已产生 5,152 个事件，并要求结合 Google Ads 判断。
- Codex 通过 GSC、生产脚本和项目源码确认：没有重复加载脚本，主要原因是一次访问路径会产生多个 pageview/custom goal，特别是 Pricing 点击、Pricing 页面和滚动曝光的重复表达。
- 用户随后要求按建议优化；Codex 删除低价值事件并完成测试。用户最后要求 review，避免引入无效代码，然后提交并 push。
- review 后决定不把预先存在的 Ads A/B 与归因工作混入本次提交。

## Workspace Snapshot

- workspace root: `/Users/lixindong/ThirdPartyProjects/cleanclip-vuepress`
- session file: `/Users/lixindong/ThirdPartyProjects/cleanclip-vuepress/.codex/sessions/2026/08/2026-08-12_22-46-47_optimize-datafast-conversion-events.md`
- git repo: `yes`
- branch: `main`
- HEAD before commit: `b8963f6`

### git status --short

```text
 M README.md
 M package.json
 M src/.vuepress/config.js
 M src/.vuepress/enhanceApp.js
?? .impeccable.md
?? functions/
?? src/.vuepress/components/AdsLandingPage.vue
?? src/.vuepress/lib/
?? src/.vuepress/public/_headers
?? src/.vuepress/public/_routes.json
?? src/.vuepress/theme/layouts/AdsLanding.vue
?? src/__ab/
?? src/lp/
?? tests/
```

### git diff --stat

```text
 README.md                   |  15 ++++-
 package.json                |   4 +-
 src/.vuepress/config.js     |   1 -
 src/.vuepress/enhanceApp.js | 146 ++++++++++++++++++++++++++++++++++++++++----
 4 files changed, 148 insertions(+), 18 deletions(-)
```

## Validation

- `npm test` 通过：Ads attribution 现有断言全部通过。
- `node --check src/.vuepress/enhanceApp.js` 通过。
- `git diff --check` 通过；提交范围源码中不存在 `view_pricing`、`pricing_cta_click`、`faq_opened` 或 `data-fast-scroll`。
- VuePress 已完成 Client/Server 编译阶段，最终写入产物时因机器磁盘只剩约 130 MB 出现 `ENOSPC`；已删除本轮生成的 366 MB `node_modules` 与 626 MB 残缺产物。该失败与本次简单事件删除无关。
- `git fetch origin main` 后，本地与远端为 `0/0`，提交前没有分叉。

## Commit

- message: `优化 DataFast 关键事件统计`
- hash: `pending until commit`
- result: 本记录与精确暂存的 DataFast 改动将一并提交；提交后补全实现哈希。
