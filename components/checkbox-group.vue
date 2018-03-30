<template>
  <checkbox-group @change="change">
    <label v-for="(item, index) in items" class="weui-cell weui-check__label" :key="index">
      <checkbox
        class="weui-check"
        :value="item.value"
        :checked="item.checked"
        :disabled="item.disabled"
        />

      <div class="weui-cell__hd weui-check__hd_in-checkbox">
        <ui-icon v-if="item.checked" type="success" size="23" margin-left="4.6" margin-right="4.6" />
        <ui-icon v-else type="circle" size="23" margin-left="4.6" margin-right="4.6" />
      </div>
      <div class="weui-cell__bd">{{item.label}}</div>
    </label>
  </checkbox-group>
</template>

<script>
import uiIcon from './icon'

export default {
  components: {
    uiIcon,
  },

  props: {
    items: { type: Array, default: [] },
  },

  methods: {
    change (evt) {
      const items = this.items
      const values = evt.mp.detail.value
      for (var i = 0, lenI = items.length; i < lenI; ++i) {
        items[i].checked = false

        for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
          if (items[i].value.toString() === values[j]) {
            items[i].checked = true
          }
        }
      }
      this.$emit('update:items', [].concat(items))
      this.$emit('change', evt)
    },
  },
}
</script>

<style lang="less">
@import "../theme/widget/weui-cell/weui-cell";
@import "../theme/widget/weui-cell/weui-check";
</style>
