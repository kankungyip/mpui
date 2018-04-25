<template>
  <div class="weui-progress">
    <div class="weui-progress__bar">
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
    <div class="weui-progress__opr">
      <ui-icon v-if="canCancel" type="cancel" size="22" @click="cancel" />
    </div>
  </div>
</template>

<script>
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
  },

  data () {
    return {
      canceled: false,
    }
  },

  computed: {
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
}
</script>

<style lang="less" scoped>
@import "../theme/widget/weui-progress/weui-progress";
</style>
