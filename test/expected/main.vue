`<template>
            <div>
              <div class="vue-markdown-loader_markdown">
      <h3>tooltip 文字提示</h3>
<p>气泡方式的提示。</p>
<h3>基础用法</h3>

    </div>
      <demoContainerComponentName>
        <template slot="component">
          <vue_markdown_loader_component_debris_0 />
        </template>
        <template slot="code">
          <div v-pre><pre><code class="language-vue">&lt;template&gt;
  &lt;div :class=&quot;$style.main&quot;&gt;
    &lt;div :class=&quot;$style.top&quot;&gt;
      &lt;x-tooltip content=&quot;上左对齐位置 placement=top-start&quot; placement=&quot;top-start&quot;&gt;
        &lt;x-btn :class=&quot;$style.btn&quot;&gt;top-start&lt;/x-btn&gt;
      &lt;/x-tooltip&gt;
      &lt;x-tooltip content=&quot;正上方位置 placement=top&quot; placement=&quot;top&quot;&gt;
        &lt;x-btn :class=&quot;$style.btn&quot;&gt;top&lt;/x-btn&gt;
      &lt;/x-tooltip&gt;
      &lt;x-tooltip content=&quot;上右对齐位置 placement=top-end&quot; placement=&quot;top-end&quot;&gt;
        &lt;x-btn :class=&quot;$style.btn&quot;&gt;top-end&lt;/x-btn&gt;
      &lt;/x-tooltip&gt;
    &lt;/div&gt;
    &lt;div :class=&quot;$style.left&quot;&gt;
      &lt;x-tooltip content=&quot;左上对齐位置placement=left-start&quot; placement=&quot;left-start&quot;&gt;
        &lt;x-btn :class=&quot;$style.btn&quot;&gt;left-start&lt;/x-btn&gt;
      &lt;/x-tooltip&gt;
      &lt;x-tooltip content=&quot;正左方位置placement=left&quot; placement=&quot;left&quot;&gt;
        &lt;x-btn :class=&quot;$style.btn&quot;&gt;left&lt;/x-btn&gt;
      &lt;/x-tooltip&gt;
      &lt;x-tooltip content=&quot;左下对齐位置placement=left-end&quot; placement=&quot;left-end&quot;&gt;
        &lt;x-btn :class=&quot;$style.btn&quot;&gt;left-end&lt;/x-btn&gt;
      &lt;/x-tooltip&gt;
    &lt;/div&gt;
     &lt;div :class=&quot;$style.right&quot;&gt;
      &lt;x-tooltip content=&quot;右上对齐位置placement=right-start&quot; placement=&quot;right-start&quot;&gt;
        &lt;x-btn :class=&quot;$style.btn&quot;&gt;left-start&lt;/x-btn&gt;
      &lt;/x-tooltip&gt;
      &lt;x-tooltip content=&quot;正右方位置placement=right&quot; placement=&quot;right&quot;&gt;
        &lt;x-btn :class=&quot;$style.btn&quot;&gt;left&lt;/x-btn&gt;
      &lt;/x-tooltip&gt;
      &lt;x-tooltip content=&quot;右下对齐位置placement=right-end&quot; placement=&quot;right-end&quot;&gt;
        &lt;x-btn :class=&quot;$style.btn&quot;&gt;left-end&lt;/x-btn&gt;
      &lt;/x-tooltip&gt;
    &lt;/div&gt;
    &lt;div :class=&quot;$style.bottom&quot;&gt;
      &lt;x-tooltip content=&quot;下左对齐位置 placement=bottom-start&quot; placement=&quot;bottom-start&quot;&gt;
        &lt;x-btn :class=&quot;$style.btn&quot;&gt;bottom-start&lt;/x-btn&gt;
      &lt;/x-tooltip&gt;
      &lt;x-tooltip content=&quot;正下方位置 placement=bottom&quot; placement=&quot;bottom&quot;&gt;
        &lt;x-btn :class=&quot;$style.btn&quot;&gt;bottom&lt;/x-btn&gt;
      &lt;/x-tooltip&gt;
      &lt;x-tooltip content=&quot;下右对齐位置 placement=bottom-end&quot; placement=&quot;bottom-end&quot;&gt;
        &lt;x-btn :class=&quot;$style.btn&quot;&gt;bottom-end&lt;/x-btn&gt;
      &lt;/x-tooltip&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;style module lang=&quot;scss&quot;&gt;
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
&lt;/style&gt;
</code></pre>
</div>
        </template>
      </demoContainerComponentName>
    <div class="vue-markdown-loader_markdown">
      <h3>通过slot方式显示更加复杂的内容</h3>

    </div>
      <demoContainerComponentName>
        <template slot="component">
          <vue_markdown_loader_component_debris_1 />
        </template>
        <template slot="code">
          <div v-pre><pre><code class="language-vue">&lt;template&gt;
  &lt;div :class=&quot;$style.main&quot;&gt;
    &lt;x-tooltip placement=&quot;top-start&quot;&gt;
      &lt;div :class=&quot;$style.content&quot; slot=&quot;content&quot;&gt;
        &lt;p&gt;君不见，黄河之水天上来，奔流到海不复回。&lt;/p&gt;
        &lt;p&gt;君不见，高堂明镜悲白发，朝如青丝暮成雪。&lt;/p&gt;
        &lt;p&gt;人生得意须尽欢，莫使金樽空对月。&lt;/p&gt;
        &lt;p&gt;天生我材必有用，千金散尽还复来。&lt;/p&gt;
        &lt;p&gt;烹羊宰牛且为乐，会须一饮三百杯。&lt;/p&gt;
        &lt;p&gt;岑夫子，丹丘生，将进酒，杯莫停。&lt;/p&gt;
      &lt;/div&gt;
      &lt;x-btn :class=&quot;$style.btn&quot;&gt;鼠标进入显示&lt;/x-btn&gt;
    &lt;/x-tooltip&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;style module lang=&quot;scss&quot;&gt;
.content{
  line-height: 30px;
  padding: 3px 10px 10px 10px;
  text-align: left;
}
&lt;/style&gt;
</code></pre>
</div>
        </template>
      </demoContainerComponentName>
    <div class="vue-markdown-loader_markdown">
      <h3>自定义显示逻辑</h3>

    </div>
      <demoContainerComponentName>
        <template slot="component">
          <vue_markdown_loader_component_debris_2 />
        </template>
        <template slot="code">
          <div v-pre><pre><code class="language-vue">&lt;template&gt;
  &lt;div :class=&quot;$style.main&quot;&gt;
    &lt;x-tooltip :visibility=&quot;visibility&quot; :interaction=&quot;false&quot; content=&quot;鼠标点击才显示&quot; placement=&quot;right-start&quot;&gt;
      &lt;x-btn @click=&quot;visibility = !visibility&quot; :class=&quot;$style.btn&quot;&gt;点击{{!visibility ? '显示' : '关闭' }}&lt;/x-btn&gt;
    &lt;/x-tooltip&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
  data () {
    return {
      visibility: false
    }
  }
}
&lt;/script&gt;
&lt;style module lang=&quot;scss&quot;&gt;
.content{
  line-height: 30px;
  padding: 3px 10px 10px 10px;
  text-align: left;
}
&lt;/style&gt;
</code></pre>
</div>
        </template>
      </demoContainerComponentName>
    <div class="vue-markdown-loader_markdown">
    <h4>属性</h4>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>content</td>
<td>显示的内容文本</td>
<td>string</td>
<td>--</td>
<td>--</td>
</tr>
<tr>
<td>placement</td>
<td>气泡显示位置</td>
<td>number</td>
<td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td>
<td>bottom</td>
</tr>
<tr>
<td>interaction</td>
<td>是否鼠标进入显示、离开隐藏，可以通过设置为<code>false</code>再配合<code>visibility</code>来实现自定义显示隐藏逻辑</td>
<td>boolean</td>
<td>--</td>
<td>true</td>
</tr>
<tr>
<td>visibility</td>
<td><code>interaction=false</code>才有效，用于控制提示内容的显示和隐藏</td>
<td>boolean</td>
<td>--</td>
<td>false</td>
</tr>
</tbody>
</table>
<h4>slot</h4>
<table>
<thead>
<tr>
<th>name</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>--</td>
<td>触发提示的目标</td>
</tr>
<tr>
<td>content</td>
<td>用来显示更加复杂的提示内容</td>
</tr>
</tbody>
</table>

  </div>
            </div>
          </template>
          <script>
          
import vue_markdown_loader_component_debris_0 from './.vue-markdown-loader-segmentation/main__0.vue';
import vue_markdown_loader_component_debris_1 from './.vue-markdown-loader-segmentation/main__1.vue';
import vue_markdown_loader_component_debris_2 from './.vue-markdown-loader-segmentation/main__2.vue';
          export default {
            components: {
              vue_markdown_loader_component_debris_0,vue_markdown_loader_component_debris_1,vue_markdown_loader_component_debris_2,
            }
          }
          </script>`