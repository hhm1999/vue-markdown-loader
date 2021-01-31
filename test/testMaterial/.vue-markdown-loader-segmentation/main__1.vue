<template>
  <div :class="$style.main">
    <x-tooltip placement="top-start">
      <div :class="$style.content" slot="content">
        <p>君不见，黄河之水天上来，奔流到海不复回。</p>
        <p>君不见，高堂明镜悲白发，朝如青丝暮成雪。</p>
        <p>人生得意须尽欢，莫使金樽空对月。</p>
        <p>天生我材必有用，千金散尽还复来。</p>
        <p>烹羊宰牛且为乐，会须一饮三百杯。</p>
        <p>岑夫子，丹丘生，将进酒，杯莫停。</p>
      </div>
      <x-btn :class="$style.btn">鼠标进入显示</x-btn>
    </x-tooltip>
  </div>
</template>
<style module lang="scss">
.content{
  line-height: 30px;
  padding: 3px 10px 10px 10px;
  text-align: left;
}
</style>