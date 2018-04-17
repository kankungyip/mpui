<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">Tag</div>
      <div class="page__desc">标签</div>
    </div>

    <div class="page__bd page__bd_spacing">
      <ui-tag text="默认" />
      <ui-tag text="主要" type="primary" />
      <ui-tag text="警告" type="warn" />
      <ui-tag text="自定义颜色" color="#666" text-color="#ffff00" />
      <ui-tag text="镂空" type="warn" plain />
    </div>

  </div>
</template>

<script>
import uiTag from '../../../components/tag'

export default {
  components: {
    uiTag,
  },
}
</script>

<style>
</style>
