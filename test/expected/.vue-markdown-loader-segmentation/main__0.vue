<template>
  <div :class="$style.main">
    <div :class="$style.top">
      <x-tooltip content="上左对齐位置 placement=top-start" placement="top-start">
        <x-btn :class="$style.btn">top-start</x-btn>
      </x-tooltip>
      <x-tooltip content="正上方位置 placement=top" placement="top">
        <x-btn :class="$style.btn">top</x-btn>
      </x-tooltip>
      <x-tooltip content="上右对齐位置 placement=top-end" placement="top-end">
        <x-btn :class="$style.btn">top-end</x-btn>
      </x-tooltip>
    </div>
    <div :class="$style.left">
      <x-tooltip content="左上对齐位置placement=left-start" placement="left-start">
        <x-btn :class="$style.btn">left-start</x-btn>
      </x-tooltip>
      <x-tooltip content="正左方位置placement=left" placement="left">
        <x-btn :class="$style.btn">left</x-btn>
      </x-tooltip>
      <x-tooltip content="左下对齐位置placement=left-end" placement="left-end">
        <x-btn :class="$style.btn">left-end</x-btn>
      </x-tooltip>
    </div>
     <div :class="$style.right">
      <x-tooltip content="右上对齐位置placement=right-start" placement="right-start">
        <x-btn :class="$style.btn">left-start</x-btn>
      </x-tooltip>
      <x-tooltip content="正右方位置placement=right" placement="right">
        <x-btn :class="$style.btn">left</x-btn>
      </x-tooltip>
      <x-tooltip content="右下对齐位置placement=right-end" placement="right-end">
        <x-btn :class="$style.btn">left-end</x-btn>
      </x-tooltip>
    </div>
    <div :class="$style.bottom">
      <x-tooltip content="下左对齐位置 placement=bottom-start" placement="bottom-start">
        <x-btn :class="$style.btn">bottom-start</x-btn>
      </x-tooltip>
      <x-tooltip content="正下方位置 placement=bottom" placement="bottom">
        <x-btn :class="$style.btn">bottom</x-btn>
      </x-tooltip>
      <x-tooltip content="下右对齐位置 placement=bottom-end" placement="bottom-end">
        <x-btn :class="$style.btn">bottom-end</x-btn>
      </x-tooltip>
    </div>
  </div>
</template>
<style module lang="scss">
.main{
  .btn {
    margin: 10px;
  }
  .top{
    margin-left: 160px; 
  }
  .left{
    width: 150px;
    float: left;
  }
  .right{
    width: 150px;
    margin-left: 500px; 
    text-align: right;
  }
  .bottom{
    margin-left: 120px; 
  }
  @media screen and (max-width: 900px){
    overflow: hidden;
    .btn {
      margin: 2px;
    }
    .top{
      margin-left: 0px;
      width: 100%;
      text-align: center;
      margin-bottom: 10px;
    }
    .right{
      margin-left: 0px;
      float: right;
    }
    .bottom{
      margin-left: 0px;
      width: 100%;
      text-align: center;
      margin-top: 10px;
      float: left;
    }
  }
}
</style>