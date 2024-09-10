---
sidebar_position: 5
---

# 配置项

# 数据结构

```typescript
interface Config {
  /** 页面传递或接收的数据标识（postMessage形式）*/
  type: 'tezign-asset-group-selector-config';
  /** 需要传递的配置数据 */
  data: {
    /** 唯一标识 */
    id?: string;
    /** 标题内容 */
    title?: string;
    /** 是否可以选择根节点 */
    rootSelectable?: boolean;
    /** 是否展示搜索，默认 true */
    showSearch?: boolean;
    /** 是否展示最近添加栏，默认 true */
    showRecentlyAdded?: boolean;
    /** 是否展示编辑素材组 */
    showEdit?: boolean;
    /** 是否展示标题 */
    showTitle?: boolean;
    /** 是否隐藏取消 */
    hideCancel?: boolean;
    /** 确认文案 */
    confirmText?: string;
    /** 是否可多选，默认false */
    multiple?: boolean;
    /** 默认选中的节点 */
    defaultSelectedKeys?: string[];
  };
}
```

## 示例

```javascript
iframe.contentWindow.postMessage(
  {
    type: 'tezign-asset-group-selector-config',
    data: {
      title: '选择素材组',
      rootSelectable: true,
      showSearch: true,
      showRecentlyAdded: true,
      showEdit: false,
      showTitle: true,
      hideCancel: true,
    },
  },
  '*',
);
```
