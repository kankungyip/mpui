<template>
  <div
    v-if="text || showDot"
    class="weui-badge"
    :class="{ 'weui-badge_dot': showDot }"
    :style="styled"
    >
    {{text}}
  </div>
</template>

<script>
import { string as toStyle } from 'to-style'

export default {
  props: {
    value:      { type: String,     default: '' },
    max:        { type: Number,     default: 999 },
    showDot:    { type: Boolean,    default: false },
    // fixed: style
    styles:     { type: Object,     default: null },
  },

  computed: {
    styled () {
      return this.styles ? toStyle(this.styles) : ''
    },

    text () {
      if (this.showDot) {
        return ''
      }
      return +this.value > this.max ? `${this.max}+` : this.value
    },
  },
}
</script>

<style lang="less" scoped>
@import "../theme/widget/weui-tips/weui-badge";

.weui-badge {
  margin-left: 5px;
  vertical-align: middle;

  &.weui-badge_dot {
    margin-right: 5px;
  }
}
</style>
