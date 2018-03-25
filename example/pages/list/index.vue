<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">List</div>
      <div class="page__desc">列表</div>
    </div>

    <div class="page__bd">
      <div class="weui-cells__title">带说明的列表项</div>
      <div class="weui-cells weui-cells_after-title">
        <ui-cell title="标题文字" extra="说明文字" />
      </div>

      <div class="weui-cells__title">带图标、说明的列表项</div>
      <div class="weui-cells weui-cells_after-title">
        <ui-cell title="标题文字" extra="说明文字" :image="icon" />
        <ui-cell title="标题文字" extra="说明文字" :image="icon" />
      </div>

      <div class="weui-cells__title">带跳转的列表项</div>
      <div class="weui-cells weui-cells_after-title">
        <ui-cell title="标题文字" show-access />
        <ui-cell title="标题文字" show-access />
      </div>

      <div class="weui-cells__title">带说明、跳转的列表项</div>
      <div class="weui-cells weui-cells_after-title">
        <ui-cell title="标题文字" extra="说明文字" show-access />
        <ui-cell title="标题文字" extra="说明文字" show-access />
      </div>

      <div class="weui-cells__title">带图标、说明、跳转的列表项</div>
      <div class="weui-cells weui-cells_after-title">
        <ui-cell title="标题文字" extra="说明文字" show-access :image="icon" />
        <ui-cell title="标题文字" extra="说明文字" show-access :image="icon" />
      </div>
    </div>

  </div>
</template>

<script>
import uiCell from '../../../components/cell'
import base64 from '../../../static/images/base64'

export default {
  components: {
    uiCell,
  },

  data () {
    return {
      icon: base64.icon20,
    }
  },
}
</script>

<style>
</style>
