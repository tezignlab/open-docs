---
sidebar_position: 2
title: 快速开始
---

## 开发流程

1. 在[这里](../slots)查找你需要开发的 slot。
2. 根据插件类型（Plugin Type）创建插件项目（可以使用我们的脚手架 [@tezignlab/create-dam-plugin](https://www.npmjs.com/package/@tezignlab/create-dam-plugin)）。
3. 然后按照正常的应用来开发
4. 和 DAM 主应用调试/验证。需要在特赞的 CS 后台进行配置，请联系相关对接人。
   1. 测试环境调试可以配置本地的服务插件地址，比如 `http://localhost:5137/src/plugin.js`。
   2. 其他环境需要[上传插件](#上传插件)构建产物到 CDN，得到 CDN 地址后，配置到 CS 后台。

:::caution

目前只有测试环境下的 [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) 配置开放对 localhost 资源的访问。

:::

## 例子

下面来实现一套简单的插件，来展示如何开发一个 DAM Plugin，其中会了解到如何写[Component Plugin](../plugin-types/component-plugin)和[Function Plugin](../plugin-types/function-plugin)。

例子中我们会实现以下功能

- 增加一个插件应用路由（R）
- 往素材库左侧菜单项里增加一个菜单项（M）
- 点击菜单 M，切换路由到 R，展现我们的组件。

为此我们需要用到两个 slot

- [entry](../slots/entry)：添加路由
- [global-left-menu](../slots/global-left-menu)：增加菜单项

最终效果图
![最终效果图](./assets/demo.png)

### 新建项目

对于 iframe plugin 来说，可以按自己喜好的方式或工具，常见的如 create-react-app, create-vite 等来搭建开发环境。
而对于 function 或 component plugin 我们提供了一套基于 Vite 的模版。

以下是使用我们的脚手架[@tezignlab/create-dam-plugin](https://www.npmjs.com/package/@tezignlab/create-dam-plugin)，来初始化一个插件项目。

```shell
npm create @tezignlab/dam-plugin@latest -- -t react-component ./my-plugin
cd ./my-plugin
npm install
```

### 增加路由

```js title="src/entry_plugin.js"
function entry_plugin(app) {
  console.log('...', arguments);

  app.addRoute({
    to: '/dam_enterprise/plugin/demo1', // 增加的路由，必须是/dam_enterprise/plugin/为前缀
    plugin: () => import('./component_plugin'), // 这个路由加载的插件
  });
}

// entry是function plugin，因此以default export导出函数。
export default entry_plugin;
```

### 路由组件

启动项目来开发我们的 component plugin

```shell
npm run dev
```

```js title="src/component_plugin.js"
// 使用@tezignlab/vite-plugin-css-string这个插件
// 把所有的CSS样式文件内容inline到这个`cssString`中。
import cssString from 'virtual:css-string';
import { render } from './App';

const useShadowDom = true;

// Component plugin要以named export导出三个变量。
export { cssString, render, useShadowDom };
```

```jsx title="src/App.jsx"
import React from 'react';
import ReactDOM from 'react-dom/client';
import $styles from './App.module.css';

// 实际渲染的组件
function App(props) {
  return (
    <div className={$styles.app}>
      <h1>Hello world</h1>
      <button
        className={$styles.button}
        onClick={() => {
          alert('Hello World!');
        }}
      >
        Button
      </button>
    </div>
  );
}

const weakMap = new WeakMap();

function render(root, props = {}) {
  console.log('...', arguments);

  let reactDOMRoot = weakMap.get(root);
  // 避免重复创建
  if (!reactDOMRoot) {
    reactDOMRoot = ReactDOM.createRoot(root);
    weakMap.set(root, reactDOMRoot);
  }

  reactDOMRoot.render(
    <React.StrictMode>
      <App {...props} />
    </React.StrictMode>,
  );
}

export { render };
```

### 添加菜单项

最后增加一个菜单项，点击的时候，切换到我们新增的路由，展示我们的组件。

```js title="src/menu_plugin.js"
function plugin() {
  console.log('...', arguments);
  return [
    {
      title: '自定义菜单',
      // 上边新增的路由
      to: '/dam_enterprise/plugin/demo1',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" d="m494.07 281.6l-25.18-78.08a11 11 0 0 0-.61-2.1l-50.5-156.94a20.08 20.08 0 0 0-19.17-13.82a19.77 19.77 0 0 0-18.95 13.94l-48.14 149.55h-152L131.34 44.59a19.76 19.76 0 0 0-18.86-13.94h-.11a20.15 20.15 0 0 0-19.12 14L42.7 201.73c0 .14-.11.26-.16.4l-25.63 79.48a29.15 29.15 0 0 0 10.44 32.46l221.44 162.41a11.25 11.25 0 0 0 13.38-.07l221.48-162.34a29.13 29.13 0 0 0 10.42-32.47m-331-64.51l61.73 191.76L76.63 217.09m209.64 191.8l59.19-183.84l2.55-8h86.52L300.47 390.44M398.8 59.31l43.37 134.83h-86.82M324.16 217l-43 133.58l-25.66 79.56L186.94 217M112.27 59.31l43.46 134.83H69M40.68 295.58a6.19 6.19 0 0 1-2.21-6.9l19-59l139.61 180.59m273.26-114.69L313.92 410.22l.52-.69L453.5 229.64l19 59a6.2 6.2 0 0 1-2.19 6.92"/></svg>',
    },
  ];
}

// global-left-menu是function plugin，因此以default export导出函数。
export default plugin;
```

### Vite 配置

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cssString from '@tezignlab/vite-plugin-css-string';

export default defineConfig(({ command }) => {
  return {
    plugins: [react(), cssString()],
    define: {
      // Vite在library模式下，不会define process.env.NODE_ENV。
      // 不加这个会导致依赖这个变量的包运行时找不到process变量报错，比如react。
      'process.env': {
        NODE_ENV: command === 'build' ? 'production' : 'development',
      },
    },
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          entryFileNames: '[name].[hash].js',
        },
      },
      lib: {
        // 我们的三个插件的入口文件
        entry: {
          // 添加路由的入口文件
          entry_plugin: 'src/entry_plugin.js',
          // 添加菜单的入口文件
          menu_plugin: 'src/menu_plugin.js',
          // 路由渲染的组件的入口文件
          component_plugin: 'src/component_plugin.js',
        },
        formats: ['es'],
      },
    },
  };
});
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
npm install --global @tezignlab/dam-plugin-uploader@latest
```

#### 上传

```shell
# --config是上传工具需要的配置文件
# --name是插件名称
# --tag是插件版本
# dist是要上传的文件夹
dam-plugin-uploader --config ./cli.config.json --name my-plugin --tag 0.0.1 ./dist
# or
dpu --config ./cli.config.json --name my-plugin --tag 0.0.1 ./dist
```

更多关于上传工具的使用细节，请[查看](https://www.npmjs.com/package/@tezignlab/dam-plugin-uploader)

### 配置插件

插件需要在 Tezign 的 CS 后台配置插件地址才能生效，目前需要联系具体对接人来操作。

如果还在调试中的插件，可以配置你本地应用的地址，方便调试。
其他环境的插件，打包完成之后，请先[上传插件](#上传插件)。

### 代码

完整项目的代码，可以在[这里](https://github.com/tezignlab/open-docs/tree/main/examples/dam-plugin-basic)找到。
