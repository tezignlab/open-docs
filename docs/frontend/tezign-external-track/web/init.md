---
sidebar_position: 3
---
 # 初始化 `init`
 tezignSdk 需要执行初始化init方法后才能上报埋点
```typescript
// init方法入参
interface InitConfig {
  // 用户id，用于用户行为分析
  // 非必填，
  // 可以通过update方法更新，👇
  user_id?: string;
  // 前置获得的租户id
  tenant_id: string
  // 前置获得的open-api鉴权token (access_token)
  token: string,
  // 前置获得的应用id
  client_id: string
  // 埋点请求配置
  http: {
    // 请求发起方式，默认fetch
    sendType?: 'XHR'|'fetch';
    // 请求url，需约定告知
    api: string;
    // 请求header设置
    header?: {
        [key: string]: string;
    };
    // 不发送真实请求，只在 console 打印
    debugHttp?: boolean;      // default: false
  };
  // 发送设置
  sender?: {
    // 是否启用批量发送
    enableBatchSend?: boolean; // default: false
    // 批量发送间隔时间
    interval?: number;         // default: 6_000 (6s)
    // 批量发送的最大事件个数
    maxQueueSize?: number;     // default: 6
  },
  // 在 console 打印 sdk 的内部 log，debug用
  log?: boolean;                 // default: false; 

  // 用来加载 sdk script，默认使用 tezign 提供的script地址(cdn)
  /**
  * 仅 web (npm) 试用
  */
  scriptUrl?: string             // default: undefined;
}
```

## npm方式
```typescript
import tezignSdk from '@tezignlab/tezign-external-track'

// 初始化
tezignSdk.init(initParams)
```

Tezign sdk 提供了 commonjs 和 esm 规范的代码格式，一般情况下构建工具会取决于你当前使用  的module格式自动导入对应格式的代码。如果要明确指定格式:
```typescript
// commonjs
import tezignSdk from '@tezignlab/tezign-external-track/npm/tezignExternalTrack.cjs'

// es6/esm
import tezignSdk from '@tezignlab/tezign-external-track/npm/tezignExternalTrack.mjs'  
```

### 浏览器引入
```typescript
window.tezignExternalTrack.init(initParams)
```

