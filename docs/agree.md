Agree
===

同意条款

## 使用

```vue
<template>
  <ui-agree checked />
</teamplate>

<script>
import uiAgree from 'mpui/components/agree'

export default {
  components: {
    uiAgree
  }
}
</script>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| label | String | `阅读并同意` | 同意提示文字 |
| checked | Boolean | `false` | 同意选择值，支持 `.sync` |
| links | Array[Object] |   | 条款跳转链接 `[{ title, url }]` |

!> 跳转链接需要是应用内的跳转链接，跳转方式 `navigateTo`

## 事件

| 事件 | 参数 | 说明 |
| :-- | :-- | :-- |
| change | `checked, event` | &nbsp; |
