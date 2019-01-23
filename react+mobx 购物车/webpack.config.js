const {resolve, join} = require('path');
const {NamedModulesPlugin, WatchIgnorePlugin} = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const tsconfigPath = join(__dirname, "tsconfig.json");
const src = join(__dirname, 'src');

const postCssConfig = require("./postcss.config");

module.exports = {
    mode: 'development',
    context: resolve(__dirname, 'src'),
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint
        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates
        './index.tsx'
        // the entry point of our app
    ],
    output: {
        filename: "[name].[hash].js",
        // the output bundle
        path: resolve(__dirname, 'dist'),
        publicPath: '/'
        // necessary for HMR to know where to load the hot update chunks
    },
    devtool: 'cheap-module-inline-source-map',
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        alias: {
            component: join(src, 'component'),
        },
        extensions: [".ts", ".tsx", ".js", ".pcss", ".less", ".css", ".svg", ".html"],
    },
    externals: {
        "lodash": "_",
        mobx: "mobx",
        "mobx-react": "mobxReact",
        react: "React",
        "react-dom": "ReactDOM",
        "react-router-dom": "ReactRouterDOM",
        "bluebird": "Promise",
        "axios": "axios",
        "antd-mobile": "antd-mobile",
        "moment": "moment"
    },
    devServer: {
        port: '8080',
        // Change it if other port needs to be used
        hot: true,
        // enable HMR on the server
        noInfo: true,
        quiet: false,
        // minimize the output to terminal.
        contentBase: resolve(__dirname, 'src'),
        // match the output path
        publicPath: '/'
        // match the output `publicPath`
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.(ts|tsx)?$/,
                loader: 'tslint-loader',
                exclude: [resolve(__dirname, "node_modules")],
            },
            {
                test: /\.(ts|tsx)?$/,
                use: [
                    { loader: 'cache-loader' },
                    {
                        loader: 'thread-loader',
                        options: {
                            workers: require('os').cpus().length - 1,
                        },
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            happyPackMode: true,
                            configFile: tsconfigPath,
                        },
                    },
                ],
                exclude: [resolve(__dirname, "node_modules")],
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
        new ForkTsCheckerWebpackPlugin({
            checkSyntacticErrors: true,
            tsconfig: tsconfigPath
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new WatchIgnorePlugin([
            /\.js$/,
            /\.d\.ts$/
        ]),
        new NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
        new HtmlWebpackPlugin({template: resolve(__dirname, 'index.html')}),
        // inject <script> in html file. 
        new OpenBrowserPlugin({url: 'http://localhost:8080/#/home'}),
    ],
};