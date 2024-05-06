---
title: 素材选择器v1.4.0
authors: 'zhenan'
---

## 新增字段控制 tabs 显示隐藏

![001](https://static-common.tezign.com/static/jkh67nkcob1700121134422.png)

### 数据结构

```typescript
enum ShowTabsValue {
  Value0 = 'groups',
  Value1 = 'materials',
}

interface SelectorUI {
  // 该字段控制tabs显示隐藏，数组长度为1时则隐藏，其它显示。
  showTabs: (typeof ShowTabsValue)[keyof typeof ShowTabsValue][];
}
```

### 例子

```javascript
iframe.contentWindow?.postMessage(
  {
    type: 'tezign-selector-ui',
    data: { showTabs: ['materials', 'groups'] },
  },
  '*',
);
```

> 关于该字段的其它说明：
>
> - 默认不传显示，相当于['groups','materials']
> - 数组顺序不影响 tabs 顺序，统一素材在前，素材组在后
> - 该字段控制 tabs 显示隐藏，数组长度为 1 时则隐藏。
