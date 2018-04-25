Cell
===

列表项

## 使用

```vue
<template>
  <!-- <ui-list>   暂未支持 Slot 语法
    <ui-cell title="列表项" />
  </ui-list> -->
  
  <!-- Slot 替代方案 -->
  <div class="weui-cells">
    <ui-cell title="列表项" />
  </div>
</teamplate>

<script>
// import uiList from 'mpui/components/list'
import uiCell from 'mpui/components/cell'

export default {
  components: {
    // uiList,
    uiCell
  }
}
</script>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| type | String | `default` | 列表项的样式，可选值：`default`, `link` |
| title | String |   | 列表项标题 |
| extra | String |   | 列表项右边额外的文字 |
| image | String |   | 标题前显示的图 |
| imageWidth | Number | `20` | 图的宽，单位 `px` |
| imageHeight | Number | `20` | 图的高，单位 `px` |
| navigateTo | String |   | `type=link` 时的跳转链接 |
| indent | Boolean | `false` | 是否缩进列表项分割线 |
| badgePosition | String | `title` | 徽章的位置，可选值：`title`, `extra`, `image` |
| badgeValue | Number, String |   | 徽章的值，可以是数值也可以是文字 |
| badgeMax | Number | `999` | 徽章值类型是数值时的最大值，超过最大值显示 `MAX+` |
| badgeShowDot | Boolean | `false` | 徽章只显示一个点 |
| showActive | Boolean | `false` | 可以显示列表项的激活状态 |
| showAccess | Boolean | `false` | 在列表项最右显示一个右箭头 |
| styles | Object |   | 组件样式（mpvue 暂时不支持组件的 `style`） |

## 事件

| 事件 | 参数 | 说明 |
| :-- | :-- | :-- |
| click | `event` | 点击列表项 |

