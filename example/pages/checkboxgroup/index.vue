<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">CheckboxGroup</div>
      <div class="page__desc">复选列表项</div>
    </div>

    <div class="page__bd">
      <div class="weui-cells__title">复选列表项</div>
      <div class="weui-cells weui-cells_after-title">
        <ui-checkbox-group :items="checkboxItems" @change="change" />
        <ui-cell type="link" title="添加更多" show-access />
      </div>
    </div>

  </div>
</template>

<script>
import uiCell from '../../../components/cell'
import uiCheckboxGroup from '../../../components/checkbox-group'

export default {
  components: {
    uiCell,
    uiCheckboxGroup,
  },

  data () {
    return {
      checkboxItems: [
        { label: 'cell standard', value: 0, checked: true },
        { label: 'cell standard', value: 1 },
      ],
    }
  },

  methods: {
    change ({ mp }) {
      console.log(`checkbox 携带 value 值：${mp.detail.value}`)
    },
  },
}
</script>

<style>
</style>
