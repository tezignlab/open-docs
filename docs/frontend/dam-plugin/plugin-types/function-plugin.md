---
sidebar_position: 2
title: Function Plugin
---

Function plugin 一般作为，比如说文件上传链路的前置或者后置校验，在校验过程中也可以做唤起弹窗之类的 UI 操作（这个取决于 plugin 开发方）。
总之，它不会渲染任何 UI 到 Slot 中。

```typescript
interface FunctionPlugin<R, PluginApp> {
  (app?: PluginApp): R;
}
```

这个类型的插件需要以`default export`导出。

## 例子

```typescript
function fun(...args) {
  // ...
}

export default fun;
```
