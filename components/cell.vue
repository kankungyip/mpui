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
      <div v-if="image && type !== 'link'" class="weui-cell__hd">
        <div
          class="image-box"
          :class="{ 'weui-badge-box': (badgePosition === 'image' && badgeText) || badgeShowDot }"
          >
          <img class="image" :src="image" :style="imageStyled" />
          <ui-badge
            v-if="(badgePosition === 'image' && badgeText) || badgeShowDot"
            :value="badgeText"
            :max="badgeMax"
            :dot="badgeShowDot"
            />
        </div>
      </div>
      <div class="weui-cell__bd" :class="{ 'weui-cell_primary': image }">
        <div class="title">{{title}}</div>
        <ui-badge
          v-if="badgePosition === 'title' && badgeText"
          :value="badgeText"
          :max="badgeMax"
          :show-dot="badgeShowDot"
          />
      </div>
      <div class="weui-cell__ft" :class="{ 'weui-cell__ft_in-access': showAccess }">
        <div v-if="type !== 'link'" class="extra">{{extra}}</div>
        <ui-badge v-if="badgePosition === 'extra'" show-dot />
      </div>
  </div>
</template>

<script>
import uiBadge from './badge'

export default {
  components: {
    uiBadge,
  },

  props: {
    type:             { type: String,     default: 'default' },
    title:            { type: String,     default: '' },
    extra:            { type: String,     default: '' },
    image:            { type: String,     default: '' },
    imageWidth:       { type: Number,     default: 20 },
    imageHeight:      { type: Number,     default: 20 },
    navigateTo:       { type: String,     default: '' },
    inside:           { type: Boolean,    default: false },
    badgePosition:    { type: String,     default: 'title' },
    badgeValue:       { type: String,     default: '' },
    badgeMax:         { type: Number,     default: 999 },
    badgeShowDot:     { type: Boolean,    default: false },
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
@import "../theme/base/fn";

.image-box {
  margin-right: 5px;

  &.weui-badge-box {
    margin-right: 10px;
  }
}

.image {
  vertical-align: middle;
}

.title,
.extra {
  display: inline-block;
  vertical-align: middle;
}

.inside:before {
  right: @weuiCellGapH;
}
</style>

<style lang="less">
@import "../theme/widget/weui-cell/weui-cell";
@import "../theme/widget/weui-cell/weui-access";
@import "../theme/widget/weui-tips/weui-badge";
</style>
