const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports= {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    header: './module/header/header.js',
    body: './module/body/body.js',
    footer: './module/footer/footer.js'
  },
  performance: {
    hints: false,
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './public')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|png|jpeg|jpg|svg)$/i,
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: false,
            }
          }
        ],
        type: 'asset/resource',
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8564,
    open: true
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  }
}