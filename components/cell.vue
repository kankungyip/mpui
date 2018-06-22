<template>
  <div
    class="weui-cell"
    :class="{
      'weui-cell_link': type === 'link',
      'weui-cell-access': showAccess,
      'indent': indent
    }"
    :style="styled"
    :hover-class="showActive || showAccess ? 'weui-cell_active': ''"
    @click="click"
    >
      <div v-if="image && type !== 'link'" class="weui-cell__hd">
        <div
          class="image-box"
          :class="{ 'mpui-badge-box': (badgePosition === 'image' && badgeText) || badgeShowDot }"
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
        <ui-icon v-if="!image" size="auto" :type="icon" :styles="{ marginRight: 5 }" />
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
import { string as toStyle } from 'to-style'
import uiBadge from './badge'
import uiIcon from './icon'

export default {
  components: {
    uiBadge,
    uiIcon,
  },

  props: {
    type:             { type: String,     default: 'default' },
    title:            { type: String,     default: '' },
    extra:            { type: String,     default: '' },
    icon:             { type: String,     default: '' },
    image:            { type: String,     default: '' },
    imageWidth:       { type: Number,     default: 20 },
    imageHeight:      { type: Number,     default: 20 },
    navigateTo:       { type: String,     default: '' },
    indent:           { type: Boolean,    default: false },
    badgePosition:    { type: String,     default: 'title' },
    badgeValue:       { type: String,     default: '' },
    badgeMax:         { type: Number,     default: 999 },
    badgeShowDot:     { type: Boolean,    default: false },
    showActive:       { type: Boolean,    default: false },
    showAccess:       { type: Boolean,    default: false },
    // fixed: style
    styles:           { type: Object,     default: null },
  },

  computed: {
    styled () {
      return this.styles ? toStyle(this.styles) : ''
    },

    imageStyled () {
      return toStyle({
        width: this.imageWidth,
        height: this.imageHeight,
      })
    },

    badgeText () {
      if (!this.badgeValue) {
        return ''
      }
      return +this.badgeValue > this.badgeMax ? `${this.badgeMax}+` : this.badgeValue
    },
  },

  methods: {
    click (evt) {
      if (this.navigateTo) {
        wx.navigateTo({ url: this.navigateTo })
      }
      const event = evt.mp
      event.$mp = evt
      this.$emit('click', event)
    },
  },
}
</script>

<style lang="less" scoped>
@import "../theme/base/fn";
@import "../theme/widget/weui-cell/weui-cell";
@import "../theme/widget/weui-cell/weui-access";
@import "../theme/widget/weui-tips/weui-badge";

.image-box {
  margin-right: 5px;

  &.mpui-badge-box {
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

.indent:before {
  right: @weuiCellGapH;
}
</style>
