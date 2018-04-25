Switch
===

开关项

## 使用

```vue
<template>
  <!-- <ui-list>   暂未支持 Slot 语法
    <ui-switch label="标题文字" @change="change" />
  </ui-list> -->
  
  <!-- Slot 替代方案 -->
  <div class="weui-cells">
    <ui-switch label="标题文字" @change="change" />
  </div>
</teamplate>

<script>
// import uiList from 'mpui/components/list'
import uiSwitch from 'mpui/components/switch'

export default {
  components: {
    // uiList,
    uiSwitch
  }
}
</script>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| label | String |   | 开关项的标题 |
| checked | Boolean | `false` | 开关激活状态，支持 `.sync` |
| color | String |   | 开关激活后显示颜色 |

## 事件

| 事件 | 参数 | 说明 |
| :-- | :-- | :-- |
| change | `checked, event` | 激活状态发生改变 |
