<template>
  <div class="container">

    <div class="page__hd">
      <div class="page__title">Footer</div>
      <div class="page__desc">页脚</div>
    </div>

    <div class="page__bd page__bd_spacing">
      <div class="footer-item">
        <ui-footer text="Copyright © 2017 WeUI-mpvue." />
      </div>

      <div class="footer-item">
        <ui-footer text="Copyright © 2017 WeUI-mpvue." :links="links1" />
      </div>

      <div class="footer-item">
        <ui-footer text="Copyright © 2017 WeUI-mpvue." :links="links2" />
      </div>

      <ui-footer text="Copyright © 2017 WeUI-mpvue." fixed-bottom :links="links2" />
    </div>

  </div>
</template>

<script>
import uiFooter from '../../../components/footer'

export default {
  components: {
    uiFooter,
  },

  data () {
    return {
      links1: [
        {
          text: '底部链接',
        },
      ],

      links2: [
        {
          text: '底部链接',
        },
        {
          text: '底部链接',
        },
      ],
    }
  },
}
</script>

<style>
.footer-item {
  margin-bottom: 50px;
}
</style>
