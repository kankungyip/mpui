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
      :percent="percent"
      :activeColor="color"
      :backgroundColor="backgroundColor"
      :active="active"
      :active-mode="activeMode"
      />
  </div>
</template>

<script>
import Vue from 'vue'

let ref, timer

const hide = () => {
  clearTimeout(timer)
  wx.hideNavigationBarLoading()
  Object.assign(ref.$data, ref.$options.data())
}

const progress = (percent) => {
  if (!ref.hidden && percent > ref.percent) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      ref.activeMode = 'forwards'
      ref.percent = percent
    }, 100)
  }
}

const start = (force) => {
  if (force) {
    hide()
  }
  if (ref.hidden) {
    clearTimeout(timer)
    ref.percent = 1
    ref.hidden = false
    ref.animation = true
    ref.active = true
    ref.color = ref.activeColor
    wx.showNavigationBarLoading()
  }
}

const done = () => {
  if (!ref.hidden && ref.percent < 100) {
    clearTimeout(timer)
    progress(100)
    ref.active = false
    ref.color = ref.successColor
    timer = setTimeout(hide, 300)
  }
}

const error = () => {
  if (!ref.hidden && ref.percent < 100) {
    clearTimeout(timer)
    progress(100)
    ref.active = false
    ref.color = ref.warnColor
    timer = setTimeout(hide, 300)
  }
}

Vue.prototype['$loading'] = { start, progress, done, error, hide }
Vue.mixin({
  onShow () {
    wx.hideNavigationBarLoading()
  },
})

export default {
  props: {
    warnColor:          { type: String,   default: '#f43530' },
    successColor:       { type: String,   default: '#09bb07' },
    activeColor:        { type: String,   default: '#10aeff' },
    backgroundColor:    { type: String,   default: '#d9d9d9' },
  },

  data () {
    return {
      percent: 0,
      hidden: true,
      active: true,
      activeMode: 'backwards',
      color: '#10aeff',
      animation: false, // 进入的时候不会有消失的动画残影
    }
  },

  mounted () {
    ref = this
    this.color = this.activeColor
  },

  onShow () {
    ref = this
  },

  onUnload () {
    hide()
  },
}
</script>

<style lang="less" scoped>
.loading-bar {
  position: fixed;
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
