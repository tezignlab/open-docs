---
sidebar_position: 1
---

接受一个 PluginApp 对象作为入参，PluginApp 对象封装并对外提供调用 DAM 项目里的一些能力，比如注册新的自定义路由和增加左侧导航栏的自定义链接等。

## 插件类型

[Function](../plugin-types/function-plugin)

## 插件数据类型

```typescript
interface ComponentRouteConfig {
  title?: string;
  /**
   * 路由的路径，会在浏览器地址栏显示。
   */
  to: string;
}
interface IframeType extends ComponentRouteConfig {
  /**
   * iframe的静态资源地址
   */
  url: string;
}
interface ComponentType extends ComponentRouteConfig {
  plugin: ComponentPlugin | (() => Promise<ComponentPlugin>);
}

type RouteConfig = IframeType | ComponentType;

interface PluginApp {
  addRoute(config: RouteConfig): void;
}

interface FunctionPlugin_Entry {
  (app: PluginApp): void;
}
```

## 例子

TODO
