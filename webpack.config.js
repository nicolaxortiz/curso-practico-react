const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCassExtractPlugin = require('mini-css-extract-plugin');
const { template } = require('@babel/core');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
			'@components': path.resolve(__dirname, 'src/components/'),
			'@containers': path.resolve(__dirname, 'src/containers/'),
			'@pages': path.resolve(__dirname, 'src/pages/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
			'@icons': path.resolve(__dirname, 'src/assets/icons/'),
			'@logos': path.resolve(__dirname, 'src/assets/logos/'),
			'@routes': path.resolve(__dirname, 'src/routes/'),
		}
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
				test: /\.(png|svg|jp(e*)g|gif)$/,
                use: 'file-loader',
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),

        new MiniCassExtractPlugin({
            filename: '[name].css'
        }),
    ],
    devServer: {
        allowedHosts: path.join(__dirname, 'dist'),
        compress:true,
        port: 3000,
        historyApiFallback: true,
    }
}