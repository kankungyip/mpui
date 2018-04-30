<template>
  <checkbox-group @change="change">
    <label class="weui-agree" :for="id">
      <div class="weui-agree__text">
        <checkbox
          class="weui-agree__checkbox"
          :id="id"
          :value="'agree:' + id"
          :checked="agreeChecked"
          />
        <div class="weui-agree__checkbox-icon">
          <icon v-if="agreeChecked" class="weui-agree__checkbox-icon-check" type="success_no_circle" size="10" />
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
    label:    { type: String,   default: '阅读并同意' },
    checked:  { type: Boolean,  default: false },
    links:    { type: Array,    default: [] },
  },

  data () {
    return {
      agreeChecked: false,
    }
  },

  computed: {
    id () {
      return Math.random().toString(36).slice(2)
    },
  },

  methods: {
    change (evt) {
      const checked = !!evt.mp.detail.value.length
      const event = evt.mp
      event.$mp = evt
      this.agreeChecked = checked
      this.$emit('update:checked', checked)
      this.$emit('change', checked, event)
    },
  },

  mounted () {
    this.agreeChecked = this.checked
  },

  onUnload () {
    // 重置初始数据
    Object.assign(this.$data, this.$options.data())
  },
}
</script>

<style lang="less" scoped>
@import "../theme/widget/weui-agree/weui-agree";

.weui-agree__link {
  &:after {
    content: "、";
  }

  &:last-child:after {
    content: "";
  }
}

.text {
  display: inline;

  &:before {
    content: " ";
  }
}
</style>
