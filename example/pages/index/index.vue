<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">MpUI</div>
      <div class="page__desc">MpUI (Mini-program's UI for mpvue) 是一套基于 weui-wxss 开发的 mpvue 组件库，增加了一些新的特性和样式。</div>
    </div>

    <div class="page__bd page__bd_spacing">
      <div class="kind-list">
        <div v-for="(item, index) in list" class="kind-list__item" :key="index">

          <div
            class="weui-flex kind-list__item-hd"
            :class="{ 'kind-list__item-hd_show': item.open }"
            @click="kindToggle(item.id)"
            >
            <div class="weui-flex__item">{{item.name}}</div>
            <img class="kind-list__img" :src="'/static/images/icon_nav_' + item.id + '.png'" />
          </div>

          <div
            class="kind-list__item-bd"
            :class="{ 'kind-list__item-bd_show': item.open }"
            >
            <div class="weui-cells" :class="{ 'weui-cells_show': item.open }">
              <ui-cell
                v-for="(page, pageIndex) in item.pages"
                indent
                :title="page"
                :show-access="!/\*$/.test(page)"
                :navigate-to="'/pages/' + page + '/index'"
                :key="pageIndex"
                />
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="page__ft">
      <ui-icon type="github" />
      <div style="font-size:14px">github.com/kankungyip/mpui</div>
    </div>

  </div>
</template>

<script>
import uiCell from '../../../components/cell'
import uiIcon from '../../../components/icon'

export default {
  components: {
    uiCell,
    uiIcon,
  },

  data () {
    return {
      list: [
        {
          id: 'form',
          name: '表单',
          open: false,
          pages: [
            'agree',
            'button',
            'buttonarea*',
            'list*',
            'cell',
            'input',
            'checkboxgroup',
            'radiogroup',
            'select',
            'switch',
            'uploader',
            'counter',
          ],
        },
        {
          id: 'widget',
          name: '基础组件',
          open: false,
          pages: [
            'icons',
            'article',
            'avatar',
            'badge',
            'badgebox*',
            'row*',
            'col*',
            'grid',
            'panel*',
            'mediabox',
            'footer',
            'loadmore',
            'ellipsis',
            'preview',
            'price',
            'progress',
            'tag',
            'timeline*',
            'countdown*',
          ],
        },
        {
          id: 'feedback',
          name: '操作反馈',
          open: false,
          pages: [
            'loadingbar',
            'msg',
            'noticebar*',
            'toptips',
          ],
        },
        {
          id: 'nav',
          name: '导航相关',
          open: false,
          pages: [
            'tabs*',
            'sidenav*',
            'steps',
          ],
        },
        {
          id: 'search',
          name: '搜索相关',
          open: false,
          pages: ['searchbar'],
        },
      ],
    }
  },

  methods: {
    kindToggle (id) {
      const list = this.list
      for (let i = 0, len = list.length; i < len; ++i) {
        list[i].open = list[i].id === id ? !list[i].open : false
      }
      this.list = list
    },
  },
}
</script>

<style lang="less">
.weui-flex{
  align-items: center;
}
.weui-cells{
  margin-top: 0;
  opacity: 0;
  transform: translateY(-50%);
  transition: .3s;
  &:before, &:after{
    display: none;
  }
  &_show{
    opacity: 1;
    transform: translateY(0);
  }
}

.kind-list{}
.kind-list__item{
  margin: 10px 0;
  background-color: #FFFFFF;
  border-radius: 2px;
  overflow: hidden;
  &:first-child{
    margin-top: 0;
  }
}
.kind-list__img{
  width: 30px;
  height: 30px;
}

.kind-list__item-hd{
  padding: 20px;
  transition: opacity .3s;
  &_show{
      opacity: .4;
  }
}
.kind-list__item-bd{
  height: 0;
  overflow: hidden;
  &_show{
    height: auto;
  }
}
</style>
