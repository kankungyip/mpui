RadioGroup
===

单选列表项

## 使用

```vue
<template>
  <!-- <ui-list>   暂未支持 Slot 语法
    <ui-radio-group :items="items" @change="change" />
  </ui-list> -->
  
  <!-- Slot 替代方案 -->
  <div class="weui-cells">
    <ui-radio-group :items="items" @change="change" />
  </div>
</teamplate>

<script>
// import uiList from 'mpui/components/list'
import uiRadioGroup from 'mpui/components/radio-group'

export default {
  components: {
    // uiList,
    uiRadioGroup
  },

  data () {
    return {
      item: [
        { label: 'cell standard', value: 0, checked: true },
        { label: 'cell standard', value: 1 }
      ]
    }
  },

  methods: {
    change (value, event) {
      console.log(value)
    }
  }
}
</script>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| items | Array[Object] | [] | 选择项 `[{ label, value, checked }]`，支持 `.sync` |
| color | String |   | 选中标志的颜色 |


## 事件

| 事件 | 参数 | 说明 |
| :-- | :-- | :-- |
| change | `value, event` | 选择项发生改变时触发，`value` 是选中项所带的 `{ value }` 值 |
