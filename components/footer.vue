<template>
  <div
    :class="{
      'weui-footer': true,
      'weui-footer_fixed-bottom': fixedBottom
    }"
    >
    <div v-if="links" class="weui-footer__links">
      <a
        v-for="(link, index) in links"
        class="weui-footer__link"
        :href="link.url"
        :key="index"
        >
        {{link.text}}
      </a>
    </div>
    <div class="weui-footer__text">{{text}}</div>
  </div>
</template>

<script>
export default {
  props: {
    text:           { type: String,     default: '' },
    links:          { type: Array,      default: [] },
    fixedBottom:    { type: Boolean,    default: false },
  },
}
</script>

<style lang="less">
@import "../theme/widget/weui-footer/weui-footer";
</style>
