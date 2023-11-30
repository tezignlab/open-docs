---
sidebar_position: 3
---

# 确定按钮点击

iframe 页面确定按钮被点击，选中的素材组数据会在该事件中被返回。

## 数据结构

```typescript
interface EventConfirm {
  // 事件标识
  type: 'tezign-asset-group-selector-confirm';
  data: {
    // 返回说明
    msg: string;
    // 已经选中的素材组集合
    selectedGroups: Array<{
      // 素材组ID
      groupId: number;
      // 素材组名称
      groupName: string;
    }>;
  };
}
```
