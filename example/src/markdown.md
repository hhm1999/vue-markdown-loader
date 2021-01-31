#### 基本
最简单的用法。11
::: warning
*here be dragons*
:::
```html
<template>
  <div @click="test" class="local-storage-demo">
  1231{{ hhm }}
  </div>
</template>
<script>
export default {
  props: {
  },
  data () {
    return {
      hhm: 12345
    }
  },
  methods: {
    test () {
      alert(123)
    }
  },
}
</script>
<style scoped lang="scss">
.local-storage-demo{
  .btn{
    margin-right: 10px;
  }
}
</style>
```
