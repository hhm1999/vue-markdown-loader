const resolve = require("path").resolve;
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: "./src/entry.js",
  mode: 'development',
  output: {
    path: resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true
            }
          }
        ]
      },
      {
        test: /\.md$/,
        use: [
          "vue-loader",
          {
            loader: resolve(__dirname, "../src/loader.js"),
            options: {demoContainerComponentName: 'demoContainer'}
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    useLocalIp: true,
    // noInfo: true,
    host: '0.0.0.0',
    inline: true,
    hot: true,
    port: 1998
  }
};
