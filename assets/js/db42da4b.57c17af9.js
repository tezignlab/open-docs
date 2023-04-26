"use strict";(self.webpackChunktezign_open_docs=self.webpackChunktezign_open_docs||[]).push([[2259],{9613:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(1163),a=(n(9496),n(9613));const o={sidebar_position:4},i="\u914d\u7f6e\u9879",c={unversionedId:"asset-uploader/config",id:"asset-uploader/config",title:"\u914d\u7f6e\u9879",description:"\u6570\u636e\u7ed3\u6784",source:"@site/docs/frontend/asset-uploader/config.md",sourceDirName:"asset-uploader",slug:"/asset-uploader/config",permalink:"/docs/frontend/asset-uploader/config",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u6388\u6743",permalink:"/docs/frontend/asset-uploader/authorize"},next:{title:"UI\u914d\u7f6e",permalink:"/docs/frontend/asset-uploader/ui"}},s={},p=[{value:"\u6570\u636e\u7ed3\u6784",id:"\u6570\u636e\u7ed3\u6784",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],l={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,a.kt)("h2",{id:"\u6570\u636e\u7ed3\u6784"},"\u6570\u636e\u7ed3\u6784"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Config {\n  // \u9875\u9762\u4f20\u9012\u6216\u63a5\u6536\u7684\u6570\u636e\u6807\u8bc6\n  type: 'tezign-asset-uploader-config';\n  data: {\n    // \u975e\u5fc5\u586b\u3002\u4e0a\u4f20\u7684\u6587\u4ef6\u7c7b\u578b\n    accept?: string;\n    // \u975e\u5fc5\u586b\u3002 \u4e00\u6b21\u6700\u5927\u4e0a\u4f20\u6570\u91cf\n    maximum?: number;\n    // \u975e\u5fc5\u586b\u3002\u6587\u4ef6\u5230\u6700\u5927\u4e0a\u4f20\u9650\u5236\u540e\u63d0\u793a\u6587\u6848\n    // \u9ed8\u8ba4\u6587\u6848\uff1a \u4e00\u6b21\u53ea\u80fd\u4e0a\u4f20 ${maximum} \u4e2a\u6587\u4ef6\n    maximumTip?: string;\n    // \u975e\u5fc5\u586b\u3002\u5165\u5e93\u63a5\u53e3\u5730\u5740\n    // \u8be5\u5b57\u6bb5\u4e0d\u4f20\u9ed8\u8ba4\u4f1a\u8c03\u63a5\u53e3\u5165\u5e93\n    saveUrl?: string;\n  }\n}\n")),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"iframe.contentWindow.postMessage({\n  type: 'tezign-asset-uploader-config',\n  data: { \n    accept: '',\n    maximum: 10,\n    maximumTip: '',\n  }\n}, '*');\n")))}d.isMDXComponent=!0}}]);