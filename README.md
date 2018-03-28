# WeUI for mpvue

> WeUI-mpvue 是一套基于 WeUI 开发的 mpvue 组件库，增加了一些新的特性和组件。
> 我的目标是源于 WeUI，更胜 WeUI。

![npm version](https://img.shields.io/npm/v/weui-mpvue.svg?style=flat) ![npm download](https://img.shields.io/npm/dt/weui-mpvue.svg?style=flat) ![npm license](https://img.shields.io/npm/l/weui-mpvue.svg?style=flat)

## 说明

组件库尽量以 Vue 组件形式实现，部分组件因 mpvue 尚不支持的语法而无法实现，详细见[不支持列表](http://mpvue.com/mpvue/#_14)。

## 安装

```bash
$ yarn add weui-mpvue
```

## 预览

```bash
$ git clone https://github.com/kankungyip/weui-mpvue
$ cd weui-mpvue
$ yarn example
```

用[微信web开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)打开`weui-mpvue`项目目录。

## 使用
### 引入全局样式

```vue
<style lang="less">
@import "<project_dir>/node_modules/weui-mpvue/theme/weui";
</style>
```
并非全部组件样式，仅全局（字体、颜色等）样式和未被 Vue 组件化的 WeUI 样式。

### 使用组件

```vue
<template>
  <ui-button text="按钮" />
</template>

<script>
import uiButton 'weui-mpvue/components/button'

export default {
  components: {
    uiBUtton
  }
}
</script>
```

## 组件状态
### 新组件

- [ ] `Avatar`
- [ ] `Ellipsis`
- [ ] `Tag`
- [ ] `Price`
- [ ] `Counter`
- [ ] `Countdown`
- [ ] `Steps`
- [ ] `NoticeBar`
- [x] `Toptips`(从原 WeUI 的 `Input` 样式中独立出来，并增加多种配色）
- [x] `MediaBox` (从原 WeUI 的 `Panel` 样式中独立出来，建议搭配 `Panel` 使用）

_*部分组件样式源自 [zanui](https://github.com/youzan/zanui-weapp) 和 [minui](https://github.com/meili/minui) 项目，并对其进行了必要重构以符合 WeUI 样式。*_

### 表单

- [x] `Button`（_未完全组件化_，需要 Slot 支持：`.weui-btn-area`）
- [ ] `Input`
- [x] `List`（_未完全组件化_，需要 Slot 支持：`.weui-cells`、`.weui-cells__title`、`.weui-cells_after-title`、`.weui-cells__tips`）
- [x] `Slider`
- [x] `Uploader`

### 基础组件

- [ ] `Article`
- [x] `Badge` (_未完全组件化_，新添加 `.weui-badge-box` 样式需要 Slot 支持)
- [ ] `Flex`（_未组件化_，需要 Slot 支持）
- [x] `Footer`
- [x] `Gallery`
- [x] `Grid`
- [x] `Icons`
- [x] `Loadmore`
- [ ] `Panel`（_未组件化_，需要 Slot 支持）
- [x] `Preview`
- [x] `Progress`

### 操作反馈

- [x] `ActionSheet`
- [x] `Dialog`
- [x] `Msg`
- [x] `Picker`
- [x] `Toast`

### 导航相关

- [ ] `Navbar`（_未组件化_，需要 Slot 支持）
- [x] `Tabbar`

### 搜索相关

- [x] `SearchBar`

## 新特性

- WeUI 样式按需引用
- `Button` 支持添加图标
- `List` 支持添加多种徽章显示样式
- `Badge` 支持自定义显示最大值，超过最大值显示 max+
- `Grid` 自持自定义列数
- `Icons` 支持自定义图标，推荐使用 [iconfont.cn](http://iconfont.cn)
- `SearchBar` 实时查询结果反馈
- `Uploader` 整合 `wx.uploadFile`，支持中断操作和进度提示
- `Toptips` 引入独立 API `vm.$toptips`

## 计划

- `Article` 组件自动解析 markdown 格式（支持自定义样式）

## 开发文档

有点懒，暂时没有编写，请参考 `example` 目录下的示例源码。

## License

[The MIT License](http://opensource.org/licenses/MIT)

请自由地享受和参与开源
