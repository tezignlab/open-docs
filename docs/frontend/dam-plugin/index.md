---
sidebar_position: 1
title: 简介
---

通过插件系统，可以通过插件的来实现自己的定制化需求。Tezign 负责提供 Slot 的位置，数据规范，以及可插入的 Plugin 类型，第三方负责具体 Slot 的 Plugin 的定制化功能开发。

## Slot

Slot 是指在 DAM 项目中的提供区域，提供插入自定义组件，特定行为前后执行自定义函数能力的位置。Slot 具体的位置和接受的 Plugin 种类是由 Tezign 内部决定的，详细的 Slot 位置可以在 [全部插槽位置列表](./slots) 中查看。

## Plugin

Plugin 是指在 DAM 项目中对应的 Slot 中渲染的自定义组件，或者是特定行为执行前后的自定义函数。Plugin 可以是一个 React 组件，Vue 组件，iframe，也可以是 function。Plugin 的具体类型由对应的 Slot 决定，详细的 Plugin 类型可以在 [全部插槽位置列表](./slots) 中查看。

## Plugin 类型

- [Component](./plugin-types/component-plugin)
- [Function](./plugin-types/function-plugin)
- [Iframe](./plugin-types/iframe-plugin)
