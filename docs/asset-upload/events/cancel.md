---
sidebar_position: 2
---

# 取消上传

## 数据结构

```typescript
interface EventCancel {
  // 事件标识
  type: 'tezign-upload-cancel-btn';
  data: {
    // 事件描述
    msg: string;
  }
}
```
