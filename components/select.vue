<template>
  <div
    class="weui-cell"
    :class="'weui-cell_' + (inputMode ? 'input' : 'select')"
    >
    <div
      v-if="label"
      class="weui-cell__hd"
      :class="{ 'weui-cell__hd_in-select-after': !inputMode }"
      >
      <div class="weui-label">{{label}}</div>
    </div>
    <div class="weui-cell__bd">
      <picker
        :mode="type"
        :value="selectValue"
        :disabled="disabled"
        :range="range"
        :range-key="rangeKey"
        :start="start"
        :end="end"
        :fields="fields"
        :custom-item="customItem"
        @change="change"
        @columnchange="columnChange"
        @cancel="cancel"
        >
        <div
          :class="{
            'weui-input': inputMode,
            'weui-select': !inputMode,
            'weui-select_in-select-after': !inputMode && label,
          }"
          >
          {{display}}
        </div>
      </picker>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type:         { type: String,     default: 'selector' },
    label:        { type: String,     default: '' },
    value:        { type: [Number, String, Array], default: 0 },
    displayText:  { type: String,     default: '' },
    disabled:     { type: Boolean,    default: false },
    separator:    { type: String,     default: '，' },
    // selector, multiSelector
    range:        { type: Array,      default: [] },
    rangeKey:     { type: String,     default: '' },
    // time, date
    start:        { type: String,     default: '' },
    end:          { type: String,     default: '' },
    // date
    fields:       { type: String,     default: 'day' },
    // region
    customItem:   { type: String,     default: '' },
  },

  data () {
    return {
      selectValue: 0,
    }
  },

  computed: {
    inputMode () {
      return this.type === 'time' || this.type === 'date'
    },

    display () {
      if (this.displayText) {
        return this.displayText
      }

      switch (this.type) {
        case 'time':
        case 'date':
          return this.selectValue
        case 'region':
          return this.selectValue.join(this.separator)
        case 'multiSelector':
          return this.range
            .map((item, index) => item[this.selectValue[index]])
            .join(this.separator)
        default:
          return this.range[this.selectValue]
      }
    },
  },

  methods: {
    change (evt) {
      const event = evt.mp
      const value = event.detail.value
      event.$mp = evt
      this.selectValue = value
      this.$emit('update:value', value)
      this.$emit('change', value, event)
    },

    columnChange (evt) {
      const event = evt.mp
      const { column, value } = event.detail
      event.$mp = evt
      this.$emit('columnchange', column, value, event)
    },

    cancel (evt) {
      const event = evt.mp
      event.$mp = evt
      this.$emit('cancel', event)
    },
  },

  created () {
    this.selectValue = this.value
  }
}
</script>

<style lang="less" scoped>
@import "../theme/base/fn";
@import "../theme/widget/weui-cell/weui-cell";
@import "../theme/widget/weui-cell/weui-form/weui-form_common";
@import "../theme/widget/weui-cell/weui-form/weui-select";

.weui-select {
  overflow: hidden;
  text-overflow: ellipsis;
  border-right: 0;
}
</style>
