const merge = require( "webpack-merge" );
const UglifyJsPlugin = require( "uglifyjs-webpack-plugin" );
const common = require( "./webpack.common.js" );
const ImageminPlugin = require( "imagemin-webpack-plugin" ).default;

module.exports = merge( common, {
  mode: "production",
  optimization: {
    minimizer: [
      new UglifyJsPlugin( {
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_debugger: true,
            drop_console: true
          }
        }
      } )
    ]
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: "responsive-loader",
          options: {
            sizes: [300, 600, 1200, 2000],
            placeholder: true,
            placeholderSize: 50,
            name: "images/[name]-[width].[ext]",
            adapter: require( "responsive-loader/sharp" )
          }
        }
      }
    ]
  },
  plugins: [
    new ImageminPlugin( {
      test: /\.(png|jpg|gif)$/
    } )
  ]
} );
