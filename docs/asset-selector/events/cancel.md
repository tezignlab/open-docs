---
sidebar_position: 3
---

# 取消按钮点击

## 数据结构

```typescript
interface EventCancel {
  // 事件标识
  type: "tezign-selector-cancel-btn";
  data: {
    // 事件描述
    msg: string;
  };
}
```
