<template>
  <checkbox-group @change="change">
    <label class="weui-agree" :for="id">
      <div class="weui-agree__text">
        <checkbox
          class="weui-agree__checkbox"
          value="agree"
          :id="id"
          :checked="value"
          />
        <div class="weui-agree__checkbox-icon">
          <icon v-if="value" class="weui-agree__checkbox-icon-check" type="success_no_circle" size="10"></icon>
        </div>
        <div class="text">{{label}}</div>
        <a
          v-for="(item, index) in links"
          class="weui-agree__link"
          :href="item.url"
          :key="index"
          >《{{item.title}}》</a>
      </div>
    </label>
  </checkbox-group>
</template>

<script>
export default {
  props: {
    label:  { type: String,   default: '阅读并同意' },
    value:  { type: Boolean,  default: false },
    links:  { type: Array,    default: [] },
  },

  computed: {
    id () {
      return Math.random().toString(36).slice(2)
    },
  },

  methods: {
    change (evt) {
      const agree = !!evt.mp.detail.value.length
      this.$emit('update:value', agree)
      this.$emit('change', evt)
    },
  },
}
</script>

<style lang="less">
@import "../theme/widget/weui-agree/weui-agree";

.weui-agree__link {
  &:after {
    content: "、";
  }

  &:last-child:after {
    content: "";
  }
}
</style>

<style lang="less" scoped>
.text {
  display: inline;

  &:before {
    content: " ";
  }
}
</style>
