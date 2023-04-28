---
sidebar_position: 3
---

Portal 详情页的顶部自定义按钮'左侧'插入

![portal-header-action-left](./assets/portal-header-action-left.jpeg)

```typescript
interface ComponentPlugin_PortalHeaderActionLeft<T> {
  render: (container: HTMLElement | ShadowRoot, props: T) => void;
  cssString: string | undefined;
  useShadowDom: boolean | undefined;
}
```
