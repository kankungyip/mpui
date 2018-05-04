<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">Counter</div>
      <div class="page__desc">计数器</div>
    </div>

    <div class="page__bd">
      <div class="weui-cells__title">计数器</div>
      <div class="weui-cells weui-cells_after-title">
        <ui-counter label="计数器" @change="change" incell />
      </div>
    </div>

  </div>
</template>

<script>
import uiCounter from '../../../components/counter'

export default {
  components: {
    uiCounter,
  },

  methods: {
    change (value) {
      console.log(`counter 值：${value}`)
    },
  },
}
</script>

<style>
</style>
