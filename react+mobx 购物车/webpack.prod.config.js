const {resolve, join} = require('path');
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer');

const tsconfigPath = join(__dirname, "tsconfig.json");

const postCssConfig = require("./postcss.config");

const outputPath = resolve(__dirname, 'dist');

const src = join(__dirname, 'src');

module.exports = {

    mode: 'production',

    context: resolve(__dirname, 'src'),

    entry: {
        index: join(src, "index.tsx")
    },

    output: {
        path: outputPath,
        filename: "[name].[chunkhash].js",
        publicPath: "",
    },

    devtool: false,
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".pcss", ".less", ".css", ".svg", ".html"],
    },
    externals: {
        // "lodash": "_",
        // mobx: "mobx",
        // "mobx-react": "mobxReact",
        // react: "React",
        // "react-dom": "ReactDOM",
        // "react-router-dom": "ReactRouterDOM",
        // "bluebird": "Promise",
        // "axios": "axios",
        // "antd": "antd",
        // "moment": "moment"
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            happyPackMode: true,
                            configFile: tsconfigPath,
                        },
                    },
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.pcss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {loader: 'css-loader', options: {modules: true, importLoaders: 1}},
                    {
                        loader: "postcss-loader",
                        options: postCssConfig,
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
            },
            {
                test: /\.(gif|jpg|png|svg|woff|eot|ttf)\??.*$/,
                use: [
                    {
                        loader: "file-loader",
                        query: {
                            name: "resource/[name].[hash].[ext]",
                            publicPath: '',
                        },
                    },
                ],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: resolve(__dirname, './index.html'),
            filename: 'index.html'
        }),
        new DefinePlugin({
            'process.env.NODE_ENV': 'production'
        }),
        new BundleAnalyzerPlugin.BundleAnalyzerPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: 'initial', // 对所有node_modules处理
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                vendor: {
                    test: /node_modules\//,
                    name: 'vendor',
                    priority: 10,
                    minChunks: 2,
                    enforce: true
                },
                commons: {
                    test: /common\/|components\//,
                    name: 'commons',
                    priority: 10,
                    enforce: true
                }
            }
        },
        runtimeChunk: {
            name: 'manifest'
        }
    }
};