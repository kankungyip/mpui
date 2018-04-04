<template>
  <div
    class="weui-loadmore"
    :class="{
      'weui-loadmore_line': !loading,
      'weui-loadmore_dot': !loading && showDot,
    }">
    <div v-if="loading" class="weui-loading"></div>
    <div
      class="weui-loadmore__tips"
      :class="{
        'weui-loadmore__tips_in-line': !loading,
        'weui-loadmore__tips_in-dot': !loading && showDot,
      }"
      >
      {{loading ? loadingText : (showDot ? '' : text)}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loading:        { type: Boolean,    default: false },
    loadingText:    { type: String,     default: '正在加载' },
    text:           { type: String,     default: '' },
    showDot:        { type: Boolean,    default: false },
  },
}
</script>

<style lang="less" scoped>
@import "../theme/widget/weui-loading/weui-loading";
@import "../theme/widget/weui-tips/weui-loadmore";
</style>
