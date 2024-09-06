---
sidebar_position: 3
---

# 埋点上报 `track`

tezignSdk 需要执行初始化 init 方法后才能上报埋点

```typescript
// track方法入参
interface ITrack {
  /** 事件类型code */
  event_type_code: string;
  /** 事件属性 */
  event_properties: Record<string, any>;
}
```

```typescript
tezignSdk.track(trackData: ITrack)
```
