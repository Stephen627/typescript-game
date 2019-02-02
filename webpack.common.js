const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const outputFilename = {
  js: 'assets/main',
  css: 'assets/main'
};
const outputDirectory = 'dist';

module.exports = {
  entry: [
    './src/index.ts'
  ],
  output: {
    filename: `${outputFilename.js}.js`,
    path: path.resolve(__dirname, outputDirectory)
  },
  resolve: {
    extensions: ['.js', '.ts', '.json']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ 'env' ]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: outputDirectory
            }
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,  
        use: [{
            loader: 'url-loader',
            options: { 
                limit: 8000,
                name: 'assets/images/[hash]-[name].[ext]'
            } 
        }]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${outputFilename.css}.css`
    })
  ]
}
