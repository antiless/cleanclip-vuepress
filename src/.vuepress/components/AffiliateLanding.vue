<template>
  <main class="affiliate-poster">
    <div class="affiliate-poster-shell">
      <section class="affiliate-poster-copy" :aria-labelledby="headingId">
        <p class="affiliate-poster-eyebrow">{{ copy.eyebrow }}</p>

        <h1 :id="headingId" class="affiliate-poster-title">
          <span>{{ copy.titleShare }}</span>
          <span>{{ copy.titleProduct }}</span>
          <span>
            {{ copy.titleAction }}
            <strong>{{ copy.rate }}</strong>
          </span>
        </h1>

        <p class="affiliate-poster-lead">{{ copy.lead }}</p>

        <a
          class="affiliate-poster-cta"
          :href="joinUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ copy.join }}
          <a-icon type="arrow-up" />
        </a>

        <div class="affiliate-poster-steps" :aria-label="copy.stepsLabel">
          <div class="affiliate-poster-step">
            <span class="affiliate-poster-step-number">1</span>
            <a-icon type="share-alt" />
            <strong>{{ copy.share }}</strong>
          </div>
          <span class="affiliate-poster-divider" aria-hidden="true"></span>
          <div class="affiliate-poster-step">
            <span class="affiliate-poster-step-number">2</span>
            <a-icon type="dollar" />
            <strong>{{ copy.earn }}</strong>
          </div>
        </div>

        <p class="affiliate-poster-note">{{ copy.note }}</p>
      </section>

      <div class="affiliate-poster-rate" aria-hidden="true">
        <span class="affiliate-poster-rate-number">25</span>
        <span class="affiliate-poster-rate-symbol">%</span>
        <img
          class="affiliate-poster-brush"
          src="/images/affiliate/affiliate-brush-v2.png"
          alt=""
          width="1774"
          height="887"
        />
      </div>
    </div>
  </main>
</template>

<script>
const copies = {
  en: {
    eyebrow: 'CleanClip Affiliate Program',
    titleShare: 'Share',
    titleProduct: 'CleanClip.',
    titleAction: 'Keep',
    rate: '25%.',
    lead: 'One link or code. Every eligible sale is tracked automatically.',
    join: 'Join the program',
    stepsLabel: 'How the CleanClip affiliate program works',
    share: 'Share',
    earn: 'Earn',
    note: 'Tracked and managed through TheAffs.',
  },
  zh: {
    eyebrow: 'CleanClip 联盟计划',
    titleShare: '分享',
    titleProduct: 'CleanClip。',
    titleAction: '获得',
    rate: '25% 佣金。',
    lead: '一个链接或优惠码，合格订单自动归因。',
    join: '加入联盟计划',
    stepsLabel: 'CleanClip 联盟计划流程',
    share: '分享',
    earn: '获得佣金',
    note: '归因、佣金与结算由 TheAffs 管理。',
  },
}

export default {
  name: 'AffiliateLanding',

  data() {
    return {
      headingId: 'affiliate-poster-title',
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
  },
}
</script>

<style>
.affiliate-page .theme-antdocs-content:not(.custom) {
  box-sizing: border-box;
  width: 100%;
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
}

.affiliate-page .page-edit,
.affiliate-page .page-nav {
  display: none;
}

.affiliate-poster {
  --poster-paper: #f4f0e6;
  --poster-ink: #171b18;
  --poster-muted: #555c57;
  --poster-green: #24834e;
  position: relative;
  width: 100%;
  min-height: calc(100vh - 96px);
  margin: 0 !important;
  overflow: hidden;
  color: var(--poster-ink);
  background-color: var(--poster-paper);
  background-image: url('/images/affiliate/affiliate-paper-v2.webp');
  background-size: 768px 512px;
}

.affiliate-poster-shell {
  position: relative;
  box-sizing: border-box;
  width: min(100%, 1500px);
  min-height: 920px;
  margin: 0 auto;
  padding: clamp(112px, 10vw, 168px) clamp(32px, 5vw, 80px) 54px;
}

.affiliate-poster-copy {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: min(54vw, 690px);
  min-height: 750px;
  animation: affiliate-poster-enter 700ms cubic-bezier(0.22, 1, 0.36, 1) both;
}

.affiliate-poster-eyebrow {
  margin: 0 0 24px;
  color: var(--poster-green);
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: clamp(15px, 1.35vw, 20px);
  font-weight: 700;
  letter-spacing: -0.025em;
}

.affiliate-page .affiliate-poster-title {
  margin: 0;
  color: var(--poster-ink);
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: clamp(64px, 7.1vw, 106px);
  font-weight: 800;
  letter-spacing: -0.07em;
  line-height: 0.86;
}

.affiliate-poster-title span {
  display: block;
}

.affiliate-poster-title span + span {
  margin-top: 0.08em;
}

.affiliate-poster-title strong {
  color: var(--poster-green);
  font-weight: inherit;
  white-space: nowrap;
}

.affiliate-poster-lead {
  max-width: 580px;
  margin: 30px 0 0;
  color: var(--poster-muted);
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: clamp(17px, 1.45vw, 21px);
  font-weight: 400;
  line-height: 1.45;
}

.affiliate-poster-cta {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: min(100%, 340px);
  min-height: 72px;
  margin-top: 34px;
  padding: 0 30px;
  border-radius: 12px;
  color: #f9f7ef !important;
  background: var(--poster-green);
  box-shadow: 0 14px 28px rgba(22, 75, 45, 0.14);
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none !important;
  transition: transform 180ms cubic-bezier(0.22, 1, 0.36, 1), background-color 180ms ease;
}

.affiliate-poster-cta:hover {
  color: #fff !important;
  background: #1c6d40;
  transform: translateY(-3px);
}

.affiliate-poster-cta:focus-visible {
  outline: 3px solid var(--poster-ink);
  outline-offset: 4px;
}

.affiliate-poster-cta .anticon {
  display: inline-block !important;
  font-size: 18px;
  transform: rotate(45deg);
}

.affiliate-poster-steps {
  display: flex;
  align-items: center;
  gap: 32px;
  margin-top: 38px;
  font-family: 'Bricolage Grotesque', sans-serif;
}

.affiliate-poster-step {
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 150px;
}

.affiliate-poster-step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 36px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: #f9f7ef;
  background: var(--poster-green);
  font-size: 15px;
  font-weight: 800;
}

.affiliate-poster-step .anticon {
  display: inline-block !important;
  color: var(--poster-ink);
  font-size: 30px;
}

.affiliate-poster-step strong {
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.04em;
}

.affiliate-poster-divider {
  width: 1px;
  height: 56px;
  background: rgba(23, 27, 24, 0.2);
}

.affiliate-poster-note {
  margin: auto 0 0;
  color: var(--poster-muted);
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 14px;
  line-height: 1.5;
}

.affiliate-poster-rate {
  position: absolute;
  z-index: 1;
  top: 96px;
  right: -3%;
  bottom: 0;
  width: 55%;
  overflow: hidden;
  color: var(--poster-green);
  font-family: 'Bricolage Grotesque', sans-serif;
  font-weight: 800;
  letter-spacing: -0.1em;
  line-height: 0.7;
  pointer-events: none;
  animation: affiliate-poster-rate-enter 900ms 80ms cubic-bezier(0.22, 1, 0.36, 1) both;
}

.affiliate-poster-rate-number,
.affiliate-poster-rate-symbol {
  position: absolute;
  display: block;
  text-shadow: 0 0 1px rgba(20, 76, 44, 0.2);
}

.affiliate-poster-rate-number {
  top: 40px;
  left: 0;
  font-size: clamp(320px, 33vw, 500px);
}

.affiliate-poster-rate-symbol {
  top: 445px;
  left: 12%;
  font-size: clamp(340px, 36vw, 540px);
}

.affiliate-poster-brush {
  position: absolute;
  z-index: 3;
  right: -20%;
  bottom: -5%;
  width: 155%;
  max-width: none;
  height: auto;
  opacity: 0.96;
  transform: rotate(-4deg);
}

@keyframes affiliate-poster-enter {
  from {
    opacity: 0;
    transform: translateY(22px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes affiliate-poster-rate-enter {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 1050px) {
  .affiliate-poster-shell {
    min-height: 850px;
  }

  .affiliate-poster-copy {
    width: 62%;
    min-height: 690px;
  }

  .affiliate-poster-rate {
    right: -20%;
    width: 65%;
    opacity: 0.9;
  }

  .affiliate-poster-rate-symbol {
    top: 410px;
  }
}

@media (max-width: 760px) {
  .affiliate-poster-shell {
    min-height: 900px;
    padding: 100px 22px 32px;
  }

  .affiliate-poster-copy {
    width: 100%;
    min-height: 760px;
  }

  .affiliate-poster-eyebrow {
    margin-bottom: 20px;
  }

  .affiliate-poster-title {
    max-width: 620px;
    font-size: clamp(55px, 17vw, 82px);
    line-height: 0.88;
  }

  .affiliate-poster-title strong {
    display: block;
    margin-top: 0.08em;
  }

  .affiliate-poster-lead {
    max-width: 480px;
    margin-top: 24px;
    padding-right: 24px;
  }

  .affiliate-poster-cta {
    min-height: 64px;
    margin-top: 28px;
  }

  .affiliate-poster-steps {
    align-items: flex-start;
    flex-direction: column;
    gap: 18px;
    margin-top: 32px;
  }

  .affiliate-poster-divider {
    display: none;
  }

  .affiliate-poster-note {
    max-width: 260px;
  }

  .affiliate-poster-rate {
    top: auto;
    right: -42%;
    bottom: -7%;
    width: 105%;
    height: 410px;
    opacity: 0.18;
  }

  .affiliate-poster-rate-number {
    top: 30px;
    left: 0;
    font-size: 270px;
  }

  .affiliate-poster-rate-symbol {
    top: 225px;
    left: 18%;
    font-size: 280px;
  }

  .affiliate-poster-brush {
    bottom: -24%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .affiliate-poster-copy,
  .affiliate-poster-rate {
    animation: none;
  }

  .affiliate-poster-cta {
    transition: none;
  }
}
</style>
