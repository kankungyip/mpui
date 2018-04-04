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
    {{text}}
  </div>
</template>

<script>
import Vue from 'vue'

let ref, timer

const hide = () => {
  clearTimeout(timer)
  ref.hidden = true
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
      animation: false, // 进入的时候不会有消失的动画残影
    }
  },

  created () {
    ref = this
  },

  onUnload () {
    // 保证小程序退出后再次进入时不会残留之前的显示
    // 同时初始化动画选项，保证再次进入时不会有动画残影
    ref.animation = false
    hide()
  },
}
</script>

<style lang="less" scoped>
@import "../theme/base/fn";
@import "../theme/widget/weui-cell/weui-form/weui-form_common";

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
  transition: transform .3s ease, opacity .3s ease;
}
</style>
