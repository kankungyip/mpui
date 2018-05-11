<template>
  <div class="avatar" :style="styled" @click="click">
    <img
      v-if="image"
      v-show="imageLoaded"
      mode="aspectFill"
      lazy-load
      :src="image"
      :style="imageStyled"
      @load="load"
      />
    <div
      v-if="!image || (image && !imageLoaded)"
      class="text"
      :style="textStyled"
      >
      {{displayText}}
    </div>
  </div>
</template>

<script>
import { string as toStyle } from 'to-style'

export default {
  props: {
    image:      { type: String,   default: '' },
    text:       { type: String,   default: '' },
    size:       { type: Number,   default: 80 },
    styles:     { type: Object,   default: null },
  },

  data () {
    return {
      imageLoaded: false,
    }
  },

  computed: {
    noSlot () {
      return !this.$slots.default
    },

    displayText () {
      if (!this.text) {
        return ''
      }
      const names = this.text.split(' ')
      return names.shift()[0] + (names.length > 0 ? names.pop()[0] : '')
    },

    styled () {
      return toStyle({
        width: this.size,
        height: this.size,
        ...this.styles,
      })
    },

    imageStyled () {
      return toStyle({
        width: this.size,
        height: this.size,
      })
    },

    textStyled () {
      return toStyle({
        fontSize: this.size * 0.45,
        width: this.size,
        height: this.size,
        lineHeight: this.size,
      })
    },
  },

  methods: {
    load () {
      this.imageLoaded = true
    },

    click (evt) {
      const event = evt.mp
      event.$mp = evt
      this.$emit('click', event)
    },
  }
}
</script>

<style lang="less" scoped>
@import "../theme/base/fn";

.avatar {
  display: inline-block;
  background: @weuiTextColorGray;
  border-radius: 50%;
  overflow: hidden;
  color: #fff;
}

.text {
  text-align: center;
  text-transform: uppercase;
}

.avatar + .avatar {
  margin-left: 8px;
}
</style>
