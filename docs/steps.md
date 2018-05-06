Steps
===

步骤条

## 使用

```vue
<template>
  <ui-steps current="0" :items="items" />
</teamplate>

<script>
import uiSteps from 'mpui/components/steps'

export default {
  components: {
    uiSteps
  },

  data () {
    return {
      items: [
        { label: '步骤1', icon: "waiting" },
        { label: '步骤1', icon: "success" }
      ]
    }
  }
}
</script>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| current | Number | `0` | 当前步骤
| finish | Boolean | `false` | 完成所有步骤，等同与 `current=(items.length - 1)` |
| items | Array[Object] |   | 步骤数据，`[{ icon, label }]` |
| color | String | `#e5e5e5` | 未完成的步骤的颜色 |
| activeColor | String | `#10aeff` | 完成的步骤的颜色 |
| iconSize | Number | `30` | 图标的尺寸，仅当步骤数据中设置了 `icon` 时，才有效
