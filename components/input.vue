<template>
  <div
    class="weui-cell"
    :class="{
      'weui-cell_input': type !== 'textarea' && !selectMode,
      'weui-cell_select': selectMode,
      'weui-cell_vcode': vcodeMode,
      'weui-cell_warn': showWarn,
    }">
    <div
      v-if="label"
      class="weui-cell__hd"
      :class="{ 'label-select': selectMode }"
      >
      <picker v-if="selectMode" :value="selectIndex" :range="label" @change="labelchange">
        <div class="weui-select">{{label[selectIndex]}}</div>
      </picker>
      <div v-else class="weui-label">{{label}}</div>
    </div>
    <div class="weui-cell__bd" :class="{ 'weui-cell__bd_in-select-before': selectMode }">
      <input
        v-if="type !== 'textarea'"
        class="weui-input"
        :type="type"
        :value="inputValue"
        :password="password"
        :placeholder="placeholder"
        :disabled="disabled"
        :maxlength="maxlength"
        :focus="focus"
        :confirm-type="confirmType"
        :confirm-hold="confirmHold"
        :cursor="cursor"
        :selection-start="selection[0]"
        :selection-end="selection[1]"
        :adjust-position="adjustPosition"
        :show-confirm-bar="showConfirmBar"
        @focus="focus"
        @input="input"
        @confirm="confirm"
        @blur="blur"
        />
      <block v-else>
        <textarea
          class="weui-textarea"
          :style="textareaStyled"
          :value="inputValue"
          :placeholder="placeholder"
          :disabled="disabled"
          :maxlength="maxlength"
          :focus="focus"
          :cursor="cursor"
          :selection-start="selection[0]"
          :selection-end="selection[1]"
          :adjust-position="adjustPosition"
          @focus="focus"
          @input="input"
          @confirm="confirm"
          @blur="blur"
          @linechange="linechange"
          />
        <div class="weui-textarea-counter">{{inputValue.length || 0}}/{{maxlength}}</div>
      </block>
    </div>
    <div v-if="showWarn || vcodeMode" class="weui-cell__ft">
      <ui-icon v-if="!showVcodeButton && showWarn" type="warn" size="23" />
      <img
        v-if="vcodeImage"
        class="weui-vcode-img"
        :src="vcodeImage"
        :style="vcodeImageStyled"
        @click="click"
        />
      <div
        v-else-if="showVcodeButton"
        class="weui-vcode-btn"
        @click="click"
        >
        {{vcodeButtonText}}
      </div>
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
    type:               { type: String,     default: 'text' },
    value:              { type: String,     default: '' },
    placeholder:        { type: String,     default: '' },
    maxlength:          { type: Number,     default: 140 },
    disabled:           { type: Boolean,    default: false },
    focus:              { type: Boolean,    default: false },
    cursor:             { type: Number,     default: 0 },
    selection:          { type: Array,      default: [-1, -1] },
    adjustPosition:     { type: Boolean,    default: true },
    showWarn:           { type: Boolean,    default: false },
    // text, number, idcard, digit
    label:              { type: [String, Array], default: '' },
    labelSelect:        { type: Number,     default: 0 },
    password:           { type: Boolean,    default: false },
    confirmType:        { type: String,     default: 'done' },
    confirmHold:        { type: Boolean,    default: false },
    showVcodeButton:    { type: Boolean,    default: false },
    vcodeButtonText:    { type: String,     default: '获取验证码' },
    vcodeImage:         { type: String,     default: '' },
    vcodeImageWidth:    { type: Number,     default: 100 },
    // textarea
    height:             { type: String,     default: '3.3em' },
    showConfirmBar:     { type: Boolean,    default: true },
  },

  data () {
    return {
      inputValue: '',
      selectIndex: 0,
    }
  },

  computed: {
    selectMode () {
      return Array.isArray(this.label)
    },

    vcodeMode () {
      return this.showVcodeButton || this.vcodeImage
    },

    textareaStyled () {
      const styled = `height: ${this.height}`
      return isNaN(+this.height) ? styled : `${styled}px`
    },

    vcodeImageStyled () {
      return `width: ${this.vcodeImageWidth}px`
    },
  },

  methods: {
    focus (evt) {
      const event = evt.mp
      const value = event.detail.value
      event.$mp = evt
      this.$emit('focus', value, event)
    },

    input (evt) {
      const event = evt.mp
      const value = event.detail.value
      this.inputValue = value
      this.$emit('update:value', value)
      this.$emit('input', value, event)
    },

    confirm (evt) {
      const event = evt.mp
      const value = event.detail.value
      event.$mp = evt
      this.$emit('confirm', value, event)
    },

    blur (evt) {
      const event = evt.mp
      const value = event.detail.value
      event.$mp = evt
      this.$emit('blur', value, event)
      this.$emit('change', value, event)
    },

    linechange (evt) {
      const event = evt.mp
      const lineCount = event.detail.lineCount
      event.$mp = evt
      this.$emit('linechange', lineCount, event)
    },

    labelchange (evt) {
      const event = evt.mp
      const value = event.detail.value
      this.selectIndex = value
      this.$emit('update:labelSelect', value)
      this.$emit('labelchange', value, event)
    },

    click (evt) {
      const event = evt.mp
      event.$mp = evt
      this.$emit('vcodeclick', event)
    },
  },

  mounted () {
    this.inputValue = this.value
    this.selectIndex = this.labelSelect
  },

  onUnload () {
    // 重置初始数据
    Object.assign(this.$data, this.$options.data())
  },
}
</script>

<style lang="less" scoped>
@import "../theme/widget/weui-cell/weui-cell";
@import "../theme/widget/weui-cell/weui-form/weui-vcode";
@import "../theme/widget/weui-cell/weui-form/weui-select";
@import "../theme/widget/weui-cell/weui-form/weui-form_common";

.weui-vcode-btn {
  display: block;
}

.label-select {
  width: 105px
}
</style>
