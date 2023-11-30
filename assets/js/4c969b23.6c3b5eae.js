"use strict";(self.webpackChunktezign_open_docs=self.webpackChunktezign_open_docs||[]).push([[9378],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,g=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(1163),o=(n(9496),n(9613));const a={sidebar_position:5},i="\u914d\u7f6e\u9879",c={unversionedId:"group-selector/config",id:"group-selector/config",title:"\u914d\u7f6e\u9879",description:"\u793a\u4f8b",source:"@site/docs/frontend/group-selector/config.md",sourceDirName:"group-selector",slug:"/group-selector/config",permalink:"/docs/frontend/group-selector/config",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/docs/frontend/group-selector/getting-started"},next:{title:"\u4e8b\u4ef6",permalink:"/docs/frontend/group-selector/events/"}},l={},s=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,o.kt)("h1",{id:"\u6570\u636e\u7ed3\u6784"},"\u6570\u636e\u7ed3\u6784"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Config {\n  // \u9875\u9762\u4f20\u9012\u6216\u63a5\u6536\u7684\u6570\u636e\u6807\u8bc6\uff08postMessage\u5f62\u5f0f\uff09\n  type: 'tezign-asset-group-selector-config';\n  // \u9700\u8981\u4f20\u9012\u7684\u914d\u7f6e\u6570\u636e\n  data: {\n    // \u552f\u4e00\u6807\u8bc6\n    id?: string;\n    // \u6807\u9898\u5185\u5bb9\n    title?: string;\n    // \u662f\u5426\u53ef\u4ee5\u9009\u62e9\u6839\u8282\u70b9\n    rootSelectable?: boolean;\n    // \u662f\u5426\u5c55\u793a\u641c\u7d22\uff0c\u9ed8\u8ba4 true\n    showSearch?: boolean;\n    // \u662f\u5426\u5c55\u793a\u6700\u8fd1\u6dfb\u52a0\u680f\uff0c\u9ed8\u8ba4 true\n    showRecentlyAdded?: boolean;\n    // \u662f\u5426\u5c55\u793a\u7f16\u8f91\u7d20\u6750\u7ec4\n    showEdit?: boolean;\n    // \u662f\u5426\u5c55\u793a\u6807\u9898\n    showTitle?: boolean;\n    // \u662f\u5426\u9690\u85cf\u53d6\u6d88\n    hideCancel?: boolean;\n    // \u786e\u8ba4\u6587\u6848\n    confirmText?: string;\n  };\n}\n")),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"iframe.contentWindow.postMessage(\n  {\n    type: 'tezign-asset-group-selector-config',\n    data: {\n      title: '\u9009\u62e9\u7d20\u6750\u7ec4',\n      rootSelectable: true,\n      showSearch: true,\n      showRecentlyAdded: true,\n      showEdit: false,\n      showTitle: true,\n      hideCancel: true,\n    },\n  },\n  '*',\n);\n")))}d.isMDXComponent=!0}}]);