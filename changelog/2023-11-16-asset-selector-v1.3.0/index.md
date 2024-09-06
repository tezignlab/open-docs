---
title: 素材选择器v1.3.0
authors: '见见'
---

## 新增配置项默认打开组

![001](https://static-common.tezign.com/static/jkh67nkcob1700121134422.png)

### 数据结构

```typescript
interface SelectorUI {
  // 首次进入默认打开素材或素材组，默认素材
  defaultActiveTab: 'group';
}
```

### 例子

```javascript
iframe.contentWindow?.postMessage(
  {
    type: 'tezign-selector-ui',
    data: { defaultActiveTab: 'group' },
  },
  '*',
);
```

## 是否可选择素材组

!(002)[https://static-common.tezign.com/static/tu2v6dusqu1700121156135.png]

支持将素材组内的素材全部添加到列表中。查询组内数量上限为 1000

```typescript
interface Config {
  // 页面传递或接收的数据标识（postMessage形式）
  type: 'tezign-material-selector';
  // 需要传递的配置数据
  data: {
    // 是否可选择组
    groupSelectable: boolean;
  };
}
```

> 关于选组添加的校验限制说明：
>
> - 如果限制总数量或大小，未满足的情况下，整组素材将不被选择
> - 如果限制了具体格式数量或大小，只要存在未满足的情况下，整组素材将不被选择
