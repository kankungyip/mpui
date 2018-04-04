<template>
  <div
    class="loading-bar"
    :class="{
      'loading-bar-display': !hidden,
      'loading-bar-animation': animation,
    }"
    >
    <progress
      stroke-width="2"
      active-mode="forwards"
      :percent="percent"
      :activeColor="color"
      :backgroundColor="backgroundColor"
      :active="active"
      />
  </div>
</template>

<script>
import Vue from 'vue'

let ref, timer

const hide = () => {
  clearTimeout(timer)
  if (ref.percent >= 100 && ref.color === ref.activeColor) {
    ref.color = ref.successColor
  }
  ref.active = false
  ref.hidden = true
}

const progress = (percent) => {
  if (!ref.hidden && percent > ref.percent) {
    ref.percent = percent
  }
}

const start = (percent) => {
  clearTimeout(timer)
  ref.percent = 1
  ref.active = true
  ref.hidden = false
  ref.animation = true
  ref.color = ref.activeColor
  progress(percent)
}

const done = (delay) => {
  if (ref.hidden || ref.percent >= 100) {
    return
  }
  clearTimeout(timer)
  if (delay == null) {
    delay = 3 * ((100 - ref.percent) / 100)
  }
  timer = setTimeout(hide, delay * 1000)
  progress(100)
}

const error = (delay) => {
  if (ref.hidden || ref.percent >= 100) {
    return
  }
  clearTimeout(timer)
  if (delay) {
    timer = setTimeout(hide, delay * 1000)
  }
  progress(100)
  ref.active = false
  ref.color = ref.warnColor
}

Vue.prototype['$loading'] = { start, progress, done, error, hide }

export default {
  props: {
    warnColor:          { type: String,   default: '#f43530' },
    successColor:       { type: String,   default: '#09bb07' },
    activeColor:        { type: String,   default: '#10aeff' },
    backgroundColor:    { type: String,   default: '#d9d9d9' },
  },

  data () {
    return {
      percent: 1,
      hidden: true,
      active: true,
      color: '#10aeff',
      animation: false, // 进入的时候不会有消失的动画残影
    }
  },

  created () {
    ref = this
    this.color = this.activeColor
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
.loading-bar {
  position: absolute;
  width: 100vw;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 10000;
}

.loading-bar-display {
  opacity: 1;
}

.loading-bar-animation {
  transition: opacity .3s ease;
}
</style>
