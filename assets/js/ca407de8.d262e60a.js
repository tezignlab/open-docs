"use strict";(self.webpackChunktezign_open_docs=self.webpackChunktezign_open_docs||[]).push([[4209],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(1163),o=(n(9496),n(9613));const i={sidebar_position:5},a="\u914d\u7f6e\u9879",c={unversionedId:"asset-selector/config",id:"asset-selector/config",title:"\u914d\u7f6e\u9879",description:"\u793a\u4f8b",source:"@site/docs/frontend/asset-selector/config.md",sourceDirName:"asset-selector",slug:"/asset-selector/config",permalink:"/docs/frontend/asset-selector/config",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u6388\u6743",permalink:"/docs/frontend/asset-selector/authorize"},next:{title:"UI \u914d\u7f6e",permalink:"/docs/frontend/asset-selector/ui"}},s={},l=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],p={toc:l},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,o.kt)("h1",{id:"\u6570\u636e\u7ed3\u6784"},"\u6570\u636e\u7ed3\u6784"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Config {\n  // \u9875\u9762\u4f20\u9012\u6216\u63a5\u6536\u7684\u6570\u636e\u6807\u8bc6\uff08postMessage\u5f62\u5f0f\uff09\n  type: 'tezign-material-selector';\n  // \u9700\u8981\u4f20\u9012\u7684\u914d\u7f6e\u6570\u636e\n  data: {\n    filterCode: string; // \u7b5b\u9009\u9879\u914d\u7f6ecode\n    formatLimit?: number; // \u975e\u5fc5\u586b\u3002 \u9650\u5236\u6240\u9009\u62e9\u7684\u6587\u4ef6\u603b\u6570\u91cf\uff08\u53ea\u6709\u5728\u4e0d\u9650\u5236\u6587\u4ef6\u683c\u5f0f\u548c\u683c\u5f0f\u6570\u91cf\u65f6\uff0c\u6b64\u5b57\u6bb5\u624d\u751f\u6548\uff09\n    sizeLimit?: Byte; // \u975e\u5fc5\u586b\u3002\u63a7\u5236\u9009\u62e9\u7684\u7d20\u6750\u5927\u5c0f\uff0c\u5355\u4f4d\u662fbyte\uff08\uff08\u53ea\u6709\u5728\u4e0d\u9650\u5236\u6587\u4ef6\u683c\u5f0f\u548c\u683c\u5f0f\u6570\u91cf\u65f6\uff0c\u6b64\u5b57\u6bb5\u624d\u751f\u6548\uff09\uff09\u3002\n    config: Array<{\n      id:\n        | 'image' // \u56fe\u7247\n        | 'audio' // \u97f3\u9891\n        | 'video' // \u89c6\u9891\n        | 'document' // \u6587\u6863\n        | 'designSourceFile' // \u8bbe\u8ba1\u6e90\u6587\u4ef6\n        | 'excel' // \u8868\u683c\n        | 'font' // \u5b57\u4f53\u6587\u4ef6\n        | 'zip' // \u538b\u7f29\u5305\n        | 'group' // \u7ec4\u5408\u5185\u5bb9\n        | 'text' // \u7eaf\u6587\u672c\n        | 'rtf' // \u6587\u7ae0\n        | 'url'; // \u7f51\u9875\u5185\u5bb9\n      limit: number; // \u9650\u5236\u683c\u5f0f\u6570\u91cf(limit=0 \u4ee3\u8868\u4e0d\u9650\u5236\u683c\u5f0f\u6570\u91cf)\n      sizeLimit?: Byte;\n      groupId?: number; // \u9700\u8981\u76f4\u63a5\u5b9a\u4f4d\u5230\u6307\u5b9a\u7d20\u6750\u7ec4\u7684\u7ec4id\n    }>;\n  };\n}\n\ntype Byte = number;\n")),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"iframe.contentWindow.postMessage(\n  {\n    type: 'tezign-material-selector',\n    data: {\n      config: [\n        { id: 'image', limit: 5 },\n        {\n          id: 'audio',\n          limit: 9,\n          sizeLimit: 10 * 1024 ** 2, //\u53ea\u80fd\u9009\u62e9<=10MB\u7684\u97f3\u9891\n        },\n      ],\n      filterCode: 'open-component-search-001',\n      formatLimit: 5,\n      sizeLimit: 10 * Math.pow(1024, 2), // \u53ea\u80fd\u9009\u62e9<=10MB\u7d20\u6750\n      groupId: 123456,\n    },\n  },\n  '*',\n);\n")))}f.isMDXComponent=!0}}]);