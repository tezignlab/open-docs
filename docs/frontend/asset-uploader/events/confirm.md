---
sidebar_position: 3
---

# 确定

iframe页面确定按钮被点击，成功上传的文件数据会在该事件中被返回。

## 数据结构

```typescript
interface EventConfirm {
  // 事件标识
  type: 'tezign-asset-uploader-confirm';
  data: {
    // 返回说明
    msg: string;
    // 已经上传完成的文件集合
    files: Array<{
      // 素材源文件ID
      id: number;
      // 素材缩略图URL
      thunderUrl: string;
      // 素材下载URL
      downloadUrl: string;
      // 素材名称
      name: string;
      // 素材格式
      type: string;
      // 素材大小。单位：byte。
      size: Byte;
    }>;
  }
}

type Byte = number;
```
