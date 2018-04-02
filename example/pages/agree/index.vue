<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">Agree</div>
      <div class="page__desc">同意条款</div>
    </div>

    <div class="page__bd">
      <div class="weui-cells__title">同意条款</div>
      <div class="weui-cells weui-cells_after-title">
        <ui-cell title="标题文字" />
        <ui-cell title="标题文字" />
      </div>

      <ui-agree :value.sync="value" :links="links" />
    </div>

  </div>
</template>

<script>
import uiCell from '../../../components/cell'
import uiAgree from '../../../components/agree'

export default {
  components: {
    uiCell,
    uiAgree,
  },

  data () {
    return {
      value: false,
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
