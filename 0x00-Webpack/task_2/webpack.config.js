const path = require('path');

module.exports= {
  mode: 'production',
  entry: './js/dashboard_main.js',
  performance: {
    hints: false,
  },
  output: {
    filename: 'bundle.js',
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
              bypassOnDebug: true,
            }
          }
        ],
        type: 'asset/resource',
      }
    ]
  },
}