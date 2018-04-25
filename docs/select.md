Select
===

选择项

## 使用

```vue
<template>
  <!-- <ui-list>   暂未支持 Slot 语法
    <ui-select label="国家/地区" :range="country" />
  </ui-list> -->
  
  <!-- Slot 替代方案 -->
  <div class="weui-cells">
    <ui-select label="国家/地区" :range="country" @change="change" />
    <ui-select label="省市区" type="region" separator="/" :value.sync="value" @change="change" />
  </div>
</teamplate>

<script>
// import uiList from 'mpui/components/list'
import uiSelect from 'mpui/components/select'

export default {
  components: {
    // uiList,
    uiSelect
  },

  data () {
    return {
      country: ['中国', '美国', '英国'],
      value: ['湖南省', '长沙市', '芙蓉区']
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
| value | Number, String, Array | `0` | 初始值，代表选中项的 Index，支持 `.sync` |
| type | String | `selector` | 选择器的类型，可选值：`selector`, `multiSelector`, `time`, `date`, `region` |
| label | String |   | 选择器的标题 |
| disabled | Boolean | `false` | 是否禁用 |
| range | Array |   | `type=selector`, `type=multiSelector` 时，设置选项 |
| range-key | String |   | 当 range 的类型是 Array[Object] 时，来指定 Object 中 `key` 的值作为选择器显示内容 |
| start | String |   | `type=time`, `type=date` 时，有效时间/日期范围开始，时间格式为 `hh:mm`，日期格式为 `YYYY-MM-DD` |
| end | String |   | `type=time`, `type=date` 时，有效时间/日期范围结束，时间格式为 `hh:mm`，日期格式为 `YYYY-MM-DD` |
| fields | String | `day` | `type=date` 时，表示选择器的粒度，可选值：`year`, `month`, `day` |
| custom-item | String |   | `type=region` 时，可为每一列的顶部添加一个自定义的项 |
| display-text | String |   | 自定义选择器显示的文字 |
| separator | String | `，` | `type=multiSelector`, `type=region` 时，选项各部分分隔符 |


## 事件

| 事件 | 参数 | 说明 |
| :-- | :-- | :-- |
| change | `value, event` | 选择器选中项发生改变时触发 |
| columnchange | `column, value, event` | `type=multiSelector` 时，选择列的值发生改变时触发 |
| cancel | `column, value, event` | 取消选择时触发 |
