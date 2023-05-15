---
sidebar_position: 2
---

# track 方法传参

```typescript
interface ITrackParams {
  event_type_code: string;
  event_properties: {
    data_source: 'external_sdk';
    [key: string]: any;
  }
}

tezignSdk.track(params: ITrackParams)
```

## event_type_code

埋点事件类型。

与业务场景强相关。咨询对接人

## event_properties

埋点事件属性，

`data_source: 'external_sdk'`为固定属性

其他属性与业务场景强相关，请咨询对接人
