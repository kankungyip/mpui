Icons
===

图标

!> 可用全部小程序 [`icon`](https://developers.weixin.qq.com/miniprogram/dev/component/icon.html ':target=_blank') 组件的图标，并支持使用[自定义图标](iconfont.md)（推荐使用 [iconfont.cn](http://iconfont.cn ':target=_blank')）。

## 使用

```vue
<template>
  <ui-icon type="success" />
</teamplate>

<script>
import uiIcon from 'mpui/components/icon'

export default {
  components: {
    uiIcon
  }
}
</script>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| type | String |   | 图标类型，可自定义类型，详细见[自定义图标](iconfont.md)，系统可选类型：`success`, `waiting`, `warn`, `info`, `success-circle`, `success-no-circle`, `waiting-circle`, `circle`, `download`, `info-circle`, `safe-success`, `safe-warn`, `cancel`, `search`, `clear`, `delete`, `warn`, `warn` |
| size | Number | 23 | 图标尺寸 |
| color | String |   | 图标颜色，系统图标各自都有自己的颜色 |
| styles | Object |   | 组件样式（mpvue 暂时不支持组件的 `style`） |


## 事件

| 事件 | 参数 | 说明 |
| :-- | :-- | :-- |
| click | `event` | 点击图标触发 |
