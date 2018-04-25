<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">RadioGroup</div>
      <div class="page__desc">单选列表项</div>
    </div>

    <div class="page__bd">
      <div class="weui-cells__title">单选列表项</div>
      <div class="weui-cells weui-cells_after-title">
        <ui-radio-group :items="radioItems" @change="change" />
        <ui-cell type="link" title="添加更多" show-access />
      </div>
    </div>

  </div>
</template>

<script>
import uiCell from '../../../components/cell'
import uiRadioGroup from '../../../components/radio-group'

export default {
  components: {
    uiCell,
    uiRadioGroup,
  },

  data () {
    return {
      radioItems: [
        { label: 'cell standard', value: 0, checked: true },
        { label: 'cell standard', value: 1 },
      ],
    }
  },

  methods: {
    change (value, event) {
      console.log(`radio 携带 value 值：${value}`)
    },
  },
}
</script>

<style>
</style>
