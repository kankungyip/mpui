SearchBar
===

搜索栏

## 使用

```vue
<template>
  <ui-searchbar
    @results="realtimeResults"
    @resultclick="resultClick"
    @confirm="confirm"
    />
</teamplate>

<script>
import uiSearchbar from 'mpui/components/searchbar'

export default {
  components: {
    uiSearchbar
  },

  methods: {
    confirm (value) {
      console.log(`提交 ${value}`)
    },

    realtimeResults (value, resolve) {
      let results
      if (value) {
        results = ['a', 'b', 'c']
      }
      resolve(results)
    },

    resultClick (result) {
      console.log(`点击 ${result}`)
    },
  },
}
</script>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| default-value | String |   | 默认搜索内容 |
| placeholder | String | `搜索` | 搜索内容空白时显示的占位字符 |
| fixed-top | Boolean | `false` | 是否置顶 |
| styles | Object |   | 组件样式（mpvue 暂时不支持组件的 `style`） |


## 事件

| 事件 | 参数 | 说明 |
| :-- | :-- | :-- |
| results | `value, resolve` | 获取实时搜索结果，`value` 是搜索内容，将搜索结果通过 `resolve` 返回给组件显示 |
| resultclick | `result` | 点击实时搜索结果，`result` 是实时搜索结果提交的结果内容 |
| confirm | `value` | 提交搜索内容 |
