<template>
  <div class="markdown-body">
    <markdown></markdown>
  </div>
</template>

<script>
import markdown from './markdown.md'
import 'highlight.js/styles/solarized-light.css'

export default {
  components: {
    markdown
  }
}
</script>
<style lang="scss">
@import "./github-markdown.scss";


</style>
