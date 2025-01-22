"use strict";(self.webpackChunktezign_open_docs=self.webpackChunktezign_open_docs||[]).push([[9704],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(t),f=o,d=s["".concat(p,".").concat(f)]||s[f]||g[f]||i;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},322:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(1163),o=(t(9496),t(9613));const i={sidebar_position:3},a="PV \u57cb\u70b9\u63d2\u4ef6",l={unversionedId:"tezign-external-track/web/plugins/pageview-plugin",id:"tezign-external-track/web/plugins/pageview-plugin",title:"PV \u57cb\u70b9\u63d2\u4ef6",description:"\u5bf9\u4e8e SPA \u5e94\u7528\u6765\u8bf4\uff0c\u6bcf\u6b21 url \u53d1\u751f\u53d8\u5316\u90fd\u7b97\u4e00\u6b21 PV \u5e76\u4e14\u4f1a\u5728 DOMContentLoaded \u4e4b\u540e\u4e0a\u62a5\u5f53\u524d\u521d\u59cb\u7684\u9875\u9762\u4f5c\u4e3a\u4e00\u6b21 PV\u3002",source:"@site/docs/frontend/tezign-external-track/web/plugins/pageview-plugin.md",sourceDirName:"tezign-external-track/web/plugins",slug:"/tezign-external-track/web/plugins/pageview-plugin",permalink:"/docs/frontend/tezign-external-track/web/plugins/pageview-plugin",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u65e0\u75d5\u70b9\u51fb\u57cb\u70b9\u63d2\u4ef6",permalink:"/docs/frontend/tezign-external-track/web/plugins/click-plugin"},next:{title:"\u6279\u91cf\u57cb\u70b9\u6301\u7eed\u4e0a\u62a5\u63d2\u4ef6",permalink:"/docs/frontend/tezign-external-track/web/plugins/persist-localstorage-plugin"}},p={},c=[],u={toc:c},s="wrapper";function g(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pv-\u57cb\u70b9\u63d2\u4ef6"},"PV \u57cb\u70b9\u63d2\u4ef6"),(0,o.kt)("p",null,"\u5bf9\u4e8e SPA \u5e94\u7528\u6765\u8bf4\uff0c\u6bcf\u6b21 url \u53d1\u751f\u53d8\u5316\u90fd\u7b97\u4e00\u6b21 PV \u5e76\u4e14\u4f1a\u5728 DOMContentLoaded \u4e4b\u540e\u4e0a\u62a5\u5f53\u524d\u521d\u59cb\u7684\u9875\u9762\u4f5c\u4e3a\u4e00\u6b21 PV\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import tezignSdk from '@tezignlab/tezign-external-track';\nimport pageViewPlugin from '@tezignlab/tezign-external-track/dist/esm/plugins/page-view';\n\ntezignSdk.use(pageViewPlugin(config: PageViewConfig))\n\ninterface PageViewConfig {\n  /**\n   * monitor hash change event\n   * @default false\n   */\n  monitorHash?: boolean;\n  /**\n   * monitor history.pushState\n   * @default true\n   */\n  monitorPush?: boolean;\n  /**\n   * monitor browser page forward or back\n   * @default true\n   */\n  monitorPop?: boolean;\n  /**\n   * monitor history.replace\n   * @default true\n   */\n  monitorReplace?: boolean;\n}\n")),(0,o.kt)("p",null,"\u5982\u679c\u7f51\u9875\u6709\u951a\u70b9\u529f\u80fd\uff0c\u4e0d\u5efa\u8bae\u5f00\u542f monitorHash"))}g.isMDXComponent=!0}}]);