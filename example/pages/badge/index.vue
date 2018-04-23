<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">Badge</div>
      <div class="page__desc">徽章</div>
    </div>

    <div class="page__bd">
      <div class="weui-cells__title">新消息提示跟摘要信息后，统一在列表右侧</div>
      <div class="weui-cells weui-cells_after-title">
        <ui-cell title="单行列表" extra="详细信息" badge-position="extra" show-access />
      </div>

      <div class="weui-cells__title">未读数红点跟在主题信息后，统一在列表左侧</div>
      <div class="weui-cells weui-cells_after-title">
        <ui-cell
          title="联系人名称"
          subtitle="摘要信息"
          image="/static/images/pic_160.png"
          image-width="50"
          image-height="50"
          badge-position="image"
          badge-value="8"
          show-access
          />
        <ui-cell
          title="单行列表"
          badge-position="title"
          badge-value="8"
          show-access
          />
        <ui-cell
          title="单行列表"
          extra="详细信息"
          badge-position="title"
          badge-value="8"
          show-access
          />
        <ui-cell
          title="单行列表"
          badge-position="title"
          badge-value="NEW"
          show-access
          />
      </div>

      <div class="page__bd_spacing weui-flex margin-top">
        <div class="weui-flex__item center">
          <div class="mpui-badge-box">
            <img src="/static/images/pic_160.png" style="width:50px;height:50px" />
            <ui-badge value="8" />
          </div>
        </div>
        <div class="weui-flex__item center">
          <div class="mpui-badge-box">
            <img src="/static/images/pic_160.png" style="width:50px;height:50px" />
            <ui-badge value="1000" />
          </div>
        </div>
        <div class="weui-flex__item center">
          <div class="mpui-badge-box">
            <img src="/static/images/pic_160.png" style="width:50px;height:50px" />
            <ui-badge show-dot />
          </div>
        </div>
        <div class="weui-flex__item center">
          <div class="mpui-badge-box">
            <img src="/static/images/pic_160.png" style="width:50px;height:50px" />
            <ui-badge value="NEW" />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import uiBadge from '../../../components/badge'
import uiCell from '../../../components/cell'

export default {
  components: {
    uiBadge,
    uiCell,
  },
}
</script>

<style>
.center {
  text-align: center;
}

.margin-top {
  margin-top: 30px;
}
</style>
