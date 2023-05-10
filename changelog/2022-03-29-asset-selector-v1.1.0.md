---
title: 素材选择器v1.1.0
authors: '77'
---

## 右上角“X”按钮可配置为隐藏

### 数据结构

```typescript
interface SelectorUI {
  hideCancel?: boolean;
}

interface SelectorUICmd {
  type: 'tezign-selector-ui';
  data: SelectorUI;
}
```

### 例子

```javascript
iframe.contentWindow?.postMessage({
  type: 'tezign-selector-ui',
  data: { hideCancel: true },
});
```

## 移除了底部的“取消按钮”
