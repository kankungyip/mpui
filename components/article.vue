<template>
  <rich-text :nodes="nodes" />
</template>

<script>
import { parse } from 'md-jml'

const parseText = (text) => ({
  type: 'text',
  text: String(text),
})

const parseNode = ([tag, opts, ...children], classname) => ({
  type: 'node',
  name: tag,
  attrs: {
    ...opts,
    class: classname || `weui-article__${tag} fixed__${tag}`,
  },
  children: children.map((child) => (
    Array.isArray(child) ? parseNode(child) : parseText(child)
  )),
})

export default {
  props: {
    content: { type: String, default: '' },
  },

  data () {
    return {
      nodes: [],
    }
  },

  created () {
    parse(this.content, {}, (node) => {
      this.nodes = [].concat(parseNode(node, 'weui-article'))
    })
  },
}
</script>

<style lang="less">
@import "../theme/widget/weui-page/weui-article";

.weui-article__h4,
.weui-article__h5,
.weui-article__h6 {
  font-weight: 400;
  font-size: 15px;
  margin-bottom: .34em;
}

.weui-article__ul {
  margin: 0 0 .8em;
}

.weui-article__img {
  margin: 4px 0;
}

.fixed__img {
  max-width: 100%;
}
</style>
