<template>
  <radio-group @change="change">
    <label v-for="(item, index) in items" class="weui-cell weui-check__label" :key="index">
      <radio
        class="weui-check"
        :value="item.value"
        :checked="item.checked"
        :disabled="item.disabled"
        />

      <div class="weui-cell__bd">{{item.label}}</div>
      <div v-if="item.checked" class="weui-cell__ft weui-cell__ft_in-radio">
        <ui-icon type="success_no_circle" size="16" :color="color" :styles="{ marginRight: 3.2 }" />
      </div>
    </label>
  </radio-group>
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
      radioItems: [],
    }
  },

  methods: {
    change (evt) {
      const items = [].concat(this.radioItems)
      const event = evt.mp
      const value = event.detail.value
      event.$mp = evt

      for (let i = 0, len = items.length; i < len; ++i) {
        items[i].checked = items[i].value.toString() === value
      }
      this.radioItems = items
      this.$emit('update:items', items)
      this.$emit('change', value, event)
    },
  },

  created () {
    this.radioItems = this.items
  },
}
</script>

<style lang="less" scoped>
@import "../theme/widget/weui-cell/weui-cell";
@import "../theme/widget/weui-cell/weui-check";
</style>
