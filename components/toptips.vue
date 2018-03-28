<template>
  <div
    class="'weui-toptips"
    :class="{
      'weui-toptips_primary': type === 'primary',
      'weui-toptips_warn': type === 'warn',
      'toptips-display': !hidden,
      'toptips-animation': animation,
    }"
    >
    <span>{{text}}</span>
  </div>
</template>

<script>
import Vue from 'vue'

const ANIMATION_DURATION = 0.3

let ref, timer

const hide = () => {
  ref.hidden = true
  clearTimeout(timer)
  timer = setTimeout(() => ref.animation = false, ANIMATION_DURATION * 1000)
}

const show = ({
  type = 'default',
  text = '',
  duration = 3,
} = {}) => {
  clearTimeout(timer)
  ref.type = type
  ref.text = text
  ref.hidden = false
  ref.animation = true
  if (duration) {
    timer = setTimeout(hide, duration * 1000)
  }
}

Vue.prototype['$toptips'] = { show, hide }

export default {
  data () {
    return {
      type: 'default',
      text: '',
      hidden: true,
      animation: false,
    }
  },

  created () {
    ref = this
  },

  onUnload () {
    hide()
  },
}
</script>

<style lang="less" scoped>
@import "../theme/base/fn";
@import "../theme/widget/weui-cell/weui-form/weui-form_common";

@ANIMATION_DURATION: .3s;

.weui-toptips {
  background-color: @weuiColorInfo;
  transform: translate3d(0, -100%, 0);
  opacity: 0;
}

.weui-toptips_primary {
  background-color: @weuiColorPrimary;
}

.weui-toptips_warn {
  background-color: @weuiColorWarn;
}

.toptips-display {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}

.toptips-animation {
  // ANIMATION_DURATION
  transition: transform @ANIMATION_DURATION ease, opacity @ANIMATION_DURATION ease;
}
</style>
