<template>
  <div class="weui-cell weui-cell_switch">
    <div class="weui-cell__bd">{{label}}</div>
    <div class="weui-cell__ft">
      <switch :checked="switchChecked" :color="color" @change="change" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label:    { type: String,     default: '' },
    checked:  { type: Boolean,    default: false },
    color:    { type: String,     default: '' },
  },

  data () {
    return {
      switchChecked: false,
    }
  },

  methods: {
    change (evt) {
      const event = evt.mp
      const checked = event.detail.value
      event.$mp = evt
      this.switchChecked = checked
      this.$emit('update:checked', checked)
      this.$emit('change', checked, event)
    },
  },

  mounted () {
    this.switchChecked = this.checked
  },

  onUnload () {
    // 重置初始数据
    Object.assign(this.$data, this.$options.data())
  },
}
</script>

<style lang="less" scoped>
@import "../theme/widget/weui-cell/weui-cell";
@import "../theme/widget/weui-cell/weui-switch";
</style>
