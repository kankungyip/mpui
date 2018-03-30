<template>
  <div class="weui-grids">
    <div
      v-for="(grid, index) in grids"
      class="weui-grid"
      hover-class="weui-grid_active"
      :style="styled"
      :key="index"
      @click="click(index, $event)"
      >
      <image class="weui-grid__icon" :src="grid.icon" />
      <div class="weui-grid__label">{{grid.label}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    grids:        { type: Array,    default: [] },
    column:       { type: Number,   default: 3 },
    navigateTo:   { type: String,   default: '' },
  },

  computed: {
    styled () {
      return `width: ${100 / this.column}%`
    },
  },

  methods: {
    click (...args) {
      const url = this.navigateTo
      if (url) {
        wx.navigateTo({ url })
      }
      this.$emit('click', ...args)
    },
  },
}
</script>

<style lang="less">
@import "../theme/widget/weui-grid/weui-grid";
</style>
