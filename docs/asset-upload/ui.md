---
sidebar_position: 4
---

# UI配置

我们可以向素材上传组件传递UI配置实现对UI进行调整。

## 数据结构

```typescript
interface UIConfig {
  type: 'tezign-material-upload-ui';
  data: {
    // 非必填。隐藏右上角关闭按钮。
    hideCancel?: boolean;
  }
}
```

## 示例
```javascript
iframe.contentWindow?.postMessage({
  type: "tezign-material-upload-ui",
  data: {
    hideCancel: true
  },
});
```
