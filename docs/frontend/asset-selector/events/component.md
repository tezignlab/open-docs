---
sidebar_position: 5
---

# 组件事件

## 数据结构

```typescript
interface EventComponent {
  // 事件标识
  type: 'tezign-selector-comp-event';
  data: {
    type: ECompType;
    id: string;
    value: unknown; // 根据组件类型而定
  };
}

enum ECompType {
  Checkbox = 'checkbox',
}
```

## 例子

TODO 把联动的事件和命令放到一个 example 里，引入 embed stackblitz，确保引用"同一份"。

```javascript
// 配置checkbox到底部操作栏
iframe.contentWindow?.postMessage(
  {
    type: 'tezign-selector-ui',
    data: {
      '#action': [
        {
          type: ECompType.Checkbox,
          props: {
            checked: false,
            id: 'checkbox_1',
            text: '发文件链接',
          },
        },
      ],
    },
  },
  '*',
);

// ---- 响应组件事件
window.addEventListener(
  'message',
  (event) => {
    if (event?.data?.type === 'tezign-selector-comp-event') {
      const { type, id, value } = event?.data?.data || {};
      if (type === ECompType.Checkbox && id === 'checkbox_1') {
        // ... do something
        // for example, use 'tezign-selector-ui' command to toggle checked state
        console.log(value);
      }
      return;
    }
  },
  false,
);
```
