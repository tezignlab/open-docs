---
sidebar_position: 4
---

# 配置项

## 数据结构

```typescript
interface Config {
  // 页面传递或接收的数据标识
  type: 'tezign-asset-uploader-config';
  data: {
    // 非必填。上传的文件类型
    accept?: string;
    // 非必填。 一次最大上传数量
    maximum?: number;
    // 非必填。文件到最大上传限制后提示文案
    // 默认文案： 一次只能上传 ${maximum} 个文件
    maximumTip?: string;
    // 非必填。入库接口地址
    // 该字段不传默认会调接口入库
    saveUrl?: string;
  }
}
```

## 示例

```javascript
iframe.contentWindow.postMessage({
  type: 'tezign-asset-uploader-config',
  data: { 
    accept: '',
    maximum: 10,
    maximumTip: '',
  }
}, '*');
```

