<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">Toptips</div>
      <div class="page__desc">顶部提示</div>
    </div>

    <div class="page__bd">
      <ui-toptips />

      <div class="weui-btn-area">
        <ui-button text="成功提示" @click="showSuccess" />
        <ui-button text="错误提示" @click="showError" />
        <ui-button text="不消失的提示" @click="showTips" />
        <ui-button text="隐藏提示" @click="hideTips" />
      </div>
    </div>

  </div>
</template>

<script>
import uiToptips from '../../../components/toptips'
import uiButton from '../../../components/button'

export default {
  components: {
    uiToptips,
    uiButton,
  },

  methods: {
    showSuccess () {
      this.$toptips.show({
        text: '成功提示',
        type: 'primary',
      })
    },

    showError () {
      this.$toptips.show({
        text: '错误提示',
        type: 'warn',
      })
    },

    showTips () {
      this.$toptips.show({
        text: '不消失的提示',
        duration: 0,
      })
    },

    hideTips () {
      this.$toptips.hide()
    },
  },
}
</script>

<style>
page {
  background-color: #fff;
}
</style>
