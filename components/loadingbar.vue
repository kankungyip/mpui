<template>
  <block>
    <div v-if="!hidden && loaderMask" class="loading-mask" :style="'background:' + loaderMaskColor" />
    <div
      v-if="loaderType === 'progress-bar'"
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
        :backgroundColor="loaderBackgroundColor"
        :active="active"
        :active-mode="activeMode"
        />
    </div>
    <div v-else-if="!hidden" class="loading-bar loader" :class="type">
      <div v-for="i in innerDivCount" :key="i" :style="'background: ' + loaderActiveColor" />
    </div>
  </block>
</template>

<script>
import Vue from 'vue'

import 'loaders.css'

let ref, timer

const hide = () => {
  clearTimeout(timer)
  wx.hideNavigationBarLoading()
  Object.assign(ref.$data, ref.$options.data())
  ref.color = ref.activeColor
  ref.loaderType = ref.type
  ref.loaderMask = ref.mask
  ref.loaderMaskColor = ref.maskColor
  ref.loaderWarnColor = ref.warnColor
  ref.loaderActiveColor = ref.activeColor
  ref.loaderSuccessColor = ref.successColor
  ref.loaderBackgroundColor = ref.backgroundColor
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

const start = (opts, force) => {
  if (typeof opts === 'boolean') {
    [force, opts] = [opts, force]
  }

  if (force) {
    hide()
  }

  const { type, mask, maskColor, warnColor, successColor, activeColor, backgroundColor } = opts || {}
  if (type) {
    ref.loaderType = type
  }
  if (mask) {
    ref.loaderMask = mask
  }
  if (maskColor) {
    ref.loaderMaskColor = maskColor
  }
  if (warnColor) {
    ref.loaderWarnColor = warnColor
  }
  if (successColor) {
    ref.loaderSuccessColor = successColor
  }
  if (activeColor) {
    ref.loaderActiveColor = activeColor
  }
  if (backgroundColor) {
    ref.loaderBackgroundColor = backgroundColor
  }

  if (ref.hidden) {
    clearTimeout(timer)
    ref.percent = 1
    ref.hidden = false
    ref.animation = true
    ref.active = true
    ref.color = ref.loaderActiveColor
    wx.showNavigationBarLoading()
  }
}

const done = () => {
  if (!ref.hidden && ref.percent < 100) {
    clearTimeout(timer)
    progress(100)
    ref.active = false
    ref.color = ref.loaderSuccessColor
    timer = setTimeout(hide, 300)
  }
}

const error = () => {
  if (!ref.hidden && ref.percent < 100) {
    clearTimeout(timer)
    progress(100)
    ref.active = false
    ref.color = ref.loaderWarnColor
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
    type:               { type: String,   default: 'progress-bar' },
    warnColor:          { type: String,   default: '#f43530' },
    successColor:       { type: String,   default: '#09bb07' },
    activeColor:        { type: String,   default: '#10aeff' },
    backgroundColor:    { type: String,   default: '#d9d9d9' },
    maskColor:          { type: String,   default: 'rgba(0,0,0,.4)' },
    mask:               { type: Boolean,  default: false },
  },

  data () {
    return {
      loaderType: 'progress-bar',
      loaderWarnColor: '#f43530',
      loaderSuccessColor: '#09bb07',
      loaderActiveColor: '#10aeff',
      loaderBackgroundColor: '#d9d9d9',
      loaderMaskColor: 'rgba(0,0,0,.4)',
      loaderMask: false,

      percent: 0,
      hidden: true,
      active: true,
      activeMode: 'backwards',
      color: '#10aeff',
      animation: false, // 进入的时候不会有消失的动画残影
    }
  },

  computed: {
    innerDivCount () {
      switch (this.loaderType) {
        case 'ball-clip-rotate':
        case 'square-spin':
        case 'ball-rotate':
        case 'ball-scale':
        case 'ball-scale-ripple':
        case 'triangle-skew-spin':
        case 'semi-circle-spin':
          return 1

        case 'ball-clip-rotate-pulse':
        case 'ball-clip-rotate-multiple':
        case 'cube-transition':
        case 'ball-zig-zag':
        case 'ball-zig-zag-deflect':
          return 2

        case 'ball-pulse':
        case 'ball-triangle-path':
        case 'ball-scale-multiple':
        case 'ball-pulse-sync':
        case 'ball-beat':
        case 'ball-scale-ripple-multiple':
        case 'ball-scale-random':
          return 3

        case 'line-scale-party':
          return 4

        case 'ball-pulse-rise':
        case 'line-scale':
        case 'line-scale-pulse-out':
        case 'line-scale-pulse-out-rapid':
        case 'pacman':
          return 5

        case 'ball-spin-fade-loader':
        case 'line-spin-fade-loader':
          return 8

        case 'ball-grid-beat':
        case 'ball-grid-pulse':
          return 9
      }
    }
  },

  mounted () {
    if (ref) {
      hide()
    }
    ref = this
    this.color = this.activeColor
    this.loaderType = this.type
    this.loaderMask = this.mask
    this.loaderMaskColor = this.maskColor
    this.loaderWarnColor = this.warnColor
    this.loaderActiveColor = this.activeColor
    this.loaderSuccessColor = this.successColor
    this.loaderBackgroundColor = this.backgroundColor
  },

  onShow () {
    if (ref) {
      hide()
    }
    ref = this
  },

  onUnload () {
    hide()
  },
}
</script>

<style lang="less" scoped>
@loading-z-index: 10000;

.loader {
  top: 50%;
  z-index: @loading-z-index;
}

.loading-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: @loading-z-index - 1;
}

.loading-bar {
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: @loading-z-index;

  &.loader {
    top: 50%;
    text-align: center;
    opacity: 1;
    transform: translateY(-50%);
  }
}

.loading-bar-display {
  opacity: 1;
}

.loading-bar-animation {
  transition: opacity .3s ease;
}
</style>
