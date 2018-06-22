<template>
  <div class="price" :style="styled">
    <div
      v-if="symbol"
      class="symbol"
      :class="{
        'no-strong': strong && symbolStyle,
        'symbol-style': symbolStyle,
        super: symbolStyle === 'sup',
        del: status === 'del',
      }"
      >
      {{symbol}}
    </div>
    <div class="numbers" :class="{ del: status === 'del' }">
      <span
        class="integer"
        :class="{ 'no-strong': size < decimalSizeVaule }"
        >{{integerValue}}</span>
      <span
        v-if="showDecimal"
        class="decimal"
        :class="{ 'no-strong': decimalSizeVaule < size }"
        :style="'font-size:' + decimalSizeVaule + 'px'"
        >{{decimalValue}}</span>
    </div>
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
    symbolStyle:  { type: String,   default: null },
    decimal:      { type: [Number, String], default: 2 },
    decimalSize:  { type: [Number, String], default: 0 },
  },

  computed: {
    styled () {
      return toStyle({
        fontSize: this.size,
        color: this.color,
        fontWeight: this.strong ? 800 : 400,
      })
    },

    showDecimal () {
      return this.decimal === 'auto'
        ? +this.decimalValue !== 0
        : (this.decimal !== 'none' && +this.decimal !== 0)
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

    decimalSizeVaule () {
      return this.decimalSize === 'mini' ? (this.size * 0.7) : (this.decimalSize || this.size)
    }
  },
}
</script>

<style lang="less" scoped>
.no-strong {
  font-weight: 400;
}

.del {
  text-decoration: line-through;
}

.price,
.symbol,
.numbers {
  display: inline-block;
  line-height: 1;
}

.symbol {
  &.symbol-style {
    font-size: 48%;
  }

  &.super {
    vertical-align: super;
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

.price + .price {
  margin-left: 10px;
}
</style>
