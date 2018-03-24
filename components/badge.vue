<template>
  <div
    v-if="text"
    class="weui-badge"
    :class="{ 'weui-badge_dot': dot }"
    >
    {{text}}
  </div>
</template>

<script>
export default {
  props: {
    value:    { type: String,     default: '' },
    max:      { type: Number,     default: 999 },
    dot:      { type: Boolean,    default: false },
  },

  computed: {
    text () {
      if (this.dot) {
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
  position: absolute;
  top: -.6em;
  right: -.8em;

  &.weui-badge_dot {
    top: -.4em;
  }
}
</style>
