---
sidebar_position: 4
---

# 确认按钮点击

选择素材后，点击页面「确认」按钮，素材选择器会使用 postMessage 把所有选择的素材的对象数组在您的页面中返回，该响应数组包含 DAM 的所有资产信息。

## 数据结构

```typescript
interface EventConfirm {
  type: "tezign-selector-confirm-btn";
  data: {
    msg: string;
    selectedMaterial: Array<Asset>;
  };
}

interface Asset {
  // 素材id
  id: number;
  // 源文件id
  assetId: number;
  // 素材缩略图
  thumbnailSrc: string;
  // 素材下载地址（只看权限不会有该字段）
  downloadUrl?: string;
  // 素材名称
  name: string;
  // 格式
  extension: string;
  // 组合内容子元素list，只在extension为"res_group"时有返回
  subAssetList?: {
    baseText: string;
    downloadPermission: boolean;
    downloadUrl?: string;
    extension: string;
    height?: number;
    id: number;
    name: string;
    thunder?: string;
    width?: number;
    size: number;
  }[];
  // 纯文本和文章类型的文本内容，只在extension为 "content_rtf"或"content_text"时有返回
  baseText: string;
  // url内容的导入链接，只在extension为 "content_url"时有返回；
  importUrl: string;
  [key: string]: any;
}
```
