<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">Price</div>
      <div class="page__desc">价格</div>
    </div>

    <div class="page__bd page__bd_spacing">
      <ui-price value="1" />
      <ui-price value="1.20" decimal="auto" strong />
      <ui-price value="1.21" decimal="0" />
      <ui-price value="1.24" symbol="$" decimal="1" status="del" color="#666" />
      <ui-price value="1.23" symbol-style="sub" size="30" decimal-size="13" strong />
      <ui-price value="1.23" symbol-style="sup" decimal-size="13" strong />
    </div>

  </div>
</template>

<script>
import uiPrice from '../../../components/price'

export default {
  components: {
    uiPrice,
  },
}
</script>

<style>
</style>
