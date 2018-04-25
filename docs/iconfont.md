自定义图标
===

[`Icons`](icons.md) 推荐使用 [iconfont.cn](http://iconfont.cn/ ':target=_blank') 自定义图标。

## 配置 iconfont 项目

- `FontClass / Symbol` 前缀：`mpui-icon`
- `Font Family`：`iconfont`

## 引用 iconfont

```vue
<style lang="less">
@import (less) "path/to/iconfont/iconfont.css";

.mpui-icon {
  font-family: "weui", "iconfont" !important;
}
</style>
```

## 使用 iconfont 图标

```
<template>
  <ui-icon type="[Font Class / Symbol]" />
</template>
```

_`Icons` 的详细用法请见[文档](icons.md)。_
