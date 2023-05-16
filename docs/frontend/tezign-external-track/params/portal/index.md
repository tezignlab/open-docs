---
sidebar_position: 3
---

# Portal 业务埋点传参(持续更新中)

## Portal 业务中的通用属性

|            | 类型   | 说明            | 来源                                           |
| :--------- | :----- | :-------------- | :--------------------------------------------- |
| portal_id  | string | 分发看板 ID     | open_api 返回的 portalId                       |
| block_id   | number | 内容模块 ID     | open_api 返回的 blockId                        |
| content_id | number | 看板内容 ID     | open_api 返回的 contentId                      |
| asset_id   | number | 素材库父素材 ID | open_api 返回的<font color='red'>coreId</font> |
