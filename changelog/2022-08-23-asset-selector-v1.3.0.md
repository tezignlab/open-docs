---
title: 素材选择器v1.3.0
authors: "77"
---

## 选择器 ID

这个版本给选择器增加了实例标识，解决当单个页面存在多个素材选择器实例时，出现消息乱串的问题。

### 例子

```javascript
const selectorId = "your-selector-id";

const handleMessage = (evt) => {
  if (evt?.data?.type === "tezign-selector-page-ready") {
    iframe.contentWindow?.postMessage({
      type: "tezign-material-selector",
      data: { config: [], filterCode: "your-filter-code", id: selectorId }, // 在初始化配置中传入id
    });
  }

  if (evt?.data?.id !== selectorId) {
    // ATTENTION: 判断id是否为传入的selectorId，只接收对应id的选择器事件
    return;
  }

  // demo：处理确认事件
  if (evt?.data?.type === "tezign-selector-confirm-btn") {
    // ... your code
  }
  // ... your code
};

window.addEventListener("message", handleMessage, false);
```
