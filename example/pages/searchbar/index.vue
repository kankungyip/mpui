<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">SearchBar</div>
      <div class="page__desc">搜索栏</div>
    </div>

    <div class="page__bd">
      <ui-searchbar
        @results="realtimeResults"
        @resultclick="resultClick"
        @confirm="confirm"
        />
    </div>

  </div>
</template>

<script>
import uiSearchbar from '../../../components/searchbar'

const RESULTS = [
  { label: 'abc', value: 'abc' },
  { label: 'abcd', value: 'abcd' },
  { label: 'abdef', value: 'abdef' },
  { label: 'abefg', value: 'abefg' },
]

export default {
  components: {
    uiSearchbar,
  },

  methods: {
    confirm (value) {
      console.log(`提交 ${value}`)
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
      console.log(`点击 ${result.label}`)
    },
  },
}
</script>

<style>
</style>
