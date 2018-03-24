<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">Preview</div>
      <div class="page__desc">表单预览</div>
    </div>

    <div class="page__bd">
      <ui-preview
        v-for="(item, index) in items"
        :key="index"
        :title="item.title"
        :extra="item.extra"
        :detail="item.detail"
        :confirm-text="item.confirmText"
        :cancel-text="item.cancelText"
        @confirm="confirm"
        @cancel="confirm"
        />
    </div>

  </div>
</template>

<script>
import uiPreview from '../../../components/preview'

export default {
  components: {
    uiPreview,
  },

  data () {
    return {
      items: [
        {
          title: '付款金额',
          value: '¥2400.00',
          detail: [
            {
              label: '商品',
              value: '电动打蛋机',
            },
            {
              label: '标题标题',
              value: '名字名字名字',
            },
            {
              label: '标题标题',
              value: '很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字',
            },
          ],
          confirmText: '操作',
        },
        {
          title: '付款金额',
          value: '¥2400.00',
          detail: [
            {
              label: '商品',
              value: '电动打蛋机',
            },
            {
              label: '标题标题',
              value: '名字名字名字',
            },
            {
              label: '标题标题',
              value: '很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字',
            },
          ],
          confirmText: '操作',
          cancelText: '辅助操作',
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
</style>
