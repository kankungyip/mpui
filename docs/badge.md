Badge
===

徽章

## 使用

```vue
<template>
  <ui-badge value="9" />
</teamplate>

<script>
import uiBadge from 'mpui/components/badge'

export default {
  components: {
    uiBadge
  }
}
</script>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| value | Number, String |   | 显示的数值或文字 |
| max | Number | `999` |   | 最大显示的数值，超过最大值显示为 'MAX+' |
| show-dot | Boolean | `false` | 显示为一个点，忽略 `value` 值 |
| styles | Object |   | 组件样式（mpvue 暂时不支持组件的 `style`） |
