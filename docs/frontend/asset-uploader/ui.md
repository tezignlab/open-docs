---
sidebar_position: 4
---

# UI 配置

我们可以向素材上传组件传递 UI 配置实现对 UI 进行调整。

## 数据结构

```typescript
interface UIConfig {
  type: 'tezign-asset-uploader-ui';
  data: {
    // 非必填。隐藏右上角关闭按钮。
    hideCancel?: boolean;
  };
}
```

## 示例

```javascript
iframe.contentWindow?.postMessage({
  type: 'tezign-asset-uploader-ui',
  data: {
    hideCancel: true,
  },
});
```
