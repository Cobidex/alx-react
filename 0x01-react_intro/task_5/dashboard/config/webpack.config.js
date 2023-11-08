const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)/i,
                use: {
                    loader: 'image-webpack-loader',
                    options: {
                        bypassOnDebug: true,
                    }
                },
                type: 'asset/resource'
            }
        ]
    },
    devServer: {
        compress: true,
        open: true,
        port: 5000,
        static: {
            directory: path.join(__dirname, '../dist'),
        }
    },
}