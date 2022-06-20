var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry:  "./src/index.js",
    
    output: {
        publicPath: '/',
        path: path.join(__dirname, "/dist"),
        filename: "js/main.js",
    },

    mode: "development",

    devServer: {
        static: {
            directory: path.join(__dirname, "build"),
        },
        port: 1235,
        devMiddleware: {
            writeToDisk: true, 
        },
        hot: false,
        liveReload: true, 
        open: true, 
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true,
                        },
                    },
                ],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg?g|gif)$/,
                exclude: /fonts/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name:'[name].[ext]',
                            outputPath: "img",
                        }
                    }
                ]
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/, 
                exclude: /images/,
                use:[
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: "assets/fonts",
                            esModule: false
                        }
                    }
                ]
            },
             {
                test: require.resolve("jquery"),
                loader: "expose-loader",
                options: {
                    exposes: ["$", "jQuery"],
                },
            },
           
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin({ filename: "css/style.css" }),
        new OptimizeCSSAssetsPlugin({}),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }), 
    ],

};