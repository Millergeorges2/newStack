const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundlefile.js'
      },
      module:{
        rules: [
        {
           test: /\.(js|jsx)$/, 
           exclude: /node_modules/,
           use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }            
        },
        {
            test: /\.css$/,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  modules: true
                }
              }
            ]
          }
      ]
    },

      plugins: [
        new HtmlWebpackPlugin({
        template: './src/index.html'
        })
      ]
      
  }

  