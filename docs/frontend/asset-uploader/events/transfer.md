---
sidebar_position: 6
---

# 上传 File 文件 / URL 转存

支持通过 `postMessage` 的方式来上传文件。不再唤起本地文件选择。支持 File 文件格式或者是 URL 的方式。其中 URL 对应的域名白名单，需要找特赞技术同学开通

## 数据结构

```typescript
interface IUpload {
  type: 'tezign-asset-uploader-upload';
  data:
    | {
        /**
         * 额外的上传方式
         * url: 已有的素材url上传
         * blob: 二进制文件上传
         */
        type: 'url';
        /** */
        files: {
          /** 文件名,需要格式后缀。如果test.png */
          fileName?: string;
          /** 素材资源url */
          url: string;
        }[];
      }
    | {
        type: 'blob';
        /** 二进制文件信息 */
        files: IFile[];
      };
}
```

[File 文件对象](https://developer.mozilla.org/en-US/docs/Web/API/File)
