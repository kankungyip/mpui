<template>
  <div class="weui-grids" :class="{ border }">
    <div
      v-for="(item, index) in items"
      class="weui-grid"
      hover-class="weui-grid_active"
      :class="{ border }"
      :style="styled"
      :key="index"
      @click="click(index, item, $event)"
      >
      <img
        v-if="item.image"
        class="weui-grid__icon"
        mode="aspectFill"
        :style="iconStyled"
        :src="item.image"
        />
      <div v-else-if="item.icon" class="weui-grid__icon" :style="iconStyled">
        <ui-icon :size="iconSize" :type="item.icon" />
      </div>
      <div v-if="item.label" class="weui-grid__label">{{item.label}}</div>
    </div>
  </div>
</template>

<script>
import uiIcon from './icon'

export default {
  components: {
    uiIcon,
  },

  props: {
    items:        { type: Array,    default: [] },
    column:       { type: Number,   default: 3 },
    border:       { type: Boolean,  default: false },
    iconSize:     { type: Number,   default: 28 },
  },

  computed: {
    styled () {
      return `width: ${100 / this.column}%`
    },

    iconStyled () {
      return `width: ${this.iconSize}px; height: ${this.iconSize}px`
    },
  },

  methods: {
    click (index, item, evt) {
      if (item.url) {
        wx.navigateTo({ url: item.url })
      }
      const event = evt.mp
      event.$mp = evt
      this.$emit('click', index, item.value, event)
    },
  },
}
</script>

<style lang="less" scoped>
@import "../theme/widget/weui-grid/weui-grid";

.weui-grids,
.weui-grid {
  border-color: transparent;
}

.border {
  border-color: @weuiGridBorderColor !important;
}
</style>
