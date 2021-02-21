const path = require('path');
<<<<<<< HEAD
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
=======
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
    devServer: {
        contentBase: path.join(__dirname, './dist')
    },
    entry: {
        vue: path.resolve(__dirname, './src/scripts/index.js'),
        script: path.resolve(__dirname, './src/scripts/script.js')

    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        
        filename: 'scripts/[name].js',
    },
    optimization: {
        minimize: false,
        runtimeChunk: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Новый проект',
            template: path.resolve(__dirname, './src/html-templates/template-1.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
        new VueLoaderPlugin(),
      
    ],
>>>>>>> bb8fdb96a89fc4409e0473734d95b6648959f642
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
<<<<<<< HEAD
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
=======

    module: {
        rules: [
            /* {
                 test: /\.js$/,
                 exclude: /node_modules/,
                 use: ['babel-loader'],
             }, */
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(scss|css)$/,
                use: [{ loader: MiniCssExtractPlugin.loader, options: { publicPath: '' } }, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path].[name].[ext]'
                        }
                    },
                ],
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },

        ],
    },

}
>>>>>>> bb8fdb96a89fc4409e0473734d95b6648959f642
