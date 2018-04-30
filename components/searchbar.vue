<template>
  <div class="searchbar-box" :class="{ 'searchbar-fixed-top': fixedTop }">

    <div v-if="focus && results.length > 0" class="weui-cells weui-searchbar-result-cells">
      <ui-cell
        v-for="(item, index) in results"
        show-active
        :key="index"
        :title="item.label"
        @click="resultClick(item)"
        />
    </div>

    <div class="weui-search-bar" :style="styled">
      <div class="weui-search-bar__form">
        <div class="weui-search-bar__box">
          <icon class="weui-icon-search_in-box" type="search" size="14"></icon>
          <input
            type="text"
            class="weui-search-bar__input"
            confirm-type="search"
            :placeholder="defaultValue || placeholder"
            :value="value"
            :focus="focus"
            @input="typing"
            @confirm="search"
            />
          <div v-if="value.length > 0" class="weui-icon-clear" @click="clear">
            <icon type="clear" size="14"></icon>
          </div>
        </div>
        <label class="weui-search-bar__label" :hidden="focus" @click="show">
          <icon class="weui-icon-search" type="search" size="14"></icon>
          <div class="weui-search-bar__text" :class="{ 'primary-text': defaultValue }">
            {{defaultValue || value || placeholder}}
          </div>
        </label>
      </div>
      <div class="weui-search-bar__cancel-btn" :hidden="!focus" @click="cancel">取消</div>
    </div>

  </div>
</template>

<script>
import { string as toStyle } from 'to-style'
import uiCell from './cell'

export default {
  components: {
    uiCell,
  },

  props: {
    defaultValue:   { type: String,     default: '' },
    placeholder:    { type: String,     default: '搜索' },
    fixedTop:       { type: Boolean,    default: false },
    // fixed: style
    styles:         { type: Object, default: null },
  },

  data () {
    return {
      focus: false,
      value: '',
      results: [],
    }
  },

  computed: {
    styled () {
      return this.styles ? toStyle(this.styles) : ''
    },
  },

  methods: {
    typing (evt) {
      const value = evt.mp.detail.value
      this.value = value
      this.$emit('results', value, (results = []) => this.results = results)
    },

    clear () {
      this.value = ''
      this.$emit('results', '', (results = []) => this.results = results)
    },

    show () {
      this.focus = true
    },

    cancel () {
      this.focus = false
    },

    search () {
      this.focus = false
      this.$emit('confirm', this.value || this.defaultValue)
    },

    resultClick (result) {
      this.focus = false
      this.value = result.label
      this.results = [].concat(result)
      this.$emit('resultclick', result)
      this.$emit('confirm', result.value)
    }
  },

  onUnload () {
    // 重置初始数据
    Object.assign(this.$data, this.$options.data())
  },
}
</script>

<style lang="less" scoped>
@import "../theme/base/fn";
@import "../theme/widget/weui-searchbar/weui-searchbar";

.weui-searchbar-result-cells {
  position: absolute;
  top: @weuiSearchBarHeight + 16px;
  font-size: 14px;
  width: 100%;
  margin-top: 0;
  padding-top: 0;

  &:before {
    display: none;
  }
}

.searchbar-box {
  position: relative;
}

.searchbar-fixed-top {
  position: fixed;
  top: 0;
  width: 100%;
}

.primary-text {
  color: @weuiColorPrimary;
}
</style>
