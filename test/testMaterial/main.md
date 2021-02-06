### tooltip 文字提示
气泡方式的提示。

### 基础用法
``` html
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
```

### 通过slot方式显示更加复杂的内容
``` html
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
```

### 自定义显示逻辑
``` html
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
```

#### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| content  | 显示的内容文本 | string  |   -- |    --     |
| placement  | 气泡显示位置 |  number  |  top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end |    bottom     |
| interaction  | 是否鼠标进入显示、离开隐藏，可以通过设置为`false`再配合`visibility`来实现自定义显示隐藏逻辑 | boolean  |    --     |  true     |
| visibility  |  `interaction=false`才有效，用于控制提示内容的显示和隐藏 | boolean  |    --     |  false     |

#### slot
| name      | 说明    |
|---------- |-------- |
| --  | 触发提示的目标 |
| content  | 用来显示更加复杂的提示内容 |