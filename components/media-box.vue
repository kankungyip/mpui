<template>
  <block>
    <div v-if="type === 'list'" class="weui-media-box weui-media-box_small-appmsg">
      <div class="weui-cells weui-cells_in-small-appmsg">
        <ui-cell
          v-for="(item, index) in list"
          show-access
          :title="item.title"
          :image="item.image"
          :key="index"
          @click="cellClick(index, item.navigateTo, $event)"
          />
      </div>
    </div>

    <div
      v-else
      class="weui-media-box"
      :class="{
        'weui-media-box_appmsg': image,
        'weui-media-box_text': !image,
      }"
      :hover-class="showActive ? 'weui-cell_active' : ''"
      @click="click"
      >
      <div v-if="image" class="weui-media-box__hd weui-media-box__hd_in-appmsg">
        <img class="weui-media-box__thumb" :src="image" />
      </div>
      <div
        class="weui-media-box__bd"
        :class="{
          'weui-media-box__bd_in-appmsg': image,
        }"
        >
        <div
          class="weui-media-box__title"
          :class="{
            'weui-media-box__title_in-text': !image,
          }"
          >
          {{title}}
        </div>
        <div class="weui-media-box__desc">{{subtitle}}</div>
        <div v-if="extra" class="weui-media-box__info">
          <block v-for="(item, index) in extra" :key="index">
            <a
              v-if="item.navigateTo"
              :href="item.navigateTo"
              class="weui-media-box__info__meta link"
              :class="{
                'weui-media-box__info__meta_extra': item.separate,
              }"
              >
              {{item.label}}
            </a>
            <div
              v-else
              class="weui-media-box__info__meta"
              :class="{
                'weui-media-box__info__meta_extra': item.separate,
              }"
              >
              {{item.label}}
            </div>
          </block>
        </div>
      </div>
    </div>

  </block>
</template>

<script>
import uiCell from './cell'

export default {
  components: {
    uiCell,
  },

  props: {
    type:         { type: String,     default: 'default' },
    image:        { type: String,     default: '' },
    title:        { type: String,     default: '' },
    subtitle:     { type: String,     default: '' },
    extra:        { type: Array,      default: null },
    list:         { type: Array,      default: null },
    navigateTo:   { type: String,     default: '' },
    showActive:   { type: Boolean,    default: false },
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

    cellClick (index, url, evt) {
      if (url) {
        wx.navigateTo({ url })
      }
      const event = evt.mp
      event.$mp = evt
      this.$emit('click', index, event)
    },
  },
}
</script>

<style lang="less" scoped>
@import "../theme/base/fn";
@import "../theme/widget/weui-cell/weui-cell";
@import "../theme/widget/weui-media-box/weui-media-box";

.link {
  color: @weuiLinkColorDefault;
}
</style>
