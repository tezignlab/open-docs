---
sidebar_position: 1
---
# 插件的引入和使用
引入插件后使用`use`方法安装插件
`use`应在 `init` 前执行

### npm方式
每个Plugins 都是单独打包的，Web端plugin 有 commonjs 和 es module 两种格式， 需要用户手动引入对应格式的 Plugin.
```typescript
// 引入插件
import tezignSdk, { pageViewPlugin， persistLocalStoragePlugin } from '@tezignlab/tezign-external-track/miniprogram_dist'

tezignSdk.use(pageViewPlugin(pvPluginsOptions), persistLocalStoragePlugin(persistLocalStoragePluginOptions)])
```
