import './theme/styles/index.less';

const DATAFAST_CLICK_EVENTS = [
  {
    name: 'view_pricing',
    matches: url => url.hostname === 'pricing.cleanclip.cc',
  },
  {
    name: 'download_started',
    matches: url =>
      url.hostname === 'cleanclip.cc' &&
      (url.pathname.endsWith('.dmg') || url.pathname.includes('/releases/download/')),
  },
];

function trackImportantLinkClick(event) {
  const anchor = event.target && event.target.closest
    ? event.target.closest('a[href]')
    : null;
  if (!anchor || typeof window.datafast !== 'function') return;

  let destination;
  try {
    destination = new URL(anchor.href, window.location.href);
  } catch (_) {
    return;
  }

  const trackedEvent = DATAFAST_CLICK_EVENTS.find(item => item.matches(destination));
  if (!trackedEvent) return;

  window.datafast(trackedEvent.name, {
    source_path: window.location.pathname,
    destination_host: destination.hostname,
    destination_path: destination.pathname,
  });
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
