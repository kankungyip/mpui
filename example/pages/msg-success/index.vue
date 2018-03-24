<template>
  <div class="page">
    <ui-msg
      type="success"
      title="操作成功"
      text="内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现。"
      confirmText="推荐操作"
      cancelText="辅助操作"
      footerText="Copyright © 2017 WeUI-colorful for mpvue."
      :footerLinks="links"
      @confirm="confirm"
      @cancel="cancel"
      />
  </div>
</template>

<script>
import uiMsg from '../../../components/msg'

export default {
  components: {
    uiMsg,
  },

  data () {
    return {
      links: [
        {
          text: '底部链接',
        },
      ],
    }
  },

  methods: {
    confirm () {
      wx.showToast({
        title: '推荐操作',
        icon: 'none',
      })
    },

    cancel () {
      wx.showToast({
        title: '辅助操作',
        icon: 'none',
      })
    },
  },
}
</script>

<style>
page {
  background: #fff;
}
</style>
