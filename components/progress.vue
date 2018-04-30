<template>
  <div class="weui-progress">
    <div class="weui-progress__bar" :style="styled">
      <progress
        :percent="value"
        :showInfo="showInfo"
        :stroke-width="strokeWidth"
        :activeColor="color || activeColor"
        :backgroundColor="backgroundColor"
        :active="active"
        :active-mode="activeMode"
        />
    </div>
    <div v-if="canCancel" class="weui-progress__opr">
      <ui-icon type="cancel" size="22" @click="cancel" />
    </div>
  </div>
</template>

<script>
import { string as toStyle } from 'to-style'
import uiIcon from './icon'

export default {
  components: {
    uiIcon,
  },

  props: {
    percent:            { type: Number,     default: 0 },
    showCancel:         { type: Boolean,    default: false },
    showInfo:           { type: Boolean,    default: false },
    strokeWidth:        { type: Number,     default: 3 },
    color:              { type: String,     default: '' },
    activeColor:        { type: String,     default: '#09bb07' },
    backgroundColor:    { type: String,     default: '#d9d9d9' },
    active:             { type: Boolean,    default: false },
    activeMode:         { type: String,     default: 'backwards' },
    round:              { type: Boolean,    default: false },
    styles:             { type: Object,     default: null },
  },

  data () {
    return {
      canceled: false,
    }
  },

  computed: {
    styled () {
      return toStyle({
        borderRadius: this.strokeWidth / 2,
        ...this.styles,
      })
    },

    value () {
      return this.canceled ? 0 : this.percent
    },

    canCancel () {
      return !this.canceled && this.showCancel && this.percent > 0 && this.percent < 100
    },
  },

  methods: {
    cancel (evt) {
      const event = evt.mp
      event.$mp = evt
      this.canceled = true
      this.$emit('cancel', event)
    },
  },

  beforeUpdate () {
    if (!this._percent || this.percent > this._percent) {
      this.canceled = false
    }
    this._percent = this.percent
  },

  onUnload () {
    // 重置初始数据
    Object.assign(this.$data, this.$options.data())
  },
}
</script>

<style lang="less" scoped>
@import "../theme/widget/weui-progress/weui-progress";

.weui-progress__bar {
  overflow: hidden;
}
</style>
