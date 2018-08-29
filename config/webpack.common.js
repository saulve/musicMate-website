const path = require( "path" );
const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );
const HtmlWebpackPlugin = require( "html-webpack-plugin" );

const config = {
  entry: path.resolve( "./index.js" ),
  output: {
    path: path.resolve( "./dist" ),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".scss"]
  },
  devServer: {
    contentBase: path.resolve( "./dist" ),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: {
            interpolate: true
          }
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.mp4$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "demos/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin( {
      filename: "bundle-[hash].css"
    } ),
    new HtmlWebpackPlugin( {
      template: path.resolve( "./index.html" ),
      title: "musicMate"
    } ),
    new HtmlWebpackPlugin( {
      filename: "privacy-policy.html",
      template: path.resolve( "./privacy-policy.html" ),
      title: "musicMate - Privacy Policy"
    } )
  ]
};

module.exports = config;
