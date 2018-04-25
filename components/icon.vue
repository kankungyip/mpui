<template>
  <i
    class="weui-icon mpui-icon"
    :class="'weui-icon-' + type + ' mpui-icon-' + type"
    :style="styled"
    @click="click"
    />
</template>

<script>
import { string as toStyle } from 'to-style'

export default {
  props: {
    type:     { type: String,   default: '' },
    size:     { type: Number,   default: 23 },
    color:    { type: String,   default: '' },
    // fixed: style
    styles:   { type: Object,   default: null },
  },

  computed: {
    styled () {
      const styles = {
        ...this.styles,
      }
      if (this.color) {
        styles.color = this.color
      }
      if (this.size) {
        styles.fontSize = this.size
      }
      return toStyle(styles)
    },
  },

  methods: {
    click (evt) {
      const event = evt.mp
      event.$mp = evt
      this.$emit('click', event)
    },
  },
}
</script>

<style lang="less" scoped>
@import "../theme/icon/weui-icon_font";
</style>
