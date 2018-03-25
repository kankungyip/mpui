<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">Grid</div>
      <div class="page__desc">九宫格</div>
    </div>

    <div class="page__bd">
      <ui-grid :grids="grids" />
    </div>

  </div>
</template>

<script>
import uiGrid from '../../../components/grid'

export default {
  components: {
    uiGrid,
  },

  data () {
    return {
      grids: [
        {
          icon: '/static/images/icon_tabbar.png',
          label: 'Grid',
        },
        {
          icon: '/static/images/icon_tabbar.png',
          label: 'Grid',
        },
        {
          icon: '/static/images/icon_tabbar.png',
          label: 'Grid',
        },
        {
          icon: '/static/images/icon_tabbar.png',
          label: 'Grid',
        },
        {
          icon: '/static/images/icon_tabbar.png',
          label: 'Grid',
        },
        {
          icon: '/static/images/icon_tabbar.png',
          label: 'Grid',
        },
        {
          icon: '/static/images/icon_tabbar.png',
          label: 'Grid',
        },
        {
          icon: '/static/images/icon_tabbar.png',
          label: 'Grid',
        },
        {
          icon: '/static/images/icon_tabbar.png',
          label: 'Grid',
        },
      ],
    }
  },
}
</script>

<style>
</style>
