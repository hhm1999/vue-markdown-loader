<template>
  <button @click="handleClick" class="btn">
    {{ btnText }}
  </button>
</template>
<script>
export default {
  data () {
    return {
      btnText: '点我'
    }
  },
  methods: {
    handleClick () {
      alert('hello!')
    }
  },
}
</script>
<style module lang="scss">
.btn{
  width: 100px;
  height: 40px;
}
</style>