---
sidebar_position: 6
---

# 更新部分初始化数据`update`
更新部分公共数据，通常用于系统登录后更新埋点中的user_id

```typescript
interface IUpdateParams {
    // 在系统登录后更新user_id
    user_id?: string;
    tenant_id?: string
    token?: string,
    client_id?: string
}

tezignSdk.update: (data: IUpdateParams)
```