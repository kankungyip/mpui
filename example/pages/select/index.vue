<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">Select</div>
      <div class="page__desc">选择项</div>
    </div>

    <div class="page__bd">
      <div class="weui-cells__title">选择项</div>
      <div class="weui-cells weui-cells_after-title">
        <ui-select
          :range="noLabelArray"
          @change="change"
          />
        <ui-select
          label="国家/地区"
          type="selector"
          :range="array"
          @change="change"
          />
        <ui-select
          label="多列"
          type="multiSelector"
          :range="multiArray"
          :value="multiIndex"
          :display-text="multiDisplayText"
          @change="change"
          @columnchange="columnChange"
          />
        <ui-select
          label="日期"
          type="date"
          value="2018-04-01"
          @change="change"
          />
        <ui-select
          label="时间"
          type="time"
          value="12:01"
          @change="change"
          />
        <ui-select
          label="省市区"
          type="region"
          separator="/"
          :value="['湖南省', '长沙市', '芙蓉区']"
          @change="change"
          />
      </div>
    </div>

  </div>
</template>

<script>
import uiSelect from '../../../components/select'

export default {
  components: {
    uiSelect,
  },

  data () {
    return {
      noLabelArray: ['微信号', 'QQ', 'Email'],
      array: ['中国', '美国', '英国'],

      multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
      multiIndex: [0, 0, 0],
      multiDisplayText: '猪肉绦虫',
    }
  },

  methods: {
    change ({ mp }) {
      console.log(`select 选择的值：${mp.detail.value}`)
    },

    columnChange ({ mp }) {
      const { column, value } = mp.detail

      console.log('select 选择的列为', column, '，值为', value)

      const multiArray = this.multiArray
      const multiIndex = this.multiIndex

      multiIndex[column] = value

      switch (column) {
        case 0:
          switch (multiIndex[0]) {
            case 0:
              multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物']
              multiArray[2] = ['猪肉绦虫', '吸血虫']
              break
            case 1:
              multiArray[1] = ['鱼', '两栖动物', '爬行动物']
              multiArray[2] = ['鲫鱼', '带鱼']
              break
          }
          multiIndex[1] = 0
          multiIndex[2] = 0
          break
        case 1:
          switch (multiIndex[0]) {
            case 0:
              switch (multiIndex[1]) {
                case 0:
                  multiArray[2] = ['猪肉绦虫', '吸血虫']
                  break
                case 1:
                  multiArray[2] = ['蛔虫']
                  break
                case 2:
                  multiArray[2] = ['蚂蚁', '蚂蟥']
                  break
                case 3:
                  multiArray[2] = ['河蚌', '蜗牛', '蛞蝓']
                  break
                case 4:
                  multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物']
                  break
              }
              break
            case 1:
              switch (multiIndex[1]) {
                case 0:
                  multiArray[2] = ['鲫鱼', '带鱼']
                  break
                case 1:
                  multiArray[2] = ['青蛙', '娃娃鱼']
                  break
                case 2:
                  multiArray[2] = ['蜥蜴', '龟', '壁虎']
                  break
              }
              break
          }
          multiIndex[2] = 0
          break
      }

      this.multiArray = [].concat(multiArray)
      this.multiIndex = multiIndex
      this.multiDisplayText = multiArray[2][multiIndex[2]]
    },
  },
}
</script>

<style>
</style>
