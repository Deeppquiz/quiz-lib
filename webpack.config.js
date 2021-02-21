const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    entry: [
        './src/js/index.js'
    ],
    output: {
        filename: './js/bundle.js'
    },
    devtool: "source-map",
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, // Extract css to separate file
                    'css-loader', // translates CSS into CommonJS
                    'postcss-loader', // parse CSS and add vendor prefixes to CSS rules
                    'sass-loader', // compiles Sass to CSS, using Node Sass by default
                ],
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src/js'),
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader?name=./fonts/[name].[ext]'
                    },
                ]
            },
            {
                test: /\.(svg|png|jpg|jpeg|webp)$/,
                use: [
                    {
                        loader: 'file-loader?name=./static/[name].[ext]'
                    },
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
        ],

    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new HtmlWebpackPlugin({
            template: './src/template-1.html',
            title: 'kal'
        }),
        new CopyWebpackPlugin(
            {
                patterns: [
                    { from: "./src/img/", to: "img", noErrorOnMissing: true },
              
                ],
            }
        ),
        new VueLoaderPlugin()
    ],

};
