Uploader
===

上传组件

## 使用

```vue
<template>
  <!-- <ui-list>   暂未支持 Slot 语法
    <ui-cell title="列表项" />
  </ui-list> -->

  <!-- Slot 替代方案 -->
  <div class="weui-cells">
    <ui-uploader title="图片上传" />
  </div>

  <ui-uploader title="图片上传" indie />
</teamplate>

<script>
// import uiList from 'mpui/components/list'
import uiUploader from 'mpui/components/uploader'

export default {
  components: {
    // uiList,
    uiUploader
  }
}
</script>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| title | String |   | 上传组件显示的标题 |
| files-limit | Number | `9` | 限制最大文件数量 |
| size-type | Array | `['original', 'compressed']` | 允许上传尺寸，`original` 原图，`compressed` 压缩图 |
| source-type | Array | `['album', 'camera']` | 允许图片来源，`album` 从相册选图，`camera` 使用相机 |
| url | String |   | 上传服务器的 `url` |
| name | String | `uploads` | 文件对应的 `key`，开发者在服务器端通过这个 `key` 可以获取到文件二进制内容 |
| header | Object |   | HTTP 请求 Header, header 中不能设置 Referer |
| form-data | Object |   | HTTP 请求中其他额外的 `formData` |
| indie | Boolean | `false` | 使用独立模式，在 `<ui-list>` 之外使用 |

## 事件

| 事件 | 参数 | 说明 |
| :-- | :-- | :-- |
| change | `file, files` | 上传文件列表发生变化时触发 |
| progress | `percent` | 上传进度更新时触发 |
| error | `error` | 上传发生错误 |
