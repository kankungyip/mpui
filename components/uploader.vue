<template>
  <div :class="{ 'weui-cell': !indie }">
    <div :class="{ 'weui-cell__bd': !indie }">
      <div class="weui-uploader">
        <div class="weui-uploader__hd">
          <div class="weui-uploader__title">{{title}}</div>
          <div class="weui-uploader__info">{{files.length}}/{{filesLimit}}</div>
        </div>
        <div class="weui-uploader__bd">
          <div class="weui-uploader__files">
            <div
              v-for="(item, index) in files"
              class="weui-uploader__file"
              :class="{ 'weui-uploader__file_status': url && item.progress !== true }"
              :key="index"
              @click="showActions(index)"
              >
              <img class="weui-uploader__img" mode="aspectFill" :src="item.path" />
              <div v-if="url && item.progress !== true" class="weui-uploader__file-content">
                <ui-icon v-if="item.progress == null" type="waiting" size="23" />
                <ui-icon v-else-if="item.progress === false" type="warn" size="23" />
                <span v-else>{{item.progress + '%'}}</span>
              </div>
            </div>
          </div>
          <div v-if="files.length < filesLimit" class="weui-uploader__input-box">
            <div class="weui-uploader__input" @click="choose" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import uiIcon from './icon'

export default {
  components: {
    uiIcon,
  },

  props: {
    title:        { type: String,     default: '' },
    filesLimit:   { type: Number,     default: 9 },
    sizeType:     { type: Array,      default: ['original', 'compressed'] },
    sourceType:   { type: Array,      default: ['album', 'camera'] },
    url:          { type: String,     default: '' },
    name:         { type: String,     default: 'uploads' },
    header:       { type: Object,     default: null },
    formData:     { type: Object,     default: null },
    indie:        { type: Boolean,    default: false },
  },

  data () {
    return {
      files: [],
    }
  },

  methods: {
    choose () {
      const { sizeType, sourceType } = this
      const count = this.filesLimit - this.files.length
      const fail = ({ errMsg }) => this.$emit('error', errMsg)
      const success = ({ tempFiles }) => {
        this.files = this.files.concat(tempFiles)
        this.$emit('change', tempFiles, this.files)
        if (this.url) {
          this.upload(tempFiles)
        }
      }
      wx.chooseImage({ count, sizeType, sourceType, success, fail })
    },

    upload (tempFiles) {
      for (const file of tempFiles) {
        const { url, header, formData, name } = this
        const filePath = file.path
        const success = (res) => {
          file.task = null
          file.progress = true
          this.$forceUpdate()
        }
        const fail = ({ errMsg }) => {
          file.task = null
          file.progress = false
          this.$forceUpdate()
          this.$emit('error', errMsg)
        }
        const onProgress = (res) => {
          file.progress = res.progress
          this.$forceUpdate()
        }
        const task = wx.uploadFile({ url, filePath, name, header, formData, success, fail })
        if (task) {
          task.onProgressUpdate(onProgress)
          file.task = task
        }
      }
    },

    showActions (index) {
      const file = this.files[index]
      const itemList = []

      if (!this.url || file.progress === true) {
        itemList.push('预览', '删除')
      } else if (file.progress === false) {
        itemList.push('重新上传', '预览', '删除')
      } else if (file.progress == null) {
        itemList.push('等待上传', '中断')
      } else {
        itemList.push('正在上传…', '中断')
      }

      const success = ({ tapIndex, cancel }) => {
        const len = itemList.length
        if (!cancel) {
          switch (tapIndex) {
            case len - 2:
              this.preview(file)
              return
            case len - 1:
              this.abort(file)
              this.remove(index)
              return
            default:
              this.upload([].concat(file))
              return
          }
        }
      }

      wx.showActionSheet({ itemList, success })
    },

    preview (file) {
      wx.previewImage({
        current: file.path,
        urls: this.files.map(({ path }) => path),
      })
    },

    remove (index) {
      this.files.splice(index, 1)
    },

    abort (file) {
      if (file.task) {
        file.task.abort()
        file.task = null
        file.progress = false
      }
    },
  },
}
</script>

<style lang="less">
@import "../theme/widget/weui-cell/weui-cell";
@import "../theme/widget/weui-cell/weui-uploader";
</style>
