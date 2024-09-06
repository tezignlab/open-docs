---
sidebar_position: 2
---

# PV 埋点插件

对于 SPA 应用来说，每次 url 发生变化都算一次 PV 并且会在 DOMContentLoaded 之后上报当前初始的页面作为一次 PV。

```typescript
import tezignSdk, { pageViewPlugin } from '@tezignlab/tezign-external-track/miniprogram_dist';

tezignSdk.use(pageViewPlugin(config: PageViewConfig))

interface PageViewConfig {
  /**
   * monitor hash change event
   * @default false
   */
  monitorHash?: boolean;
  /**
   * monitor history.pushState
   * @default true
   */
  monitorPush?: boolean;
  /**
   * monitor browser page forward or back
   * @default true
   */
  monitorPop?: boolean;
  /**
   * monitor history.replace
   * @default true
   */
  monitorReplace?: boolean;
}
```

如果网页有锚点功能，不建议开启 monitorHash
