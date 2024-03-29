---
sidebar_position: 5
---

Portal 详情页的批量操作"更多"下拉选项

![portal-detail-operation-more](./assets/portal-detail-operation-more.png)

## 插件类型

[Function](../plugin-types/function-plugin)

## 数据类型

```typescript
type OnClickData = {
  // 选中内容的blockId
  blockId: number;
  // 对应block下被选中的内容
  contentIds: number[];
}[];

interface MenuItem {
  /** key，每个menu item需要唯一 */
  key?: string | number;
  /** 标题 */
  title?: string;
  /**
   * 仅接受SVG。
   */
  icon?: string;
  /** Button类型  */
  type?:
    | 'link'
    | 'text'
    | 'ghost'
    | 'default'
    | 'primary'
    | 'dashed'
    | 'danger';
  /** children */
  children?: MenuItem[];
  onClick?: (data: OnClickData) => void;
  /** container 类名 */
  className?: string;
  /** 前分割线 */
  preDivider?: boolean;
  /** 后分割线 */
  postDivider?: boolean;
  style?: React.CSSProperties;
  /** 按钮禁用 */
  disable?: boolean;
  /** 按钮tooltip文案 */
  tooltip?: string | (() => string | undefined);
}

interface FunctionPlugin_PortalDetailOperationMore<
  PluginApp extends { lang: 'en-US' | 'zh-CN' } = {
    lang: 'en-US' | 'zh-CN';
  },
> {
  (app: PluginApp): MenuItem[];
}
```

## 例子

```typescript
function plugin() {
  console.log('...', arguments);
  return <MenuItem[]>[
    {
      key: 'portal-detail-operation-more',
      title: '自定义操作',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" d="m494.07 281.6l-25.18-78.08a11 11 0 0 0-.61-2.1l-50.5-156.94a20.08 20.08 0 0 0-19.17-13.82a19.77 19.77 0 0 0-18.95 13.94l-48.14 149.55h-152L131.34 44.59a19.76 19.76 0 0 0-18.86-13.94h-.11a20.15 20.15 0 0 0-19.12 14L42.7 201.73c0 .14-.11.26-.16.4l-25.63 79.48a29.15 29.15 0 0 0 10.44 32.46l221.44 162.41a11.25 11.25 0 0 0 13.38-.07l221.48-162.34a29.13 29.13 0 0 0 10.42-32.47m-331-64.51l61.73 191.76L76.63 217.09m209.64 191.8l59.19-183.84l2.55-8h86.52L300.47 390.44M398.8 59.31l43.37 134.83h-86.82M324.16 217l-43 133.58l-25.66 79.56L186.94 217M112.27 59.31l43.46 134.83H69M40.68 295.58a6.19 6.19 0 0 1-2.21-6.9l19-59l139.61 180.59m273.26-114.69L313.92 410.22l.52-.69L453.5 229.64l19 59a6.2 6.2 0 0 1-2.19 6.92"/></svg>',
      onClick(data) {
        console.log('data', data);
      },
    },
  ];
}
export default plugin;
```
