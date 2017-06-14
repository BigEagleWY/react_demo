# react + webpack

## node模块

- webpack -- webpack打包工具
- webpack-dev-server -- webpack本地服务器

- babel-core -- 后台编译babel工具
- babel-preset-es2015 -- babel对es2015的预设
- babel-loader -- babel加载器
- babel-perset-react -- babel对react的预设


- react -- react本身
- react-dom -- react-dom本身
- react-hot-loader -- react的热更新


- style-loader -- 样式加载器
- css-loader -- css加载器

备注：只上传package.json，部署时运行cnpm install命令

## 配置相关
- webpack配置文件 -- webpack.config.js

- .babelrc -- babel预设文件


## react简介
1. 作为UI



2. 虚拟DOM  
2.1 不直接操作DOM来提升性能




3. 组件化
3.1 定义好的组件可以组合使用也可以重复使用  


## 开发环境和常用插件
### 开发工具
- atom
- visual studio code
### 常用插件
- 浏览器浏览功能 open-in-browser
- 分页显示HTML页面效果 html preview
- 文件路径自动补全 path autocomplete


## 组件生存周期
- componentWillMount 创建之前
- componentDidMount 创建之后
- componentWillUpdate 更新之前
- componentDidUpdate 更新之后
- componentWillUnmount 卸载之前
- componentWillReceiveProps 组件参数更新

备注：没有componentDidUnmount，原因是组件已卸载，无法产生事件。

## 组件状态
- 组件内节点（node）ref and this.refs