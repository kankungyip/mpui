<template>
  <rich-text :nodes="nodes" :style="styled" />
</template>

<script>
import { parse } from 'md-jml'
import { string as toStyle } from 'to-style'

const parseText = (text) => ({
  type: 'text',
  text: String(text),
})

const parseNode = ([tag, opts, ...children], classname) => ({
  type: 'node',
  name: tag,
  attrs: {
    ...opts,
    class: classname || `weui-article__${tag} mpui-article__${tag}`,
  },
  children: children.map((child) => (
    Array.isArray(child) ? parseNode(child) : parseText(child)
  )),
})

export default {
  props: {
    content: { type: String, default: '' },
    // fixed: style
    styles:  { type: Object, default: null },
  },

  data () {
    return {
      nodes: [],
    }
  },

  computed: {
    styled () {
      return this.styles ? toStyle(this.styles) : ''
    },
  },

  created () {
    parse(this.content, {}, (node) => {
      this.nodes = [].concat(parseNode(node, 'weui-article mpui-article'))
    })
  },
}
</script>

<style lang="less">
@import "../theme/widget/weui-page/weui-article";

.mpui-article__h4,
.mpui-article__h5,
.mpui-article__h6 {
  font-weight: 400;
  font-size: 15px;
  margin-bottom: .34em;
}

.mpui-article__ul {
  margin: 0 0 .8em;
}

.mpui-article__img {
  margin: 4px 0;
  max-width: 100%;
}
</style>
