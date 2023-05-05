---
sidebar_position: 2
---

左侧导航栏的链接

![global-left-menu](./assets/global-left-menu.png)

## 数据结构

```typescript
interface MenuItem {
  key: string;
  path: string;
  icon: string;
  title: string;
}

type FunctionPlugin_GlobalLeftMenu = () => MenuItem[];
```

## 例子

TODO
