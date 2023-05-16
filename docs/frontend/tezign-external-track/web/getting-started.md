---
sidebar_position: 1
---

# 快速开始

## npm 方式

```typescript
import tezignSdk from '@tezignlab/tezign-external-track';

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
    api,
  },
});

//埋点上报
tezignSdk.track({
  /** 事件类型code */
  event_type_code,
  /** 事件属性 */
  event_properties,
});
```

## 浏览器 CDN

```html
<script src="https://static.tezign.com/tezign-external-track/{版本号}/tezignExternalTrack.browser.min.js"></script>
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
  event_properties,
});
```

## 版本查询

[@tezignlab/tezign-external-track 版本号](https://static.tezign.com/tezign-external-track/version.json '@tezignlab/tezign-external-track版本号')
