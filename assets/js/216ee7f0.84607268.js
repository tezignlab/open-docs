"use strict";(self.webpackChunktezign_open_docs=self.webpackChunktezign_open_docs||[]).push([[9346],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=i,g=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return t?r.createElement(g,o(o({ref:n},s),{},{components:t})):r.createElement(g,o({ref:n},s))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7931:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(1163),i=(t(9496),t(9613));const a={sidebar_position:3},o="\u521d\u59cb\u5316 init",l={unversionedId:"tezign-external-track/web/init",id:"tezign-external-track/web/init",title:"\u521d\u59cb\u5316 init",description:"tezignSdk \u9700\u8981\u6267\u884c\u521d\u59cb\u5316 init \u65b9\u6cd5\u540e\u624d\u80fd\u4e0a\u62a5\u57cb\u70b9",source:"@site/docs/frontend/tezign-external-track/web/init.md",sourceDirName:"tezign-external-track/web",slug:"/tezign-external-track/web/init",permalink:"/docs/frontend/tezign-external-track/web/init",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5",permalink:"/docs/frontend/tezign-external-track/web/install"},next:{title:"\u57cb\u70b9\u4e0a\u62a5 track",permalink:"/docs/frontend/tezign-external-track/web/track"}},c={},p=[{value:"npm \u65b9\u5f0f",id:"npm-\u65b9\u5f0f",level:2},{value:"\u6d4f\u89c8\u5668",id:"\u6d4f\u89c8\u5668",level:2}],s={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u521d\u59cb\u5316-init"},"\u521d\u59cb\u5316 ",(0,i.kt)("inlineCode",{parentName:"h1"},"init")),(0,i.kt)("p",null,"tezignSdk \u9700\u8981\u6267\u884c\u521d\u59cb\u5316 init \u65b9\u6cd5\u540e\u624d\u80fd\u4e0a\u62a5\u57cb\u70b9"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// init\u65b9\u6cd5\u5165\u53c2\ninterface InitConfig {\n  // \u7528\u6237id\uff0c\u7528\u4e8e\u7528\u6237\u884c\u4e3a\u5206\u6790\n  // \u975e\u5fc5\u586b\uff0c\n  // \u53ef\u4ee5\u901a\u8fc7update\u65b9\u6cd5\u66f4\u65b0\n  user_id?: string;\n  // \u524d\u7f6e\u83b7\u5f97\u7684\u79df\u6237id\n  tenant_id: string;\n  // \u524d\u7f6e\u83b7\u5f97\u7684open-api\u9274\u6743token (access_token)\n  token: string;\n  // \u524d\u7f6e\u83b7\u5f97\u7684\u5e94\u7528id\n  client_id: string;\n  // \u57cb\u70b9\u8bf7\u6c42\u914d\u7f6e\n  http: {\n    // \u8bf7\u6c42\u53d1\u8d77\u65b9\u5f0f\uff0c\u9ed8\u8ba4fetch\n    sendType?: 'XHR' | 'fetch';\n    // \u8bf7\u6c42url\uff0c\u9700\u7ea6\u5b9a\u544a\u77e5\n    api: string;\n    // \u8bf7\u6c42header\u8bbe\u7f6e\n    header?: {\n      [key: string]: string;\n    };\n    // \u4e0d\u53d1\u9001\u771f\u5b9e\u8bf7\u6c42\uff0c\u53ea\u5728 console \u6253\u5370\n    debugHttp?: boolean; // default: false\n  };\n  // \u53d1\u9001\u8bbe\u7f6e\n  sender?: {\n    // \u662f\u5426\u542f\u7528\u6279\u91cf\u53d1\u9001\n    enableBatchSend?: boolean; // default: false\n    // \u6279\u91cf\u53d1\u9001\u95f4\u9694\u65f6\u95f4\n    interval?: number; // default: 6_000 (6s)\n    // \u6279\u91cf\u53d1\u9001\u7684\u6700\u5927\u4e8b\u4ef6\u4e2a\u6570\n    maxQueueSize?: number; // default: 6\n  };\n  // \u5728 console \u6253\u5370 sdk \u7684\u5185\u90e8 log\uff0cdebug\u7528\n  log?: boolean; // default: false;\n\n  // \u7528\u6765\u52a0\u8f7d sdk script\uff0c\u9ed8\u8ba4\u4f7f\u7528 tezign \u63d0\u4f9b\u7684script\u5730\u5740(cdn)\n  /**\n   * \u4ec5 web (npm) \u8bd5\u7528\n   */\n  scriptUrl?: string; // default: undefined;\n}\n")),(0,i.kt)("h2",{id:"npm-\u65b9\u5f0f"},"npm \u65b9\u5f0f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import tezignSdk from '@tezignlab/tezign-external-track'\n\n// \u521d\u59cb\u5316\ntezignSdk.init(initParams: InitConfig)\n")),(0,i.kt)("h2",{id:"\u6d4f\u89c8\u5668"},"\u6d4f\u89c8\u5668"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"window.tezignExternalTrack.init(initParams: InitConfig)\n")))}u.isMDXComponent=!0}}]);