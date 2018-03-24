<template>
  <div class="page">
    <div class="weui-article">
      <div class="weui-article__h1">WeUI-mpvue</div>

      <div class="weui-article__section">
        <div class="weui-article__section">
          <div class="weui-article__p">
            WeUI-mpvue 是一套基于 WeUI 开发的 mpvue 组件库，增加了一些新的特性和样式。
          </div>
        </div>

        <div class="weui-article__title">说明</div>
        <div class="weui-article__section">
          <div class="weui-article__p">
            组件库尽量以 Vue 组件形式实现，部分组件因 mpvue 尚不支持的语法而无法实现，详细见不支持列表（http://mpvue.com/mpvue/#_14）
          </div>
        </div>

        <div class="weui-article__title">License</div>
        <div class="weui-article__section">
          <div class="weui-article__p">
            The MIT License
          </div>
          <div class="weui-article__p">
            请自由地享受和参与开源
          </div>
        </div>
      </div>
    </div>

    <div class="page__ft">
      <ui-icon type="github" />
      <div style="font-size:14px">github.com/kankungyip/weui-mpvue</div>
    </div>
  </div>
</template>

<script>
import uiIcon from '../../../components/icon'

export default {
  components: {
    uiIcon,
  },
}
</script>

<style lang="less">
@import "../../../theme/widget/weui-page/weui-article";
</style>
