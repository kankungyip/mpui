<template>
  <button
    class="weui-btn"
    :style="styled"
    :type="type"
    :size="size"
    :disabled="disabled"
    :plain="plain"
    :loading="loading"
    :form-type="formType"
    :open-type="openType"
    :hover-stop-propagation="hoverStopPropagation"
    :lang="lang"
    :app-parameter="appParameter"
    :session-from="sessionFrom"
    :send-message-title="sendMessageTitle"
    :send-message-path="sendMessagePath"
    :send-message-img="sendMessageImg"
    :send-message-card="sendMessageCard"
    @click="click"
    @getuserinfo="getUserInfo"
    @contact="contact"
    @getphonenumber="getPhoneNumber"
    @error="error"
    >
    <block v-if="noSlot">
      <img v-if="image" class="image" :src="image" :style="imageStyled" />
      <ui-icon v-else-if="icon" :type="icon" :size="iconSize" :styles="iconStyle" />
      <span v-if="text" class="text">{{text}}</span>
    </block>
    <slot />
  </button>
</template>

<script>
import { string as toStyle } from 'to-style'
import uiIcon from './icon'

export default {
  components: {
    uiIcon,
  },

  props: {
    text:                   { type: String,     default: '' },
    icon:                   { type: String,     default: '' },
    image:                  { type: String,     default: '' },
    type:                   { type: String,     default: 'default' },
    size:                   { type: Number,     default: 'default' },
    disabled:               { type: Boolean,    default: false },
    plain:                  { type: Boolean,    default: false },
    loading:                { type: Boolean,    default: false },
    formType:               { type: String,     default: '' },
    openType:               { type: String,     default: '' },
    hoverStopPropagation:   { type: Boolean,    default: false },
    lang:                   { type: String,     default: 'en' },
    appParameter:           { type: String,     default: '' },
    sessionFrom:            { type: String,     default: '' },
    sendMessageTitle:       { type: String,     default: '' },
    sendMessagePath:        { type: String,     default: '' },
    sendMessageImg:         { type: String,     default: '' },
    sendMessageCard:        { type: Boolean,    default: false },
    // for custom open-type: navigate, redirect, switchTab
    navigateTo:             { type: String,     default: '' },
    // for custom open-type: navigateBack
    navigateBackDelta:      { type: Number,     default: 0 },
    // fixed: style
    styles:                 { type: Object,     default: null },
  },

  computed: {
    noSlot () {
      return !this.$slots.default
    },

    styled () {
      return this.styles ? toStyle(this.styles) : ''
    },

    customOpenType () {
      if (this.navigateTo) {
        return 'navigate'
      }
      if (this.navigateBackDelta) {
        return 'navigateBack'
      }
      return this.openType
    },

    iconSize () {
      return this.size !== 'mini' ? 20 : 14
    },

    imageStyled () {
      return toStyle({
        width: this.iconSize,
        height: this.iconSize,
      })
    },

    iconStyle () {
      const styles = {
        verticalAlign: 'inherit'
      }
      if (this.disabled) {
        styles.opacity = 0.3
      }
      return styles
    },
  },

  methods: {
    click (evt) {
      const url = this.navigateTo
      const delta = this.navigateBackDelta

      switch (this.customOpenType) {
        case 'navigate':
          wx.navigateTo({ url })
          break

        case 'redirect':
          wx.navigateTo({ url })
          break

        case 'switchTab':
          wx.navigateTo({ url })
          break

        case 'navigateBack':
          wx.navigateBack({ delta })
          break
      }

      const event = evt.mp
      event.$mp = evt
      this.$emit('click', event)
    },

    getUserInfo (evt) {
      const event = evt.mp
      event.$mp = evt
      this.$emit('getuserinfo', event)
    },

    getPhoneNumber (evt) {
      const event = evt.mp
      event.$mp = evt
      this.$emit('getphonenumber', event)
    },

    contact (evt) {
      const event = evt.mp
      event.$mp = evt
      this.$emit('contact', event)
    },

    error (evt) {
      const event = evt.mp
      event.$mp = evt
      this.$emit('error', event)
    },
  },
}
</script>

<style lang="less" scoped>
@import "../theme/widget/weui-button/weui-button";

.image {
  vertical-align: middle;
}

.text {
  padding-left: 5px;
}
</style>
