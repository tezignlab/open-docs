"use strict";(self.webpackChunktezign_open_docs=self.webpackChunktezign_open_docs||[]).push([[6315],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(1163),o=(r(9496),r(9613));const a={sidebar_position:1},i="\u7b80\u4ecb",c={unversionedId:"asset-selector/index",id:"asset-selector/index",title:"\u7b80\u4ecb",description:"\u7d20\u6750\u9009\u62e9\u5668\u662f\u5c06\u8d44\u4ea7\u4ece \u5185\u5bb9\u4e2d\u53f0\u83b7\u53d6\u5230 Web \u5e94\u7528\u7a0b\u5e8f\u7684\u6700\u7b80\u5355\u7684\u89e3\u51b3\u65b9\u6848\u3002",source:"@site/docs/frontend/asset-selector/index.md",sourceDirName:"asset-selector",slug:"/asset-selector/",permalink:"/docs/frontend/asset-selector/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u7d20\u6750\u9009\u62e9\u5668",permalink:"/docs/frontend/category/asset-selector"},next:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/docs/frontend/asset-selector/quick-start"}},s={},l=[],p={toc:l},u="wrapper";function f(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,o.kt)("p",null,"\u7d20\u6750\u9009\u62e9\u5668\u662f\u5c06\u8d44\u4ea7\u4ece \u5185\u5bb9\u4e2d\u53f0\u83b7\u53d6\u5230 Web \u5e94\u7528\u7a0b\u5e8f\u7684\u6700\u7b80\u5355\u7684\u89e3\u51b3\u65b9\u6848\u3002\n\u5b83\u4f7f\u7528iframe\u7684\u65b9\u5f0f\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u6dfb\u52a0\u5bf9\u4ece\u5185\u5bb9\u4e2d\u53f0 \u9009\u62e9\u548c\u5bfc\u5165\u8d44\u4ea7\u7684\u652f\u6301\uff0c\u800c\u65e0\u9700\u62c5\u5fc3\u4e0e\u7d20\u6750\u9009\u62e9\u5668\u76f8\u5173\u7684\u590d\u6742\u6027\uff1aUI \u8bbe\u8ba1\u3001\u8eab\u4efd\u9a8c\u8bc1\u3001API \u8bf7\u6c42\u7b49\u3002\n\u4f01\u4e1a\u53ef\u6839\u636e\u4e0d\u540c\u4e1a\u52a1\u573a\u666f\u901a\u8fc7\u81ea\u5b9a\u4e49\u7b5b\u9009\u9879\u53ca\u7b5b\u9009\u9879\u9ed8\u8ba4\u503c\u6a21\u677f\u6765\u9ad8\u6548\u4fbf\u6377\u7684\u67e5\u8be2\u3001\u8fc7\u6ee4\uff08\u901a\u8fc7\u667a\u80fd\u8fc7\u6ee4\u5668\u3001\u5143\u5c5e\u6027\u3001\u6807\u7b7e\u3001\u5173\u952e\u5b57\u548c\u81ea\u5b9a\u4e49\u8fc7\u6ee4\u7b5b\u9009\u9879\uff09\u3001\u6392\u5e8f\u548c\u9009\u62e9DAM\u4e2d\u6570\u636e\u8d44\u4ea7\uff0c\u7136\u540e\u5c06\u5b83\u4eec\u5bfc\u5165\u53e6\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"preview",src:r(623).Z,width:"1205",height:"813"})))}f.isMDXComponent=!0},623:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/material-selector-9831d5f3a625a1d6eb3741030ff1bdf0.png"}}]);