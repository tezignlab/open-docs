---
sidebar_position: 1
---

# 插件的引入和使用

引入插件后使用`use`方法安装插件
`use`应在 `init` 前执行

### npm 方式

每个插件都是单独打包的，需要用户手动引入对应的插件.

```typescript
// 引入插件
import tezignSdk, { pageViewPlugin， persistLocalStoragePlugin } from '@tezignlab/tezign-external-track/miniprogram_dist'

tezignSdk.use(pageViewPlugin(pvPluginsOptions), persistLocalStoragePlugin(persistLocalStoragePluginOptions)])
```
