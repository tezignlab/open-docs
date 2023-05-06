---
sidebar_position: 2
---

# 快速开始

对于 iframe plugin 来说，可以按自己喜好的方式或工具，常见的如 create-react-app, create-vite 等来搭建开发环境。
而对于 function 或 component plugin 我们提供了一套基于 Vite 的模版。

以下是使用我们的脚手架[@tezignlab/create-dam-plugin](https://www.npmjs.com/package/@tezignlab/create-dam-plugin)，来初始化一个插件项目的步骤。

### 新建项目

```shell
npm create @tezignlab/dam-plugin@latest -- -t react-component ./my-plugin
cd ./my-plugin
npm install
```

### 启动项目

```shell
npm run dev
```

### 打包项目

```shell
npm run build
```

### 上传插件

插件项目打包完成之后，可以使用我们提供的上传 CLI[@tezignlab/dam-plugin-uploader](https://www.npmjs.com/package/@tezignlab/dam-plugin-uploader)来上传项目资源。

TODO

### 配置插件

插件需要在 Tezign 的 CS 后台配置插件地址才能生效，目前需要联系具体对接人来操作。

如果还在调试中的插件，可以配置你本地应用的地址，方便调试。
其他环境的插件，打包完成之后，请先[上传插件](#上传插件)。

### Examples

[dam-plugin-basic](https://github.com/tezignlab/tree/main/examples/dam-plugin-basic)
