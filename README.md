#### x-components是一个基于vue的组件库

##### 安装
```
npm i @hhm1999/vue-markdown-loader --save-dev
```

##### webpack配置

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          { loader: 'vue-loader' },
          {
            loader: '@hhm1999/vue-markdown-loader',
            options: {demoContainerComponentName: 'mdDemoContainerComponent'}
          }
        ]
      }
    ]
  }
}
```

##### vue cli配置

```javascript
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('@hhm1999/vue-markdown-loader')
      .options({
        demoContainerComponentName: 'mdDemoContainerComponent'
      })
      .end()
  }
}

```

##### Options

###### demoContainerComponentName
用来包裹`示例代码`及`示例代码运行结果`的组件名，该组件必须有`component`和`code`两个`slot`，分别用来放置`示例代码`及`示例代码运行结果`。

##### 原理
原理请参考文章：[让Markdown中的Vue代码运行起来](https://segmentfault.com/a/1190000039137759)