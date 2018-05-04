<template>
  <div
    :class="{
      'weui-cell': incell,
      'counter-cell': incell,
    }"
    >
    <div v-if="incell && label" class="weui-cell__bd">{{label}}</div>
    <div :class="{ 'weui-cell__ft': incell }">
      <div class="counter">
        <div class="warp">
          <div
            class="item button"
            :class="{ disabled: inputValue === min }"
            :hover-class="inputValue === min ? 'none' : 'item-hover'"
            @click="change(-1)"
            >−</div>
          <div class="item input">{{inputValue}}</div>
          <div
            class="item button"
            :class="{ disabled: inputValue === max }"
            :hover-class="inputValue === max ? 'none' : 'item-hover'"
            @click="change(1)">+</div>
        </div>
      </div>
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
    value:    { type: Number,   default: 1 },
    min:      { type: Number,   default: 1 },
    max:      { type: Number,   default: 999 },
    step:     { type: Number,   default: 1 },
    label:    { type: String,   default: '' },
    incell:   { type: Boolean,  default: false }
  },

  data () {
    return {
      inputValue: 1,
    }
  },

  methods: {
    change (step) {
      let value = this.inputValue + (this.step * step)
      if (value < this.min) {
        value = this.min
      }
      if (value > this.max) {
        value = this.max
      }
      if (value != this.inputValue) {
        this.inputValue = value
        this.$emit('update:value', value)
        this.$emit('change', value)
      }
    },
  },

  mounted () {
    this.inputValue = this.value
  },
}
</script>

<style lang="less" scoped>
@import "../theme/base/fn";
@import "../theme/widget/weui-cell/weui-cell";

@counterHeight: @weuiFontSizeSmall + 8;

.counter {
  border-radius: 4px;
  border: 1px solid @weuiLineColorLight;
  overflow: hidden;
  font-size: @weuiFontSizeSmall;
  width: 84px;
  height: @counterHeight;
  line-height: @counterHeight;

  .warp {
    display: flex;

    .item {
      text-align: center;
      padding: 0 6px;
      background: @weuiBgColorDefault;
    }

    .item-hover {
      background: @weuiBgColorActive;
    }

    .button {
      color: #666;
      width: 14px;

      &.disabled {
        color: #e3e3e3;
        background: #f7f7f9;
      }
    }

    .input {
      flex: 1;
      color: #000;
      background: #fff;
      padding: 0 2px;

      input {
        padding: 0;
        margin: 0;
        height: @counterHeight;
        min-height: @counterHeight;
        line-height: @counterHeight;
      }
    }
  }
}

.counter-cell {
  padding-top: (@weuiCellHeight - @counterHeight) / 2;
  padding-bottom: (@weuiCellHeight - @counterHeight) / 2;
}
</style>
