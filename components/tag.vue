<template>
  <div class="tag" :class="{ plain }" :style="styled">
    <span v-if="noSlot">{{text}}</span>
    <slot />
  </div>
</template>

<script>
import { string as toStyle } from 'to-style'

export default {
  props: {
    text:       { type: String,   default: '' },
    type:       { type: String,   default: 'default' },
    color:      { type: String,   default: '#999' },
    textColor:  { type: String,   default: '#fff' },
    plain:      { type: Boolean,  default: false },
  },

  computed: {
    noSlot () {
      return !this.$slots.default
    },

    styled () {
      const styles = {
        color: this.plain ? this.color : this.textColor,
        background: this.color,
        borderColor: this.color,
      }
      switch (this.type) {
        case 'primary':
          if (this.plain) {
            styles.color = '#09bb07'
          }
          styles.background = '#09bb07'
          styles.borderColor = '#09bb07'
          break
        case 'warn':
          if (this.plain) {
            styles.color = '#e64340'
          }
          styles.background = '#e64340'
          styles.borderColor = '#e64340'
          break
      }
      return toStyle(styles)
    },
  },
}
</script>

<style lang="less" scoped>
@import "../theme/base/fn";

.tag {
  display: inline-block;
  background: @weuiTextColorGray;
  border: 1px solid @weuiTextColorGray;
  border-radius: 4px;
  font-size: @weuiFontSizeMini;
  padding: 0 5px;

  &.plain {
    background: transparent !important;
  }
}

.tag + .tag {
  margin-left: 5px;
}
</style>
