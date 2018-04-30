<template>
  <div class="ellipsis" :style="styled">
    <block v-if="noSlot">{{text}}</block>
    <slot />
  </div>
</template>

<script>
import { string as toStyle } from 'to-style'

export default {
  props: {
    text:     { type: String,   default: '' },
    lines:    { type: Number,   default: 1 },
    // fixed: style
    styles:   { type: Object,   default: null },
  },

  computed: {
    noSlot () {
      return !this.$slots.default
    },

    styled () {
      const styles = this.lines > 1
        ? {
            display: '-webkit-box',
            '-webkit-box-orient': 'vertical',
          }
        : {
            whiteSpace: 'nowrap',
            wordWrap: 'normal',
          }
      return toStyle({
        ...this.styles,
        ...styles,
      }) + `; -webkit-line-clamp: ${this.lines}`
    },
  },
}
</script>

<style lang="less" scoped>
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
