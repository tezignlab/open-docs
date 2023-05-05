---
sidebar_position: 2
title: Function Plugin
---

Function plugin 一般会作为 DAM 逻辑链路中的一环，比如说文件上传链路的前置或者后置校验。

```typescript
interface FunctionPlugin<PluginApp, R> {
  (app?: PluginApp): R;
}
```

## 例子

```typescript title="plugin.tsx"
function fun<PluginApp>(app?: PluginApp) {
  // ...
}

// !必须把插件函数以default export进行导出
// highlight-next-line
export default fun;
```
