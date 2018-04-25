ButtonArea
===

按钮集合

## 使用

```vue
<template>
  <!-- <ui-button-area>   暂未支持 Slot 语法
    <ui-button />
  </ui-button-area> -->
  
  <!-- Slot 替代方案 -->
  <div class="weui-btn-area">
    <ui-button />
  </div>
</teamplate>

<script>
// import uiButtonArea from 'mpui/components/buttonarea'
import uiButton from 'mpui/components/button'
export default {
  components: {
    // uiButtonArea,
    uiButton
  }
}
</script>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| styles | Object |   | 组件样式（mpvue 暂时不支持组件的 `style`） |
