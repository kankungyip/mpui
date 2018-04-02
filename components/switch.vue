<template>
  <div class="weui-cell weui-cell_switch">
    <div class="weui-cell__bd">{{label}}</div>
    <div class="weui-cell__ft">
      <switch :checked="checked" :color="color" @change="change" />
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

  methods: {
    change (evt) {
      const checked = evt.mp.detail.value
      this.$emit('update:checked', checked)
      this.$emit('change', evt)
    },
  },
}
</script>

<style lang="less">
@import "../theme/widget/weui-cell/weui-cell";
@import "../theme/widget/weui-cell/weui-switch";
</style>
