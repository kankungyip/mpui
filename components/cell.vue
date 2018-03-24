<template>
  <div
    :class="{
      'weui-cell': true,
      'weui-cell_link': link,
      'weui-access': access,
      'inline': inline
    }"
    :hover-class="access ? 'weui-cell_active': ''"
    @click="click"
    >
      <div v-if="image" class="weui-cell__hd">
        <img class="image" :src="image" />
      </div>
      <div class="weui-cell__bd">{{title}}</div>
      <div
        v-if="!link"
        :class="{
          'weui-cell__ft': true,
          'weui-cell__ft_in-access': access
        }"
        >{{extra}}</div>
  </div>
</template>

<script>
export default {
  props: {
    type:         { type: String,     default: 'default' },
    title:        { type: String,     default: '' },
    // subtitle:     { type: String,    default: '' },
    extra:        { type: String,     default: '' },
    image:        { type: String,     default: '' },
    navigateTo:   { type: String,     default: '' },
    inline:       { type: Boolean,    default: false },
  },

  computed: {
    link () {
      return this.type === 'link'
    },

    access () {
      return this.type === 'access'
    },
  },

  methods: {
    click (...args) {
      const url = this.navigateTo
      if (url) {
        wx.navigateTo({ url })
      }
      this.$emit('click', ...args)
    },
  },
}
</script>

<style lang="less" scoped>
@import "../theme/widget/weui-cell/weui-cell";
@import "../theme/widget/weui-cell/weui-access";

.image {
  margin-right: 5px;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}

.inline:before {
  right: 15px;
}
</style>
