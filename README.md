MpUI (Mini-program's UI for mpvue)
===

原 [weui-mpvue](https://www.npmjs.com/package/weui-mpvue)

> MpUI 是一套基于 weui-wxss 开发的 mpvue 组件库，增加了一些新的特性、样式和组件。

[![npm version](https://img.shields.io/npm/v/mpui.svg?style=flat)](https://www.npmjs.com/package/mpui) [![npm download](https://img.shields.io/npm/dt/mpui.svg?style=flat)](https://www.npmjs.com/package/mpui) [![license](https://img.shields.io/npm/l/mpui.svg?style=flat)](https://github.com/kankungyip/mpui/blob/master/LICENSE)

## 说明

部分组件因 mpvue 尚不支持的语法而无法实现，详细见[不支持列表](http://mpvue.com/mpvue/#_14)。

## 开发文档

有点懒，暂时没有编写，请参考 [`example`](https://github.com/kankungyip/mpui/tree/master/example) 目录下的示例源码。

## 安装

```bash
$ yarn add mpui
```

## 预览

```bash
$ git clone https://github.com/kankungyip/mpui
$ cd mpui
$ yarn run example
```

用[微信web开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)打开 `mpui` 项目目录。

## 使用
### 引入全局样式

```vue
<style>
@import "node_modules/mpui/theme/mpui.less";
</style>
```

并非全部组件样式，仅全局（字体、颜色等）样式和未被 Vue 组件化的 weui-wxss。

### 使用组件

```vue
<template>
  <ui-article :content="content" />
</template>

<script>
import uiArticle from 'mpui/components/article'

export default {
  components: {
    uiArticle,
  },

  data () {
    return {
      content: `# 大标题

## 章标题

### 1.1 节标题

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

![](https://mp.weixin.qq.com/wxopen/qrcode?action=show&type=2&fakeid=3834027984&token=2071919981)

### 1.2 节标题

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
`,
    }
  },
}
</script>
```

需要 Slot 支持暂未实现的组件，请使用全局样式，详细见文档。

## 组件状态

_部分组件样式源自 [zanui](https://github.com/youzan/zanui-weapp) 和 [minui](https://github.com/meili/minui) 项目，并对其进行了必要重构以符合 weui-wxss。_

### 表单

- [x] `Agree`
- [x] `Button`
- [ ] `ButtonArea`（需要 Slot 支持，暂使用样式）
- [ ] `Counter`
- [ ] `List`（需要 Slot 支持，暂使用样式）
- [x] `Cell`（需配合 `List` 一起使用）
- [x] `Input`（需配合 `List` 一起使用）
- [x] `CheckboxGroup`
- [x] `RadioGroup`
- [x] `Select`
- [x] `Switch`
- [x] `Uploader`

### 基础组件

- [x] `Article`
- [ ] `Avatar`
- [x] `Badge`
- [ ] `BadgeBox`（需要 Slot 支持，暂使用样式）
- [ ] `Countdown`
- [ ] `Ellipsis`
- [ ] `Row`（需要 Slot 支持，暂使用样式）
- [ ] `Col`（需要 Slot 支持，暂使用样式）
- [x] `Footer`
- [x] `Grid`
- [x] `Icons`
- [x] `Loadmore`
- [ ] `Panel`（需要 Slot 支持，暂使用样式）
- [x] `MediaBox`
- [x] `Preview`
- [x] `Price`
- [x] `Progress`
- [x] `Tag`

### 操作反馈

- [x] `LoadingBar`
- [x] `Msg`
- [ ] `NoticeBar`
- [x] `Toptips`

### 导航相关

- [ ] `Tabs`（需要 Slot 支持，暂使用样式）
- [ ] `Steps`

### 搜索相关

- [x] `SearchBar`

## 计划

- 为表单引入独立 API `vm.$form`，方便表单数据的获取和校验
- 支持 i18n

## License

[The MIT License](http://opensource.org/licenses/MIT)

请自由地享受和参与开源
