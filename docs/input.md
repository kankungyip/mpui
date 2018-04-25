Input
===

表单项

## 使用

```vue
<template>
  <!-- <ui-list>   暂未支持 Slot 语法
    <ui-input type="number" label="QQ" placeholder="请输入QQ" @change="change" />
  </ui-list> -->
  
  <!-- Slot 替代方案 -->
  <div class="weui-cells">
    <ui-input type="number" label="QQ" placeholder="请输入QQ" @change="change" />
    <ui-input type="number" placeholder="请输入电话号码" :label="countryCodes" @change="change" />
    <ui-input :value.sync="value" />
  </div>
</teamplate>

<script>
// import uiList from 'mpui/components/list'
import uiInput from 'mpui/components/input'

export default {
  components: {
    uiInput
  },

  data () {
    return {
      countryCodes: ['+86', '+80', '+84', '+87'],
      value: '表单项'
    }
  },

  methods: {
    change (value, event) {
      console.log(value)
    }
  }
}
</script>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| value | String |   | 表单项的初始值，支持 `.sync` |
| type | String | `text` | 表单项类型，可选值：`text`, `number`, `idcard`, `digit`, `textarea` |
| password | Boolean | `false` | 是否是密码类型 |
| placeholder | String |   | 输入框为空时占位符 |
| disabled | Boolean | `false` | 是否禁用 |
| maxlength | Number | `140` | 最大输入长度，设置为 -1 的时候不限制最大长度 |
| focus | Boolean | `false` | 获取焦点 |
| cursor | Number | `0` | 指定 focus 时的光标位置 |
| selection | Array | `[-1, -1]` | 光标选择起始-结束位置 |
| adjust-position | Boolean | `true` | 键盘弹起时，是否自动上推页面 |
| show-warn | Boolean | `false` | 显示数据校验错误提示 |
| label | String, Array |   | 表单项标签，标签类型为 Array 时，显示可选标签 |
| label-select | Number | `0` | 标签类型为 Array 时，初始选择的项，支持 `.sync` |
| confirm-type | String | `done` | 设置键盘右下角按钮的文字，可选值：`send`, `search`, `next`, `go`, `done` |
| confirm-hold | Boolean | `false` | 点击键盘右下角按钮时是否保持键盘不收起 |
| show-vcode-button | Boolean | `false` | 是否显示“获取验证码”按钮 |
| vcode-button-text | String | `获取验证码` | 获取验证码按钮上显示的文字 |
| vcode-image | String |   | 图形验证码 |
| vcode-image-width | Number | `100` | 图形验证码的宽度 |
| height | String | `3.3em` | `type=textarea` 时，设置输入框的高度 |
| show-confirm-bar | Boolean | `true` | `type=textarea` 时，是否显示键盘上方带有”完成“按钮那一栏 |

## 事件

| 事件 | 参数 | 说明 |
| :-- | :-- | :-- |
| focus | `value, event` | 输入框获取焦点触发 |
| input | `value, event` | 键盘输入触发 |
| confirm | `value, event` | 点击键盘上的完成按钮触发 |
| blur | `value, event` | 输入框失去焦点出发 |
| change | `value, event` | 同 `blur` 事件 |
| linechange | `lineCount, event` | `type=textarea` 时，行数变化时触发 |
| labelchange | `value, event` | 可选标签内容发生变化时触发 |
| vcodeclick | `event` | 点击“获取验证码”按钮时触发 |
