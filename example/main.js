import Vue from 'vue'
import App from '@/app'

Vue.config.productionTip = false

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#f8f8f8',
      navigationBarTitleText: 'MpUI 组件库演示',
      navigationBarTextStyle: 'black',
    },
  },
}
