---
sidebar_position: 2
---

# 取消按钮点击

## 数据结构

```typescript
interface EventCancel {
  // 事件标识
  type: 'tezign-asset-group-selector-cancel';
  data: {
    // 事件描述
    msg: string;
  };
}
```
