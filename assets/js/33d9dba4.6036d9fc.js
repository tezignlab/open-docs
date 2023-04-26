"use strict";(self.webpackChunktezign_open_docs=self.webpackChunktezign_open_docs||[]).push([[3985],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2282:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(1163),o=(n(9496),n(9613));const a={sidebar_position:6},i="UI\u914d\u7f6e",c={unversionedId:"asset-selector/ui",id:"asset-selector/ui",title:"UI\u914d\u7f6e",description:"\u8bf7\u5728\u54cd\u5e94tezign-selector-page-ready\u4e8b\u4ef6\u65f6\u5019\uff0c\u5728\u901a\u8fc7tezign-material-selector\u547d\u4ee4\u4f20\u5165\u914d\u7f6e\u6570\u636e\u4e4b\u524d\u4f7f\u7528tezign-selector-ui\u547d\u4ee4\uff0c\u907f\u514d\u51fa\u73b0 UI \u6296\u52a8\u95ee\u9898\u3002",source:"@site/docs/frontend/asset-selector/ui.md",sourceDirName:"asset-selector",slug:"/asset-selector/ui",permalink:"/docs/frontend/asset-selector/ui",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e\u9879",permalink:"/docs/frontend/asset-selector/config"},next:{title:"\u6570\u636e\u6743\u9650\u7533\u8bf7",permalink:"/docs/frontend/asset-selector/apply-auth"}},s={},l=[{value:"\u6570\u636e\u7ed3\u6784",id:"\u6570\u636e\u7ed3\u6784",level:2},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ui\u914d\u7f6e"},"UI\u914d\u7f6e"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u8bf7\u5728\u54cd\u5e94",(0,o.kt)("inlineCode",{parentName:"p"},"tezign-selector-page-ready"),"\u4e8b\u4ef6\u65f6\u5019\uff0c\u5728\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"tezign-material-selector"),"\u547d\u4ee4\u4f20\u5165\u914d\u7f6e\u6570\u636e\u4e4b\u524d\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"tezign-selector-ui"),"\u547d\u4ee4\uff0c\u907f\u514d\u51fa\u73b0 UI \u6296\u52a8\u95ee\u9898\u3002")),(0,o.kt)("h2",{id:"\u6570\u636e\u7ed3\u6784"},"\u6570\u636e\u7ed3\u6784"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'interface SelectorUICmd {\n  type: "tezign-selector-ui";\n  data: SelectorUI;\n}\n\ninterface SelectorUI {\n  // \u4e3atrue\u65f6\u9690\u85cf\u53f3\u4e0a\u89d2\u7684"X"\u5173\u95ed\u6309\u94ae\n  hideCancel?: boolean;\n  // \u786e\u8ba4\u6309\u94ae\u914d\u7f6e\n  confirmBtn?: {\n    text: string; // \u786e\u8ba4\u6309\u94ae\u6587\u6848\n  };\n  // \u5e95\u90e8\u63d0\u793a\u680f\n  "#alert"?: {\n    // \u63d0\u793a\u6587\u6848\n    message: string;\n  };\n  // \u5e95\u90e8\u64cd\u4f5c\u7ec4\u4ef6\n  "#action"?: IMetaComp[];\n}\n\ntype IMetaComp = IMetaCompCheckBox;\n\ninterface IMetaCompCheckbox {\n  type: ECompType.Checkbox;\n  props: {\n    id: string; // \u7528\u4e8e\u6807\u8bc6\u7ec4\u4ef6\u793a\u4f8b\n    disabled?: boolean;\n    checked: boolean;\n    text: string;\n  };\n}\n\nenum ECompType {\n  Checkbox = "checkbox",\n}\n')),(0,o.kt)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'iframe.contentWindow?.postMessage({\n  type: "tezign-selector-ui",\n  data: {\n    hideCancel: true,\n    confirmBtn: {\n      text: "\u786e\u5b9a\u6309\u94ae\u6587\u6848",\n    },\n    "#alert": { message: "\u8fd9\u662f\u5e95\u90e8\u63d0\u793a\u4fe1\u606f" },\n  },\n});\n')))}d.isMDXComponent=!0}}]);