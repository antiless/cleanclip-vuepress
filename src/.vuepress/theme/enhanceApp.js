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
}
