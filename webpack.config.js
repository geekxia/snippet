

module.exports = {
  module: {
    rules: [
      // cacheDirectory支持缓存转换输出结果，只对src目录中的js文件进行查找和处理
      { test: /\.js$/, use: ['babel-loader?cacheDirectory'], include: path.resolve(__dirname, 'src') }
    ],
    // 非模块化的文件不解析
    noParse: [/react\.min\.js$/],
  },
  // 用于配置模块解析参数
  resolve: {
    // 用绝对路径指明第三方模块存放的位置， __dirname表示项目根目录
    modules: [path.resolve(__dirname, 'node_modules')],
    extensions: ['js', 'json'],
    alias: {
      'react': path.resolve(__dirname, './node_modules/react/dist/react.min.js')
    },
    mainFields: ['browser', 'module', 'main']
  }
}


