<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">Switch</div>
      <div class="page__desc">开关项</div>
    </div>

    <div class="page__bd">
      <div class="weui-cells__title">开关项</div>
      <div class="weui-cells weui-cells_after-title">
        <ui-switch label="标题文字" :checked.sync="checked" @change="change" />
        <ui-switch label="标题文字" :checked.sync="colorChecked" color="red" @change="change" />
      </div>
    </div>

  </div>
</template>

<script>
import uiSwitch from '../../../components/switch'

export default {
  components: {
    uiSwitch,
  },

  data () {
    return {
      checked: false,
      colorChecked: false,
    }
  },

  methods: {
    change ({ mp }) {
      console.log(`switch 携带 value 值：${mp.detail.value}`)
    },
  },
}
</script>

<style>
</style>
