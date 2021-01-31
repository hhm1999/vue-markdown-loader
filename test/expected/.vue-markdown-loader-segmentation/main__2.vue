<template>
  <div :class="$style.main">
    <x-tooltip :visibility="visibility" :interaction="false" content="鼠标点击才显示" placement="right-start">
      <x-btn @click="visibility = !visibility" :class="$style.btn">点击{{!visibility ? '显示' : '关闭' }}</x-btn>
    </x-tooltip>
  </div>
</template>
<script>
export default {
  data () {
    return {
      visibility: false
    }
  }
}
</script>
<style module lang="scss">
.content{
  line-height: 30px;
  padding: 3px 10px 10px 10px;
  text-align: left;
}
</style>