---
sidebar_position: 6
---

# UI 配置

:::info

请在响应`tezign-selector-page-ready`事件时候，在通过`tezign-material-selector`命令传入配置数据之前使用`tezign-selector-ui`命令，避免出现 UI 抖动问题。

:::

## 数据结构

```typescript
interface SelectorUICmd {
  type: 'tezign-selector-ui';
  data: SelectorUI;
}

interface SelectorUI {
  // 为true时隐藏右上角的"X"关闭按钮
  hideCancel?: boolean;
  // 确认按钮配置
  confirmBtn?: {
    text: string; // 确认按钮文案
  };
  // 首次进入默认打开素材或素材组，默认素材
  defaultActiveTab: 'group';
  // 底部提示栏
  '#alert'?: {
    // 提示文案
    message: string;
  };
  // 底部操作组件
  '#action'?: IMetaComp[];
}

type IMetaComp = IMetaCompCheckBox;

interface IMetaCompCheckbox {
  type: ECompType.Checkbox;
  props: {
    id: string; // 用于标识组件示例
    disabled?: boolean;
    checked: boolean;
    text: string;
  };
}

enum ECompType {
  Checkbox = 'checkbox',
}
```

## 例子

```javascript
iframe.contentWindow?.postMessage({
  type: 'tezign-selector-ui',
  data: {
    hideCancel: true,
    confirmBtn: {
      text: '确定按钮文案',
    },
    '#alert': { message: '这是底部提示信息' },
  },
});
```
