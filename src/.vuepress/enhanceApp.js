import './theme/styles/index.less';

export default ({ router, siteData }) => {
  router.beforeResolve((to, from, next) => {
    console.log("resolve", from, to)
    console.log("site", siteData)
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