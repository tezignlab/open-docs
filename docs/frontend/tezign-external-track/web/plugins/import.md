---
sidebar_position: 1
---

# 插件的引入和使用

引入插件后使用`use`方法安装插件。

`use`应在 `init` 前执行

### npm 方式

每个 plugin 都是单独打包的，Web 端 plugin 有 commonjs 和 es module 两种格式，需要用户手动引入对应格式的插件.

```typescript
// 引入插件
// esm
import clickPlugin from '@tezignlab/tezign-external-track/dist/esm/plugins/click';
import pageViewPlugin from '@tezignlab/tezign-external-track/dist/esm/plugins/page-view';
import persistLocalStoragePlugin from '@tezignlab/tezign-external-track/dist/esm/plugins/persist-localstorage';

// cjs
import clickPlugin from '@tezignlab/tezign-external-track/dist/cjs/plugins/click';
import pageViewPlugin from '@tezignlab/tezign-external-track/dist/cjs/plugins/page-view';
import persistLocalStoragePlugin from '@tezignlab/tezign-external-track/dist/cjs/plugins/persist-localstorage';

// 引入use方法
import tezignSdk, { use } from '@tezignlab/tezign-external-track';

tezignSdk.use([
  clickPlugin(clickPluginsOptions),
  pageViewPlugin(pvPluginsOptions),
  persistLocalStoragePlugin(persistLocalStoragePluginOptions),
]);
```

### 浏览器引入

```typescript
// 插件
const { pageViewPlugin, clickPlugin, persistLocalStoragePlugin } =
  window.tezignExternalTrack.plugin;

window.tezignExternalTrack.use([
  clickPlugin(clickPluginsOptions),
  pageViewPlugin(pvPluginsOptions),
  persistLocalStoragePlugin(persistLocalStoragePluginOptions),
]);
```
