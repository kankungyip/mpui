<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">Button</div>
      <div class="page__desc">按钮，WeUI采用小程序原生的按钮为主体，加入一些间距的样式。</div>
    </div>

    <div class="page__bd page__bd_spacing">
      <ui-button type="primary" text="页面主操作 Normal" />
      <ui-button type="primary" text="页面主操作 Loading" loading />
      <ui-button type="primary" text="页面主操作 Disabled" disabled />

      <ui-button text="页面次要操作 Normal" />
      <ui-button text="页面次要操作 Loading" loading />
      <ui-button text="页面次要操作 Disabled" disabled />

      <ui-button type="warn" text="警告类操作 Normal" />
      <ui-button type="warn" text="警告类操作 Loading" loading />
      <ui-button type="warn" text="警告类操作 Disabled" disabled />

      <div class="button-sp-area">
        <ui-button type="primary" icon="success-no-circle" text="按钮" plain />
        <ui-button type="primary" icon="success-no-circle" text="按钮" plain disabled />
        <ui-button text="按钮" plain />
        <ui-button text="按钮" plain disabled />
        <ui-button type="primary" size="mini" text="按钮" image="/static/images/icon_tabbar.png" margin-right="5" />
        <ui-button type="default" size="mini" text="按钮" margin-right="5" />
        <ui-button type="warn" size="mini" text="按钮" margin-right="5" />
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
.button-sp-area {
  margin: 0 auto;
  padding-top: 15px;
  width: 70%;
}
</style>
