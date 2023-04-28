---
sidebar_position: 2
---

左侧导航栏的链接

![global-left-menu](./assets/global-left-menu.png)

```typescript
interface MenuItem {
  key: string;
  path: string;
  icon: string;
  title: string;
}

interface FunctionPlugin_GlobalLeftMenu {
  (): MenuItem[];
}
```
