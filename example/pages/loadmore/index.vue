<template>
  <div class="page">

    <div class="page__hd">
        <div class="page__title">Loadmore</div>
        <div class="page__desc">加载更多</div>
    </div>

    <div class="page__bd">
      <ui-loadmore loading />
      <ui-loadmore text="暂无数据" />
      <ui-loadmore show-dot />
    </div>

  </div>
</template>

<script>
import uiLoadmore from '../../../components/loadmore'

export default {
  components: {
    uiLoadmore,
  },
}
</script>

<style>
page {
  background-color: #fff;
}
</style>
