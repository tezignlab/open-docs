---
sidebar_position: 3
---

# 批量埋点持续上报插件
- 只在开启 batchSend 功能下生效
- 在 sdk 初始化时 会从 localstorage 取出之前还未来得及上报的事件进行上报

```typescript
import tezignSdk, {
  persistLocalStoragePlugin,
} from '@tezignlab/tezign-external-track/miniprogram_dist';

tezignSdk.use(persistLocalStoragePlugin());
```
