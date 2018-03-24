<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">Icons</div>
      <div class="page__desc">图标</div>
    </div>

    <div class="page__bd">
      <div class="icon-box">
        <ui-icon type="success" size="93" margin-right="13" />
        <div class="icon-box__ctn">
          <div class="icon-box__title">成功</div>
          <div class="icon-box__desc">用于表示操作顺利达成</div>
        </div>
      </div>
      <div class="icon-box">
        <ui-icon type="info" size="93" margin-right="13" />
        <div class="icon-box__ctn">
          <div class="icon-box__title">提示</div>
          <div class="icon-box__desc">用于表示信息提示；也常用于缺乏条件的操作拦截，提示用户所需信息</div>
        </div>
      </div>
      <div class="icon-box">
        <ui-icon type="warn" size="93" color="#ffbe00" margin-right="13" />
        <div class="icon-box__ctn">
          <div class="icon-box__title">普通警告</div>
          <div class="icon-box__desc">用于表示操作后将引起一定后果的情况</div>
        </div>
      </div>
      <div class="icon-box">
        <ui-icon type="warn" size="93" color="#f76260" margin-right="13" />
        <div class="icon-box__ctn">
          <div class="icon-box__title">强烈警告</div>
          <div class="icon-box__desc">用于表示操作后将引起严重的不可挽回的后果的情况</div>
        </div>
      </div>
      <div class="icon-box">
        <ui-icon type="waiting" size="93" margin-right="13" />
        <div class="icon-box__ctn">
          <div class="icon-box__title">等待</div>
          <div class="icon-box__desc">用于表示等待</div>
        </div>
      </div>
      <div class="icon_sp_area">
        <ui-icon type="success" size="23" margin-right="13" />
        <ui-icon type="success_no_circle" size="23" margin-right="13" />
        <ui-icon type="circle" size="23" margin-right="13" />
        <ui-icon type="warn" size="23" margin-right="13" />
        <ui-icon type="download" size="23" margin-right="13" />
        <ui-icon type="info_circle" size="23" margin-right="13" />
        <ui-icon type="cancel" size="23" margin-right="13" />
        <ui-icon type="search" size="20" margin-right="13" />
      </div>
      <div class="icon_sp_area">
        <ui-icon type="github" size="23" margin-right="13" />
        <ui-icon type="wechat-pay" size="23" color="#09bb07" margin-right="13" />
      </div>
    </div>

  </div>
</template>

<script>
import uiIcon from '../../../components/icon'

export default {
  components: {
    uiIcon,
  },
}
</script>

<style lang="less">
.page__bd {
  padding-left: 40px;
  padding-right: 40px;
  text-align: left;
}
.icon-box{
  margin-bottom: 25px;
  display: flex;
  align-items: center;
}
.icon-box__ctn{
  flex-shrink: 100;
}
.icon-box__title{
  font-size: 20px;
}
.icon-box__desc{
  margin-top: 6px;
  font-size: 12px;
  color: #888888;
}
.icon_sp_area {
  margin-top: 10px;
  text-align: left;
}
</style>
