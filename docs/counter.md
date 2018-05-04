Counter
===

计数器

## 使用

```vue
<template>
  <!-- <ui-list>   暂未支持 Slot 语法
    <ui-counter label="标题文字" @change="change" />
  </ui-list> -->
  
  <!-- Slot 替代方案 -->
  <div class="weui-cells">
    <ui-counter label="标题文字" @change="change" />
  </div>
</teamplate>

<script>
// import uiList from 'mpui/components/list'
import uiCounter from 'mpui/components/counter'

export default {
  components: {
    // uiList,
    uiCounter
  }
}
</script>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| value | Number | 1 | 计数初始值，支持 `.sync` |
| min | Number | 1 | 最小值 |
| max | Number | 999 | 最大值 |
| step | Number | 1 | 每次增加或减小的值 |
| incell | Boolean | false | 是否使用显示在列表中的样式 |
| label | String |   | 计数器标签，仅在 `incell=true` 时有效 |

## 事件

| 事件 | 参数 | 说明 |
| :-- | :-- | :-- |
| change | `value` | 激活状态发生改变 |
