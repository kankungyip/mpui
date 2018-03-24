<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">Dialog</div>
      <div class="page__desc">对话框，采用小程序原生的modal。</div>
    </div>

    <div class="page__bd page__bd_spacing">
      <ui-button text="Confirm 对话框" @click="openConfirm" />
      <ui-button text="Alert 对话框" @click="openAlert" />
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
    openConfirm () {
      wx.showModal({
        title: '弹窗标题',
        content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
        confirmText: '主操作',
        cancelText: '辅助操作',
        success: ({ confirm }) => {
          wx.showToast({
            title: confirm ? '点击主操作' : '点击辅助操作',
            icon: 'none',
          })
        },
      })
    },

    openAlert () {
      wx.showModal({
        content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
        showCancel: false,
        success: ({ confirm }) => {
          wx.showToast({
            title: '点击确定',
            icon: 'none',
          })
        },
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
