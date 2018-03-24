<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">Toast</div>
      <div class="page__desc">弹出式提示，采用小程序原生的toast</div>
    </div>

    <div class="page__bd page__bd_spacing">
      <ui-button text="成功提示" @click="openToast" />
      <ui-button text="加载中提示" @click="openLoading" />
    </div>

  </div>
</template>

<script>
import uiButton from '../../../components/button'

export default {
  components: {
    uiButton,
  },

  methods: {
    openToast () {
      wx.showToast({
        title: '已完成',
        icon: 'success',
        duration: 3000,
      })
    },

    openLoading () {
      wx.showToast({
        title: '加载中…',
        icon: 'loading',
        duration: 3000,
      })
    },
  },
}
</script>

<style>
page {
  background-color: #fff;
}
</style>
