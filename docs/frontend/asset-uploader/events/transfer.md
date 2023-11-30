---
sidebar_position: 6
---

# 上传 File 文件

支持通过 postMessage 的方式来上传文件。

## 数据结构

```typescript
interface EventConfirm {
  // 事件标识
  type: 'tezign-asset-uploader-upload';
  data: {
    type: string;
    files: File[];
  };
}
```

[File 文件对象](https://developer.mozilla.org/en-US/docs/Web/API/File)
