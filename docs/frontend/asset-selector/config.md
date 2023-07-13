---
sidebar_position: 5
---

# 配置项

# 数据结构

```typescript
interface Config {
  // 页面传递或接收的数据标识（postMessage形式）
  type: 'tezign-material-selector';
  // 需要传递的配置数据
  data: {
    filterCode: string; // 筛选项配置code
    formatLimit?: number; // 非必填。 限制所选择的文件总数量（只有在不限制文件格式和格式数量时，此字段才生效）
    sizeLimit?: Byte; // 非必填。控制选择的素材大小，单位是byte（（只有在不限制文件格式和格式数量时，此字段才生效））。
    config: Array<{
      id:
        | 'image' // 图片
        | 'audio' // 音频
        | 'video' // 视频
        | 'document' // 文档
        | 'designSourceFile' // 设计源文件
        | 'excel' // 表格
        | 'font' // 字体文件
        | 'zip' // 压缩包
        | 'group' // 组合内容
        | 'text' // 纯文本
        | 'rtf' // 文章
        | 'url'; // 网页内容
      limit: number; // 限制格式数量(limit=0 代表不限制格式数量)
      sizeLimit?: Byte;
      groupId?: number; // 需要直接定位到指定素材组的组id
    }>;
  };
}

type Byte = number;
```

## 示例

```javascript
iframe.contentWindow.postMessage(
  {
    type: 'tezign-material-selector',
    data: {
      config: [
        { id: 'image', limit: 5 },
        {
          id: 'audio',
          limit: 9,
          sizeLimit: 10 * 1024 ** 2, //只能选择<=10MB的音频
        },
      ],
      filterCode: 'open-component-search-001',
      formatLimit: 5,
      sizeLimit: 10 * Math.pow(1024, 2), // 只能选择<=10MB素材
      groupId: 123456,
    },
  },
  '*',
);
```
