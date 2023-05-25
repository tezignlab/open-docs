---
sidebar_position: 5
---

# 自定义插件

使用`use`方法自定义插件

```typescript

import tezignSdk from '@tezignlab/tezign-external-track';

// 定义插件
type ITrackPluginConstructor = (plugin: TrackPlugin, client: AbstractPlatform) => {
  /** 插件名 */
  name: string;
  /** 插件生命周期回调函数 */
  init?: ILifeCycleCallbacks["init"];
  beforePluginSend?: ILifeCycleCallbacks["beforePluginSend"];
  beforeSend?: ILifeCycleCallbacks["beforeSend"];
  destroy?: ILifeCycleCallbacks["destroy"];
  onBeforeBatchSend?: ILifeCycleCallbacks["onBeforeBatchSend"];
};

tezignSdk.use(pluginConfig: ITrackPluginConstructor | ITrackPluginConstructor[])
```
