---
sidebar_position: 2
---

# 加载完成

表示上传iframe 页面加载完成，此时可以传入配置，参考[配置](../config)。

## 数据结构

```typescript
interface EventReady {
  // 事件标识
  type: "tezign-selector-page-ready";
  data: {
    // 事件描述
    msg: string;
  };
}
```
