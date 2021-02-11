<template>
  <div class="doc-demo-wrap-main">
    <div class="component">
      <h4 class="title">示例</h4>
      <slot name="component"></slot>
    </div>
    <div ref="codeContainer" class="code">
      <h4 class="title">示例源码</h4>
      <slot name="code"></slot>
    </div>
  </div>
</template>

<script>
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-light.css';
export default {
  props: {
  },
  data () {
    return {
    }
  },
  mounted () {
    this.$refs.codeContainer.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block)
    })
  },
  components: {
  }
}
</script>
<style scoped lang="scss">
.doc-demo-wrap-main{
  .title{
    font-size: 1em;
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }
}
</style>
