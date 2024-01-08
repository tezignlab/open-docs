---
sidebar_position: 6
---

# 上传 File 文件 / URL 转存

支持通过 `postMessage` 的方式来上传文件。支持 File 文件格式或者是 URL 的方式。其中 URL 对应的域名白名单，需要找特赞技术同学开通

## 数据结构

```typescript
interface EventConfirm {
  // 事件标识
  type: 'tezign-asset-uploader-upload';
  data: {
    type: string;
    files: File[] | UrlFile[];
  };
}

export interface UrlFile {
  // 文件名需要格式后缀，如 test.png
  fileName?: string;
  // 可下载的资源链接
  url: string;
}
```

[File 文件对象](https://developer.mozilla.org/en-US/docs/Web/API/File)
