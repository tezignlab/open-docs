"use strict";(self.webpackChunktezign_open_docs=self.webpackChunktezign_open_docs||[]).push([[4244],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(t),f=i,g=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return t?r.createElement(g,o(o({ref:n},s),{},{components:t})):r.createElement(g,o({ref:n},s))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5864:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=t(1163),i=(t(9496),t(9613));const a={sidebar_position:2},o="\u521d\u59cb\u5316 init",c={unversionedId:"tezign-external-track/weapp/init",id:"tezign-external-track/weapp/init",title:"\u521d\u59cb\u5316 init",description:"tezignSdk \u9700\u8981\u6267\u884c\u521d\u59cb\u5316 init \u65b9\u6cd5\u540e\u624d\u80fd\u4e0a\u62a5\u57cb\u70b9",source:"@site/docs/frontend/tezign-external-track/weapp/init.md",sourceDirName:"tezign-external-track/weapp",slug:"/tezign-external-track/weapp/init",permalink:"/docs/frontend/tezign-external-track/weapp/init",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5f15\u5165\u548c\u4f7f\u7528",permalink:"/docs/frontend/tezign-external-track/weapp/install"},next:{title:"\u57cb\u70b9\u4e0a\u62a5 track",permalink:"/docs/frontend/tezign-external-track/weapp/track"}},p={},l=[],s={toc:l},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u521d\u59cb\u5316-init"},"\u521d\u59cb\u5316 ",(0,i.kt)("inlineCode",{parentName:"h1"},"init")),(0,i.kt)("p",null,"tezignSdk \u9700\u8981\u6267\u884c\u521d\u59cb\u5316 init \u65b9\u6cd5\u540e\u624d\u80fd\u4e0a\u62a5\u57cb\u70b9"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// init\u65b9\u6cd5\u5165\u53c2\ninterface InitConfig {\n  // \u7528\u6237id\uff0c\u7528\u4e8e\u7528\u6237\u884c\u4e3a\u5206\u6790\n  // \u975e\u5fc5\u586b\uff0c\n  // \u53ef\u4ee5\u901a\u8fc7update\u65b9\u6cd5\u66f4\u65b0\uff0c\ud83d\udc47\n  user_id?: string;\n  // \u524d\u7f6e\u83b7\u5f97\u7684\u79df\u6237id\n  tenant_id: string;\n  // \u524d\u7f6e\u83b7\u5f97\u7684open-api\u9274\u6743token (access_token)\n  token: string;\n  // \u524d\u7f6e\u83b7\u5f97\u7684\u5e94\u7528id\n  client_id: string;\n  // \u57cb\u70b9\u8bf7\u6c42\u914d\u7f6e\n  http: {\n    // \u8bf7\u6c42\u53d1\u8d77\u65b9\u5f0f\uff0c\u9ed8\u8ba4fetch\n    sendType?: 'XHR' | 'fetch';\n    // \u8bf7\u6c42url\uff0c\u9700\u7ea6\u5b9a\u544a\u77e5\n    api: string;\n    // \u8bf7\u6c42header\u8bbe\u7f6e\n    header?: {\n      [key: string]: string;\n    };\n    // \u4e0d\u53d1\u9001\u771f\u5b9e\u8bf7\u6c42\uff0c\u53ea\u5728 console \u6253\u5370\n    debugHttp?: boolean; // default: false\n  };\n  // \u53d1\u9001\u8bbe\u7f6e\n  sender?: {\n    // \u662f\u5426\u542f\u7528\u6279\u91cf\u53d1\u9001\n    enableBatchSend?: boolean; // default: false\n    // \u6279\u91cf\u53d1\u9001\u95f4\u9694\u65f6\u95f4\n    interval?: number; // default: 6_000 (6s)\n    // \u6279\u91cf\u53d1\u9001\u7684\u6700\u5927\u4e8b\u4ef6\u4e2a\u6570\n    maxQueueSize?: number; // default: 6\n  };\n  // \u5728 console \u6253\u5370 sdk \u7684\u5185\u90e8 log\uff0cdebug\u7528\n  log?: boolean; // default: false;\n\n  // \u7528\u6765\u52a0\u8f7d sdk script\uff0c\u9ed8\u8ba4\u4f7f\u7528 tezign \u63d0\u4f9b\u7684script\u5730\u5740(cdn)\n  /**\n   * \u4ec5 web (npm) \u8bd5\u7528\n   */\n  scriptUrl?: string; // default: undefined;\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import tezignSdk from '@tezignlab/tezign-external-track/miniprogram_dist';\n// \u521d\u59cb\u5316\ntezignSdk.init(initParams);\n")))}d.isMDXComponent=!0}}]);