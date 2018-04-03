<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">Agree</div>
      <div class="page__desc">同意条款</div>
    </div>

    <div class="page__bd">
      <div class="weui-cells__title">同意条款</div>
      <div class="weui-cells weui-cells_after-title">
        <ui-input label="用户名" placeholder="请输入用户名" />
        <ui-input label="密码" placeholder="请输入密码" password />
      </div>

      <ui-agree :links="links" />
    </div>

  </div>
</template>

<script>
import uiInput from '../../../components/input'
import uiAgree from '../../../components/agree'

export default {
  components: {
    uiInput,
    uiAgree,
  },

  data () {
    return {
      links: [
        {
          title: '相关条款',
          url: '#',
        },
      ],
    }
  },
}
</script>

<style>
</style>
