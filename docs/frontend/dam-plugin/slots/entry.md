---
sidebar_position: 1
---

接受一个 PluginApp 对象作为入参，PluginApp 对象封装并对外提供调用 DAM 项目里的一些能力，比如注册新的自定义路由和增加左侧导航栏的自定义链接等。

## 插件类型

[Function](../plugin-types/function-plugin)

## 数据类型

```typescript
type NonEmptyString<S extends string> = S extends '' ? never : S;

type DamRoute<S extends string> = `/dam_enterprise/${NonEmptyString<S>}`;

// 插件自己注册的路由
type DamPluginRoute<S extends string> = DamRoute<`plugin/${NonEmptyString<S>}`>;

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

interface FunctionPlugin_Entry {
  (app: PluginApp): void;
}
```

## 例子

```typescript title="entry_plugin.ts"
function plugin(app: PluginApp) {
  console.log('...', arguments);

  app.addRoute({
    to: '/dam_enterprise/plugin/demo1',
    plugin: () => import('./menu_plugin'),
  });
}
export default plugin;
```
