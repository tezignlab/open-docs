---
sidebar_position: 2
title: Function Plugin
---

Function plugin 一般会作为 DAM 链路中的一环被调用，比如说文件上传链路的前置或者后置校验。

## 插件类型定义

```typescript
interface FunctionPlugin<PluginApp, R> {
  (app?: PluginApp): R;
}
```

## 例子

```typescript title="plugin.tsx"
function plugin<any>(app?: any) {
  // ...
}

// !必须把插件函数以default export进行导出
// highlight-next-line
export default plugin;
```
