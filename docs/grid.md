Grid
===

九宫格

## 使用

```vue
<template>
  <ui-grid :items="grids" />
</teamplate>

<script>
import uiGrid from 'mpui/components/grid'

export default {
  components: {
    uiGrid
  },

  data () {
    return {
      grids: [
        { label: '项目1', icon: 'success' },
        { label: '项目2', icon: 'success' },
        { label: '项目3', icon: 'success' },
        { label: '项目4', icon: 'success' },
        { label: '项目5', icon: 'success' },
        { label: '项目6', icon: 'success' },
        { label: '项目7', icon: 'success' },
        { label: '项目8', icon: 'success' },
        { label: '项目9', icon: 'success' }
      ]
    }
  }
}
</script>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| items | Array[Object] |   | 九宫格数据，`[{ label, image, icon, value }]`，同时设置了 `image` 和 `icon` 将不会显示 `icon` |
| icon-size | Number | `28` | 图标或图像的尺寸 |
| column | Number | `3` | 每行显示的列数 |
| border | Boolean | `false` | 是否显示边框 |

## 事件

| 事件 | 参数 | 说明 |
| :-- | :-- | :-- |
| click | `index, value, event` | 点击格子时触发，`value` 是九宫格数据里设置的 `value` |
