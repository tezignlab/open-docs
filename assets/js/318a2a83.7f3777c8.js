"use strict";(self.webpackChunktezign_open_docs=self.webpackChunktezign_open_docs||[]).push([[2127],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4046:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(1163),o=(r(9496),r(9613));const a={sidebar_position:6},i="\u4e0a\u4f20 File \u6587\u4ef6 / URL \u8f6c\u5b58",l={unversionedId:"asset-uploader/events/transfer",id:"asset-uploader/events/transfer",title:"\u4e0a\u4f20 File \u6587\u4ef6 / URL \u8f6c\u5b58",description:"\u652f\u6301\u901a\u8fc7 postMessage \u7684\u65b9\u5f0f\u6765\u4e0a\u4f20\u6587\u4ef6\u3002\u652f\u6301 File \u6587\u4ef6\u683c\u5f0f\u6216\u8005\u662f URL \u7684\u65b9\u5f0f\u3002\u5176\u4e2d URL \u5bf9\u5e94\u7684\u57df\u540d\u767d\u540d\u5355\uff0c\u9700\u8981\u627e\u7279\u8d5e\u6280\u672f\u540c\u5b66\u5f00\u901a",source:"@site/docs/frontend/asset-uploader/events/transfer.md",sourceDirName:"asset-uploader/events",slug:"/asset-uploader/events/transfer",permalink:"/docs/frontend/asset-uploader/events/transfer",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u786e\u5b9a\u6309\u94ae\u70b9\u51fb",permalink:"/docs/frontend/asset-uploader/events/confirm"},next:{title:"\u7279\u8d5e\u57cb\u70b9SDK",permalink:"/docs/frontend/category/tezign-external-track"}},s={},p=[{value:"\u6570\u636e\u7ed3\u6784",id:"\u6570\u636e\u7ed3\u6784",level:2}],c={toc:p},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4e0a\u4f20-file-\u6587\u4ef6--url-\u8f6c\u5b58"},"\u4e0a\u4f20 File \u6587\u4ef6 / URL \u8f6c\u5b58"),(0,o.kt)("p",null,"\u652f\u6301\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"postMessage")," \u7684\u65b9\u5f0f\u6765\u4e0a\u4f20\u6587\u4ef6\u3002\u652f\u6301 File \u6587\u4ef6\u683c\u5f0f\u6216\u8005\u662f URL \u7684\u65b9\u5f0f\u3002\u5176\u4e2d URL \u5bf9\u5e94\u7684\u57df\u540d\u767d\u540d\u5355\uff0c\u9700\u8981\u627e\u7279\u8d5e\u6280\u672f\u540c\u5b66\u5f00\u901a"),(0,o.kt)("h2",{id:"\u6570\u636e\u7ed3\u6784"},"\u6570\u636e\u7ed3\u6784"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface EventConfirm {\n  // \u4e8b\u4ef6\u6807\u8bc6\n  type: 'tezign-asset-uploader-upload';\n  data: {\n    type: string;\n    files: File[] | UrlFile[];\n  };\n}\n\nexport interface UrlFile {\n  // \u6587\u4ef6\u540d\u9700\u8981\u683c\u5f0f\u540e\u7f00\uff0c\u5982 test.png\n  fileName?: string;\n  // \u53ef\u4e0b\u8f7d\u7684\u8d44\u6e90\u94fe\u63a5\n  url: string;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/File"},"File \u6587\u4ef6\u5bf9\u8c61")))}f.isMDXComponent=!0}}]);