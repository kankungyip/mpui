<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">SearchBar</div>
      <div class="page__desc">搜索栏</div>
    </div>

    <div class="page__bd">
      <ui-searchbar
        @realtime-results="realtimeResults"
        @result-click="resultClick"
        @confirm="confirm"
        />
    </div>

  </div>
</template>

<script>
import uiSearchbar from '../../../components/searchbar'

const RESULTS = [
  { label: 'abc' },
  { label: 'abcd' },
  { label: 'abdef' },
  { label: 'abefg' },
]

export default {
  components: {
    uiSearchbar,
  },

  methods: {
    confirm (value) {
      wx.showToast({
        title: value,
        icon: 'none',
      })
    },

    realtimeResults (value, resolve) {
      let results
      if (value) {
        results = RESULTS.filter((item) => {
          const regex = new RegExp(`^${value}`, 'i')
          return regex.test(item.label)
        })
      }
      resolve(results)
    },

    resultClick (result) {
      wx.showToast({
        title: result.label,
        icon: 'none',
      })
    },
  },
}
</script>

<style>
</style>
