"use strict";(self.webpackChunktezign_open_docs=self.webpackChunktezign_open_docs||[]).push([[9653],{8945:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"/2022/05/25/asset-selector-v1.2.0","metadata":{"permalink":"/changelog/2022/05/25/asset-selector-v1.2.0","source":"@site/changelog/2022-05-25-asset-selector-v1.2.0/index.md","title":"\u7d20\u6750\u9009\u62e9\u5668v1.2.0","description":"\u65b0\u589e\u5e95\u90e8\u63d0\u793a\u680f","date":"2022-05-25T00:00:00.000Z","formattedDate":"2022\u5e745\u670825\u65e5","tags":[],"readingTime":2.83,"hasTruncateMarker":false,"authors":[{"name":"77","title":"Maintainer","url":"https://github.com/nomyfan","imageURL":"https://github.com/nomyfan.png","key":"77"}],"frontMatter":{"title":"\u7d20\u6750\u9009\u62e9\u5668v1.2.0","authors":"77"},"nextItem":{"title":"\u7d20\u6750\u9009\u62e9\u5668v1.1.0","permalink":"/changelog/2022/03/29/asset-selector-v1.1.0"}},"content":"## \u65b0\u589e\u5e95\u90e8\u63d0\u793a\u680f\\n\\n![selector-bottom-alert](selector-bottom-alert.png)\\n\\n### \u6570\u636e\u7ed3\u6784\\n\\n```typescript\\ninterface SelectorUI {\\n  \'#alert\'?: {\\n    message: string; // \u63d0\u793a\u6587\u6848\\n  };\\n}\\n\\ninterface SelectorUICmd {\\n  type: \'tezign-selector-ui\';\\n  data: SelectorUI;\\n}\\n```\\n\\n### \u4f8b\u5b50\\n\\n```javascript\\niframe.contentWindow?.postMessage(\\n  {\\n    type: \'tezign-selector-ui\',\\n    data: { \'#alert\': { message: \'\u8fd9\u662f\u5e95\u90e8\u63d0\u793a\u4fe1\u606f\' } },\\n  },\\n  \'*\',\\n);\\n```\\n\\n## \u65b0\u589e\u5e95\u90e8\u64cd\u4f5c\u7ec4\u4ef6\\n\\n![selector-components](selector-components.png)\\n\\n### \u6570\u636e\u7ed3\u6784\\n\\n\u7ec4\u4ef6\u4e3a\u5b8c\u5168\u53d7\u63a7\u7ec4\u4ef6\uff0c\u76ee\u524d\u63d0\u4f9b\u7684\u7ec4\u4ef6\u7c7b\u578b\u6709\\n\\n```typescript\\nenum ECompType {\\n  Checkbox = \'checkbox\',\\n}\\n\\ninterface IMetaCompCheckbox {\\n  type: ECompType.Checkbox;\\n  props: {\\n    id: string; // \u7528\u4e8e\u5728\u54cd\u5e94\u4e8b\u4ef6\u7684\u65f6\u5019\u56de\u4f20\u8bc6\u522b\\n    disabled?: boolean;\\n    checked: boolean;\\n    text: string;\\n  };\\n}\\n\\ntype IMetaComp = IMetaCompCheckbox;\\n\\ninterface SelectorUI {\\n  \'#action\'?: IMetaComp[];\\n}\\n\\n// ---- \u7ec4\u4ef6\u4e8b\u4ef6\\ninterface ComponentEvent {\\n  type: \'tezign-selector-comp-event\';\\n  data: {\\n    type: ECompType;\\n    id: string;\\n    value: unknown; // \u6839\u636e\u7ec4\u4ef6\u7c7b\u578b\u800c\u5b9a\\n  };\\n}\\n```\\n\\n### \u4f8b\u5b50\\n\\n```javascript\\n// \u914d\u7f6echeckbox\u5230\u5e95\u90e8\u64cd\u4f5c\u680f\\niframe.contentWindow?.postMessage(\\n  {\\n    type: \'tezign-selector-ui\',\\n    data: {\\n      \'#action\': [\\n        {\\n          type: ECompType.Checkbox,\\n          props: {\\n            checked: false,\\n            id: \'checkbox_1\',\\n            text: \'\u53d1\u6587\u4ef6\u94fe\u63a5\',\\n          },\\n        },\\n      ],\\n    },\\n  },\\n  \'*\',\\n);\\n\\n// ---- \u54cd\u5e94\u7ec4\u4ef6\u4e8b\u4ef6\\nwindow.addEventListener(\\n  \'message\',\\n  (event) => {\\n    if (event?.data?.type === \'tezign-selector-comp-event\') {\\n      const { type, id, value } = event?.data?.data || {};\\n      if (type === ECompType.Checkbox && id === \'checkbox_1\') {\\n        // ... do something\\n        // for example, use \'tezign-selector-ui\' command to toggle checked state\\n        console.log(value);\\n      }\\n      return;\\n    }\\n  },\\n  false,\\n);\\n```\\n\\n## \u786e\u8ba4\u6309\u94ae\u6587\u6848\u53ef\u914d\u7f6e\\n\\n### \u6570\u636e\u7ed3\u6784\\n\\n```typescript\\ninterface SelectorUI {\\n  confirmBtn?: {\\n    text: string; // \u786e\u8ba4\u6309\u94ae\u6587\u6848\\n  };\\n}\\n\\ninterface SelectorUICmd {\\n  type: \'tezign-selector-ui\';\\n  data: SelectorUI;\\n}\\n```\\n\\n### \u4f8b\u5b50\\n\\n```typescript\\niframe.contentWindow?.postMessage(\\n  {\\n    type: \'tezign-selector-ui\',\\n    data: { confirmBtn: { text: \'\u786e\u8ba4\u6309\u94ae\u6587\u6848\' } },\\n  },\\n  \'*\',\\n);\\n```\\n\\n## \u65b0\u589e\u6570\u636e\u4fdd\u62a4\\n\\n\u65b0\u589e\u6570\u636e\u4fdd\u62a4\uff0c\u70b9\u51fb\u786e\u5b9a\u540e\uff0c\u4f1a\u8fdb\u884c\u9274\u6743\uff0c\u6743\u9650\u4e0d\u8db3\u4f1a\u6709 modal \u63d0\u793a\u3002\u8fc7\u6ee4\u70b9\u51fb\u786e\u8ba4\u4e4b\u540e\u8fd4\u56de\u7684\u6570\u636e\u5b57\u6bb5\uff0c\u6bd4\u5982\u67e5\u770b\u6743\u9650\u4e0d\u4f1a\u6709\u4e0b\u8f7d\u94fe\u63a5\u3002\u53ef\u4ee5\u7533\u8bf7\u7684\u6743\u9650\u6709\uff1a\\n\\n- \u67e5\u770b\uff08\u9ed8\u8ba4\u503c\uff09\\n- \u4e0b\u8f7d\\n\\n### \u6570\u636e\u7ed3\u6784\\n\\n```typescript\\nenum EAuthCode {\\n  VIEW = \'searchOriginalAuth\',\\n  DOWNLOAD = \'downloadOriginalAuth\',\\n}\\n\\ninterface ApplyAuthCmd {\\n  type: \'tezign-selector-auth\';\\n  data: { auth: EAuthCode };\\n}\\n```\\n\\n### \u4f8b\u5b50\\n\\n```javascript\\niframe.contentWindow?.postMessage(\\n  {\\n    type: \'tezign-selector-auth\',\\n    data: { auth: EAuthCode.DOWNLOAD },\\n  },\\n  \'*\',\\n);\\n```\\n\\n## \u65b0\u589e\u201c\u9009\u62e9\u66f4\u65b0\u201d\u4e8b\u4ef6\\n\\n\u89e6\u53d1\u65f6\u673a\u662f\u7528\u6237\u9009\u62e9\u7d20\u6750\u66f4\u65b0\u7684\u65f6\u5019\u3002\\n\\n### \u6570\u636e\u7ed3\u6784\\n\\n```typescript\\ninterface SelectionChangeEvent {\\n  type: \'tezign-selector-selection-change\';\\n  data: ConfirmData; // \u540ctezgin-selector-confirm-btn\u7684\u6570\u636e\u7ed3\u6784\uff08\u53ea\u770b\u6743\u9650\uff09\\n}\\n```\\n\\n## \u65b0\u589e\u7d20\u6750\u5927\u5c0f\u9650\u5236\\n\\nconfig \u65b0\u589e sizeLimit \u53ef\u9009\u5b57\u6bb5\uff0c\u63a7\u5236\u9009\u62e9\u7684\u7d20\u6750\u5927\u5c0f\uff0c\u5355\u4f4d\u662f byte\u3002\\n\\n### \u4f8b\u5b50\\n\\n```javascript\\niframe.contentWindow.postMessage(\\n  {\\n    type: \'tezign-material-selector\',\\n    data: {\\n      config: [\\n        { id: \'image\', limit: 5 },\\n        { id: \'audio\', limit: 9, sizeLimit: 10 * Math.pow(1024, 2) },\\n      ],\\n      filterCode: \'open-component-search-001\',\\n      formatLimit: 5,\\n      sizeLimit: 10 * Math.pow(1024, 2), // \u53ea\u80fd\u9009\u62e9<=10MB\u7d20\u6750\\n    },\\n  },\\n  \'*\',\\n);\\n```"},{"id":"/2022/03/29/asset-selector-v1.1.0","metadata":{"permalink":"/changelog/2022/03/29/asset-selector-v1.1.0","source":"@site/changelog/2022-03-29-asset-selector-v1.1.0.md","title":"\u7d20\u6750\u9009\u62e9\u5668v1.1.0","description":"\u53f3\u4e0a\u89d2\u201cX\u201d\u6309\u94ae\u53ef\u914d\u7f6e\u4e3a\u9690\u85cf","date":"2022-03-29T00:00:00.000Z","formattedDate":"2022\u5e743\u670829\u65e5","tags":[],"readingTime":0.3,"hasTruncateMarker":false,"authors":[{"name":"77","title":"Maintainer","url":"https://github.com/nomyfan","imageURL":"https://github.com/nomyfan.png","key":"77"}],"frontMatter":{"title":"\u7d20\u6750\u9009\u62e9\u5668v1.1.0","authors":"77"},"prevItem":{"title":"\u7d20\u6750\u9009\u62e9\u5668v1.2.0","permalink":"/changelog/2022/05/25/asset-selector-v1.2.0"}},"content":"## \u53f3\u4e0a\u89d2\u201cX\u201d\u6309\u94ae\u53ef\u914d\u7f6e\u4e3a\u9690\u85cf\\n\\n### \u6570\u636e\u7ed3\u6784\\n\\n```typescript\\ninterface SelectorUI {\\n  hideCancel?: boolean;\\n}\\n\\ninterface SelectorUICmd {\\n  type: \'tezign-selector-ui\';\\n  data: SelectorUI;\\n}\\n```\\n\\n### \u4f8b\u5b50\\n\\n```javascript\\niframe.contentWindow?.postMessage({\\n  type: \'tezign-selector-ui\',\\n  data: { hideCancel: true },\\n});\\n```\\n\\n## \u79fb\u9664\u4e86\u5e95\u90e8\u7684\u201c\u53d6\u6d88\u6309\u94ae\u201d"}]}')}}]);