<template>
  <div class="weui-msg" :style="styled">
    <div class="weui-msg__icon-area">
      <img v-if="image" class="image" :src="image" />
      <ui-icon v-else size="93" :type="iconType" :color="iconColor" />
    </div>
    <div class="weui-msg__text-area">
      <div class="weui-msg__title">{{title}}</div>
      <div class="weui-msg__desc">{{text}}</div>
    </div>
    <div class="weui-msg__opr-area">
      <div class="weui-btn-area">
        <ui-button v-if="confirmText" type="primary" :text="confirmText" @click="confirm" />
        <ui-button v-if="cancelText" :text="cancelText" @click="cancel" />
      </div>
    </div>
    <div class="weui-msg__extra-area">
      <ui-footer :text="footerText" :links="footerLinks" />
    </div>
  </div>
</template>

<script>
import uiButton from './button'
import uiIcon from './icon'
import uiFooter from './footer'

export default {
  components: {
    uiButton,
    uiIcon,
    uiFooter,
  },

  props: {
    type:           { type: String,   default: 'default' },
    title:          { type: String,   default: '' },
    text:           { type: String,   default: '' },
    icon:           { type: String,   default: '' },
    color:          { type: String,   default: '' },
    image:          { type: String,   default: '' },
    confirmText:    { type: String,   default: '' },
    cancelText:     { type: String,   default: '' },
    footerText:     { type: String,   default: '' },
    footerLinks:    { type: Array,    default: [] },
  },

  computed: {
    iconType () {
      if (this.icon) {
        return this.icon
      }
      if (!this.type || this.type === 'default') {
        return 'info'
      }
      if (this.type === 'alert') {
        return 'warn'
      }
      return this.type
    },

    iconColor () {
      if (this.type === 'alert') {
        return '#ffbe00'
      }
      if (this.type === 'warn') {
        return '#f76260'
      }
      return this.color
    },
  },

  methods: {
    confirm (...args) {
      this.$emit('confirm', ...args)
    },

    cancel (...args) {
      this.$emit('cancel', ...args)
    },
  },
}
</script>

<style lang="less" scoped>
@import "../theme/widget/weui-page/weui-msg";

.image {
  vertical-align: middle;
}
</style>
