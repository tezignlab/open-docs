---
sidebar_position: 2
---

# 安装

## 通过 npm 安装

```typescript
// npm
npm install @tezignlab/tezign-external-track
// yarn
yarn add @tezignlab/tezign-external-track
// pnpm
pnpm install @tezignlab/tezign-external-track
```

Tezign sdk 提供了 commonjs 和 esm 规范的代码格式，一般情况下构建工具会取决于你当前使用的 module 格式，自动导入对应格式的代码。如果要明确指定格式:

```typescript
// commonjs
import tezignSdk from '@tezignlab/tezign-external-track/npm/tezignExternalTrack.cjs';

// es6/esm
import tezignSdk from '@tezignlab/tezign-external-track/npm/tezignExternalTrack.mjs';
```

## 浏览器引入

```html
<script src="https://static.tezign.com/tezign-external-track/{版本号}/tezignExternalTrack.browser.min.js"></script>
```

版本号查询请访问：[@tezignlab/tezign-external-track 版本号](https://static.tezign.com/tezign-external-track/version.json '@tezignlab/tezign-external-track版本号')
