<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">Picker</div>
      <div class="page__desc">选择器，这里使用小程序原生的picker。</div>
    </div>

    <div class="page__bd">
      <div class="weui-btn-area">
        <picker @change="pickerChange" :value="index" :range="array">
          <ui-button text="单列选择器" />
        </picker>
        <picker mode="time" :value="time" @change="timeChange">
          <ui-button text="时间选择器" />
        </picker>
        <picker mode="date" start="2010-01-01" end="2020-12-31" :value="date" @change="dateChange">
          <ui-button text="日期选择器" />
        </picker>
      </div>
    </div>

  </div>
</template>

<script>
import uiButton from '../../../components/button'

export default {
  components: {
    uiButton,
  },

  data () {
    return {
      array: ['美国', '中国', '巴西', '日本'],
      index: 0,
      date: '2018-01-25',
      time: '02:01',
    }
  },

  methods: {
    pickerChange ({ mp }) {
      wx.showToast({
        title: `picker发送选择改变，携带值为${mp.detail.value}`,
        icon: 'none',
      })
      this.index = mp.detail.value
    },

    dateChange ({ mp }) {
      wx.showToast({
        title: `picker发送选择改变，携带值为${mp.detail.value}`,
        icon: 'none',
      })
      this.date = mp.detail.value
    },

    timeChange ({ mp }) {
      wx.showToast({
        title: `picker发送选择改变，携带值为${mp.detail.value}`,
        icon: 'none',
      })
      this.time = mp.detail.value
    },
  },
}
</script>

<style>
page {
  background-color: #fff;
}
</style>
