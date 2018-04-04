<template>
  <i
    class="weui-icon"
    :class="'weui-icon-' + type"
    :style="styled"
    @click="click"
    />
</template>

<script>
export default {
  props: {
    type:           { type: String,   default: '' },
    size:           { type: Number,   default: 23 },
    color:          { type: String,   default: '' },
    margin:         { type: Number,   default: 0 },
    marginTop:      { type: Number,   default: 0 },
    marginRight:    { type: Number,   default: 0 },
    marginBottom:   { type: Number,   default: 0 },
    marginLeft:     { type: Number,   default: 0 },
  },

  computed: {
    styled () {
      const styles = []

      if (this.color) {
        styles.push(`color: ${this.color}`)
      }

      if (this.size && isNaN(this.size)) {
        styles.push(`font-size: ${this.size}`)
      } else if (+this.size > 0) {
        styles.push(`font-size: ${this.size}px`)
      }

      if (this.margin && isNaN(this.margin)) {
        styles.push(`margin: ${this.margin}`)
      } else if (+this.margin > 0) {
        styles.push(`margin: ${this.margin}px`)
      }

      if (this.marginTop && isNaN(this.marginTop)) {
        styles.push(`margin-top: ${this.marginTop}`)
      } else if (+this.marginTop > 0) {
        styles.push(`margin-top: ${this.marginTop}px`)
      }

      if (this.marginRight && isNaN(this.marginRight)) {
        styles.push(`margin-right: ${this.marginRight}`)
      } else if (+this.marginRight > 0) {
        styles.push(`margin-right: ${this.marginRight}px`)
      }

      if (this.marginBottom && isNaN(this.marginBottom)) {
        styles.push(`margin-bottom: ${this.marginBottom}`)
      } else if (+this.marginBottom > 0) {
        styles.push(`margin-bottom: ${this.marginBottom}px`)
      }

      if (this.marginLeft && isNaN(this.marginLeft)) {
        styles.push(`margin-left: ${this.marginLeft}`)
      } else if (+this.marginLeft > 0) {
        styles.push(`margin-left: ${this.marginLeft}px`)
      }

      return styles.join(';')
    },
  },

  methods: {
    click (...args) {
      this.$emit('click', ...args)
    },
  },
}
</script>

<style lang="less" scoped>
@import "../theme/icon/weui-icon_font";
</style>
