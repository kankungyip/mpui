LoadingBar
===

载入进度条

!> 可使用 [`loaders.css`](https://github.com/ConnorAtherton/loaders.css) 全部载入样式

## 使用

```vue
<template>
  <ui-loadingbar />
</teamplate>

<script>
import uiLoadingbar from 'mpui/components/loadingbar'

export default {
  components: {
    uiLoadingbar
  }
}
</script>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| type | String | `progress-bar` | 进度条类型，可选值：`progress-bar`,, `ball-pulse`, `ball-grid-pulse`, `ball-clip-rotate`, `ball-clip-rotate-pulse`, `square-spin`, `ball-clip-rotate-multiple`, `ball-pulse-rise`, `ball-rotate`, `cube-transition`, `ball-zig-zag`, `ball-zig-zag-deflect`, `ball-triangle-path`, `ball-scale`, `line-scale`, `line-scale-party`, `ball-scale-multiple`, `ball-pulse-sync`, `ball-beat`, `line-scale-pulse-out`, `line-scale-pulse-out-rapid`, `ball-scale-ripple`, `ball-scale-ripple-multiple`, `ball-spin-fade-loader`, `line-spin-fade-loader`, `triangle-skew-spin`, `pacman`, `semi-circle-spin`, `ball-grid-beat`, `ball-scale-random` |
| backgroundColor | String | `#d9d9d9` | `type=progress-bar`时，进度条背景颜色 |
| activeColor | String | `#10aeff` | 载入时，进度条的颜色 |
| successColor | String | `#09bb07` | 载入完成时，进度条的颜色 |
| warnColor | String | `#f43530` | 发生错误时，进度条的颜色 |
| mask | Boolean | `false` | 是否使用遮罩 |
| maskColor | String | `rgba(0, 0, 0, 0.4)` | 遮罩的颜色 |

## API

| API | 参数 | 说明 |
| :-- | :-- | :-- |
| vm.$loading.start | `options, force` | 显示进度条，所有属性可以通过 `options` 动态传入，`force=true` 时隐藏已显示的进度条，重新显示新的进度条 |
| vm.$loading.progress | `percent` | 进度条进度百分比 |
| vm.$loading.done |   | 完成进度，并隐藏进度条 |
| vm.$loading.error |   | 发生错误，并隐藏进度条 |
| vm.$loading.hide |   | 隐藏进度条 |
