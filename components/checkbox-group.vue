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
        <ui-icon size="23" :type="item.checked ? 'success' : 'circle'" :color="color" :styles="iconStyles" />
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
    color: { type: String, default: '' },
  },

  data () {
    return {
      checkboxItems: [],
      iconStyles: {
        marginLeft: 4.6,
        marginRight: 4.6,
      }
    }
  },

  methods: {
    change (evt) {
      const items = [].concat(this.checkboxItems)

      const event = evt.mp
      const values = event.detail.value
      event.$mp = evt

      for (var i = 0, lenI = items.length; i < lenI; ++i) {
        items[i].checked = false

        for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
          if (items[i].value.toString() === values[j]) {
            items[i].checked = true
          }
        }
      }
      this.checkboxItems = items
      this.$emit('update:items', items)
      this.$emit('change', values, event)
    },
  },

  created () {
    this.checkboxItems = this.items
  },
}
</script>

<style lang="less" scoped>
@import "../theme/widget/weui-cell/weui-cell";
@import "../theme/widget/weui-cell/weui-check";
</style>
