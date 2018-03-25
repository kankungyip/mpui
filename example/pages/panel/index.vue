<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">Panel (MediaBox)</div>
      <div class="page__desc">面板</div>
    </div>

    <div class="page__bd">
      <div class="weui-panel weui-panel_access">
        <div class="weui-panel__hd">图文组合列表</div>
        <div class="weui-panel__bd">
          <ui-media-box
            title="标题一"
            subtitle="由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
            show-active
            :image="icon60"
            />
          <ui-media-box
            title="标题二"
            subtitle="由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
            show-active
            :image="icon60"
            />
        </div>
        <div class="weui-panel__ft">
          <ui-cell type="link" title="查看更多" show-access />
        </div>
      </div>

      <div class="weui-panel weui-panel_access">
        <div class="weui-panel__hd">文字组合列表</div>
        <div class="weui-panel__bd">
          <ui-media-box
            title="标题一"
            subtitle="由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
            />
          <ui-media-box
            title="标题二"
            subtitle="由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
            />
        </div>
        <div class="weui-panel__ft">
          <ui-cell type="link" title="查看更多" show-access />
        </div>
      </div>

      <div class="weui-panel">
        <div class="weui-panel__hd">小图文组合列表</div>
        <div class="weui-panel__bd">
          <ui-media-box type="list" :list="list"/>
        </div>
      </div>

      <div class="weui-panel">
        <div class="weui-panel__hd">文字列表附来源</div>
        <div class="weui-panel__bd">
          <ui-media-box
            title="标题一"
            subtitle="由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
            :extra="extra"
            />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import uiCell from '../../../components/cell'
import uiMediaBox from '../../../components/media-box'
import base64 from '../../../static/images/base64'

export default {
  components: {
    uiCell,
    uiMediaBox,
  },

  data () {
    return {
      icon60: base64.icon60,
      list: [
        {
          title: '文字标题',
          image: base64.icon20,
        },
        {
          title: '文字标题',
          image: base64.icon20,
        },
      ],
      extra: [
        {
          label: '文字来源',
        },
        {
          label: '时间',
        },
        {
          separate: true,
          label: '其它信息',
          navigateTo: 'navigate-to',
        },
      ],
    }
  },
}
</script>

<style>
</style>
