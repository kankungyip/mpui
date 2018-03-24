<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">ActionSheet</div>
      <div class="page__desc">弹出式菜单，采用小程序原生的actionsheet。</div>
    </div>

    <div class="page__bd page__bd_spacing">
      <ui-button text="ActionSheet" @click="open" />
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
    open () {
      const itemList = ['A', 'B', 'C']
      const success = ({ tapIndex, cancel }) => {
        if (!cancel) {
          wx.showToast({
            title: itemList[tapIndex],
            icon: 'none',
          })
        }
      }
      wx.showActionSheet({ itemList, success })
    },
  },
}
</script>

<style>
page {
  background-color: #fff;
}
</style>
