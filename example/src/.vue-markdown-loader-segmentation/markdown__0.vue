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