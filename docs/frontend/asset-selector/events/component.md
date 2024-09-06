---
sidebar_position: 5
---

# 组件事件

选择器还支持其他相关的事件，来辅助接入方更好的控制选择器的行为。

## 选择更新

触发时机是用户选择素材更新的时候。

### 数据结构

```typescript
interface SelectionChangeEvent {
  // 事件标识
  type: 'tezign-selector-selection-change';
  data: ConfirmData; // 同tezgin-selector-confirm-btn的数据结构（查看权限）
}
```

## 清空素材

清空用户所选素材

### 数据结构

```typescript
interface ClearEvent {
  // 事件标识
  type: 'tezign-selector-clear';
}
```

## 重置数据

重置整个 iframe 数据。重置内部包括用户所选素材、搜索关键字、筛选项等。

### 数据结构

```typescript
interface ResetEvent {
  // 事件标识
  type: 'tezign-selector-reset';
}
```

## 支持额外扩展底部操作组件栏

### 数据结构

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

### 例子

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
