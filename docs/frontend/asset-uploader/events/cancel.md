---
sidebar_position: 2
---

# 取消上传

上传取消的时候，触发的相对应事件。

## 数据结构

```typescript
interface EventCancel {
  // 事件标识
  type: 'tezign-asset-uploader-cancel';
  data: {
    // 事件描述
    msg: string;
  };
}
```
