<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">Button</div>
      <div class="page__desc">按钮，采用小程序原生的按钮为主体，加入一些间距的样式。</div>
    </div>

    <div class="page__bd page__bd_spacing">
      <ui-button type="primary">页面主操作 Normal</ui-button>
      <ui-button type="primary" loading>页面主操作 Loading</ui-button>
      <ui-button type="primary" disabled>页面主操作 Disabled</ui-button>

      <ui-button text="">页面次要操作 Normal</ui-button>
      <ui-button loading>页面次要操作 Loading</ui-button>
      <ui-button disabled>页面次要操作 Disabled</ui-button>

      <ui-button type="warn">警告类操作 Normal</ui-button>
      <ui-button type="warn" loading>警告类操作 Loading</ui-button>
      <ui-button type="warn" disabled>警告类操作 Disabled</ui-button>

      <div class="button-sp-area">
        <ui-button type="primary" icon="success-no-circle" text="按钮" plain />
        <ui-button type="primary" icon="success-no-circle" text="按钮" plain disabled />
        <ui-button plain>按钮</ui-button>
        <ui-button plain disabled>按钮</ui-button>
        <ui-button type="primary" size="mini" :styles="miniBtnStyle">
          <img class="image" src="/static/images/icon_tabbar.png" /> 按钮
        </ui-button>
        <ui-button type="default" size="mini" :styles="miniBtnStyle">按钮</ui-button>
        <ui-button type="warn" size="mini" :styles="miniBtnStyle">按钮</ui-button>
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

  data () {
    return {
      miniBtnStyle: {
        marginRight: 5,
      },
    }
  },
}
</script>

<style>
.button-sp-area {
  margin: 0 auto;
  padding-top: 15px;
  width: 70%;
}

.image {
  vertical-align: middle;
  width: 14px;
  height: 14px;
}
</style>
