<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">Avatar</div>
      <div class="page__desc">头像</div>
    </div>

    <div class="page__bd page__bd_spacing">
      <ui-avatar text="Yeqin Gong" />
      <ui-avatar text="Yeqin Gong" image="https://avatars1.githubusercontent.com/u/1096425?s=460&v=4" />
    </div>

  </div>
</template>

<script>
import uiAvatar from '../../../components/avatar'

export default {
  components: {
    uiAvatar,
  },
}
</script>

<style>
</style>
