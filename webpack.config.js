var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            { test: /\.jsx?$/, loader: ['babel-loader', 'eslint-loader'] },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [{
                  loader: 'style-loader',
                }, {
                  loader: 'css-loader',
                }, {
                  loader: 'postcss-loader',
                  options: {
                    plugins: function () {
                      return [
                        require('autoprefixer')
                      ];
                    }
                  }
                }, {
                  loader: 'sass-loader'
                }]
            },
            { test: /\.tsx$/, use: 'ts-loader' }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:8080'
        })
    }
}