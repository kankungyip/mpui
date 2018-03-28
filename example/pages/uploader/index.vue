<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">Uploader</div>
      <div class="page__desc">上传组件</div>
    </div>

    <div class="page__bd">
      <div class="weui-panel">
        <div class="weui-panel__hd">图片上传</div>
        <div class="weui-panel__bd panel">
          <ui-uploader />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import uiUploader from '../../../components/uploader'

export default {
  components: {
    uiUploader,
  },
}
</script>

<style>
.panel {
  padding: 5px 15px 10px 15px;
}
</style>
