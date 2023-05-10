---
sidebar_position: 2
title: 快速开始
---

## 开发流程

1. 在[这里](../slots)查找你需要开发的 slot。
2. 根据插件类型（Plugin Type）创建插件项目（可以使用我们的 [@tezignlab/create-dam-plugin](https://www.npmjs.com/package/@tezignlab/create-dam-plugin)）。
3. 然后按照正常的应用来开发
4. 和 DAM 主应用调试/验证。需要在特赞的 CS 后台进行配置，请联系相关对接人。
   1. 测试环境调试可以配置本地的服务插件地址。比如 `http://localhost:5137/src/plugin.js`
   2. 其他环境需要[上传插件](#上传插件)构建产物到 CDN，得到 CDN 地址后，配置到 CS 后台。

## 例子

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

打包产物会出现在`dist`文件夹下。

### 上传插件

插件项目打包完成之后，可以使用我们提供的工具[@tezignlab/dam-plugin-uploader](https://www.npmjs.com/package/@tezignlab/dam-plugin-uploader)来上传插件。

#### 安装上传工具

```shell
npm install @tezignlab/dam-plugin-uploader@latest
```

#### 上传

```shell
dam-plugin-uploader --config ./cli.config.json --name my-plugin --tag 0.0.1 ./dist
# or
dpu --config ./cli.config.json --name my-plugin --tag 0.0.1 ./dist
```

更多关于上传工具的使用细节，请[查看](https://www.npmjs.com/package/@tezignlab/dam-plugin-uploader)

### 配置插件

插件需要在 Tezign 的 CS 后台配置插件地址才能生效，目前需要联系具体对接人来操作。

如果还在调试中的插件，可以配置你本地应用的地址，方便调试。
其他环境的插件，打包完成之后，请先[上传插件](#上传插件)。

### Examples

[dam-plugin-basic](https://github.com/tezignlab/tree/main/examples/dam-plugin-basic)
