<template>
  <div
    class="price"
    :class="{
      strong,
      'delete-status': status === 'del',
    }"
    :style="'color:' + color"
    >
    <span
      class="symbol"
      :class="{
        sub: symbolStyle === 'sub',
        sup: symbolStyle === 'sup',
      }"
      :style="symbolStyled"
      >{{symbol}}</span>
    <span
      class="integer"
      :class="{ 'no-strong': size < decimalSize }"
      :style="'font-size:' + size + 'px'"
      >{{integerValue}}</span>
    <span
      v-if="showDecimal"
      class="decimal"
      :class="{ 'no-strong': decimalSize && decimalSize < size }"
      :style="'font-size:' + (decimalSize || size) + 'px'"
      >{{decimalValue}}</span>
  </div>
</template>

<script>
import { string as toStyle } from 'to-style'

export default {
  props: {
    value:        { type: Number,   default: 0 },
    size:         { type: Number,   default: 20 },
    strong:       { type: Boolean,  default: false },
    color:        { type: String,   default: '#000' },
    status:       { type: String,   default: 'default' },
    symbol:       { type: String,   default: '¥' },
    symbolStyle:  { type: String,   default: 'default' },
    decimal:      { type: [Number, String], default: 2 },
    decimalSize:  { type: Number,   default: 0 },
  },

  computed: {
    symbolStyled () {
      const fontSize = /^su[bp]$/.test(this.symbolStyle) ? this.size * 0.6 : this.size
      return toStyle({ fontSize })
    },

    showDecimal () {
      return this.decimal !== 'none' && +this.decimal !== 0
    },

    integerValue () {
      return Math.floor(this.value)
    },

    decimalValue () {
      const value = isNaN(+this.value) ? 0 : +this.value
      const decimal = value.toFixed(2).split('.')[1] || '00'
      if (this.decimal === 'auto') {
        const zeroIndex = decimal.lastIndexOf('0')
        return decimal.slice(0, zeroIndex < 0 ? 2 : zeroIndex)
      }
      return decimal.substr(0, +this.decimal === 1 ? 1 : 2)
    },
  },
}
</script>

<style lang="less" scoped>
.strong {
  font-weight: 800;
}

.no-strong {
  font-weight: 400;
}

.price {
  &.delete-status {
    text-decoration: line-through;
  }
}

.symbol {
  display: inline;

  &.sup {
    vertical-align: super;
  }

  &.sub {
    vertical-align: sub;
  }
}

.integer {
  display: inline;
}

.decimal {
  display: inline;

  &:before {
    content: '.'
  }
}
</style>
