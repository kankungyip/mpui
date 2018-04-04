<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">Article</div>
      <div class="page__desc">文章</div>
    </div>

    <div class="page__bd">
      <ui-article :content="content" />
    </div>

  </div>
</template>

<script>
import uiArticle from '../../../components/article'

export default {
  components: {
    uiArticle,
  },

  data () {
    return {
      content: `# 大标题

## 章标题

### 1.1 节标题

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

![](https://avatars1.githubusercontent.com/u/1096425?s=460&v=4)

### 1.2 节标题

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
`,
    }
  },
}
</script>

<style>
page {
  background-color: #fff;
}
.weui-article__h1,
.weui-article__h2,
.weui-article__h3 {
  font-weight: bold;
  font-style: italic;
}
</style>
