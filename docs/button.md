Button
===

按钮，采用小程序原生的按钮为主体，加入一些间距的样式。

## 使用

```vue
<template>
  <ui-button>按钮</ui-button>
  <ui-button
    type="primary"
    icon="success"
    text="成功"
    open-type="navigate"
    navigate-to="/pages/msg/success"
    />
</teamplate>

<script>
import uiButton from 'mpui/components/button'

export default {
  components: {
    uiButton
  }
}
</script>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| :-- | :-- | :-- | :-- |
| text | String |   | 按钮上显示的文字，设置 slot 之后，将覆盖该属性 |
| icon | String |   | 文字前显示的图标，图标类型详见 [`Icons`](icons.md)，设置 slot 之后，将覆盖该属性 |
| image | String |   | 文字前显示的图，设置 slot 之后，将覆盖该属性 |
| size | Number | `default` | 按钮的大小，可选值：`default`, `mini` |
| type | String | `default` | 按钮的样式类型，可选值：`default`, `primary`, `warn` |
| plain | Boolean | `false` | 按钮是否镂空，背景色透明 |
| disabled | Boolean | `false` | 是否禁用 |
| loading | Boolean | `false` | 名称前是否带 loading 图标 |
| hover-stop-propagation | Boolean | `false` | 指定是否阻止本节点的祖先节点出现点击态 |
| form-type | String |   | 触发表单 `submit`/`reset` 事件，可选值：`submit`, `reset` |
| open-type | String |   | 微信开放能力，可选值：`contact`, `share`, `getUserInfo`, `getPhoneNumber`, `launchApp`, `navigate`, `redirect`, `switchTab`, `navigateBack` |
| app-parameter | String |   | `open-type=launchApp` 时，打开 APP 并向 APP 传递的参数 |
| lang | String | `en` | `open-type=getUserInfo`时指定返回用户信息的语言，可选值：`en` 英文，`zh_CN` 简体中文，`zh_TW` 繁体中文 |
| session-from | String |   | `open-type=contact` 时，设置会话来源 |
| send-message-title | String |   | `open-type=contact` 时，设置会话内消息卡片标题 |
| send-message-path | String |   | `open-type=contact` 时，设置会话内消息卡片点击跳转小程序路径 |
| send-message-img | String |   | `open-type=contact` 时，设置会话内消息卡片图片 |
| send-message-card | Boolean | `false` | `open-type=contact` 时，设置显示会话内消息卡片 |
| navigate-to | String |   | `open-type=navigate`, `open-type=redirect`, `open-type=switchTab` 时，跳转链接地址。 |
| navigate-back-delta | Number | `0` | `open-type=navigateBack` 时，返回的层数 |
| styles | Object |   | 组件样式（mpvue 暂时不支持组件的 `style`） |

!> Slot 的支持不是很好，在 slot 中使用自定义组件有可能无法正常显示，慎用！

## 事件

| 事件 | 参数 | 说明 |
| :-- | :-- | :-- |
| click | `event` | 点击按钮触发 |
| getuserinfo | `event` | `open-type=getUserInfo`时，返回获取到的用户信息，从返回参数的 `event.detail` 中获取到的值同 `wx.getUserInfo` |
| getphonenumber | `event` | `open-type=getPhoneNumber`时，获取用户手机号回调 |
| contact | `event` | `open-type=getUserInfo`时，返回客服消息回调 |
| error | `event` | `open-type=launchApp` 时，返回错误信息 |

