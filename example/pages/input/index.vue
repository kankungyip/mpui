<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">Input</div>
      <div class="page__desc">表单项</div>
    </div>

    <div class="page__bd">
      <div class="weui-cells__title">表单项</div>
      <div class="weui-cells weui-cells_after-title">
        <ui-input type="number" label="QQ" placeholder="请输入QQ" @change="change" />
        <ui-input type="number" label="手机号" placeholder="请输入手机号" show-vcode-button @change="change" @vcodeclick="vcodeClick" />
        <ui-input label="验证码" placeholder="请输入验证码" vcode-image="/static/images/vcode.jpg" @change="change" @vcodeclick="vcodeClick" />
        <ui-input type="number" placeholder="请输入电话号码" :label="countryCodes" @labelchange="labelChange" @change="change" />
      </div>
      <div class="weui-cells__tips">底部说明文字底部说明文字</div>

      <div class="weui-cells__title">表单报错</div>
      <div class="weui-cells weui-cells_after-title">
        <ui-input type="number" label="卡号" placeholder="请输入卡号" show-warn @change="change" />
      </div>

      <div class="weui-cells__title">文本框</div>
      <div class="weui-cells weui-cells_after-title">
        <ui-input placeholder="请输入文本" @change="change" />
      </div>

      <div class="weui-cells__title">文本域</div>
      <div class="weui-cells weui-cells_after-title">
        <ui-input type="textarea" placeholder="请输入文本" :value="value" @change="change" />
      </div>
    </div>

  </div>
</template>

<script>
import uiCell from '../../../components/cell'
import uiInput from '../../../components/input'

export default {
  components: {
    uiCell,
    uiInput,
  },

  data () {
    return {
      countryCodes: ['+86', '+80', '+84', '+87'],
      value: '',
    }
  },

  methods: {
    change (value, event) {
      console.log(`input 输入的新值：${value}`)
    },

    labelChange (value, event) {
      console.log(`select 选择的值：${value}`)
    },

    vcodeClick (event) {
      console.log('点击验证码')
    },
  },
}
</script>

<style>
</style>
