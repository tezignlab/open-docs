---
sidebar_position: 1
---

# 加载完成

监听 iframe 页面加载完成后，方可传入各项配置，参考[配置](../config)。

## 数据结构

````typescript
interface EventPageReady {
  // 事件标识
  type: 'tezign-asset-group-selector-ready';
  data: {
    // 事件描述
    msg: string;
  };
}


## 示例

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <title>素材组选择器父页面</title>
  </head>
  <body>
    <script>
      const receiveMessage = (event) => {
        const iframe = document.getElementById('iframe');
        if (!iframe || event.source !== iframe.contentWindow) {
          // 判断是否为当前iframe发出的消息
          return;
        }

        if (event?.data?.type === 'tezign-asset-group-selector-ready') {
          // iframe 页面加载完成，可以传入配置参数
          if (!iframe.contentWindow) {
            return;
          }
          // 以下进行tezign-asset-group-selector-config配置
        }
      };
      window.addEventListener('message', receiveMessage, false);
    </script>
    <iframe
      src=`{authUrl}?aesUserInfo={encodeURIComponent(经过 aesKey 加密的用户信息)}&targetUrl={encodeURIComponent({domain}/dam_enterprise/material_group_selector)}`
      id="iframe"
    />
  </body>
</html>
````
