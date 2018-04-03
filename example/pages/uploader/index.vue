<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">Uploader</div>
      <div class="page__desc">上传组件</div>
    </div>

    <div class="page__bd">
      <div class="weui-cells">
        <ui-uploader title="图片上传" />
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
</style>
