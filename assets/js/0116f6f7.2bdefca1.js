"use strict";(self.webpackChunktezign_open_docs=self.webpackChunktezign_open_docs||[]).push([[8224],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var l=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=l.createContext({}),u=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return l.createElement(o.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},g=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(t),g=a,d=c["".concat(o,".").concat(g)]||c[g]||m[g]||r;return t?l.createElement(d,i(i({ref:n},s),{},{components:t})):l.createElement(d,i({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=g;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<r;u++)i[u]=t[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4924:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var l=t(1163),a=(t(9496),t(9613));const r={sidebar_position:2,title:"\u5feb\u901f\u5f00\u59cb"},i=void 0,p={unversionedId:"dam-plugin/getting-started/index",id:"dam-plugin/getting-started/index",title:"\u5feb\u901f\u5f00\u59cb",description:"\u5f00\u53d1\u6d41\u7a0b",source:"@site/docs/frontend/dam-plugin/getting-started/index.md",sourceDirName:"dam-plugin/getting-started",slug:"/dam-plugin/getting-started/",permalink:"/docs/frontend/dam-plugin/getting-started/",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u5feb\u901f\u5f00\u59cb"},sidebar:"tutorialSidebar",previous:{title:"\u7b80\u4ecb",permalink:"/docs/frontend/dam-plugin/"},next:{title:"Component Plugin",permalink:"/docs/frontend/dam-plugin/plugin-types/component-plugin"}},o={},u=[{value:"\u5f00\u53d1\u6d41\u7a0b",id:"\u5f00\u53d1\u6d41\u7a0b",level:2},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:2},{value:"\u65b0\u5efa\u9879\u76ee",id:"\u65b0\u5efa\u9879\u76ee",level:3},{value:"\u589e\u52a0\u8def\u7531",id:"\u589e\u52a0\u8def\u7531",level:3},{value:"\u8def\u7531\u7ec4\u4ef6",id:"\u8def\u7531\u7ec4\u4ef6",level:3},{value:"\u6dfb\u52a0\u83dc\u5355\u9879",id:"\u6dfb\u52a0\u83dc\u5355\u9879",level:3},{value:"Vite \u914d\u7f6e",id:"vite-\u914d\u7f6e",level:3},{value:"\u6253\u5305\u9879\u76ee",id:"\u6253\u5305\u9879\u76ee",level:3},{value:"\u4e0a\u4f20\u63d2\u4ef6",id:"\u4e0a\u4f20\u63d2\u4ef6",level:3},{value:"\u5b89\u88c5\u4e0a\u4f20\u5de5\u5177",id:"\u5b89\u88c5\u4e0a\u4f20\u5de5\u5177",level:4},{value:"\u4e0a\u4f20",id:"\u4e0a\u4f20",level:4},{value:"\u914d\u7f6e\u63d2\u4ef6",id:"\u914d\u7f6e\u63d2\u4ef6",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],s={toc:u},c="wrapper";function m(e){let{components:n,...r}=e;return(0,a.kt)(c,(0,l.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5f00\u53d1\u6d41\u7a0b"},"\u5f00\u53d1\u6d41\u7a0b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("a",{parentName:"li",href:"../slots"},"\u8fd9\u91cc"),"\u67e5\u627e\u4f60\u9700\u8981\u5f00\u53d1\u7684 slot\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6839\u636e\u63d2\u4ef6\u7c7b\u578b\uff08Plugin Type\uff09\u521b\u5efa\u63d2\u4ef6\u9879\u76ee\uff08\u53ef\u4ee5\u4f7f\u7528\u6211\u4eec\u7684\u811a\u624b\u67b6 ",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@tezignlab/create-dam-plugin"},"@tezignlab/create-dam-plugin"),"\uff09\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u7136\u540e\u6309\u7167\u6b63\u5e38\u7684\u5e94\u7528\u6765\u5f00\u53d1"),(0,a.kt)("li",{parentName:"ol"},"\u548c DAM \u4e3b\u5e94\u7528\u8c03\u8bd5/\u9a8c\u8bc1\u3002\u9700\u8981\u5728\u7279\u8d5e\u7684 CS \u540e\u53f0\u8fdb\u884c\u914d\u7f6e\uff0c\u8bf7\u8054\u7cfb\u76f8\u5173\u5bf9\u63a5\u4eba\u3002",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u6d4b\u8bd5\u73af\u5883\u8c03\u8bd5\u53ef\u4ee5\u914d\u7f6e\u672c\u5730\u7684\u670d\u52a1\u63d2\u4ef6\u5730\u5740\uff0c\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:5137/src/plugin.js"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5176\u4ed6\u73af\u5883\u9700\u8981",(0,a.kt)("a",{parentName:"li",href:"#%E4%B8%8A%E4%BC%A0%E6%8F%92%E4%BB%B6"},"\u4e0a\u4f20\u63d2\u4ef6"),"\u6784\u5efa\u4ea7\u7269\u5230 CDN\uff0c\u5f97\u5230 CDN \u5730\u5740\u540e\uff0c\u914d\u7f6e\u5230 CS \u540e\u53f0\u3002")))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u76ee\u524d\u53ea\u6709\u6d4b\u8bd5\u73af\u5883\u4e0b\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"},"Content Security Policy (CSP)")," \u914d\u7f6e\u5f00\u653e\u5bf9 localhost \u8d44\u6e90\u7684\u8bbf\u95ee\u3002")),(0,a.kt)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,a.kt)("p",null,"\u4e0b\u9762\u6765\u5b9e\u73b0\u4e00\u5957\u7b80\u5355\u7684\u63d2\u4ef6\uff0c\u6765\u5c55\u793a\u5982\u4f55\u5f00\u53d1\u4e00\u4e2a DAM Plugin\uff0c\u5176\u4e2d\u4f1a\u4e86\u89e3\u5230\u5982\u4f55\u5199",(0,a.kt)("a",{parentName:"p",href:"../plugin-types/component-plugin"},"Component Plugin"),"\u548c",(0,a.kt)("a",{parentName:"p",href:"../plugin-types/function-plugin"},"Function Plugin"),"\u3002"),(0,a.kt)("p",null,"\u4f8b\u5b50\u4e2d\u6211\u4eec\u4f1a\u5b9e\u73b0\u4ee5\u4e0b\u529f\u80fd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u589e\u52a0\u4e00\u4e2a\u63d2\u4ef6\u5e94\u7528\u8def\u7531\uff08R\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u5f80\u7d20\u6750\u5e93\u5de6\u4fa7\u83dc\u5355\u9879\u91cc\u589e\u52a0\u4e00\u4e2a\u83dc\u5355\u9879\uff08M\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u83dc\u5355 M\uff0c\u5207\u6362\u8def\u7531\u5230 R\uff0c\u5c55\u73b0\u6211\u4eec\u7684\u7ec4\u4ef6\u3002")),(0,a.kt)("p",null,"\u4e3a\u6b64\u6211\u4eec\u9700\u8981\u7528\u5230\u4e24\u4e2a slot"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../slots/entry"},"entry"),"\uff1a\u6dfb\u52a0\u8def\u7531"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../slots/global-left-menu"},"global-left-menu"),"\uff1a\u589e\u52a0\u83dc\u5355\u9879")),(0,a.kt)("p",null,"\u6700\u7ec8\u6548\u679c\u56fe\n",(0,a.kt)("img",{alt:"\u6700\u7ec8\u6548\u679c\u56fe",src:t(692).Z,width:"1106",height:"922"})),(0,a.kt)("h3",{id:"\u65b0\u5efa\u9879\u76ee"},"\u65b0\u5efa\u9879\u76ee"),(0,a.kt)("p",null,"\u5bf9\u4e8e iframe plugin \u6765\u8bf4\uff0c\u53ef\u4ee5\u6309\u81ea\u5df1\u559c\u597d\u7684\u65b9\u5f0f\u6216\u5de5\u5177\uff0c\u5e38\u89c1\u7684\u5982 create-react-app, create-vite \u7b49\u6765\u642d\u5efa\u5f00\u53d1\u73af\u5883\u3002\n\u800c\u5bf9\u4e8e function \u6216 component plugin \u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u5957\u57fa\u4e8e Vite \u7684\u6a21\u7248\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u4f7f\u7528\u6211\u4eec\u7684\u811a\u624b\u67b6",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@tezignlab/create-dam-plugin"},"@tezignlab/create-dam-plugin"),"\uff0c\u6765\u521d\u59cb\u5316\u4e00\u4e2a\u63d2\u4ef6\u9879\u76ee\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm create @tezignlab/dam-plugin@latest -- -t react-component ./my-plugin\ncd ./my-plugin\nnpm install\n")),(0,a.kt)("h3",{id:"\u589e\u52a0\u8def\u7531"},"\u589e\u52a0\u8def\u7531"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/entry_plugin.js"',title:'"src/entry_plugin.js"'},"function entry_plugin(app) {\n  console.log('...', arguments);\n\n  app.addRoute({\n    to: '/dam_enterprise/plugin/demo1', // \u589e\u52a0\u7684\u8def\u7531\uff0c\u5fc5\u987b\u662f/dam_enterprise/plugin/\u4e3a\u524d\u7f00\n    plugin: () => import('./component_plugin'), // \u8fd9\u4e2a\u8def\u7531\u52a0\u8f7d\u7684\u63d2\u4ef6\n  });\n}\n\n// entry\u662ffunction plugin\uff0c\u56e0\u6b64\u4ee5default export\u5bfc\u51fa\u51fd\u6570\u3002\nexport default entry_plugin;\n")),(0,a.kt)("h3",{id:"\u8def\u7531\u7ec4\u4ef6"},"\u8def\u7531\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u542f\u52a8\u9879\u76ee\u6765\u5f00\u53d1\u6211\u4eec\u7684 component plugin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm run dev\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/component_plugin.js"',title:'"src/component_plugin.js"'},"// \u4f7f\u7528@tezignlab/vite-plugin-css-string\u8fd9\u4e2a\u63d2\u4ef6\n// \u628a\u6240\u6709\u7684CSS\u6837\u5f0f\u6587\u4ef6\u5185\u5bb9inline\u5230\u8fd9\u4e2a`cssString`\u4e2d\u3002\nimport cssString from 'virtual:css-string';\nimport { render } from './App';\n\nconst useShadowDom = true;\n\n// Component plugin\u8981\u4ee5named export\u5bfc\u51fa\u4e09\u4e2a\u53d8\u91cf\u3002\nexport { cssString, render, useShadowDom };\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/App.jsx"',title:'"src/App.jsx"'},"import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport $styles from './App.module.css';\n\n// \u5b9e\u9645\u6e32\u67d3\u7684\u7ec4\u4ef6\nfunction App(props) {\n  return (\n    <div className={$styles.app}>\n      <h1>Hello world</h1>\n      <button\n        className={$styles.button}\n        onClick={() => {\n          alert('Hello World!');\n        }}\n      >\n        Button\n      </button>\n    </div>\n  );\n}\n\nconst weakMap = new WeakMap();\n\nfunction render(root, props = {}) {\n  console.log('...', arguments);\n\n  let reactDOMRoot = weakMap.get(root);\n  // \u907f\u514d\u91cd\u590d\u521b\u5efa\n  if (!reactDOMRoot) {\n    reactDOMRoot = ReactDOM.createRoot(root);\n    weakMap.set(root, reactDOMRoot);\n  }\n\n  reactDOMRoot.render(\n    <React.StrictMode>\n      <App {...props} />\n    </React.StrictMode>,\n  );\n}\n\nexport { render };\n")),(0,a.kt)("h3",{id:"\u6dfb\u52a0\u83dc\u5355\u9879"},"\u6dfb\u52a0\u83dc\u5355\u9879"),(0,a.kt)("p",null,"\u6700\u540e\u589e\u52a0\u4e00\u4e2a\u83dc\u5355\u9879\uff0c\u70b9\u51fb\u7684\u65f6\u5019\uff0c\u5207\u6362\u5230\u6211\u4eec\u65b0\u589e\u7684\u8def\u7531\uff0c\u5c55\u793a\u6211\u4eec\u7684\u7ec4\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/menu_plugin.js"',title:'"src/menu_plugin.js"'},'function plugin() {\n  console.log(\'...\', arguments);\n  return [\n    {\n      title: \'\u81ea\u5b9a\u4e49\u83dc\u5355\',\n      // \u4e0a\u8fb9\u65b0\u589e\u7684\u8def\u7531\n      to: \'/dam_enterprise/plugin/demo1\',\n      icon: \'<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" d="m494.07 281.6l-25.18-78.08a11 11 0 0 0-.61-2.1l-50.5-156.94a20.08 20.08 0 0 0-19.17-13.82a19.77 19.77 0 0 0-18.95 13.94l-48.14 149.55h-152L131.34 44.59a19.76 19.76 0 0 0-18.86-13.94h-.11a20.15 20.15 0 0 0-19.12 14L42.7 201.73c0 .14-.11.26-.16.4l-25.63 79.48a29.15 29.15 0 0 0 10.44 32.46l221.44 162.41a11.25 11.25 0 0 0 13.38-.07l221.48-162.34a29.13 29.13 0 0 0 10.42-32.47m-331-64.51l61.73 191.76L76.63 217.09m209.64 191.8l59.19-183.84l2.55-8h86.52L300.47 390.44M398.8 59.31l43.37 134.83h-86.82M324.16 217l-43 133.58l-25.66 79.56L186.94 217M112.27 59.31l43.46 134.83H69M40.68 295.58a6.19 6.19 0 0 1-2.21-6.9l19-59l139.61 180.59m273.26-114.69L313.92 410.22l.52-.69L453.5 229.64l19 59a6.2 6.2 0 0 1-2.19 6.92"/></svg>\',\n    },\n  ];\n}\n\n// global-left-menu\u662ffunction plugin\uff0c\u56e0\u6b64\u4ee5default export\u5bfc\u51fa\u51fd\u6570\u3002\nexport default plugin;\n')),(0,a.kt)("h3",{id:"vite-\u914d\u7f6e"},"Vite \u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { defineConfig } from 'vite';\nimport react from '@vitejs/plugin-react';\nimport cssString from '@tezignlab/vite-plugin-css-string';\n\nexport default defineConfig(({ command }) => {\n  return {\n    plugins: [react(), cssString()],\n    define: {\n      // Vite\u5728library\u6a21\u5f0f\u4e0b\uff0c\u4e0d\u4f1adefine process.env.NODE_ENV\u3002\n      // \u4e0d\u52a0\u8fd9\u4e2a\u4f1a\u5bfc\u81f4\u4f9d\u8d56\u8fd9\u4e2a\u53d8\u91cf\u7684\u5305\u8fd0\u884c\u65f6\u627e\u4e0d\u5230process\u53d8\u91cf\u62a5\u9519\uff0c\u6bd4\u5982react\u3002\n      'process.env': {\n        NODE_ENV: command === 'build' ? 'production' : 'development',\n      },\n    },\n    build: {\n      cssCodeSplit: false,\n      rollupOptions: {\n        output: {\n          entryFileNames: '[name].[hash].js',\n        },\n      },\n      lib: {\n        // \u6211\u4eec\u7684\u4e09\u4e2a\u63d2\u4ef6\u7684\u5165\u53e3\u6587\u4ef6\n        entry: {\n          // \u6dfb\u52a0\u8def\u7531\u7684\u5165\u53e3\u6587\u4ef6\n          entry_plugin: 'src/entry_plugin.js',\n          // \u6dfb\u52a0\u83dc\u5355\u7684\u5165\u53e3\u6587\u4ef6\n          menu_plugin: 'src/menu_plugin.js',\n          // \u8def\u7531\u6e32\u67d3\u7684\u7ec4\u4ef6\u7684\u5165\u53e3\u6587\u4ef6\n          component_plugin: 'src/component_plugin.js',\n        },\n        formats: ['es'],\n      },\n    },\n  };\n});\n")),(0,a.kt)("h3",{id:"\u6253\u5305\u9879\u76ee"},"\u6253\u5305\u9879\u76ee"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm run build\n")),(0,a.kt)("p",null,"\u6253\u5305\u4ea7\u7269\u4f1a\u51fa\u73b0\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"dist"),"\u6587\u4ef6\u5939\u4e0b\u3002"),(0,a.kt)("h3",{id:"\u4e0a\u4f20\u63d2\u4ef6"},"\u4e0a\u4f20\u63d2\u4ef6"),(0,a.kt)("p",null,"\u63d2\u4ef6\u9879\u76ee\u6253\u5305\u5b8c\u6210\u4e4b\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528\u6211\u4eec\u63d0\u4f9b\u7684\u5de5\u5177",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@tezignlab/dam-plugin-uploader"},"@tezignlab/dam-plugin-uploader"),"\u6765\u4e0a\u4f20\u63d2\u4ef6\u3002"),(0,a.kt)("h4",{id:"\u5b89\u88c5\u4e0a\u4f20\u5de5\u5177"},"\u5b89\u88c5\u4e0a\u4f20\u5de5\u5177"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --global @tezignlab/dam-plugin-uploader@latest\n")),(0,a.kt)("h4",{id:"\u4e0a\u4f20"},"\u4e0a\u4f20"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# --config\u662f\u4e0a\u4f20\u5de5\u5177\u9700\u8981\u7684\u914d\u7f6e\u6587\u4ef6\n# --name\u662f\u63d2\u4ef6\u540d\u79f0\n# --tag\u662f\u63d2\u4ef6\u7248\u672c\n# dist\u662f\u8981\u4e0a\u4f20\u7684\u6587\u4ef6\u5939\ndam-plugin-uploader --config ./cli.config.json --name my-plugin --tag 0.0.1 ./dist\n# or\ndpu --config ./cli.config.json --name my-plugin --tag 0.0.1 ./dist\n")),(0,a.kt)("p",null,"\u66f4\u591a\u5173\u4e8e\u4e0a\u4f20\u5de5\u5177\u7684\u4f7f\u7528\u7ec6\u8282\uff0c\u8bf7",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@tezignlab/dam-plugin-uploader"},"\u67e5\u770b")),(0,a.kt)("h3",{id:"\u914d\u7f6e\u63d2\u4ef6"},"\u914d\u7f6e\u63d2\u4ef6"),(0,a.kt)("p",null,"\u63d2\u4ef6\u9700\u8981\u5728 Tezign \u7684 CS \u540e\u53f0\u914d\u7f6e\u63d2\u4ef6\u5730\u5740\u624d\u80fd\u751f\u6548\uff0c\u76ee\u524d\u9700\u8981\u8054\u7cfb\u5177\u4f53\u5bf9\u63a5\u4eba\u6765\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u8fd8\u5728\u8c03\u8bd5\u4e2d\u7684\u63d2\u4ef6\uff0c\u53ef\u4ee5\u914d\u7f6e\u4f60\u672c\u5730\u5e94\u7528\u7684\u5730\u5740\uff0c\u65b9\u4fbf\u8c03\u8bd5\u3002\n\u5176\u4ed6\u73af\u5883\u7684\u63d2\u4ef6\uff0c\u6253\u5305\u5b8c\u6210\u4e4b\u540e\uff0c\u8bf7\u5148",(0,a.kt)("a",{parentName:"p",href:"#%E4%B8%8A%E4%BC%A0%E6%8F%92%E4%BB%B6"},"\u4e0a\u4f20\u63d2\u4ef6"),"\u3002"),(0,a.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.kt)("p",null,"\u5b8c\u6574\u9879\u76ee\u7684\u4ee3\u7801\uff0c\u53ef\u4ee5\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tezignlab/open-docs/tree/main/examples/dam-plugin-basic"},"\u8fd9\u91cc"),"\u627e\u5230\u3002"))}m.isMDXComponent=!0},692:(e,n,t)=>{t.d(n,{Z:()=>l});const l=t.p+"assets/images/demo-d463eb71df61ff1fb52d9c0a83d39095.png"}}]);