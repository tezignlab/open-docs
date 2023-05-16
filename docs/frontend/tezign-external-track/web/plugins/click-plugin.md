---
sidebar_position: 2
---
# 无痕点击埋点插件
监听全局点击，将埋点数据挂载于点击dom的自定义属性上，实现点击此dom后的自动埋点上报

```typescript
import tezignSdk from '@tezignlab/tezign-external-track';
import clickPlugin from '@tezignlab/tezign-external-track/dist/esm/plugins/click';

interface ClickConfig {
    /**无侵入点击事件的自定义属性*/
    clickEventAttr: string,
    /**无侵入点击事件的冒泡自定义属性*/
    clickEventBubble: string,
    clickEventCode: string
}
tezignSdk.use(clickPlugin({
    /**无侵入点击事件的自定义属性*/
    clickEventAttr: 'data-track-click',
    /**无侵入点击事件的冒泡自定义属性*/
    clickEventBubble: 'data-track-bubble',
    clickEventCode: 'data-track-click-code'
}));
```

```html
/**-----使用时在dom上直接绑定数据到上面配置的自定义属性中-------
clickEventAttr对应的自定义属性绑定埋点中的event_properties
clickEventCode对应的自定义属性绑定埋点中的event_type_code
clickEventBubble对应的自定义属性绑定'true': 启用冒泡，该点击事件触发父级元素的click事件；'false'：禁用冒泡,
**/

<div data-track-click={stringify({ domId: 2 })} data-track-bubble="true" data-track-click-code="global-click">
  点击后自动上报
</div>


```