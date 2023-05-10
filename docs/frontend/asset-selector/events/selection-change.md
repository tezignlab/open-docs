---
sidebar_position: 5
---

# 选择更新

触发时机是用户选择素材更新的时候。

## 数据结构

```typescript
interface SelectionChangeEvent {
  // 事件标识
  type: 'tezign-selector-selection-change';
  data: ConfirmData; // 同tezgin-selector-confirm-btn的数据结构（查看权限）
}
```
