<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">Msg</div>
      <div class="page__desc">提示页</div>
    </div>

    <div class="page__bd">
      <div class="weui-btn-area">
        <ui-button text="成功提示页" navigate-to="/pages/msg-success/msg-success" />
        <ui-button text="失败提示页" navigate-to="/pages/msg-warn/msg-warn" />
      </div>
    </div>

  </div>
</template>

<script>
import uiButton from '../../../components/button'

export default {
  components: {
    uiButton,
  },
}
</script>

<style>
page {
  background-color: #fff;
}
</style>
