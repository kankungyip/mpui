<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">Ellipsis</div>
      <div class="page__desc">文本截断</div>
    </div>

    <div class="page__bd page__bd_spacing">
      <ui-ellipsis :text="text" :styles="{ marginBottom: 20 }" />
      <ui-ellipsis lines="2" :text="text" />
    </div>

  </div>
</template>

<script>
import uiEllipsis from '../../../components/ellipsis'

export default {
  components: {
    uiEllipsis,
  },

  data () {
    return {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
  },
}
</script>

<style>
</style>
