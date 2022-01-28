const path = require('path');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, './src/index.js'),
    devtool: "eval-source-map",
    module: {
        rules: [
          {
             test: /\.(css)$/,
             use: ['style-loader','css-loader', 'sass-loader']
          }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, './assets'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, './assets'),
        hot: true
    },
};
