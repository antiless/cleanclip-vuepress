import './theme/styles/index.less';

const IMPORTANT_CLICK_EVENTS = [
  {
    name: 'download_started',
    datafast: true,
    matches: url =>
      url.hostname === 'cleanclip.cc' &&
      (url.pathname.endsWith('.dmg') || url.pathname.includes('/releases/download/')),
  },
  {
    name: 'pricing_cta_clicked',
    datafast: false,
    matches: url => url.hostname === 'pricing.cleanclip.cc',
  },
];

function trackTheAffsEvent(name, properties) {
  if (!window.AffSDK || typeof window.AffSDK.track !== 'function') return;
  try {
    window.AffSDK.track(name, { properties });
  } catch (_) {
    // Analytics must never interfere with navigation.
  }
}

function trackImportantLinkClick(event) {
  const anchor = event.target && event.target.closest
    ? event.target.closest('a[href]')
    : null;
  if (!anchor) return;

  let destination;
  try {
    destination = new URL(anchor.href, window.location.href);
  } catch (_) {
    return;
  }

  const trackedEvent = IMPORTANT_CLICK_EVENTS.find(item => item.matches(destination));
  if (!trackedEvent) return;

  const properties = {
    source_path: window.location.pathname,
    destination_host: destination.hostname,
    destination_path: destination.pathname,
  };

  if (trackedEvent.datafast && typeof window.datafast === 'function') {
    window.datafast(trackedEvent.name, properties);
  }
  trackTheAffsEvent(trackedEvent.name, properties);
}

export default ({ router, siteData, isServer }) => {
  if (!isServer) {
    document.addEventListener('click', trackImportantLinkClick);
  }

  router.beforeResolve((to, from, next) => {
    console.log("resolve", from, to)
    console.log("site", siteData.themeConfig.alias)
    const toReroute = siteData.themeConfig.alias || []

    // 去掉后缀 .html
    let path = to.fullPath.split(".html")[0]
    let flag = toReroute[path]
    console.log("flag", flag, "fullPath", to.fullPath)
    if (flag != undefined && flag.length > 0) {
      window.location.href = flag
    } else {
      next();
    }
  });
};
