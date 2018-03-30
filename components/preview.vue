<template>
  <div class="weui-form-preview">
    <div class="weui-form-preview__hd">
      <div class="weui-form-preview__item">
        <div class="weui-form-preview__label">{{title}}</div>
        <div class="weui-form-preview__value_in-hd">{{extra}}</div>
      </div>
    </div>
    <div class="weui-form-preview__bd">
      <div v-for="(item, index) in detail" class="weui-form-preview__item" :key="index">
        <div class="weui-form-preview__label">{{item.label}}</div>
        <div class="weui-form-preview__value">{{item.value}}</div>
      </div>
    </div>
    <div v-if="confirmText || cancelText" class="weui-form-preview__ft">
      <div v-if="cancelText" class="weui-form-preview__btn weui-form-preview__btn_default" hover-class="weui-form-preview__btn_active" @click="cancel">{{cancelText}}</div>
      <div v-if="confirmText" class="weui-form-preview__btn weui-form-preview__btn_primary" hover-class="weui-form-preview__btn_active" @click="confirm">{{confirmText}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title:          { type: String,   default: '' },
    extra:          { type: String,   default: '' },
    detail:         { type: Array,    default: [] },
    confirmText:    { type: String,   default: '' },
    cancelText:     { type: String,   default: '' },
  },

  methods: {
    confirm (...args) {
      this.$emit('confirm', ...args)
    },

    cancel (...args) {
      this.$emit('cancel', ...args)
    },
  },
}
</script>

<style lang="less">
@import "../theme/widget/weui-cell/weui-form/weui-form-preview";

.weui-form-preview {
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
