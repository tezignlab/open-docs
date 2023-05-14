---
sidebar_position: 1
---
 # 快速开始

 ## npm 方式

```typescript
// npm
npm install @tezignlab/tezign-external-track
// yarn
yarn add @tezignlab/tezign-external-track
// pnpm 
pnpm install @tezignlab/tezign-external-track
```



### 浏览器引入
```html
<script src="https://static.tezign.com/tezign-external-track/{版本号}/tezignExternalTrack.browser.min.js" ></script>
```
版本号查询请访问：[@tezignlab/tezign-external-track版本号](https://static.tezign.com/tezign-external-track/version.json "@tezignlab/tezign-external-track版本号")


## 使用

### npm方式
```typescript
import tezignSdk from '@tezignlab/tezign-external-track'

// 初始化
tezignSdk.init({
  /** tezign open-api授权token */
  token,
  /** 租户id */ 
  tenant_id,
  /** 应用id */
  client_id,
  http: {
    /** 埋点请求url */
    api
  }
})

//埋点上报
tezignSdk.track({
  /** 事件类型code */
  event_type_code,
  /** 事件属性 */
  event_properties
})

```

Tezign sdk 提供了 commonjs 和 esm 规范的代码格式，一般情况下构建工具会取决于你当前使用  的module格式自动导入对应格式的代码。如果要明确指定格式:
```typescript
// commonjs
import tezignSdk from '@tezignlab/tezign-external-track/npm/tezignExternalTrack.cjs'

// es6/esm
import tezignSdk from '@tezignlab/tezign-external-track/npm/tezignExternalTrack.mjs'  
```

### CDN 同步加载
```html
<script src="https://static.tezign.com/tezign-external-track/{版本号}/tezignExternalTrack.browser.min.js" ></script>
```

```typescript
 // 在项目的js中使用
window.tezignExternalTrack.init({
  tenant_id,
  client_id,
  token,
  http: {
    api,
  },
});

//埋点上报
window.tezignExternalTrack.track({
  /** 事件类型code */
  event_type_code,
  /** 事件属性 */
  event_properties
})

```

