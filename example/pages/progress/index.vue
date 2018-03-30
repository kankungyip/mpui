<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">Progress</div>
      <div class="page__desc">进度条</div>
    </div>

    <div class="page__bd page__bd_spacing">
      <ui-progress percent="0" />
      <div class="blank-line" />
      <ui-progress show-info percent="50" />
      <div class="blank-line" />
      <ui-progress active show-info percent="80" active-color="#10aeff" />
      <div class="blank-line" />
      <ui-progress show-cancel :percent="progress" @cancel="cancel" />
      <div class="blank-line" />
      <ui-button text="进度开始" :disabled="disabled" @click="start" />
    </div>

  </div>
</template>

<script>
import uiProgress from '../../../components/progress'

export default {
  components: {
    uiProgress,
  },

  data () {
    return {
      progress: 0,
      disabled: false,
    }
  },

  methods: {
    start () {
      this.progress = 0
      this.disabled = true
      const start = () => {
        this.progress++
        this.disabled = this.progress < 100
        if (this.disabled) {
          this.timer = setTimeout(start, 20)
        }
      }
      start()
    },

    cancel () {
      this.disabled = false
      clearTimeout(this.timer)
      console.log('点击取消进度')
    },
  },
}
</script>

<style>
.blank-line {
  margin-bottom: 24px;
}
</style>
