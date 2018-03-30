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
    <img v-if="image" class="image" :src="image" :style="imageStyled" />
    <ui-icon v-else-if="icon" margin-right="5" :type="icon" :size="iconSize" />
    <span class="text">{{text}}</span>
  </button>
</template>

<script>
import uiIcon from './icon'

export default {
  components: {
    uiIcon,
  },

  props: {
     // slot
    text:                   { type: String,     default: '' },
    icon:                   { type: String,     default: '' },
    image:                  { type: String,     default: '' },
    // for custom open-type: navigate, redirect, switchTab
    navigateTo:             { type: String,     default: '' },
    // for custom open-type: navigateBack
    navigateBackDelta:      { type: Number,     default: 0 },
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
    margin:                 { type: Number,     default: 0 },
    marginTop:              { type: Number,     default: 0 },
    marginRight:            { type: Number,     default: 0 },
    marginBottom:           { type: Number,     default: 0 },
    marginLeft:             { type: Number,     default: 0 },
  },

  computed: {
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
      const styles = []
      styles.push(`width: ${this.iconSize}px`)
      styles.push(`height: ${this.iconSize}px`)
      return styles.join(';')
    },

    styled () {
      const styles = []

      if (this.margin && isNaN(this.margin)) {
        styles.push(`margin: ${this.margin}`)
      } else if (+this.margin > 0) {
        styles.push(`margin: ${this.margin}px`)
      }

      if (this.marginTop && isNaN(this.marginTop)) {
        styles.push(`margin-top: ${this.marginTop}`)
      } else if (+this.marginTop > 0) {
        styles.push(`margin-top: ${this.marginTop}px`)
      }

      if (this.marginRight && isNaN(this.marginRight)) {
        styles.push(`margin-right: ${this.marginRight}`)
      } else if (+this.marginRight > 0) {
        styles.push(`margin-right: ${this.marginRight}px`)
      }

      if (this.marginBottom && isNaN(this.marginBottom)) {
        styles.push(`margin-bottom: ${this.marginBottom}`)
      } else if (+this.marginBottom > 0) {
        styles.push(`margin-bottom: ${this.marginBottom}px`)
      }

      if (this.marginLeft && isNaN(this.marginLeft)) {
        styles.push(`margin-left: ${this.marginLeft}`)
      } else if (+this.marginLeft > 0) {
        styles.push(`margin-left: ${this.marginLeft}px`)
      }

      return styles.join(';')
    }
  },

  methods: {
    click (...args) {
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

      this.$emit('click', ...args)
    },

    getUserInfo (...args) {
      this.$emit('getuserinfo', ...args)
    },

    contact (...args) {
      this.$emit('contact', ...args)
    },

    getPhoneNumber (...args) {
      this.$emit('getphonenumber', ...args)
    },

    error (...args) {
      this.$emit('error', ...args)
    },

  },

  created () {
    if (this.customNavigateStyleBack) {
      const { statusBarHeight } = wx.getSystemInfoSync() || {}
      this.navigateBackStyled = `top: ${statusBarHeight + 6}px`
    }
  },
}
</script>

<style lang="less">
@import "../theme/widget/weui-button/weui-button";
</style>

<style lang="less" scoped>
.image {
  margin-right: 5px;
  vertical-align: middle;
}

.text {
  vertical-align: middle;
}
</style>
