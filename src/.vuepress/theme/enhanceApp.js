import store from './store';
import Antd from 'ant-design-vue';
import './styles/index.less';

export default ({
  Vue,
  // options,
  // router,
  // siteData,
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  Vue.mixin({ store })
  Vue.use(Antd)

  router.addRoute(
		{
			path: '/pricing', // the url users will visit
			beforeEnter(to, from, next) {
                // you can add analysis or logging stuff here

                // url user will be redirected to 👇
				window.location.href = 'https://clip-purchase.macaify.com';
			},
		})
  router.addRoute(
		{
			path: '/pricing.html', // the url users will visit
			beforeEnter(to, from, next) {
                // you can add analysis or logging stuff here

                // url user will be redirected to 👇
				window.location.href = 'https://clip-purchase.macaify.com';
			},
		})
    router.addRoute(
      {
        path: '/affiliate', // the url users will visit
        beforeEnter(to, from, next) {
                  // you can add analysis or logging stuff here
  
                  // url user will be redirected to 👇
          window.location.href = 'https://store.cleanclip.cc/affiliates';
        },
      })
  
}
