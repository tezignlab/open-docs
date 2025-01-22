"use strict";(self.webpackChunktezign_open_docs=self.webpackChunktezign_open_docs||[]).push([[793],{9613:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||a;return t?r.createElement(d,o(o({ref:n},p),{},{components:t})):r.createElement(d,o({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9767:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(1163),i=(t(9496),t(9613));const a={sidebar_position:2},o="\u57fa\u672c\u914d\u7f6e",l={unversionedId:"asset-selector/config/base",id:"asset-selector/config/base",title:"\u57fa\u672c\u914d\u7f6e",description:"\u8bf7\u5728\u54cd\u5e94 tezign-selector-page-ready \u4e8b\u4ef6\u65f6\u5019\uff0c\u901a\u8fc7 tezign-material-selector \u547d\u4ee4\u4f20\u5165\u914d\u7f6e\u6570\u636e\u3002",source:"@site/docs/frontend/asset-selector/config/base.md",sourceDirName:"asset-selector/config",slug:"/asset-selector/config/base",permalink:"/docs/frontend/asset-selector/config/base",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"UI \u914d\u7f6e",permalink:"/docs/frontend/asset-selector/config/ui"},next:{title:"\u6570\u636e\u6743\u9650\u7533\u8bf7",permalink:"/docs/frontend/asset-selector/config/apply-auth"}},s={},c=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u7b5b\u9009\u9ed8\u8ba4\u503c\u793a\u4f8b",id:"\u7b5b\u9009\u9ed8\u8ba4\u503c\u793a\u4f8b",level:2},{value:"\u5176\u4ed6\u7ec6\u9879\u8bf4\u660e",id:"\u5176\u4ed6\u7ec6\u9879\u8bf4\u660e",level:2}],p={toc:c},u="wrapper";function f(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u57fa\u672c\u914d\u7f6e"},"\u57fa\u672c\u914d\u7f6e"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u8bf7\u5728\u54cd\u5e94 ",(0,i.kt)("inlineCode",{parentName:"p"},"tezign-selector-page-ready")," \u4e8b\u4ef6\u65f6\u5019\uff0c\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"tezign-material-selector")," \u547d\u4ee4\u4f20\u5165\u914d\u7f6e\u6570\u636e\u3002")),(0,i.kt)("h1",{id:"\u6570\u636e\u7ed3\u6784"},"\u6570\u636e\u7ed3\u6784"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Config {\n  /** \u9875\u9762\u4f20\u9012\u6216\u63a5\u6536\u7684\u6570\u636e\u6807\u8bc6\uff08postMessage\u5f62\u5f0f\uff09*/\n  type: 'tezign-material-selector';\n  /** \u9700\u8981\u4f20\u9012\u7684\u914d\u7f6e\u6570\u636e */\n  data: {\n    /** \u8c03\u7528\u65b9\u6807\u8bc6\uff0c\u89e3\u51b3\u591a\u4e2a\u76d1\u542c\u65b9\u51b2\u7a81\u95ee\u9898 */\n    id?: string;\n    /** \u7b5b\u9009\u9879\u914d\u7f6ecode,\u7531\u7279\u8d5e\u63d0\u4f9b */\n    filterCode: string;\n    /** \u9650\u5236\u6240\u9009\u62e9\u7684\u6587\u4ef6\u603b\u6570\u91cf\uff08\u53ea\u6709\u5728\u4e0d\u9650\u5236\u6587\u4ef6\u683c\u5f0f\u548c\u683c\u5f0f\u6570\u91cf\u65f6\uff0c\u6b64\u5b57\u6bb5\u624d\u751f\u6548\uff09*/\n    formatLimit?: number;\n    /** \u975e\u5fc5\u586b\u3002\u63a7\u5236\u9009\u62e9\u7684\u7d20\u6750\u5927\u5c0f\uff0c\u5355\u4f4d\u662fbyte\uff08\uff08\u53ea\u6709\u5728\u4e0d\u9650\u5236\u6587\u4ef6\u683c\u5f0f\u548c\u683c\u5f0f\u6570\u91cf\u65f6\uff0c\u6b64\u5b57\u6bb5\u624d\u751f\u6548\uff09\uff09*/\n    sizeLimit?: Byte;\n    /** \u603b\u6587\u4ef6\u7684\u5927\u5c0f\u9650\u5236 */\n    totalSizeLimit?: number;\n    /** \u5bf9\u4e0d\u540c\u7c7b\u578b\u7d20\u6750\u7684\u5b9a\u4e49 */\n    config: Array<{\n      /** \u7d20\u6750\u7c7b\u578b */\n      id:\n        | 'image' // \u56fe\u7247\n        | 'audio' // \u97f3\u9891\n        | 'video' // \u89c6\u9891\n        | 'document' // \u6587\u6863\n        | 'designSourceFile' // \u8bbe\u8ba1\u6e90\u6587\u4ef6\n        | 'excel' // \u8868\u683c\n        | 'font' // \u5b57\u4f53\u6587\u4ef6\n        | 'zip' // \u538b\u7f29\u5305\n        | 'group' // \u7ec4\u5408\u5185\u5bb9\n        | 'text' // \u7eaf\u6587\u672c\n        | 'rtf' // \u6587\u7ae0\n        | 'url'; // \u7f51\u9875\u5185\u5bb9\n      /** \u9650\u5236\u683c\u5f0f\u6570\u91cf(limit=0 \u4ee3\u8868\u4e0d\u9650\u5236\u683c\u5f0f\u6570\u91cf) */\n      limit: number;\n      /** \u63a7\u5236\u9009\u62e9\u7684\u7d20\u6750\u5927\u5c0f\uff0c\u5355\u4f4d\u662fbyte */\n      sizeLimit?: Byte;\n    }>;\n    /** \u5524\u8d77\u7d20\u6750\u9009\u62e9\u5668\u65f6\u9ed8\u8ba4\u5c55\u793a\u6b64\u7d20\u6750\u7ec4 */\n    groupId?: number;\n    /** \u662f\u5426\u53ef\u9009\u62e9\u7d20\u6750\u7ec4\u4e0b\u7684\u6240\u6709\u7d20\u6750 */\n    groupSelectable?: boolean;\n    /** \u641c\u7d22\u9ed8\u8ba4\u503c\uff0c\u5355\u4e2a\u641c\u7d22\u4f20\u53c2\u5b57\u7b26\u4e32\uff0c\u641c\u7d22\u591a\u4e2a\u4f20\u53c2\u6570\u7ec4\u7c7b\u578b */\n    searchDefaultValue?: string | string[];\n    /** \u53ef\u9009\u53c2\u6570\uff0c\u914d\u5408filter\u53c2\u6570\u4f7f\u7528\uff0c\u5728\u8bbe\u7f6e\u4e86filter\u65f6\uff0c\u5c55\u793a\u6240\u6709\u4e0b\u62c9\u9879 */\n    showAllOptions?: boolean;\n    /** \u7b5b\u9009\u9ed8\u8ba4\u503c */\n    filter?: {\n      [code: string]: {\n        /** \u7b5b\u9009\u9879\u7684\u9ed8\u8ba4\u503c\n         * JSON.stringify({value: Array; title: string})\n         */\n        defaultValue?: string;\n        /** \u7b5b\u9009\u9879\u7684\u4e0b\u62c9options, \u8bbe\u7f6eshowAllOptions: true \u6b64\u53c2\u6570\u4f1a\u65e0\u6548 */\n        configValueList?: (number | string)[];\n        /** once\u5141\u8bb8\u53d6\u6d88\u9009\u4e2d  always \u4e0d\u5141\u8bb8\u53d6\u6d88\u9009\u4e2d*/\n        fillEmptyByDefault?: 'once' | 'always';\n        props?: {\n          max?: number;\n          min?: number;\n        };\n      };\n    };\n  };\n}\n\ntype Byte = number;\n")),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"iframe.contentWindow.postMessage(\n  {\n    type: 'tezign-material-selector',\n    data: {\n      config: [\n        { id: 'image', limit: 5 },\n        {\n          id: 'audio',\n          limit: 9,\n          sizeLimit: 10 * 1024 ** 2, //\u53ea\u80fd\u9009\u62e9<=10MB\u7684\u97f3\u9891\n        },\n      ],\n      filterCode: 'open-component-search-003',\n      formatLimit: 5,\n      sizeLimit: 10 * Math.pow(1024, 2), // \u53ea\u80fd\u9009\u62e9<=10MB\u7d20\u6750\n      groupId: 123456,\n    },\n  },\n  '*',\n);\n")),(0,i.kt)("h2",{id:"\u7b5b\u9009\u9ed8\u8ba4\u503c\u793a\u4f8b"},"\u7b5b\u9009\u9ed8\u8ba4\u503c\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"iframe.contentWindow.postMessage(\n  {\n    type: 'tezign-material-selector',\n    data: {\n      config: [],\n      filterCode: 'open-component-search-003',\n      filter: {\n        // \u9ed8\u8ba4\u7b5b\u9009\u6587\u4ef6\u7c7b\u578b\n        SEARCH_FILE_TYPE: {\n          defaultValue: JSON.stringify({\n            title: '\u6587\u4ef6',\n            value: [\n              [1,2,3,26,4,27,44,46,49,53],\n              [5,6,7,8,9,10,29,30,41,45,52,54],\n              [42,43,13],\n              [16,17,50,19,20,51],\n              [61],\n              [62],\n              [47,48,28]\n            ]\n          }),\n          configValueList: [1,2,3,26,4,27,44,46,49,53,42,43,13,16,17,50,19,20,51,5,6,7,8,9,10,29,30,41,45,52,54,61,62,47,48,28],\n          fillEmptyByDefault: 'once' as const\n        },\n        // \u9ed8\u8ba4\u7b5b\u9009\u6587\u4ef6\u5927\u5c0f 0\uff5e200MB\n        CORE_SIZE: {\n          defaultValue: JSON.stringify({\n            title: '0\uff5e200MB',\n            value: [0, 209715200]\n          }),\n          configValueList: [0, 209715200],\n          fillEmptyByDefault: 'once' as const,\n          props: {\n            max: 200,\n            min: 0\n          }\n        }\n      }\n    },\n  },\n  '*',\n);\n")),(0,i.kt)("h2",{id:"\u5176\u4ed6\u7ec6\u9879\u8bf4\u660e"},"\u5176\u4ed6\u7ec6\u9879\u8bf4\u660e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u652f\u6301\u5c06\u7d20\u6750\u7ec4\u5185\u7684\u7d20\u6750\u5168\u90e8\u6dfb\u52a0\u5230\u5217\u8868\u4e2d\u3002\u67e5\u8be2\u7ec4\u5185\u6570\u91cf\u4e0a\u9650\u4e3a 1000")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5173\u4e8e\u9009\u7ec4\u6dfb\u52a0\u7684\u6821\u9a8c\u9650\u5236\u8bf4\u660e\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u9650\u5236\u603b\u6570\u91cf\u6216\u5927\u5c0f\uff0c\u672a\u6ee1\u8db3\u7684\u60c5\u51b5\u4e0b\uff0c\u6574\u7ec4\u7d20\u6750\u5c06\u4e0d\u88ab\u9009\u62e9"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u9650\u5236\u4e86\u5177\u4f53\u683c\u5f0f\u6570\u91cf\u6216\u5927\u5c0f\uff0c\u53ea\u8981\u5b58\u5728\u672a\u6ee1\u8db3\u7684\u60c5\u51b5\u4e0b\uff0c\u6574\u7ec4\u7d20\u6750\u5c06\u4e0d\u88ab\u9009\u62e9")))))}f.isMDXComponent=!0}}]);