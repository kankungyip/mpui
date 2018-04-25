快速开始
===

!> 组件库尽量以 Vue 组件形式实现，部分组件因 mpvue 尚不支持的语法而无法实现，详细见[不支持列表](http://mpvue.com/mpvue/#_14 ':target=_blank')。

## 安装

```bash
$ yarn add mpui
```

## 使用
### 引入全局样式

```vue
<style lang="less">
@import "path/to/node_modules/mpui/theme/mpui";
</style>
```

并非全部组件样式，仅全局（字体、颜色等）样式和未被 Vue 组件化的 weui-wxss。

### 使用组件

```vue
<template>
  <ui-button>按钮</ui-button>
</template>

<script>
import uiButton from 'mpui/components/button'

export default {
  components: {
    uiBUtton
  }
}
</script>
```

需要 Slot 支持暂未实现的组件，请使用全局样式，详细见文档。
