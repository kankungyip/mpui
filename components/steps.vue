<template>
  <div class="steps">
    <block v-for="(step, index) in items" :key="index">
      <div
        v-if="index > 0"
        class="line"
        :style="(finish || current >= index) ? (step.icon ? iconActiveStyled : dotActiveStyled) : (step.icon ? iconStyled :
dotStyled)"
        />

      <div class="step">
        <ui-icon
          v-if="step.icon"
          :type="step.icon"
          :size="iconSize"
          :color="(finish || current >= index) ? activeColor : color"
          :styles="{
            verticalAlign: 'unset',
            display: 'block',
          }"
          />
        <div
          v-else
          class="dot"
          :style="'background:' + ((finish || current >= index) ? activeColor : color)"
          />
        <div v-if="step.label" class="label">{{step.label}}</div>
      </div>
    </block>
  </div>
</template>

<script>
import { string as toStyle } from 'to-style'
import uiIcon from './icon'

export default {
  components: {
    uiIcon,
  },

  props: {
    current:      { type: Number,   default: 0 },
    finish:       { type: Boolean,  default: false },
    items:        { type: Array,    default: [] },
    color:        { type: String,   default: '#e5e5e5' },
    activeColor:  { type: String,   default: '#10aeff' },
    iconSize:     { type: Number,   default: 30 },
    // fixed: style
    styles:       { type: Object,   default: null },
  },

  computed: {
    styled () {
      return toStyle({
        ...this.styles,
      })
    },

    iconStyled () {
      return toStyle({
        marginTop: this.iconSize / 2,
        borderColor: this.color,
      })
    },

    dotStyled () {
      return toStyle({
        marginTop: 5,
        borderColor: this.color,
      })
    },

    iconActiveStyled () {
      return toStyle({
        marginTop: this.iconSize / 2,
        borderColor: this.activeColor,
      })
    },

    dotActiveStyled () {
      return toStyle({
        marginTop: 5,
        borderColor: this.activeColor,
      })
    },
  },
}
</script>

<style lang="less" scoped>
@import "../theme/base/fn";

.steps {
  display: flex;

  .line {
    flex: 1;
    height: 0;
    border-top: 1px solid transparent;
  }

  .step {
    text-align: center;
    padding: 0 5px;

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin: 0 auto;
    }

    .icon {
      line-height: 1;
      vertical-align: unset;
      display: block;
    }

    .label {
      font-size: @weuiFontSizeMini;
      padding: 4px 0 0;
    }
  }
}
</style>
