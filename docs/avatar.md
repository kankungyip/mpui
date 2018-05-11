Avatar
===

头像

## 使用

```vue
<template>
  <ui-avatar  />
</teamplate>

<script>
import uiAvatar from 'mpui/components/avatar'

export default {
  components: {
    uiAvatar
  }
}
</script>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| image | String |   | 图像地址 |
| text | String |   | 没有图像时，显示的文字，只显示首字母（或第一个汉字） |
| size | Number | `80` | 头像尺寸
| styles | Object |   | 组件样式（mpvue 暂时不支持组件的 `style`） |

## 事件

| 事件 | 参数 | 说明 |
| :-- | :-- | :-- |
| click | `event` | 点击头像 |
