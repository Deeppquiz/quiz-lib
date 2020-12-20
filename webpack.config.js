const path = require('path');
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
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },

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