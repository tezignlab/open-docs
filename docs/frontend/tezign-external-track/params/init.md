---
sidebar_position: 2
---

# init方法传参

```typescript
interface IInitParams {
    tenant_id: string; //租户 ID
    client_id: string; //应用ID
    token: string; // 访问令牌
    http: {
        api: string // 埋点请求url
    }
}
tezignSdk.init(params: IInitParams)
```

## tenant_id
租户 ID, 咨询对接人
e.g. 't2'

## client_id
应用ID，申请后由特赞颁发, [授权&基础约定](http://https://tezign.feishu.cn/docs/doccnCNdREH3NXEbo2SIfDHYaWe "授权&基础约定") 中的clientId，咨询对接人

## token
访问令牌，[授权&基础约定](http://https://tezign.feishu.cn/docs/doccnCNdREH3NXEbo2SIfDHYaWe "授权&基础约定") 中的返回access_token

## api
埋点请求url，见[特赞 DAM 开放接口（后端版）_V1.0.1](http://https://tezign.feishu.cn/docs/doccneM05z5RAX1avvXJ7y3O28g#HdWEVb "特赞 DAM 开放接口（后端版）_V1.0.1") 中客户端埋点上传；

## 开发/测试环境对接
如果需要本地调试埋点流程，不产生线上数据，可以使用
- `tenant_id："track2.0_test"`
- `client_id: "track2.0_test"`
- token: 通过`https://open-auth.test.tezign.com/open-api/oauth/get-token`获取token
- api: '`https://open-auth.test.tezign.com/open-api/standard/v1/save-client-track-log`
其他参数不变