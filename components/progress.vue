<template>
  <div class="weui-progress">
    <div class="weui-progress__bar">
      <progress
        :percent="percent"
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

  computed: {
    canCancel () {
      return this.showCancel && this.percent > 0 && this.percent < 100
    },
  },

  methods: {
    cancel (...args) {
      this.$emit('update:percent', 0)
      this.$emit('cancel', ...args)
    },
  },
}
</script>

<style lang="less">
@import "../theme/widget/weui-progress/weui-progress";
</style>
