<script>
export default {
  mpType: 'app',

  created () {
    console.log('https://github.com/kankungyip/weui-mpvue')
  },
}
</script>

<style lang="less">
@import "theme/mixin";

page{
  background-color: #F8F8F8;
  font-size: 16px;
}
.page__hd {
  padding: 40px;
}
.page__bd {
  padding-bottom: 40px;
}
.page__bd_spacing {
  padding-left: 15px;
  padding-right: 15px;
}

.page__ft{
  padding-bottom: 10px;
  text-align: center;
  color: #999;
}

.page__title {
  text-align: left;
  font-size: 20px;
  font-weight: 400;
}

.page__desc {
  margin-top: 5px;
  color: #888888;
  text-align: left;
  font-size: 14px;
}
</style>
