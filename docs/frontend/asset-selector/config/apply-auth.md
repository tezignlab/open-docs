---
sidebar_position: 3
---

# 数据权限申请

点击确定后，会进行鉴权，权限不足会有 modal 提示。过滤点击确认之后返回的数据字段，比如查看权限不会有下载链接。可以申请的权限有：

- 查看（默认值）
- 下载

## 数据结构

```typescript
enum EAuthCode {
  // 没有downloadUrl等
  VIEW = 'searchOriginalAuth',
  DOWNLOAD = 'downloadOriginalAuth',
}

interface ApplyAuthCmd {
  type: 'tezign-selector-auth';
  data: { auth: EAuthCode };
}
```

## 例子

```javascript
iframe.contentWindow?.postMessage(
  {
    type: 'tezign-selector-auth',
    data: { auth: EAuthCode.DOWNLOAD },
  },
  '*',
);
```
