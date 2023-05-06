import type { DamPluginRoute } from './typings';

interface ComponentPlugin<T = any> {
  render: (container: HTMLElement | ShadowRoot, props: T) => void;
  cssString: string | undefined;
  useShadowDom: boolean | undefined;
}

interface ComponentRouteConfig<S extends string> {
  /**
   * 路由的路径，会在浏览器地址栏显示。
   * 比如：/dam_enterprise/plugin/demo1
   */
  to: DamPluginRoute<S>;
}
interface IframeType<S extends string> extends ComponentRouteConfig<S> {
  /**
   * iframe的静态资源地址
   */
  url: string;
}
interface ComponentType<S extends string> extends ComponentRouteConfig<S> {
  // Component Plugin加载函数
  plugin: ComponentPlugin | (() => Promise<ComponentPlugin>);
}

type RouteConfig<S extends string> = IframeType<S> | ComponentType<S>;

interface PluginApp {
  addRoute(config: RouteConfig<any>): void;
}

function entry_plugin(app: PluginApp) {
  console.log('...', arguments);

  app.addRoute({
    to: '/dam_enterprise/plugin/demo1',
    plugin: () => import('./component_plugin'),
  });
}
export default entry_plugin;
