<template>
  <div class="affiliate-landing">
    <section class="affiliate-hero">
      <div class="affiliate-shell affiliate-hero-grid">
        <div class="affiliate-hero-copy">
          <p class="affiliate-kicker">{{ copy.eyebrow }}</p>
          <h1>{{ copy.title }}</h1>
          <p class="affiliate-lead">{{ copy.lead }}</p>
          <div class="affiliate-actions">
            <a
              class="affiliate-button affiliate-button-primary"
              :href="joinUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ copy.join }}
              <span aria-hidden="true">↗</span>
            </a>
            <a class="affiliate-button affiliate-button-secondary" href="https://pricing.cleanclip.cc/">
              {{ copy.pricing }}
            </a>
          </div>
          <p class="affiliate-note">{{ copy.joinNote }}</p>
        </div>
        <div class="affiliate-hero-art">
          <img
            src="/images/affiliate/affiliate-program-hero.webp"
            :alt="copy.imageAlt"
            width="1536"
            height="1024"
          />
        </div>
      </div>
    </section>

    <section class="affiliate-shell affiliate-stats" :aria-label="copy.highlightsLabel">
      <article v-for="item in copy.highlights" :key="item.label">
        <strong>{{ item.value }}</strong>
        <span>{{ item.label }}</span>
      </article>
    </section>

    <section class="affiliate-shell affiliate-section">
      <div class="affiliate-section-heading">
        <p class="affiliate-kicker">{{ copy.howEyebrow }}</p>
        <h2>{{ copy.howTitle }}</h2>
        <p>{{ copy.howLead }}</p>
      </div>
      <div class="affiliate-steps">
        <article v-for="(step, index) in copy.steps" :key="step.title">
          <span class="affiliate-step-number">0{{ index + 1 }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.body }}</p>
        </article>
      </div>
    </section>

    <section class="affiliate-earnings-section">
      <div class="affiliate-shell">
        <div class="affiliate-section-heading affiliate-section-heading-light">
          <p class="affiliate-kicker">{{ copy.earningsEyebrow }}</p>
          <h2>{{ copy.earningsTitle }}</h2>
          <p>{{ copy.earningsLead }}</p>
        </div>
        <div class="affiliate-plan-grid">
          <article v-for="plan in plans" :key="plan.name">
            <div>
              <span class="affiliate-plan-name">{{ plan.name }}</span>
              <span class="affiliate-plan-price">{{ plan.price }}</span>
            </div>
            <div class="affiliate-plan-commission">
              <strong>{{ plan.commission }}</strong>
              <span>{{ copy.perSale }}</span>
            </div>
          </article>
        </div>
        <p class="affiliate-rate-note">{{ copy.rateNote }}</p>
      </div>
    </section>

    <section class="affiliate-shell affiliate-section affiliate-fit-section">
      <div class="affiliate-fit-copy">
        <p class="affiliate-kicker">{{ copy.fitEyebrow }}</p>
        <h2>{{ copy.fitTitle }}</h2>
        <p>{{ copy.fitLead }}</p>
      </div>
      <ul class="affiliate-fit-list">
        <li v-for="item in copy.audiences" :key="item">
          <span aria-hidden="true">✓</span>
          {{ item }}
        </li>
      </ul>
    </section>

    <section class="affiliate-shell affiliate-faq-section">
      <div class="affiliate-section-heading">
        <p class="affiliate-kicker">{{ copy.faqEyebrow }}</p>
        <h2>{{ copy.faqTitle }}</h2>
      </div>
      <div class="affiliate-faq-grid">
        <article v-for="item in copy.faqs" :key="item.question">
          <h3>{{ item.question }}</h3>
          <p>{{ item.answer }}</p>
        </article>
      </div>
    </section>

    <section class="affiliate-shell affiliate-final-cta">
      <div>
        <p class="affiliate-kicker">{{ copy.finalEyebrow }}</p>
        <h2>{{ copy.finalTitle }}</h2>
        <p>{{ copy.finalLead }}</p>
      </div>
      <a
        class="affiliate-button affiliate-button-primary"
        :href="joinUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ copy.join }}
        <span aria-hidden="true">↗</span>
      </a>
    </section>
  </div>
</template>

<script>
const copies = {
  en: {
    eyebrow: 'CleanClip Affiliate Program',
    title: 'Recommend a cleaner clipboard. Earn 15%.',
    lead: 'Share CleanClip with your audience using your own link or discount code. When an eligible order is attributed to you, the commission appears in your TheAffs dashboard.',
    join: 'Join the affiliate program',
    pricing: 'See CleanClip pricing',
    joinNote: 'Free to apply. A TheAffs account is required.',
    imageAlt: 'Affiliate flow from a creator to CleanClip customers and commission',
    highlightsLabel: 'Affiliate program highlights',
    highlights: [
      { value: '15%', label: 'on every eligible sale' },
      { value: '$3–$9', label: 'current commission per order' },
      { value: 'TheAffs', label: 'links, codes and reporting' },
    ],
    howEyebrow: 'A simple loop',
    howTitle: 'Share once. Let attribution do the rest.',
    howLead: 'The program gives you the tools to recommend CleanClip without manually reporting sales.',
    steps: [
      { title: 'Apply', body: 'Sign in to TheAffs, open the CleanClip program and submit your application.' },
      { title: 'Prepare', body: 'Create your partner profile, then choose a referral link or an assigned discount code.' },
      { title: 'Share', body: 'Recommend CleanClip in articles, videos, newsletters or communities where it is genuinely useful.' },
      { title: 'Track', body: 'See attributed orders and commission status in your TheAffs dashboard.' },
    ],
    earningsEyebrow: 'Current commission',
    earningsTitle: 'The same 15% rate across every plan.',
    earningsLead: 'Based on the CleanClip prices currently promoted through TheAffs.',
    perSale: 'per eligible sale',
    rateNote: 'Prices, eligibility and commission rules may change. The current terms shown in your TheAffs dashboard are authoritative.',
    fitEyebrow: 'A good fit for',
    fitTitle: 'People who teach better Mac workflows.',
    fitLead: 'The strongest recommendations come from people who already help others work with less friction.',
    audiences: [
      'Mac, productivity and software creators',
      'Newsletter, blog and community owners',
      'Educators and workflow consultants',
      'Existing CleanClip users with an audience',
    ],
    faqEyebrow: 'Details',
    faqTitle: 'Before you apply',
    faqs: [
      { question: 'How is a sale attributed?', answer: 'TheAffs stores referral identifiers in cookies scoped to cleanclip.cc. The checkout backend copies those identifiers into Stripe metadata when the order is created.' },
      { question: 'Do I need to install anything?', answer: 'No. You only need your TheAffs account and the link or code provided in your partner dashboard.' },
      { question: 'Where do I see orders and payouts?', answer: 'Your TheAffs dashboard contains your links, codes, attributed orders, commission status and payout settings.' },
    ],
    finalEyebrow: 'Ready when you are',
    finalTitle: 'Turn a useful recommendation into recurring upside.',
    finalLead: 'Apply once, choose how you want to share, and keep the experience honest and helpful.',
  },
  zh: {
    eyebrow: 'CleanClip 联盟计划',
    title: '推荐更顺手的剪贴板，获得 15% 佣金。',
    lead: '使用你的专属链接或优惠码向受众推荐 CleanClip。合格订单成功归因后，佣金会显示在你的 TheAffs 控制台中。',
    join: '加入联盟计划',
    pricing: '查看 CleanClip 价格',
    joinNote: '免费申请，需要注册 TheAffs 账号。',
    imageAlt: '创作者推荐 CleanClip，并从客户订单获得佣金的联盟流程',
    highlightsLabel: '联盟计划特点',
    highlights: [
      { value: '15%', label: '每笔合格订单佣金' },
      { value: '$3–$9', label: '当前每单佣金范围' },
      { value: 'TheAffs', label: '链接、优惠码与数据追踪' },
    ],
    howEyebrow: '简单闭环',
    howTitle: '专注分享，归因交给系统。',
    howLead: '联盟计划提供完整的推荐工具，不需要手工申报订单。',
    steps: [
      { title: '申请', body: '登录 TheAffs，进入 CleanClip 联盟计划并提交申请。' },
      { title: '准备', body: '完善合作伙伴资料，选择专属推广链接或分配给你的优惠码。' },
      { title: '分享', body: '在文章、视频、邮件或社区中，向真正需要的人推荐 CleanClip。' },
      { title: '追踪', body: '在 TheAffs 控制台查看归因订单和佣金状态。' },
    ],
    earningsEyebrow: '当前佣金',
    earningsTitle: '所有套餐统一 15% 佣金。',
    earningsLead: '以下金额基于 TheAffs 当前推广的 CleanClip 售价。',
    perSale: '每笔合格订单',
    rateNote: '价格、订单资格和佣金规则可能调整，最终以 TheAffs 控制台展示的实时条款为准。',
    fitEyebrow: '适合这些伙伴',
    fitTitle: '帮助别人改善 Mac 工作流的人。',
    fitLead: '真正有效的推荐，来自已经在帮助别人减少操作摩擦的创作者和用户。',
    audiences: [
      'Mac、效率工具和软件内容创作者',
      'Newsletter、博客与社区运营者',
      '讲师、培训者与工作流顾问',
      '拥有受众的 CleanClip 用户',
    ],
    faqEyebrow: '更多信息',
    faqTitle: '申请之前',
    faqs: [
      { question: '订单如何归因？', answer: 'TheAffs 会将推广标识存储在 cleanclip.cc 域级 Cookie 中。创建订单时，结账后台会把这些标识写入 Stripe metadata。' },
      { question: '需要安装额外工具吗？', answer: '不需要。你只需要 TheAffs 账号，以及合作伙伴控制台生成的推广链接或优惠码。' },
      { question: '在哪里查看订单和结算？', answer: 'TheAffs 控制台会集中展示推广链接、优惠码、归因订单、佣金状态和收款设置。' },
    ],
    finalEyebrow: '现在开始',
    finalTitle: '让一次真诚推荐，产生持续回报。',
    finalLead: '提交申请，选择适合你的分享方式，并始终保持真实、有帮助。',
  },
}

export default {
  name: 'AffiliateLanding',

  data() {
    return {
      joinUrl: 'https://cleanclip.theaffs.com/login',
    }
  },

  computed: {
    isZh() {
      return (this.$lang || '').toLowerCase().startsWith('zh')
    },
    copy() {
      return this.isZh ? copies.zh : copies.en
    },
    plans() {
      if (this.isZh) {
        return [
          { name: '标准版 · 3 台设备', price: '$19.99', commission: '$3.00' },
          { name: '专业版 · 5 台设备', price: '$29.99', commission: '$4.50' },
          { name: '家庭版 · 12 台设备', price: '$59.99', commission: '$9.00' },
        ]
      }
      return [
        { name: 'Standard · 3 devices', price: '$19.99', commission: '$3.00' },
        { name: 'Pro · 5 devices', price: '$29.99', commission: '$4.50' },
        { name: 'Family · 12 devices', price: '$59.99', commission: '$9.00' },
      ]
    },
  },
}
</script>

<style>
.affiliate-page .theme-antdocs-content:not(.custom) {
  max-width: none;
  padding: 0;
}

.affiliate-page .page-edit,
.affiliate-page .page-nav {
  display: none;
}

.affiliate-landing {
  --affiliate-ink: #18221c;
  --affiliate-muted: #647067;
  --affiliate-green: #2d9d62;
  --affiliate-green-dark: #1f7a4a;
  --affiliate-mint: #eaf8ef;
  color: var(--affiliate-ink);
  overflow: hidden;
}

.affiliate-shell {
  box-sizing: border-box;
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
}

.affiliate-hero {
  padding: 128px 0 72px;
  background:
    radial-gradient(circle at 12% 20%, rgba(180, 239, 202, 0.38), transparent 34%),
    radial-gradient(circle at 88% 24%, rgba(210, 200, 255, 0.34), transparent 32%),
    #fbfaf7;
}

.affiliate-hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(440px, 1.08fr);
  align-items: center;
  gap: 56px;
}

.affiliate-kicker {
  margin: 0 0 18px;
  color: var(--affiliate-green-dark);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.affiliate-hero h1,
.affiliate-section-heading h2,
.affiliate-fit-copy h2,
.affiliate-final-cta h2 {
  margin: 0;
  color: var(--affiliate-ink);
  font-family: 'Bricolage Grotesque', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 800;
  letter-spacing: -0.045em;
}

.affiliate-hero h1 {
  max-width: 650px;
  font-size: clamp(48px, 6vw, 76px);
  line-height: 0.98;
}

.affiliate-lead {
  max-width: 620px;
  margin: 28px 0 0;
  color: var(--affiliate-muted);
  font-size: 19px;
  line-height: 1.7;
}

.affiliate-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;
}

.affiliate-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 0 22px;
  border: 1px solid transparent;
  border-radius: 14px;
  font-size: 15px;
  font-weight: 750;
  line-height: 1;
  text-decoration: none !important;
  transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
}

.affiliate-button:hover {
  transform: translateY(-2px);
}

.affiliate-button-primary {
  gap: 9px;
  color: #fff !important;
  background: var(--affiliate-green);
  box-shadow: 0 12px 28px rgba(45, 157, 98, 0.22);
}

.affiliate-button-primary:hover {
  background: var(--affiliate-green-dark);
  box-shadow: 0 16px 32px rgba(45, 157, 98, 0.27);
}

.affiliate-button-secondary {
  color: var(--affiliate-ink) !important;
  border-color: rgba(24, 34, 28, 0.12);
  background: rgba(255, 255, 255, 0.78);
}

.affiliate-note {
  margin: 14px 0 0;
  color: #7e8881;
  font-size: 13px;
}

.affiliate-hero-art img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 36px;
  box-shadow: 0 30px 80px rgba(74, 65, 55, 0.1);
}

.affiliate-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: -28px;
  border: 1px solid rgba(24, 34, 28, 0.09);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 18px 48px rgba(35, 55, 42, 0.08);
}

.affiliate-stats article {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 27px 32px;
  border-right: 1px solid rgba(24, 34, 28, 0.08);
}

.affiliate-stats article:last-child {
  border-right: 0;
}

.affiliate-stats strong {
  color: var(--affiliate-ink);
  font-size: 25px;
}

.affiliate-stats span {
  color: var(--affiliate-muted);
  font-size: 14px;
}

.affiliate-section,
.affiliate-faq-section {
  padding: 112px 0;
}

.affiliate-section-heading {
  max-width: 680px;
}

.affiliate-section-heading h2,
.affiliate-fit-copy h2,
.affiliate-final-cta h2 {
  font-size: clamp(38px, 4.2vw, 56px);
  line-height: 1.04;
}

.affiliate-section-heading > p:last-child,
.affiliate-fit-copy > p:last-child,
.affiliate-final-cta > div > p:last-child {
  margin: 20px 0 0;
  color: var(--affiliate-muted);
  font-size: 18px;
  line-height: 1.7;
}

.affiliate-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 52px;
}

.affiliate-steps article {
  min-height: 220px;
  padding: 26px;
  border: 1px solid rgba(24, 34, 28, 0.09);
  border-radius: 22px;
  background: #fff;
}

.affiliate-step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 13px;
  color: var(--affiliate-green-dark);
  background: var(--affiliate-mint);
  font-size: 13px;
  font-weight: 800;
}

.affiliate-steps h3,
.affiliate-faq-grid h3 {
  margin: 28px 0 0;
  color: var(--affiliate-ink);
  font-size: 19px;
}

.affiliate-steps p,
.affiliate-faq-grid p {
  margin: 12px 0 0;
  color: var(--affiliate-muted);
  font-size: 15px;
  line-height: 1.65;
}

.affiliate-earnings-section {
  padding: 108px 0;
  background: #17231c;
}

.affiliate-section-heading-light h2 {
  color: #fff;
}

.affiliate-section-heading-light > p:last-child {
  color: #aab8af;
}

.affiliate-section-heading-light .affiliate-kicker {
  color: #76d89d;
}

.affiliate-plan-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 52px;
}

.affiliate-plan-grid article {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 18px;
  min-height: 170px;
  padding: 26px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.055);
}

.affiliate-plan-grid article > div {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.affiliate-plan-name,
.affiliate-plan-commission span {
  color: #aab8af;
  font-size: 13px;
}

.affiliate-plan-price {
  color: #fff;
  font-size: 20px;
  font-weight: 750;
}

.affiliate-plan-commission {
  align-items: flex-end;
  text-align: right;
}

.affiliate-plan-commission strong {
  color: #76d89d;
  font-size: 34px;
  letter-spacing: -0.04em;
}

.affiliate-rate-note {
  max-width: 760px;
  margin: 24px 0 0;
  color: #89988f;
  font-size: 13px;
  line-height: 1.6;
}

.affiliate-fit-section {
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  gap: 96px;
  align-items: center;
}

.affiliate-fit-list {
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 0 !important;
  list-style: none !important;
}

.affiliate-fit-list li {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 20px;
  border: 1px solid rgba(24, 34, 28, 0.08);
  border-radius: 16px;
  color: var(--affiliate-ink);
  background: #f8faf8;
  font-size: 15px;
  list-style: none !important;
}

.affiliate-fit-list span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 27px;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  color: var(--affiliate-green-dark);
  background: var(--affiliate-mint);
  font-weight: 800;
}

.affiliate-faq-section {
  border-top: 1px solid rgba(24, 34, 28, 0.08);
}

.affiliate-faq-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 42px;
  margin-top: 50px;
}

.affiliate-faq-grid h3 {
  margin-top: 0;
}

.affiliate-final-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 56px;
  margin-bottom: 96px;
  padding: 58px;
  border-radius: 30px;
  background:
    radial-gradient(circle at 90% 10%, rgba(177, 224, 255, 0.55), transparent 34%),
    linear-gradient(135deg, #e9f8ee, #f3efff);
}

.affiliate-final-cta > div {
  max-width: 720px;
}

.affiliate-final-cta .affiliate-button {
  flex: 0 0 auto;
}

@media (max-width: 980px) {
  .affiliate-hero-grid {
    grid-template-columns: 1fr;
  }

  .affiliate-hero-copy {
    max-width: 760px;
  }

  .affiliate-hero-art {
    max-width: 760px;
  }

  .affiliate-steps {
    grid-template-columns: repeat(2, 1fr);
  }

  .affiliate-plan-grid,
  .affiliate-faq-grid {
    grid-template-columns: 1fr;
  }

  .affiliate-plan-grid article {
    min-height: 120px;
  }
}

@media (max-width: 720px) {
  .affiliate-shell {
    width: min(100% - 30px, 1180px);
  }

  .affiliate-hero {
    padding: 108px 0 58px;
  }

  .affiliate-hero-grid {
    gap: 38px;
  }

  .affiliate-hero h1 {
    font-size: 45px;
  }

  .affiliate-lead {
    font-size: 17px;
  }

  .affiliate-actions,
  .affiliate-actions .affiliate-button {
    width: 100%;
  }

  .affiliate-hero-art img {
    border-radius: 22px;
  }

  .affiliate-stats {
    grid-template-columns: 1fr;
    margin-top: -18px;
  }

  .affiliate-stats article {
    border-right: 0;
    border-bottom: 1px solid rgba(24, 34, 28, 0.08);
  }

  .affiliate-stats article:last-child {
    border-bottom: 0;
  }

  .affiliate-section,
  .affiliate-faq-section,
  .affiliate-earnings-section {
    padding: 78px 0;
  }

  .affiliate-steps {
    grid-template-columns: 1fr;
  }

  .affiliate-steps article {
    min-height: 0;
  }

  .affiliate-plan-grid article {
    align-items: flex-start;
  }

  .affiliate-fit-section {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .affiliate-final-cta {
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 60px;
    padding: 34px 26px;
  }

  .affiliate-final-cta .affiliate-button {
    width: 100%;
  }
}
</style>
