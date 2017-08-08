/*global
    __DEV__
    __dirname
    process
*/
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pkg = require('./package.json');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
        app: path.resolve(__dirname, 'app/index.jsx'),
        // 将第三方依赖（node_modules）的库打包
        vendor: Object.keys(pkg.dependencies)
    },
    output: {
        path: __dirname + '/build',
        publicPath: '/',
        filename: 'js/[name].[chunkhash:8].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css'],
        alias: {
            components: path.resolve(__dirname, 'app/components/'),
            containers: path.resolve(__dirname, 'app/containers/'),
            constants: path.resolve(__dirname, 'app/constants/'),
            actions: path.resolve(__dirname, 'app/actions/'),
            reducers: path.resolve(__dirname, 'app/reducers/'),
            util: path.resolve(__dirname, 'app/util/'),
            fetch: path.resolve(__dirname, 'app/fetch/'),
            config: path.resolve(__dirname, 'app/config/'),
            static: path.resolve(__dirname, 'app/static/')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'eslint-loader'
                ]
            },
            {
                test: /\.(jpg|jpeg|png|svg|gif|bmp)/i,
                use: [
                    'url-loader?limit=5000&name=img/[name].[sha512:hash:base64:8].[ext]',
                    'image-webpack-loader?{pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}'
                ]
            },
            {
                test: /\.(woff|woff2|ttf|eot)($|\?)/i,
                use: [
                    'url-loader?limit=5000&name=fonts/[name].[sha512:hash:base64:8].[ext]'
                ]
            },
            {
                test: /\.(css|scss)$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        // Scope hosting
        new webpack.optimize.ModuleConcatenationPlugin(),
        // 删除build文件夹
        new CleanWebpackPlugin('./build'),
        // 加署名
        new webpack.BannerPlugin("Copyright by luoziwo.cn"),
        // html 模板插件
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        // 分离CSS和js
        new ExtractTextPlugin('css/[name].[chunkhash:8].css'), 
        // 提供公共代码vendor
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'js/[name].[chunkhash:8].js'
        }),
        /// 定义为生产环境，编译 React 时压缩到最小
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        })
    ]
}