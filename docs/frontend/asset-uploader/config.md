---
sidebar_position: 4
---

# 本地选择文件上传配置项

## 数据结构

```typescript
interface Config {
  // 页面传递或接收的数据标识
  type: 'tezign-asset-uploader-config';
  data: {
    /** 唯一标识 */
    id?: string;
    /** 上传的文件类型，如'.png,.jpg' */
    accept?: string;
    /** 一次最大上传数量 */
    maximum?: number;
    /**
     * 文件限制提示文案
     * 默认文案： 一次只能上传 ${maximum} 个文件
     */
    maximumTip?: string;
    /**
     * 入库接口地址
     * 不传时不入库
     */
    saveUrl?: string;
    /** 是否打标入库，唤起打标弹窗 */
    tagging?: boolean;
    /** 打标弹窗中打标模版code（tagging为true生效），特赞提供 */
    templateCode?: string;
    /** 入组的素材组id */
    targetGroupIdList?: number[];
    /** 自定义metaData */
    cusMetaData?: any;
    /** 是否保持文件夹结构 */
    keepStructure?: boolean;
    /** 是否进行与库内素材的重复检测 */
    checkRepeatedMaterials?: boolean;
  };
}
```

## 示例

```javascript
iframe.contentWindow.postMessage(
  {
    type: 'tezign-asset-uploader-config',
    data: {
      accept: '',
      maximum: 10,
      maximumTip: '',
    },
  },
  '*',
);
```
