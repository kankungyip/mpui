BadgeBox
===

徽章组合

## 使用

```vue
<template>
  <!-- <ui-badge-box value="9">   暂未支持 Slot 语法
    <img src="pic.png" />
  </ui-badge-bo> -->

  <!-- Slot 替代方案 -->
  <div class="mpui-badge-box">
    <img src="pic.png" />
    <ui-badge value="9" />
  </div>
</teamplate>

<script>
// import uiBadgeBox from 'mpui/components/badgebox'
import uiBadge from 'mpui/components/badge'

export default {
  components: {
    // uiBadgeBox,
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
| badge-styles | Object |   | 徽章组件样式（mpvue 暂时不支持组件的 `style`） |
