---
sidebar_position: 2
---

# 基本配置

:::info

请在响应 `tezign-selector-page-ready` 事件时候，通过 `tezign-material-selector` 命令传入配置数据。

:::

# 数据结构

```typescript
interface Config {
  /** 页面传递或接收的数据标识（postMessage形式）*/
  type: 'tezign-material-selector';
  /** 需要传递的配置数据 */
  data: {
    /** 调用方标识，解决多个监听方冲突问题 */
    id?: string;
    /** 筛选项配置code,由特赞提供 */
    filterCode: string;
    /** 限制所选择的文件总数量（只有在不限制文件格式和格式数量时，此字段才生效）*/
    formatLimit?: number;
    /** 非必填。控制选择的素材大小，单位是byte（（只有在不限制文件格式和格式数量时，此字段才生效））*/
    sizeLimit?: Byte;
    /** 总文件的大小限制 */
    totalSizeLimit?: number;
    /** 对不同类型素材的定义 */
    config: Array<{
      /** 素材类型 */
      id:
        | 'image' // 图片
        | 'audio' // 音频
        | 'video' // 视频
        | 'document' // 文档
        | 'designSourceFile' // 设计源文件
        | 'excel' // 表格
        | 'font' // 字体文件
        | 'zip' // 压缩包
        | 'group' // 组合内容
        | 'text' // 纯文本
        | 'rtf' // 文章
        | 'url'; // 网页内容
      /** 限制格式数量(limit=0 代表不限制格式数量) */
      limit: number;
      /** 控制选择的素材大小，单位是byte */
      sizeLimit?: Byte;
    }>;
    /** 唤起素材选择器时默认展示此素材组 */
    groupId?: number;
    /** 是否可选择素材组下的所有素材 */
    groupSelectable?: boolean;
    /** 搜索默认值，单个搜索传参字符串，搜索多个传参数组类型 */
    searchDefaultValue?: string | string[];
    /** 可选参数，配合filter参数使用，在设置了filter时，展示所有下拉项 */
    showAllOptions?: boolean;
    /** 筛选默认值 */
    filter?: {
      [code: string]: {
        /** 筛选项的默认值
         * JSON.stringify({value: Array; title: string})
         */
        defaultValue?: string;
        /** 筛选项的下拉options, 设置showAllOptions: true 此参数会无效 */
        configValueList?: (number | string)[];
        /** once允许取消选中  always 不允许取消选中*/
        fillEmptyByDefault?: 'once' | 'always';
        props?: {
          max?: number;
          min?: number;
        };
      };
    };
  };
}

type Byte = number;
```

## 示例

```javascript
iframe.contentWindow.postMessage(
  {
    type: 'tezign-material-selector',
    data: {
      config: [
        { id: 'image', limit: 5 },
        {
          id: 'audio',
          limit: 9,
          sizeLimit: 10 * 1024 ** 2, //只能选择<=10MB的音频
        },
      ],
      filterCode: 'open-component-search-003',
      formatLimit: 5,
      sizeLimit: 10 * Math.pow(1024, 2), // 只能选择<=10MB素材
      groupId: 123456,
    },
  },
  '*',
);
```

## 筛选默认值示例

```javascript
iframe.contentWindow.postMessage(
  {
    type: 'tezign-material-selector',
    data: {
      config: [],
      filterCode: 'open-component-search-003',
      filter: {
        // 默认筛选文件类型
        SEARCH_FILE_TYPE: {
          defaultValue: JSON.stringify({
            title: '文件',
            value: [
              [1,2,3,26,4,27,44,46,49,53],
              [5,6,7,8,9,10,29,30,41,45,52,54],
              [42,43,13],
              [16,17,50,19,20,51],
              [61],
              [62],
              [47,48,28]
            ]
          }),
          configValueList: [1,2,3,26,4,27,44,46,49,53,42,43,13,16,17,50,19,20,51,5,6,7,8,9,10,29,30,41,45,52,54,61,62,47,48,28],
          fillEmptyByDefault: 'once' as const
        },
        // 默认筛选文件大小 0～200MB
        CORE_SIZE: {
          defaultValue: JSON.stringify({
            title: '0～200MB',
            value: [0, 209715200]
          }),
          configValueList: [0, 209715200],
          fillEmptyByDefault: 'once' as const,
          props: {
            max: 200,
            min: 0
          }
        }
      }
    },
  },
  '*',
);
```

## 通过 valueTitle 筛选示例

:::info

valueTitle 和 value 属于互斥参数，只能选择其中一个。
传入 value 时，valueTitle 将失效。
传入的 valueTitle 需确认在 filterCode 对应的筛选条件下有对应的选项。

:::

```javascript
iframe.contentWindow.postMessage(
  {
    type: 'tezign-material-selector',
    data: {
      config: [],
      filterCode: 'open-component-search-003',
      filter: {
        // 默认筛选文件类型
        SEARCH_FILE_TYPE: {
          defaultValue: JSON.stringify({
            title: '文件',
            valueTitle: ['JPG', 'MP4']
          }),
          fillEmptyByDefault: 'once' as const
        },
        SEARCH_ASPECT_RATIO: {
          defaultValue: JSON.stringify({
            title: '选中：16:9',
            valueTitle: ['16:9']
          })
        },
        c4bb118a0a7e4286a3c7ea2f69374dcb: {
          defaultValue: JSON.stringify({
            title: '选中',
            valueTitle: ['79AN7913S-B2A-LSS-1']
          })
        }
      }
    },
  },
  '*',
);
```

## 其他细项说明

- 支持将素材组内的素材全部添加到列表中。查询组内数量上限为 1000
- 关于选组添加的校验限制说明：

  - 如果限制总数量或大小，未满足的情况下，整组素材将不被选择
  - 如果限制了具体格式数量或大小，只要存在未满足的情况下，整组素材将不被选择
