# react-webapp-spa
#### 目前已完成：
1.  webpack v3 前端工程：dev、mock、build
	- dev为本地开发环境，使用eslint、postcss、webpack-dev-server等工具
	- mock为本地模拟数据，通过koa2来处理本地的前端请求
	- build是发布环境，npm run build以后会生成build目录及相关文件。会将package.json里的dependencies打包成vendor.[hash].js，页面中js代码打包为app.[hash].js，scss打包为app.[hash].css，给图片和font加hash，然后压缩CSS、JS、图片。
1. react + react-redux + react-router v4 实现页面首页、城市页、搜索结果页、轮播图、下拉加载更多、搜索等功能。
1. react 热更新
1. 使用dynamic import将JS按页面代码分离，加速了首屏显示
1. scope hosting

#### 之后要做：
1. SSR，为了SEO和防止一开始白屏
1. 移植项目到react-naive
1. 发布几篇详细的文章

#### 预览图

#### 1
<img src="https://github.com/CodeLittlePrince/ImagesForGithub/blob/master/webpapp-1.png?raw=true" width="400" />

#### 2
<img
src="https://github.com/CodeLittlePrince/ImagesForGithub/blob/master/webapp-2.png?raw=true" width="400" />

#### 3
<img
src="https://github.com/CodeLittlePrince/ImagesForGithub/blob/master/webapp-3.png?raw=true" width="400" />

#### 4
<img
src="https://github.com/CodeLittlePrince/ImagesForGithub/blob/master/webapp-4.png?raw=true" width="400" />
