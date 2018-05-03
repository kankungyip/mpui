<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">LoadingBar</div>
      <div class="page__desc">载入条</div>
    </div>

    <div class="page__bd">
      <ui-loadingbar />

      <div class="weui-btn-area">
        <ui-button text="开始载入" @click="start" />
        <ui-button text="载入80%" @click="progress" />
        <ui-button text="完成载入" @click="done" />
        <ui-button text="载入错误" @click="error" />
        <ui-button text="隐藏" @click="hide" />
      </div>
    </div>

  </div>
</template>

<script>
import uiLoadingbar from '../../../components/loadingbar'
import uiButton from '../../../components/button'

export default {
  components: {
    uiLoadingbar,
    uiButton,
  },

  methods: {
    start () {
      this.$loading.start(true)
      this.$loading.progress(10)
    },

    progress () {
      this.$loading.progress(80)
    },

    done () {
      this.$loading.done()
    },

    error () {
      this.$loading.error()
    },

    hide () {
      this.$loading.hide()
    },
  },
}
</script>

<style>
page {
  background-color: #fff;
}
</style>
