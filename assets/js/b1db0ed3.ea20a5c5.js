"use strict";(self.webpackChunktezign_open_docs=self.webpackChunktezign_open_docs||[]).push([[524],{9613:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5158:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(1163),o=(t(9496),t(9613));const a={sidebar_position:6},i="UI \u914d\u7f6e",s={unversionedId:"asset-uploader/config/ui",id:"asset-uploader/config/ui",title:"UI \u914d\u7f6e",description:"\u6211\u4eec\u53ef\u4ee5\u5411\u7d20\u6750\u4e0a\u4f20\u7ec4\u4ef6\u4f20\u9012 UI \u914d\u7f6e\u5b9e\u73b0\u5bf9 UI \u8c03\u6574\u3002",source:"@site/docs/frontend/asset-uploader/config/ui.md",sourceDirName:"asset-uploader/config",slug:"/asset-uploader/config/ui",permalink:"/docs/frontend/asset-uploader/config/ui",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u4e0a\u4f20 File \u6587\u4ef6 / URL \u8f6c\u5b58",permalink:"/docs/frontend/asset-uploader/config/transfer"},next:{title:"\u4e8b\u4ef6",permalink:"/docs/frontend/asset-uploader/events/"}},l={},c=[{value:"\u6570\u636e\u7ed3\u6784",id:"\u6570\u636e\u7ed3\u6784",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ui-\u914d\u7f6e"},"UI \u914d\u7f6e"),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5411\u7d20\u6750\u4e0a\u4f20\u7ec4\u4ef6\u4f20\u9012 UI \u914d\u7f6e\u5b9e\u73b0\u5bf9 UI \u8c03\u6574\u3002"),(0,o.kt)("h2",{id:"\u6570\u636e\u7ed3\u6784"},"\u6570\u636e\u7ed3\u6784"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface UIConfig {\n  type: 'tezign-asset-uploader-ui';\n  data: {\n    /** \u9690\u85cf\u53f3\u4e0a\u89d2\u5173\u95ed\u6309\u94ae */\n    hideCancel?: boolean;\n    /**\n     * \u4e0a\u4f20\u65b9\u5f0f\n     * file: \u4e0a\u4f20\u6587\u4ef6\n     * folder: \u4e0a\u4f20\u6587\u4ef6\u5939\n     */\n    showList: ('file' | 'folder')[];\n    /** \u662f\u5426\u663e\u793a\u72b6\u6001\u680f */\n    disableStatusbar?: boolean;\n    /** \u662f\u5426\u663e\u793a\u5b8c\u6210\u9875\u9762 */\n    disableCompletedBar?: boolean;\n    /** \u81ea\u5b9a\u4e49\u4e0a\u4f20\u5f39\u7a97\u7c7b\u540d */\n    modalContainerClassName?: string;\n    /** \u81ea\u5b9a\u4e49\u4e0a\u4f20\u5f39\u7a97\u6837\u5f0f */\n    cusModalClassStyle?: Record<string, object>;\n    /** \u91cd\u65b0\u9009\u62e9\u6587\u6848 */\n    retryText?: string;\n    /** \u76f4\u63a5\u5165\u5e93\u6309\u94ae\u6587\u6848 */\n    directConfirmText?: string;\n    /** \u5e95\u90e8\u63d0\u793a\u6587\u6848 */\n    footTips?: string;\n    /** \u786e\u8ba4\u6309\u94ae\u6587\u6848 */\n    confirmText?: string;\n  };\n}\n")),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"iframe.contentWindow?.postMessage({\n  type: 'tezign-asset-uploader-ui',\n  data: {\n    showList: ['file']\n    hideCancel: true,\n  },\n});\n")))}d.isMDXComponent=!0}}]);