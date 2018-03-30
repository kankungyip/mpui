<template>
  <div
    v-if="text || showDot"
    class="weui-badge"
    :class="{ 'weui-badge_dot': showDot }"
    >
    {{text}}
  </div>
</template>

<script>
export default {
  props: {
    value:      { type: String,     default: '' },
    max:        { type: Number,     default: 999 },
    showDot:    { type: Boolean,    default: false },
  },

  computed: {
    text () {
      if (this.showDot) {
        return ''
      }
      return +this.value > this.max ? `${this.max}+` : this.value
    },
  },
}
</script>

<style lang="less">
@import "../theme/widget/weui-tips/weui-badge";

.weui-badge {
  margin-left: 5px;
  vertical-align: middle;

  &.weui-badge_dot {
    margin-right: 5px;
  }
}
</style>
