---
sidebar_position: 6
---

# UI 配置

我们可以向素材上传组件传递 UI 配置实现对 UI 调整。

## 数据结构

```typescript
interface UIConfig {
  type: 'tezign-asset-uploader-ui';
  data: {
    /** 隐藏右上角关闭按钮 */
    hideCancel?: boolean;
    /**
     * 上传方式
     * file: 上传文件
     * folder: 上传文件夹
     */
    showList: ('file' | 'folder')[];
    /** 是否显示状态栏 */
    disableStatusbar?: boolean;
    /** 是否显示完成页面 */
    disableCompletedBar?: boolean;
    /** 自定义上传弹窗类名 */
    modalContainerClassName?: string;
    /** 自定义上传弹窗样式 */
    cusModalClassStyle?: Record<string, object>;
    /** 重新选择文案 */
    retryText?: string;
    /** 直接入库按钮文案 */
    directConfirmText?: string;
    /** 底部提示文案 */
    footTips?: string;
    /** 确认按钮文案 */
    confirmText?: string;
  };
}
```

## 示例

```javascript
iframe.contentWindow?.postMessage({
  type: 'tezign-asset-uploader-ui',
  data: {
    showList: ['file']
    hideCancel: true,
  },
});
```
