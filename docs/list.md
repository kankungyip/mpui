List
===

列表

## 使用

```vue
<template>
  <!-- <ui-list>   暂未支持 Slot 语法
    <ui-cell />
    <ui-input />
  </ui-list> -->
  
  <!-- Slot 替代方案 -->
  <div class="weui-cells">
    <ui-cell />
    <ui-input />
  </div>
</teamplate>

<script>
// import uiList from 'mpui/components/list'
import uiCell from 'mpui/components/cell'
import uiInput from 'mpui/components/input'

export default {
  components: {
    // uiList,
    uiCell,
    uiInput
  }
}
</script>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| title | String |   | 列表最顶端的标题 |
| tips | String |   | 列表最底端的提示文本 |
