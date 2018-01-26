/*global
    __DEV__
    __dirname
    process
*/
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: path.join(__dirname, 'app/index.jsx'),
    output: {
        path: path.join(__dirname, 'dev'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css'],
        alias: {
            components: path.join(__dirname, 'app/components/'),
            containers: path.join(__dirname, 'app/containers/'),
            constants: path.join(__dirname, 'app/constants/'),
            actions: path.join(__dirname, 'app/actions/'),
            reducers: path.join(__dirname, 'app/reducers/'),
            util: path.join(__dirname, 'app/util/'),
            fetch: path.join(__dirname, 'app/fetch/'),
            config: path.join(__dirname, 'app/config/'),
            static: path.join(__dirname, 'app/static/')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'react-hot-loader',
                    'babel-loader'
                ]
            },
            {
                test: /\.(jpg|jpeg|png|svg|gif|bmp)/i,
                use: [
                    'url-loader?limit=5000'
                ]
            },
            {
                test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
                use: [
                    'url-loader?limit=5000'
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
                            loader: "css-loader",
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
                            loader: "sass-loader",
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
        new ExtractTextPlugin({
            filename: 'main.css',
            disable: true
        }),
        // html 模板插件
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.html'
        }),
        // 热加载插件
        new webpack.HotModuleReplacementPlugin(),
        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        })
    ],
    devServer: {
        proxy: {
            // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:7777 上，由 koa 提供 mock 数据。
            // koa 代码在 ./mock 目录中，启动命令为 npm run mock
            '/api': {
                target: 'http://localhost:7777',
                secure: false
            }
        },
        host: '0.0.0.0',
        port: '8888',
        disableHostCheck: true, // 为了手机可以访问
        contentBase: './dev', // 本地服务器所加载的页面所在的目录
        historyApiFallback: true, // 为了SPA应用服务
        inline: true, //实时刷新
        hot: true  // 使用热加载插件 HotModuleReplacementPlugin
    }
}