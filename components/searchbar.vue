<template>
  <div class="searchbar-box" :class="{ 'searchbar-fixed-top': fixedTop }">

    <div v-if="focus && results.length > 0" class="weui-cells searchbar-result">
      <ui-cell
        v-for="(item, index) in results"
        show-active
        :key="index"
        :title="item.label"
        @click="resultClick(item)"
        />
    </div>

    <div class="weui-search-bar">
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
            @blur="blur"
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
import uiCell from './cell'

export default {
  components: {
    uiCell,
  },

  props: {
    defaultValue:   { type: String,     default: '' },
    placeholder:    { type: String,     default: '搜索' },
    fixedTop:       { type: Boolean,    default: false },
  },

  data () {
    return {
      focus: false,
      value: '',
      results: [],
    }
  },

  methods: {
    typing ({ target }) {
      this.value = target.value
      this.$emit('realtime-results', target.value, (results = []) => this.results = results)
    },

    clear () {
      clearTimeout(this.timer)
      this.value = ''
      this.$emit('realtime-results', '', (results = []) => this.results = results)
    },

    show () {
      clearTimeout(this.timer)
      this.focus = true
    },

    blur () {
      this.timer = setTimeout(() => this.focus = false, 150)
    },

    cancel () {
      clearTimeout(this.timer)
      this.focus = false
    },

    search () {
      clearTimeout(this.timer)
      this.focus = false
      this.$emit('confirm', this.value || this.defaultValue)
    },

    resultClick (result) {
      clearTimeout(this.timer)
      this.focus = false
      this.value = result.label
      this.results = [].concat(result)
      this.$emit('resultClick', result)
    }
  },
}
</script>

<style lang="less" scoped>
@import "../theme/base/fn";
@import "../theme/widget/weui-searchbar/weui-searchbar";

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

.searchbar-result {
  position: absolute;
  top: @weuiSearchBarHeight + 16px;
  font-size: 14px;
  width: 100%;
  margin-top: 0;
  padding-top: 0;
}

.searchbar-result:before {
  display: none;
}
</style>
