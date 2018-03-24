<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">Slider</div>
      <div class="page__desc">滑块，这里采用小程序原生的slider。</div>
    </div>

    <div class="page__bd page__bd_spacing">
      <slider />
      <slider show-value value="50"/>
    </div>

  </div>
</template>

<script>
export default {
}
</script>

<style>
slider {
  margin-bottom: 30px;
}
</style>
