<template>
  <div
    class="weui-cell"
    :class="{
      'weui-cell_link': type === 'link',
      'weui-cell-access': showAccess,
      'inside': inside
    }"
    :hover-class="showActive || showAccess ? 'weui-cell_active': ''"
    @click="click"
    >
      <div
        v-if="image && type !== 'link'"
        class="weui-cell__hd"
        :class="{ 'weui-badge-box': (badgePosition === 'image' && badgeText) || badgePosition === 'image-dot' }"
        >
        <img class="image" :src="image" :style="imageStyled" />
        <div
          v-if="(badgePosition === 'image' && badgeText) || badgePosition === 'image-dot'"
          class="weui-badge image-badge"
          :class="{ 'weui-badge_dot': badgePosition === 'image-dot' }"
          >
          {{badgeText}}
          </div>
      </div>
      <div class="weui-cell__bd" :class="{ 'weui-cell_primary': image }">
        <div class="vertical-align-middle">{{title}}</div>
        <div v-if="badgePosition === 'title' && badgeText" class="weui-badge">{{badgeText}}</div>
        <div v-if="subtitle && type !== 'link'" class="subtitle">{{subtitle}}</div>
      </div>
      <div class="weui-cell__ft" :class="{ 'weui-cell__ft_in-access': showAccess }">
        <div v-if="type !== 'link'" class="vertical-align-middle">{{extra}}</div>
        <div v-if="badgePosition === 'extra'" class="weui-badge weui-badge_dot" />
      </div>
  </div>
</template>

<script>
export default {
  props: {
    type:             { type: String,     default: 'default' },
    title:            { type: String,     default: '' },
    subtitle:         { type: String,     default: '' },
    extra:            { type: String,     default: '' },
    image:            { type: String,     default: '' },
    imageWidth:       { type: Number,     default: 20 },
    imageHeight:      { type: Number,     default: 20 },
    navigateTo:       { type: String,     default: '' },
    inside:           { type: Boolean,    default: false },
    badgePosition:    { type: String,     default: 'title' },
    badgeValue:       { type: String,     default: '' },
    badgeMax:         { type: Number,     default: 99 },
    showActive:       { type: Boolean,    default: false },
    showAccess:       { type: Boolean,    default: false },
  },

  computed: {
    imageStyled () {
      const styles = []
      styles.push(`width: ${this.imageWidth}px`)
      styles.push(`height: ${this.imageHeight}px`)
      return styles.join(';')
    },

    badgeText () {
      if (!this.badgeValue) {
        return ''
      }
      return +this.badgeValue > this.badgeMax ? `${this.badgeMax}+` : this.badgeValue
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
@import "../theme/widget/weui-tips/weui-badge";

.weui-badge-box {
  position: relative;
  display: inline-block;
  margin-right: 10px;
}

.weui-badge {
  margin-left: 5px;
  vertical-align: middle;

  &.image-badge {
    position: absolute;
    top: -.6em;
    right: -.4em;

    &.weui-badge_dot {
      top: -.4em;
    }
  }
}

.weui-badge_dot {
  margin-right: 5px;
}

.subtitle {
  font-size: 13px;
  color: #888888;
}

.image {
  margin-right: 5px;
  vertical-align: middle;
}

.vertical-align-middle {
  display: inline-block;
  vertical-align: middle;
}

.inside:before {
  right: 15px;
}
</style>
